//after document ready, loading the data 
$(document).ready(function(){
  var arrData = [],available = [],brnd = [],color = [] ;
  $.ajax({
    url: 'product.json',
    type: 'GET',
    dataType: 'json',
    success: function(data,status,xhr){
      writeData(data);
    }
  });
  //appending all html and binding click event to chekboxes
  function writeData(data){
    $('#div1').append($('<ul></ul>').attr('id', 'ul1'));
    $('#div2').append($('<ul></ul>').attr('id', 'ul2'));
    $('#maindiv').append("<input type='checkbox' name='all' value='all' >"+"All Products"+"</input>");
    $('#maindiv').append("<input type='checkbox' name='available' value='available' >"+"Available Products"+"</input>");
    var colors = [],brands = []; 
    //inserting images in third vertical div and collecting color and brand to show in div1 and div2
    $.each(data,function(idx,val){
      var $img = "<img  src=product_data/images/" + val.url + " alt= The Image " + "width=100 height=100 >" ; 
      $('#div3').append($('<div></div>').html($img).attr('class','inrdiv'));
      colors.push(val.color);
      brands.push(val.brand);
    });
    //listing all brand and color in respective div with checkboxes through extracting the unique color and brand.
    listBrandAndColor(getUniqueValues(brands),'#ul1','brand');
    listBrandAndColor(getUniqueValues(colors),'#ul2','color');
    //saving src or url of image in data attribute according to avilable options
    $(':checkbox').each(function(){storeValuesInData($(this),data);});     
    //binding click event to all check boxes.
    $(':checkbox').on('click',function(){showProducts($(this),data);});
  }

  function storeValuesInData(obj,data){
    var products = [];
    var valu = obj.attr('value');
    var name = $.trim(obj.attr('name')); 
    if (name == 'all'){
      $.each(data,function(idx,val){products.push(val.url);});
    }
    else if(name == 'available'){
      $.each(data,function(idx,val){
        if(val.sold_out == "0"){products.push(val.url)};
      });
    }
    else if(name == 'brand'){
      $.each(data,function(idx,val){
        if(("'" +val.brand+"'") == $.trim(valu)){products.push(val.url)};
      });      
    }
    else if(name == 'color'){
      $.each(data,function(idx,val){
        if(("'" +val.color+"'") == $.trim(valu)){products.push(val.url)};
      });      
    }      
    obj.data('images',products);//storing the url of images in data attribute.
  }
  
  function showProducts(obj){
    resetValues();
    if (obj.attr('name')=='all'){
      $(':checkbox').attr('checked',false);
      obj.attr('checked',true);
      $.each(data,function(idx,val){$(this).data('images',val.url);});
    }
    else if($("input:checked").length != 0){
      $(this).data('images',val.url);
      $("input:checked").each(function(){
        if($(this).attr('name')=='available'){available = available.concat($(this).data('images')); }
        else if($(this).attr('name')=='brand'){brnd = brnd.concat($(this).data('images')); }
        else if($(this).attr('name')=='color'){color = color.concat($(this).data('images')); }
      });
      arrData = [];
    }
    showConditionalProducts(obj);
  }
  
  function showConditionalProducts(obj){
    var len = [available.length ,brnd.length ,color.length ];
    len = $.grep(len,function(elm){return elm != 0});
    if(len.length == 1){arrData = available.concat(brnd).concat(color);}
    else if(len.length == 3){arrData = $(available).filter(brnd).filter(color);}
    else if(len.length == 2){
      arrData = available.length == 0 ? $(color).filter(brnd) : (brnd.length == 0 ? $(available).filter(color) : $(brnd).filter(available))
    }
    $('.inrdiv img').each(function(){
      if(($.inArray($(this).attr('src').slice(20,26),arrData)) < 0){
        $(this).css('display','none').parent().removeClass('inrdiv').addClass('hidden');
      }
    });
  }

  function listBrandAndColor(brndsOrColors,parent,name){
    $.each(brndsOrColors,function(idx,val){
      $(parent).append($('<li></li>').text(val).append("<input type='checkbox' name=\" "+ name +" \" value= \" '"+ val +"'\">"));
    });
  }

  function getUniqueValues(values){return values.filter(function(itm,i,values){return i==values.indexOf(itm)});}

  function resetValues(){
    arrData = [],brnd =[],color =[],available = [];
    arrData = $('input[name="all"]').data('images');
    $('#div3 div').removeClass('hidden').addClass('inrdiv'); 
    $('.inrdiv img').css('display','inline');   
    $('input[name="all"]').attr('checked',false);
  }
});
 



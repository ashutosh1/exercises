//after document ready, loading the data 
$(document).ready(function(){
  var arrData = [],avl = [],brnd = [],color = [] ;
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
    $('#maindiv').append("<input type='checkbox' id ='abc' name='all' value='all' >"+"All Products"+"</input>");
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
    listBrandAndColor(getUniqueValues(brands),getUniqueValues(colors));
    //saving src or url of image in data attribute according to avilable options
    $(':checkbox').each(function(){storeValuesInData($(this),data);});     
    //binding click event to all check boxes.
    $(':checkbox').on('click',function(){
      if($(this).is(':checked')){showProducts($(this));}
    });
  }

  function storeValuesInData(obj,data){
    var products = [];
    var valu = obj.attr('value');
    var name = obj.attr('name'); 
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
    $('#div3 div').removeClass('hidden').addClass('inrdiv'); 
    $('.inrdiv img').css('display','inline');   
    if (obj.attr('name')=='all'){
      arrData = [],brnd =[],color =[],avl = [];
      $(':checkbox').attr('checked',false);
      obj.attr('checked',true);
    }
    else if(obj.attr('name')=='available'){avl = avl.concat(obj.data('images')); }
    else if(obj.attr('name')=='brand'){brnd = brnd.concat(obj.data('images')); }
    else if(obj.attr('name')=='color'){color = color.concat(obj.data('images')); }
    if(arrData.length == 0){
      arrData = obj.data('images');              
    }
    else{
      $('input[name="all"]').attr('checked',false);
      var d = (avl.length != 0),b = (brnd.length != 0),c = (color.length != 0);
      if((b && !c && !d)||(!b && c && !d) ||(!b && !c && d)){arrData = avl.concat(brnd).concat(color);}
      else if((b&&c&&!d)){arrData = $(color).filter(brnd);}
      else if((!b&&c&&d)){arrData = $(avl).filter(color);}
      else if((b&&!c&&d)){arrData = $(brnd).filter(avl);}
      else if((b&&c&&d)){arrData = $(avl).filter(brnd).filter(color);}
     }
    $('.inrdiv img').each(function(){
      if(($.inArray($(this).attr('src').slice(20,26),arrData)) < 0){
        $(this).css('display','none').parent().removeClass('inrdiv').addClass('hidden');
      }
    });
  }

  function listBrandAndColor(brns,clrs){
    $.each(brns,function(idx,val){
      $('#ul1').append($('<li></li>').text(val).append("<input type='checkbox' name='brand' value= \" '"+val+"'\">"));
    });
    $.each(clrs,function(idx,val){
      $('#ul2').append($('<li></li>').text(val).append("<input type='checkbox' name='color' value= \" '"+val+"'\">"));
    });
  }

  function getUniqueValues(values){
    return values.filter(function(itm,i,values){return i==values.indexOf(itm)});    
  }
});
 



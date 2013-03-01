//after document ready loading the data 
$(document).ready(function(){
  var colors, brands, datas;
  var arrData = [];
  $.ajax({
    url: 'product.json',
    type: 'GET',
    dataType: 'json',
    success: function(data,status,xhr){
      datas = data;
      writeData(data);
    },
    error: function(data){alert("There is some errro.");} 
  });
  //appending all html and binding click event to chekboxes
  function writeData(data){
    $('#div1').append($('<ul></ul>').attr('id', 'ul1'));
    $('#div2').append($('<ul></ul>').attr('id', 'ul2'));
    $('#maindiv').append("<input type='checkbox' name='all' value='all' >"+"All Products"+"</input>");
    $('#maindiv').append("<input type='checkbox' name='available' value='available' >"+"Available Products"+"</input>");
    brands = getUniqueBrand(data);
    colors = getUniqueColor(data);
    //listing all brand and color in div with checkboxes.
    listBrand(brands);
    listColor(colors);
    //binding click event to all check boxes.
    $('#maindiv input[name="all"]').on('click',function(){
      arrData = [];
      clearTheMesh($(this));});
    $('#maindiv input[name="available"]').on('click',function(){showAvailableProducts();});
    $('li input[type=checkbox]').on('click',function(){
      if($(this).is(':checked')){
        handleTheConditions($(this));
      }
    });
    //inserting images in third vertical div.
    $.each(data,function(idx,val){
      var $img = "<img  src=product_data/images/" + val.url + " alt= The Image " + "width=100 height=100 >" ; 
      $('#div3').append($('<div></div>').html($img).attr('class','inrdiv'));
    });
  }

  function handleTheConditions(obj){
    if(arrData.length == 4){
      arrData = [];
      clearTheMesh(obj);
    }
    arrData.push(obj.attr('name'));
    arrData.push(obj.attr('value'));
    if(arrData.length == 2){
      //display the images on the basis of color or brand
      displayUsingBrandOrColor(arrData);
    }
    else if(arrData.length == 4 && ((arrData[0] == 'brand' && arrData[2] == 'color') ||(arrData[0] == 'color' && arrData[2] == 'brand'))){
    $('#div3 div').removeClass('hidden').addClass('inrdiv'); 
    $('.inrdiv img').css('display','inline');   
      //display the images using color and brands
      displayUsingBrandAndColor(arrData);
    } 
    else {
      arrData = arrData.splice(-2);
      clearTheMesh(obj);  
      displayUsingBrandOrColor(arrData); 
    }
  } 

  function listBrand(brns){
    $.each(brns,function(idx,val){
      $('#ul1').append($('<li></li>').text(val).attr('class','brandli').append("<input type='checkbox' name='brand' value= \" '"+val+"'\">"));
    });
  }

  function listColor(clrs){
    $.each(clrs,function(idx,val){
      $('#ul2').append($('<li></li>').text(val).attr('class','colorli').append("<input type='checkbox' name='color' value= \" '"+val+"'\">"));
    });
  }

  function getUniqueBrand(data){
    var a = [];
    $.each(data,function(idx,val){a.push(val.brand);});
    return a.filter(function(itm,i,a){return i==a.indexOf(itm)});    
  }

  function getUniqueColor(data){
    var a = [];
    $.each(data,function(idx,val){a.push(val.color);});
    return a.filter(function(itm,i,a){return i==a.indexOf(itm)});    
  }

  function displayUsingBrandOrColor(arr){
    var noMatch = [];
    if(arr[0]=='brand'){ 
      $.each(datas,function(idx,val){
        if(("'" +val.brand+"'") == $.trim(arr[1])){
          noMatch.push(val.url)
        }
      });
    }
    else{
      $.each(datas,function(idx,val){
        if(("'" +val.color+"'") == $.trim(arr[1])){
          noMatch.push(val.url)
        }
      });     
    }
   hideTheImages(noMatch);
  }

  function displayUsingBrandAndColor(arr){
    var noMatch = [];
    if((arr[0]=='brand' && arr[2]=='color') || (arr[0]=='color' && arr[2]=='brand')){
      $.each(datas,function(idx,val){
        var a = ("'" +val.brand+"'") == $.trim(arr[1]) && ("'" +val.color+"'") == $.trim(arr[3]);
        var b = ("'" +val.color+"'") == $.trim(arr[1]) && ("'" +val.brand+"'") == $.trim(arr[3]);
        if(a || b){
          noMatch.push(val.url)
        }
      });    
      if(noMatch.length == 0){
        alert("There is no product for chossen brand and color.")
        return false;
      }
     hideTheImages(noMatch);
    } 
  }

  function clearTheMesh(obj){
    $(':checkbox').attr('checked',false);
    obj.attr('checked',true);
    $('#div3 div').removeClass('hidden').addClass('inrdiv'); 
    $('.inrdiv img').css('display','inline');   
  }

  function showAvailableProducts(){
    if(arrData.length == 0){
      removeSoldProduct();
    }  
    else if(arrData.length == 2){
      showProductsForColorOrBrand();
    }
    else if(arrData.length == 4){
      showProductsForColorAndBrand();
    }
  }
  function removeSoldProduct(){
    var noMatch = [];
    $.each(datas,function(idx,val){ 
      if(val.sold_out == "0"){
        noMatch.push(val.url)
      }
    });    
   hideTheImages(noMatch);
  }

  function showProductsForColorOrBrand(){
    var noMatch = [];
    if(arrData[0]=='brand'){ 
      $.each(datas,function(idx,val){
        if(("'" +val.brand+"'") == $.trim(arrData[1]) && val.sold_out == "0"){
          noMatch.push(val.url)
        }
      });
    }
    else{
      $.each(datas,function(idx,val){
        if(("'" +val.color+"'") == $.trim(arrData[1]) && val.sold_out == "0"){
          noMatch.push(val.url)
        }
      });     
    }
   hideTheImages(noMatch);
  }

  function showProductsForColorAndBrand(){
    var noMatch = [];
    if((arrData[0]=='brand' && arrData[2]=='color') || (arrData[0]=='color' && arrData[2]=='brand')){
      $.each(datas,function(idx,val){
        var a = ("'" +val.brand+"'") == $.trim(arrData[1]) && ("'" +val.color+"'") == $.trim(arrData[3]);
        var b = ("'" +val.color+"'") == $.trim(arrData[1]) && ("'" +val.brand+"'") == $.trim(arrData[3]);
        if((a || b) && val.sold_out == "0"){
          noMatch.push(val.url)
        }
      });    
      if(noMatch.length == 0){
        alert("There is no product for chossen brand and color.")
        return false;
      }
     hideTheImages(noMatch);
    } 
  }
  //hide those images which are not shown based on the requirement.
  function hideTheImages(images){
    $('.inrdiv img').each(function(){
      if(($.inArray($(this).attr('src').slice(20,26),images)) < 0){
        $(this).css('display','none').parent().removeClass('inrdiv').addClass('hidden');
      }
    });
  }
});
 



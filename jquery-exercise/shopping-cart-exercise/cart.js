$(document).ready(function () {
  var products = [{"id":"1", "title":"Apple Macbook Pro Notebook PC", "category":"Computers", "description":"Apple is king of laptop world" ,"price":"2299.99", "image":"images/a.jpg", 	"quantity":"0" },
	  {"id":"1", "title":"Sony VAIO Notebook PC", "category":"Computers", "description":"Sony is Ace of laptop world", "price":"2699.99", "image":"images/b.jpg",	 	"quantity":"0" },
	  {"id":"1", "title":"Canon Digital Rebel XT", "category":"Cameras", "description":"canon is king of cameras world" ,"price":"550", "image":"images/c.jpg", 	"quantity":"0" }];
  var total = 0, i = 0, cart_items = {};
  loadProducts(products);
  //loading product to show the user in body
  function loadProducts (products) {
  $.each(products, function () {i++;
	  var target = $('<div class="product" id='+i+'></div>');
    var subTarget = $('<div id="subTarget" style="float:left;" ></div>')
    var image = $('<div id="img" style="float:left;"><img src=' + this.image + ' width=90 height=90></div>');
	  var title = $('<div>' + this.title + '</div>');
	  var category = $('<div>' +'category: '+ this.category + '</div>');
    var description = $('<div>' +this.description + '</div>');
	  var price = $('<div> Price: ' + this.price + '</div>');
    var quantity = $('<div id="quantity" style="float:left;">'+'Quantity: '+'<input type="text" name="quantity" style="width:30px; height:15px;" >'+'</input></div>');
	  var add = $('<div id="add"> <input type="button" name="add" class="add"></input></div>');
	  target.append(image);
    subTarget.append(title);
    subTarget.append(category);
    subTarget.append(description);
	  subTarget.append(price);
	  target.append(subTarget);
    target.append(quantity);
	  target.append(add);
	  $('#productsBody').append(target);
	  });
  }  
  //binding click event and assign intial values to some variable or field
  $('.add').on('click',function(){addProductsToCart($(this));});
  $('input[name="add"]').val('Add To Cart');
  $('input[name="quantity"]').val('1');
  $('.total').val('0.00');
  $('#checkout').val('Checkout');
  $('#cartsBody div').hide();
  $('#product').css('background','#eee').siblings().css('background','#ddd');
  //binding click function to product and my cart tab
  $('#product').on('click',function(){
    $('#cartsBody div').hide();
    $('#cartsBody').hide();
    $('#productsBody div').show();
    $(this).css('background','#eee').siblings().css('background','#ddd');
  });  

  $('#cart').on('click',function(){
    $('#productsBody div').hide();
    $('#cartsBody div').show();
    $('#cartsBody').show();
    $(this).css('background','#eee').siblings().css('background','#ddd');
  });  
  //Adding product to cart but not showing it,it will be shown after clicking the mycart tab.
  function addProductsToCart(obj) { 
    var count = 0;
	  var parent = obj.parents('div.product');
    var quantity = parseInt($('input[name="quantity"]').val());
    quantity == 0 ? quantity += 1 : quantity;
    var id = parent.attr('id')-1; 
    if(!cart_items [id]) {
    	var temp = products[id];
      cart_items [id] = { "title" : temp["title"], "category" : temp["category"], "price" : temp["price"], "image" : temp["image"],  "quantity" : quantity };
      var target = $('<div id="cart-target'+ id +'"></div>');
      var image = $('<div id="img " style="float:left;"><img src=' + temp["image"] + ' width=90 height=90></div>');
	    var title = $('<div id="cartproduct">' + temp["title"] + '</div>');
	    var price = $('<div id="cartprice"> Price: ' + temp["price"] + '</div>');
      var qua = $('<div id="cartquantity" >'+'Quantity: '+'<input type="text" name="cartquantity" style="width:15px; height:15px;" >'+'</input></div>');
	    var remove = $('<div id="remove"> <input type="button" name="remove" class="removep"></input></div>');
      var subtotal = $('<div id="subtotal" class="innersub"></div>').text(cart_items[id].quantity * temp["price"]);
      target.append(image).append(title);
      target.append(price);
      target.append(qua);
      target.append(subtotal);
      target.append(remove);
      $('#cartsBody').append(target).hide();
      $('input[name="remove"]').val('Remove');
      $('input[name="cartquantity"]').val(quantity);
      $('.removep').on('click',function(){removeProductsfromCart($(this));});
      updateTotal();
      count++;
    }
    else {
      cart_items[id].quantity += quantity;
      $('#cart-target'+id+' .innersub').text(cart_items[id].quantity * cart_items[id].price);
      $('#cart-target'+id+' input[name="cartquantity"]').val(cart_items[id].quantity);
      updateTotal();
    }    
    $('input[name="quantity"]').val('1');
    $('#cart-target'+id+' input[name="cartquantity"]').on('change',function(){updateTheData($(this),id);});
  }
  //to update the total after adding ,removing or changing quantity
  function updateTotal(){
    var total = 0;
    $('.innersub').each(function(){
      total = total + parseFloat($(this).text());
    });
    $('.total').val(total);    
  }
  //to remove the products from cart
  function removeProductsfromCart(obj) { 
    var cartId = parseInt(obj.parent().parent().attr('id').slice(-1)) ;
    delete cart_items[cartId];
    obj.parent().siblings().remove();                                      
    obj.parent().remove();                                      
    updateTotal();
  }
  //After changing the quantity in cart page the total and sub total will be updated
  function updateTheData(obj,id){
    var qunt = parseInt(obj.val());
    $('#cart-target'+id+' input[name="cartquantity"]').val(qunt);
    cart_items[id].quantity = qunt;
    obj.parent().next('div').text(cart_items[id].price * qunt);
    updateTotal();
  }
});

$(document).ready(function() {
  //Move the #slideshow element to the top of the body.
  $('body').prepend($('#slideshow'));
  /*Write code to cycle through the list items inside the element; fade one in, display it for a few seconds, then fade it out and fade in the next one.*/
  $('#slideshow li').hide();
  $newDiv = $('<div><div/>').insertAfter($('#slideshow')).attr("class","newdiv");
  var i = 1;
  var length = $ ("#slideshow li").size();
  $('#slideshow li:first').fadeIn();
  showCountAndCurrentImage(length,i);
  var mainFunction = setInterval(function(){showAndHide()},5000 );
  function showAndHide(){
    $("#slideshow li:nth-child(" + i + ")").fadeOut(1000);
    if(i == length){i = 1;}
    else{ i += 1;}
    $("#slideshow li:nth-child(" + i + ")").delay(1000).fadeIn(2000);
    showCountAndCurrentImage(length,i);
  }
  //to show total images count and currently viewing pic.
  function showCountAndCurrentImage(len,child){
    $newDiv.text('Total images are ' + len + ' currently viewing '+ $("#slideshow li:nth-child(" + child + ")").find('h2').text());
  }
});

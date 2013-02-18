$(document).ready(function() {
  //Move the #slideshow element to the top of the body.
  $('body').prepend($('#slideshow'));
  /*Write code to cycle through the list items inside the element; fade one in, display it for a few seconds, then fade it out and fade in the next one.*/
  $('#slideshow li').hide(3000);
  $newDiv = $('<div><div/>').insertAfter($('#slideshow')).attr("class","newdiv");
  var i = 1;
  var toStopFadeInFadeOut = 0;
  var length = $ ("#slideshow li").size();
  var mainFunction = setInterval(function(){showAndHide()},3000 );
  function showAndHide(){
    $("#slideshow li:nth-child(" + i + ")").fadeIn(2000);
    //to show total images count and currently viewing pic.
    $newDiv.text('Total images are ' + length + ' currently viewing '+ $("#slideshow li:nth-child(" + i + ")").find('h2').text());
    $("#slideshow li:nth-child(" + i + ")").fadeOut(1000).delay(1000);
    toStopFadeInFadeOut += 1;
    if(i == length){i = 1;}
    else {i += 1;}  
    //to stop the setInterval.
    if(toStopFadeInFadeOut == 20){
      window.clearInterval(mainFunction);
      $newDiv.text("");
    }
  }
});

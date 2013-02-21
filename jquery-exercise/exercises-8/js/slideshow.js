$(document).ready(function() {
  $('body').prepend($('#slideshow'));
  $('#slideshow li').hide();
  $newDiv = $('<div><div/>').insertAfter($('#slideshow')).attr("class","newdiv");
  var i = 0;
  var length = $ ("#slideshow li").size();
  showCountAndCurrentImage(length,i)
  function showAndHide(){
     $("#slideshow li:eq(" + i + ")").fadeIn(1000,function() {showCountAndCurrentImage(length,i)}).delay(1000).fadeOut(2000,function() {rotateImage()});
  }
  function rotateImage(){
    if (i == (length-1)){i = 0;}
    else{i++;}
    showAndHide();
  }
  showAndHide();
  //to show total images count and currently viewing pic.
  function showCountAndCurrentImage(len,child){
    $newDiv.text('Total images are ' + len + ' currently viewing '+ $("#slideshow li:eq(" + child + ")").find('h2').text());
  }
});


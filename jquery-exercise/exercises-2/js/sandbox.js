$(document).ready(function (){
  //Select all of the image elements on the page; log each image's alt attribute.
  console.log( $( 'img' ));
  $( 'img' ).each( function (index) {
    console.log(index + ': ' + $(this).attr('alt'));
  });
  //Select the search input text box, then traverse up to the form and add a class to the form.
  console.log( $( "input[name='q']" ).closest('form').addClass ('myclass'));
  /*Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item... inside #myList the li has 'current bar' class.*/
  console.log($( 'li[class="current bar"]').removeClass('current').next().addClass('current'));
  //Select the select element inside #specials; traverse your way to the submit button.
  console.log( $ ( '#specials select').closest('form').find('input[type = "submit"][value = "Go"]'));
  //Select the first list item in the #slideshow element; add the class "current" to it and a class 'disabled' to its siblings.
  console.log($('#slideshow li:nth-child(1)').addClass('current').siblings().addClass('disabled'));
});


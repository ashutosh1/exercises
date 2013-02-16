//using console.log to show these in console,it can be seen in firebug console. it can be also observed using alert instead of console.log
//code will be run after page has loaded completly.
$(document).ready(function() {
  //selecting all of the div element that have a class of 'module'.
  console.log($( 'div.module' ));
  //following are the three way to select third element of #myList unordered list.
  console.log($( '#myList #myListItem' ));
  console.log($( '#myList li:nth-child(3)' ));
  console.log("below one will be most efficient because it will directly pick the li having id 'myListItem' , while in above two first ul of id 'myList'will be pointed then again li will be searched.");
  console.log($( 'li#myListItem' )); 
  //label for the search input using an attribute selector
  console.log($( "label[for='q']"));
  //how many elements on the page are hidden
  console.log($( ':hidden').length);
  //how many image elements on the page have an alt attribute
  console.log($( 'img[alt]' ).length);
  //Select all of the odd table rows in the table body.
  console.log($("tr:odd"));
});



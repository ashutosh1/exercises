//Open the file /exercises/index.html in your browser. Use the file /exercises/js/sandbox.js to accomplish the following:
$(document).ready(function () {
  var new_items = [];
  //Add five new list items to the end of the unordered list #myList.
  for (i = 0; i < 5; i++) {
    new_items.push('<li>item' + i + '</li>');
  }
  $('#myList' ).append(new_items.join( '' ));
  console.log($ ( '#myList' ));
  //Remove the odd list items
  console.log($('#myList').find("li:odd").remove());
  //Add another h2 and another paragraph to the last div.module
  $('div.module:last').append ('<h2>sadas</h2>');
  //Add another option to the select element; give the option the value "Wednesday"
  $('div.module:last').append ('<p>sadfasf</p>');
  console.log ($ ('div.module:last'));
  //Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
  $('div.module:last select option:eq(2)' ).after('<option value="wednesday">wednesday</option>');
  console.log( $('div.module:last  select option:eq(3)'));
  $('div.module:last').after('<div class="module"></div>').append($('img:first').clone());
});

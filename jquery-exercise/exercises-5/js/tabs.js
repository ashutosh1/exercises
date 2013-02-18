$(document).ready(function(){  
  //Hide all of the modules.
  $('div.module').hide();
  //Create an unordered list element before the first module.
  var ul_element = $('<ul></ul>').attr('id', 'new_ul');
  $('div.module:first').before(ul_element);
  console.log($('ul #new_ul'));
  console.log($('div.module:first'));
  /*Iterate over the modules using $.fn.each. For each module, use the text of the h2 element as the text for a list item that you add to the unordered list element.*/
  $('div.module').each (function () {
    var curr_div = $(this);
    var li_element = $('<li></li>').html($(this).find("h2").text()) ;
    $('#new_ul').append(li_element);
    li_element.bind('click', function () {
      curr_div.show().siblings('div.module').hide();
      $(this).addClass("current").siblings().removeClass("current");
    });
  }); 
  //Finally, show the first tab.considering it as to show the div on click of first list items
  ul_element.children().first().trigger('click');
});

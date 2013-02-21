$('document').ready(function(){
  $stack = $("#stack");
  var count = 0;
  $('button').live("click",function () {
    count++;
    $item = $('<div>' + count + '</div>');
    $item.addClass("item");
    $stack.prepend($item);
  });
  $('div.item').live("click", function (){
    if ($(this).text() == $('div.item:first').text()) {
      $(this).remove();
      count--;
    }
    else {
      $(this).attr('style', 'background-color:yellow');
    }
  });
});


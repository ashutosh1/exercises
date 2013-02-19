//Load content using JSON
$(document).ready(function () {
  var $spcl = $('#specials');
  var $target = $('<div><div/>');
  $spcl.find('li.buttons').remove();
  $spcl.append($target);
  $spcl.find('select').change(function () {
    var toDay = $(this).val();
    $target.empty();
    //sending ajax request
    $.ajax({
      url: 'data/specials.json',
      type: 'GET',
      cache: 'true',
      dataType: 'json',
      success: function(data,status,xhr){
        wirteUserDetails(data[toDay]);
      },
      error: function(data){alert("There is some errro.");
      } 
    });
  });
  function wirteUserDetails(details) {
    var $heading = $('<h3>' + details.title + '</h3>');
    var $text = $('<p>' + details.text + '</p>');
    //removing first forward slash from src so that it could take to proper path. 
    var noSlashSrc = details.image.replace('/','');
    var $image = $('<img>').attr('src', noSlashSrc);
    $target.append($heading);
    $target.append($text);
    $target.append($image);
    $target.css('color', details.color);
  };
});





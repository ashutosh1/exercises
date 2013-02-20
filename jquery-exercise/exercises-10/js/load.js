//Load External Content
$(document).ready(function(){
  var element = $('#blog h3');
	$('#blog a').click(function (e) { e.preventDefault();});
	element.each(function () {
	  var $target = $("<div id = 'target'><div/>");
	  $(this).after($target);
    var $div = $(this).parent().find('div#target');
    console.log($div);
    //keeping the reference of target div in headline using $.fn().data.we can not use line above var $div because it will point headline.
  	$(this).data('abc', $div);
  })
	$('#blog h3').click(function () {
    //to fetch the exact path with id of blog, for ex. for first headline it will be 'blog.html #post1'
    temp = $(this).find('a').attr('href').replace('#', ' #');
    console.log($(this).data('abc'));
    $(this).data('abc').load('data/' + temp);
   //$(this).next().load('data/' + temp);
	}); 
});


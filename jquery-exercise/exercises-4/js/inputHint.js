$(document).ready(function (){
  //Set the value of the search input to the text of the label element
  var a = $('label[for="q"]').text();
  $('#search input.input_text').val(a);
  console.log($('#search input.input_text').val());
  //Add a class of "hint" to the search input
  $('#search input.input_text').addClass('hint');
  console.log($('#search input.input_text').attr("class"));
  console.log($('#search input.input_text').hasClass('hint'));
  //Remove the label element
  $('label[for="q"]').remove();
  //Bind a focus event to the search input that removes the hint text and the "hint" class
  $('#search input.input_text').bind('focus', function () {
    if($(this).val() == a && $(this).hasClass('hint')){
      $(this).val("").removeClass("hint");
    }
  });
  //Bind a blur event to the search input that restores the hint text and "hint" class if no search text was entered
  $('#search input.input_text').bind('blur', function () {
    if($.trim($(this).val())=="") {
      $(this).val(a);
      $(this).addClass("hint");
    }
  });
});

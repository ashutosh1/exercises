$(document).ready(function(){
  //disable the click of link otherwise it will take you to the link instead of showing the paragraph.
  $('#blog a').click( function (e) {
    e.preventDefault();
  });
  //Clicking on a headline in the #blog div should slide down the excerpt paragraph
  //Clicking on another headline should slide down its excerpt paragraph, and slide up any other currently showing excerpt paragraphs.
  $('#blog h3').click(function () {
    $('#blog p').slideUp();  
    $(this).next().slideDown();
  });
});

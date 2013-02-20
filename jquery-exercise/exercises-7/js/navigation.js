//Create Drop down menus.
//hover effect on ul of li under ul of id 'nav'
$(document).ready(function(){
  $('#nav > li').hover(function () { 
      $(this).addClass('selected').siblings().removeClass('selected');
      $(this).find('ul').addClass('present');
    } ,
    function(){
      $(this).find ('ul').removeClass("present");
    }
  );
});

//Create Drop down menus.
//hover effect on ul of li under ul of id 'nav'
$(document).ready(function(){
  $('#nav li').hover(function () { 
    $(this).find ('ul').css("display", "block");} ,
    function(){ $(this).find ('ul').css ("display", "none");}
  );
});

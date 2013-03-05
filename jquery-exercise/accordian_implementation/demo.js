$('document').ready(function() {
  var all = $('.accordion a');
  $('a').click( function(event) { 
    event.preventDefault();  
    if($(this).children().length == 0) { 
      var index = all.index($(this));
      window.open("final.html?id="+index , '_blank');
    }  
  });
  var indx = window.location.search.substring(1).split("=");
  if(indx[1]) {
   var currentElement = $(all.get(indx[1]))[0];
   $(currentElement).parent().css('background-color', 'yellow');
   abc($(currentElement));
   $(currentElement).parents().show();
  }
  //to show those leaf which are open under the siblings of currently clicked leaf.
  function abc(obj){
    $.each(obj.closest('li').siblings(),function(i,p){
      if($(p).children().length > 0 && $(p).next('ul').css('display') != 'none'){$(p).children().show();}
    });
  }
});

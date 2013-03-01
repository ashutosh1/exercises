$('document').ready(function () {
  //making empolyee object draggable.
  $('#employee .innerDiv').draggable({revert: true});
  //droppable function of jquery ui to make it droppable
  $('#roles .innerDiv').droppable({
    drop: function (event, ui) {
      var empolyee = $('<div name=' + ui.draggable.text() + '>' + ui.draggable.text() + '</div>');
      var cross = $('<input type="image" src="images/cross_circle.png" class="hidden" align="right"></input>');
      empolyee.append(cross);
      empolyee.addClass("cross");
      //inserting the name and area in roles and todos 
      if (!($(this).find('div[name=' + ui.draggable.text() + ']')[0])) {
        $(this).append(empolyee);
        var toDO = $('<div name=' + ui.draggable.text() + '><input type="text" disabled style="width:75px" value =' + ui.draggable.text() + '></input><textarea cols="50" rows="5" disabled style="background:white;">Add todos for ' + ui.draggable.text() + ' here</textarea></div>');
        $('#' + $(this).attr('id') + 'ToDo').append(toDO);
      }
      //binding the click and mouseout and mouseover function to show the cross and to delete the name from roles.
      $('.cross').on({
        mouseover:function(){$(this).find('input').removeClass("hidden");},
        mouseout:function(){$(this).find('input').addClass("hidden");},
        click:function(){deleteName($(this));}
      });
    }
  });

  function deleteName(obj) {
    var confirmation = confirm("do you want to remove this");
    if(confirmation){
      var name = obj.closest('div').attr('name');
      var id = obj.closest('div').parent().attr('id');
      $('#' + id + 'ToDo').find('div[name=' + name + ']').remove();
      obj.closest('div').remove();
    }
  }
  //to show the todo boxes for employee
  $('input[src="images/plus.png"]').click(function () {
    $(this).closest('div').next().removeClass("hidden");
    $(this).addClass("hidden");
    $(this).next().removeClass("hidden");
  });
  //to hide the todo boxes for employee
  $('input[src="images/minus.png"]').click(function () {
    $(this).closest('div').next().addClass("hidden");
    $(this).addClass("hidden");
    $(this).prev().removeClass("hidden");
  });
});

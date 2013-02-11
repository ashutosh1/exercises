function selected(element, id) {       
  var parent = document.getElementById(id);
  var childs = parent.getElementsByTagName('input');
  //if element is checked the diplay its children and vice-versa.
  element.checked ? document.getElementById(id).style.display="block" : document.getElementById(id).style.display="none"
  //if element is checked then cheking all childs and vice versa.
  for(i=0; i<childs.length; i++) {
    element.checked ? childs[i].checked=true : childs[i].checked=false;
  } 
  element.scrollIntoView(true);  
}


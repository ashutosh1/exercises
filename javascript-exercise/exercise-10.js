//To check the value entered in first box is number or not, if it is not a number return false and form should not submit.
function checkNumeric() {
  var txt = document.getElementById("number").value;
  if (Number(txt)) {
    document.getElementById("result").value = "true";
    return true;
  }
  else {
    document.getElementById("result").value = "false";
    return false;
  }
}


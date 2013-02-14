function validate() {
  //first check for all field are filled or not if not then show an alert per field. 
  var attr = new Array();
  var blankAttr = 0
  var attr = document.getElementsByClassName("form_attr");
  for (i=0; i<attr.length;i++){
    val = attr[i].value;
    if(val == null || val === ""){
      alert(attr[i].id.toUpperCase() + " can not be blank.");
      blankAttr = blankAttr + 1
    }
  }
  //check for about me if its blank or less than 50 then show the alert.
  var abut = document.getElementById("aboutme").value;
  if(abut == null || abut ==="" || abut.length < 50){
    alert("About me should be grater than or equal to 50 charcter and it should not be blank.");
    blankAttr = blankAttr + 1
  }
  //check for receive notification , it should be checked.
  if(!document.getElementById("recmail").checked){
    alert("Recive Notification should be checked.");
    blankAttr = blankAttr + 1
  }
  var wrongAttr = 0
  if (!validate_email()) {
    alert("Please enter a correct email");
    wrongAttr = wrongAttr + 1
  }
  if (!validate_url()) {
    alert("Please enter a correct url in homepage with http.");
    wrongAttr = wrongAttr + 1
  }

  //if any field are empty or about me is less than 50 return false.
  if(blankAttr > 0 || wrongAttr > 0) {
    return false;
  }
  //if each and every conditions are fulfilled returns true.
  else {
    return true;
  }
}
//validation for proper format of email.
function validate_email() {
  var email = document.getElementById("email").value;
  var remail_pattern = /^([A-z])+(\.?\w+)*@[A-z]+(\.[A-z]{2,4}){1,2}/;
  return (remail_pattern.test(email));
}
//validation for proper format of url with http.
function validate_url() {
  var url = document.getElementById("homepage").value;
  var url_pattern = /^(https?:\/\/)?(([A-z]+\.)*)([A-z]+\.[A-z]{2,4})$/;
  return (url_pattern.test(url));
}


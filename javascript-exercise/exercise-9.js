function validate() {
  var wrongAttr = 0
  if (!validate_email()) {
//    alert("Please enter a correct email");
    wrongAttr = wrongAttr + 1
  }
  if (!validate_url()) {
    alert("Please enter a correct url in homepage with http.");
    wrongAttr = wrongAttr + 1
  }

  //if any field are empty or about me is less than 50 return false.
  if(wrongAttr > 0) {
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
  var remail_pattern = /[a-zA-Z] + [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b/;
  return (remail_pattern.test(email));
}
//validation for proper format of url with http.
function validate_url() {
  var url = document.getElementById("homepage").value;
  var url_pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return (url_pattern.test(url));
}



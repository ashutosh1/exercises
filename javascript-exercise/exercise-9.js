function validate() {
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
  var remail_pattern = /^([A-z])+(\.?\w+)*@[A-z]+(\.[A-z]{2,4}){1,2}/;
  return (remail_pattern.test(email));
}
//validation for proper format of url with http.
function validate_url() {
  var url = document.getElementById("homepage").value;
  var url_pattern = /^(https?:\/\/)?(([A-z]+\.)*)([A-z]+\.[A-z]{2,4})$/;
  return (url_pattern.test(url));
}

//function validate_email() {
//  var email = document.getElementById("email").value;
//  var remail_pattern = /^([A-z])+(\.?\w+)*@[A-z]+(\.[A-z]{2,4}){1,2}/;
//  if (email != null || email.trim() != "" || remail_pattern.test(email)) {
//        return false;
//  }
//  else {
// 
//        return ();
//    }
//}

//function validate_url() {
//    var url = document.getElementById("homepage").value;
//    if (url === null || url.trim() === "") {
//        return false;
//    } else {
//        var url_pattern = /^(https?:\/\/)?(([A-z]+\.)*)([A-z]+\.[A-z]{2,4})$/;
//        return (url_pattern.test(url));
//    }
//}


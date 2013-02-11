//to extract the subdomain and domain form the url
function match_sub() {
  var url_pattern = /^(https?:\/\/)?((([A-z0-9]+)\.)*)([A-z0-9]+\.[A-z]{2,4})$/;
  var url = document.getElementById("url").value;
  if (url === null || url.trim() === "" || !url_pattern.test(url)) {
    alert("Please fill the url in proper format with http and it can not be blank.");
	  return false;
  }
  else {
    var sub_domain = RegExp.$2;
    if (sub_domain == "") {
      alert("Domain: " + RegExp.$5);
    }
    else {
      alert("Domain: " + RegExp.$5 + ", Subdomain: " + RegExp.$4);
    }
  }
}


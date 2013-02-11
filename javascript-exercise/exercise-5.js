function hello(){
  var fname=prompt("Please enter your first name");
  var lname=prompt("Please enter your last name");
  /*regex to see if there is any non white space charcter in the name if present then continue otherwise again prompt the name box followed by alert message.*/
  if(/\S/.test(fname) && /\S/.test(lname)) {
    if(fname !=null && lname !=null ){
      alert("Hello "+ fname + " " + lname);
      document.getElementById("demo").innerHTML = ("Hello "+ fname + " " + lname); 
    }
  }
  else{
    alert("Please do not left name blank!");
    hello();
  }
}


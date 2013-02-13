//variable to track time ,count and total click count.
var timer = 0;
var count = 0;
var clickCount = 0;
var totalMatchedElement = 0; 
var firstElement = '';
//start the game and it will fetch all the image and load it in columns and then hide those. 
function startGame(){
  var images = getImagesName();
  var j = 0;
  var columns = document.getElementsByTagName('td');
  for(i=0;i<columns.length;i++){
    columns[i].innerHTML = "<img  src=" + images[j] + " alt= The Image " + "width=45 height=45 >" ;
    columns[i].getElementsByTagName('img')[0].style.display = 'none';
    (j == 17) ? j=0 : j++;
    columns[i].onclick=function(){matchCard(this)};
  }
  //start the timer
  timer = setInterval(function(){gameTimer()},1000);
  document.getElementById('button2').style.display = 'inline';
}
//timer to track the time to finish the game.
function gameTimer() {
  var d=new Date();
  var t=d.toLocaleTimeString();
  //show time to user.
  document.getElementById("timer").innerHTML = t;
}
//the main logic for comparing the images and then showing or hide the images and counting total click count.
function matchCard(element){
  element.getElementsByTagName('img')[0].style.display = 'block';
  count += 1;
  clickCount += 1;
  //show total click count ot user.
  document.getElementById('total_clicks').innerHTML = clickCount;
  var currentElement = element.getElementsByTagName('img')[0];
  //keep track for last clicked image to match the both.
  if(count == 1){
    firstElement = element.getElementsByTagName('img')[0];
  }
  else if(count == 2){
    //write the logic to match the element if they match do not hide them otherwise hide them. and set count to 0 again.
    if(currentElement.src == firstElement.src){
      totalMatchedElement += 2; 
      if(totalMatchedElement == 36){
        stopGame();
      }
    }
    else{
      //hide after one second if images are not matched. 
      setTimeout(function(){hideElements(firstElement,currentElement)},1000);
    }
   count = 0;
  }
}
//hide the pics if not matched.
function hideElements(firstElement,currentElement){
  firstElement.style.display = 'none';
  currentElement.style.display = 'none';   
}
//stop the game 
function stopGame() {
  clearInterval(timer);
  document.getElementById('button1').disabled = true;
  document.getElementById('button2').disabled = true;
  document.getElementById('button3').style.display = 'inline';
  document.getElementById('result').style.display = 'block';
  if(totalMatchedElement == 36){
    document.getElementById('result').innerHTML = "Congrates!! Won the game!\nYou have took " + clickCount + " move You can play it again by pressing 'Play Again' button.";    
  }
  else{
    alert("You have not finished the game!!\nIf you want to start a fresh game click on 'Play Again'");
    var columns = document.getElementsByTagName('td');
    for(i=0;i<columns.length;i++){
      columns[i].onclick = '';
    }
  }
}
//after clicking on play again show the new window.
function playAgain(){
  var url = window.location.href; 
  window.open (url, "_self","menubar=no,resizable=no,dependent=no,status=no,scrollbars=no"); 
}
//onload of body get image in all table but do not show it.
function getImagesName(){
  var imagArr = [];
  for(i=0; i<=17; i++){
    imagArr.push("images/" + "image_" + i + ".jpg");
  }
  // shuffle array right here, so we don't only get the first images link all the time
  shuffleimageName(imagArr);
  return imagArr;
}
// shuffling algorithm to shuffle the array.
function shuffleimageName(myArray) {
  var i = myArray.length;
  if (i == 0) return false;
  while (--i) {
    var j = Math.floor( Math.random() * ( i + 1 ) );
    var tempi = myArray[i];
    var tempj = myArray[j];
    myArray[i] = tempj;
    myArray[j] = tempi;
  }
}


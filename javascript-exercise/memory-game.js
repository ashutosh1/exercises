//variable to track time ,count and total click count.
var count = 0;
var clickCount = 0;
var totalMatchedElement = 0; 
var firstElement = '';
//start the game and it will fetch all the image and load it in columns and then hide those. 
function startGame(){
  loadImagesInColumns(getImagesName());
  //start the timer
  startTheTimer();
  //show stop button after games start.
  document.getElementById('button2').style.display = 'inline';
}
//load images in each column.
function loadImagesInColumns(images) {
  var j = 0;
  var columns = document.getElementsByTagName('td');
  for(i=0;i<columns.length;i++){
    columns[i].innerHTML = "<img  src=" + images[j] + " alt= The Image " + "width=45 height=45 >" ;
    columns[i].getElementsByTagName('img')[0].style.display = 'none';
    (j == 17) ? j=0 : j++;
    columns[i].onclick=function(){trackElementsAndCounts(this)};
  }
}
//timer to track the time to finish the game.
function startTheTimer() {
  var time = 0;
  timedCount(time);
}
//counting the time 
function timedCount(time){
  document.getElementById("timer").innerHTML = time + ' sec';
  time += 1;
  t = setTimeout("timedCount(" + time + ")",1000);
}
//function to stop the timer 
function stopTheTimer() {
  clearTimeout(t);
}
//the main logic for comparing the images and then showing or hide the images and counting total click count.
function trackElementsAndCounts(element){
  element.getElementsByTagName('img')[0].style.display = 'block';
  count += 1;
  clickCount += 1;
  //show total click count to user.
  document.getElementById('total_clicks').innerHTML = clickCount;
  //keep track for last clicked image to match the both.
  if(count == 1){
    firstElement = element.getElementsByTagName('img')[0];
  }
  else if(count == 2){
    comparePic(element);
    count = 0;
  }
}
//write the logic to match the element if they match do not hide them otherwise hide them. and set count to 0 again.
function comparePic(element) {
  var currentElement = element.getElementsByTagName('img')[0];
  if(currentElement.src == firstElement.src){
    totalMatchedElement += 2; 
    if(totalMatchedElement == 36){
      stopGame();
    }
  }
  else{
    //hide after one second if images are not matched. 
    setTimeout(function(){hideElements(firstElement,currentElement)},500);
  }
}
//hide the pics if not matched after one second .
function hideElements(firstElement,currentElement){
  firstElement.style.display = 'none';
  currentElement.style.display = 'none';   
}
//stop the game 
function stopGame() {
  stopTheTimer();
  document.getElementById('button1').disabled = true;
  document.getElementById('button2').disabled = true;
  document.getElementById('button3').style.display = 'inline';
  document.getElementById('result').style.display = 'block';
  if(totalMatchedElement == 36){
    document.getElementById('result').innerHTML = "Congrates!! Won the game!\nYou have took " + clickCount + " move You can play it again by pressing 'Play Again' button.";    
  }
  else{
    alert("You have not finished the game!!\nIf you want to start a fresh game click on 'Play Again'");
  }
  var columns = document.getElementsByTagName('td');
  //disable onclick function after game stopped.
  for(i=0;i<columns.length;i++){
    columns[i].onclick = '';
  }
}
//after clicking on play again show the new window.
function playAgain(){
  var url = window.location.href; 
  window.open (url, "_self","menubar=no,resizable=no,dependent=no,status=no,scrollbars=no"); 
}
//get image name to load in columns.
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


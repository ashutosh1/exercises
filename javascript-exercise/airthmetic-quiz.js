//variables for tracking the count and wrong answers and scores.
var count = 0;
var score = 0;
var wrongAns = [];
//to randomly genrate and keep the value of numbers and operators.
function myFunction(){
  first = Math.floor((Math.random()*20)+1);
  second = Math.floor((Math.random()*20)+1);    
  arr = ['+','-','*','/'];
  oprt = arr[Math.floor(Math.random()*(arr.length-1))];
  document.getElementById('div1').innerHTML = "Your Question: " + '  ' + ' ' + first + ' ' + oprt + ' ' + second;
}
//on click of next button the next question will be come and score of previous question will be displayed.
function openNew(){
  compareUserAns();
  //after 20th question show the final score ,correct answer for wrong answer and disable the next button and show the 'Play Again' button.
  if(count == 19) {
    gameFinish();
  }
  //count is not 19 continue the game .
  else{
    continueTheGame();
  }
  //answer field should be blank on next question.
  document.getElementById('div2').getElementsByTagName('input')[0].value = '';
}
//compare user answer and actual answer and show next page with scores on bottom.
function compareUserAns() {
  var userAns = document.getElementById('div2').getElementsByTagName('input')[0].value;
  var actualAns = eval(Number(first) + oprt + Number(second));
  if(userAns == actualAns){
    //update the score and show the next page with score on bottom
    score = score + 1;
  }  
  else{
    //update the score and also update the wrongAns(store question with correct answer) and show thenext page.  
    score = score - 1;
    var ans = document.getElementById('div1').innerHTML + " " + "Correct Ans." + " = " + actualAns + '\n';
    wrongAns.push(ans);
  }
}
//finish the game,show play again button and final score and correct answer for the questions for which user answer are wrong.
function gameFinish() {
  document.getElementById('div3').innerHTML = "Final Score:" + ' ' + score;
  document.getElementById('div4').innerHTML = wrongAns.join(' , ');
  document.getElementById('button1').disabled = true;
  document.getElementById('button2').style.display = 'block';
}
//continue the game.
function continueTheGame() {
  count = count + 1;
  myFunction();
  document.getElementById('div3').innerHTML = "Score:" + ' ' + score;    
}
//after clicking on play again show the new window.
function playAgain(){
  var url = window.location.href; 
  window.open (url, "_self","menubar=no,resizable=no,dependent=no,status=no,scrollbars=no"); 
}


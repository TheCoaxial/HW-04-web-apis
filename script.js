
// Global variables
var quizQuestions = ["this is the first question", "this is the second question", "this is the third question", "this is the fourth question"];
var quizAnswersOne = ["filler1", "filler2","filler3","filler4"];
var quizAnswersTwo = ["filler1", "filler2","filler3","filler4"];
var quizAnswersThree = ["filler1", "filler2","filler3","filler4"];
var quizAnswersFour = ["filler1", "filler2","filler3","filler4"];
var totalSeconds = 75;
var secondsElapsed = 0;
var status = "start";
var secondsDisplay = document.createElement("div").setAttribute("id", "timer");
var interval;

var correctAnswer = 0;


// Creating the start button
var startButton = document.createElement("button");
startButton.innerHTML = "Start Quiz";

var body = document.getElementsByTagName("body")[0];
body.appendChild(startButton);


// Creating a function to create questions and answers dynamically
startButton.addEventListener("click", function(){
    startButton.remove();
    questionGroup = 1;
    
    startTimer();
      
});





// Creating a function to build the question element
function questionBuilder(){
    var question = document.createElement("h1");
    question.setAttribute("id", "headingQuestion");
    question.innerHTML = quizQuestions[0];
    body.appendChild(question);
}


// creating an array of question objects
var questionList = [
    {
        "question": "This is question 1",
        "wrongAnswer1": "This is a wrong answer",
        "wrongAnswer2": "This is a wrong answer",
        "wrongAnswer3": "This is a wrong answer",
        "rightAnswer": "This is the right answer"
    }



]

 

//Creating a timer
function displaySeconds(){
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;

  var formattedSeconds;

  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }

  return formattedSeconds;
}

function startTimer(){
    interval = setInterval(function(){
    secondsElapsed++
    console.log(secondsElapsed);

    if(secondsElapsed === totalSeconds){
        stopTimer();
        alert("at least its running");
        
    }
}, 1000); }

function stopTimer(){
    clearInterval(interval);
    totalSeconds = 0;
}



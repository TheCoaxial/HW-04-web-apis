
// Global variables
var quizQuestions = [];
var quizAnswers = [];
var totalSeconds = 75;
var secondsElapsed = 0;
var status = "start";
var secondsDisplay = document.createElement("div").setAttribute("id", "timer");
var interval;
var question = 1;

// Creating the start button
var startButton = document.createElement("button");
startButton.innerHTML = "Start Quiz";

var body = document.getElementsByTagName("body")[0];
body.appendChild(startButton);


// Creating a function to create questions and answers dynamically
startButton.addEventListener("click", function(){
    startButton.remove();
    var question = document.createElement("h1");
    question.innerHTML = quizQuestions[0];
    body.appendChild(question);

    buttonBuilder();
    startTimer();
    
});




// Creating a function to create 4 buttons for answers
var buttonBuilder = function(){
    var firstAnswer = document.createElement("button");
    firstAnswer.innerHTML = quizAnswers[0];
    body.appendChild(firstAnswer);
    document.body.appendChild(document.createElement("br"));
    
    var secondAnswer = document.createElement("button");
    secondAnswer.innerHTML = quizAnswers[1];
    body.appendChild(secondAnswer);
    document.body.appendChild(document.createElement("br"));

    var thirdAnswer = document.createElement("button");
    thirdAnswer.innerHTML = quizAnswers[2];
    body.appendChild(thirdAnswer);
    document.body.appendChild(document.createElement("br"));

    var fourthAnswer = document.createElement("button");
    fourthAnswer.innerHTML = quizAnswers[3];
    body.appendChild(fourthAnswer);
    document.body.appendChild(document.createElement("br"));
}


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

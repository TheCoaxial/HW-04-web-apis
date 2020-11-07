
// Global variables
var quizQuestions = ["this is the first question", "this is the second question", "this is the third question", "this is the fourth question"];
var quizAnswers = ["filler1", "filler2"];
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
    questionBuilder();
    buttonBuilder();
    
    var theQuestion = document.getElementById("headingQuestion");
    var buttonOne = document.getElementById("firstbutton");
    var buttonTwo = document.getElementById("secondbutton");
    var buttonThree = document.getElementById("thirdbutton");
    var buttonFour = document.getElementById("fourthbutton");


    //Creating a function to remove the buttons
    function buttonRemover(){
    buttonOne.remove();
    buttonTwo.remove();
    buttonThree.remove();
    buttonFour.remove();
    }

    for(var i = 0; i < quizAnswers.length; i++){
        buttonBuilder();
        buttonOne.innerText = quizAnswers[i];
        buttonTwo.innerHTML = quizAnswers[i];
        buttonThree.innerHTML = quizAnswers[i];
        buttonFour.innerHTML = quizAnswers[i];
    }
    
});



// Creating a function to create 4 buttons for answers
function buttonBuilder(){
    var firstAnswer = document.createElement("button");
    firstAnswer.setAttribute("id", "firstbutton");
    body.appendChild(firstAnswer);
    document.body.appendChild(document.createElement("br"));
    
    var secondAnswer = document.createElement("button");
    secondAnswer.setAttribute("id", "secondbutton");
    body.appendChild(secondAnswer);
    document.body.appendChild(document.createElement("br"));

    var thirdAnswer = document.createElement("button");
    thirdAnswer.setAttribute("id", "thirdbutton");
    body.appendChild(thirdAnswer);
    document.body.appendChild(document.createElement("br"));

    var fourthAnswer = document.createElement("button");
    fourthAnswer.setAttribute("id", "fourthbutton");
    body.appendChild(fourthAnswer);
    
}




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




// Global variables
var totalSeconds = 75;
var secondsElapsed = 0;
var interval;
var secondsLeft = 0;



// Creating the start button
var startButton = document.createElement("button");
startButton.innerHTML = "Start Quiz";

var body = document.getElementsByTagName("body")[0];
body.appendChild(startButton);


// Creating a function to create questions and answers dynamically
startButton.addEventListener("click", function(){
    startButton.remove();
    questionGroup = 1;
    //Start the timer
    startTimer();
  

    //Constructor Function to create the Quiz 
    function QuestionList(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    
    QuestionList.prototype.getQuestionIndex = function() {
        return this.questions[this.questionIndex];
    }
    

    //Checks if answer is correct and if it is increments score by 1
    QuestionList.prototype.guess = function(answer) {
        if(this.getQuestionIndex().isAnswerCorrect(answer)) {
            this.score++;
        } 
    
        this.questionIndex++;
    }


    //checks how many questions have been answered against how many questions there are total
    QuestionList.prototype.isEnded = function() {
        return this.questionIndex === this.questions.length;
    }
    

      
});


function startTimer(){
    interval = setInterval(function(){
    secondsElapsed++
    secondsLeft = totalSeconds - secondsElapsed;
    var timer = document.getElementById("timer");
    timer.textContent = "Time left " + secondsLeft;
    //console.log(secondsElapsed);

    if(secondsElapsed === totalSeconds){
        stopTimer();
        alert("at least its running");
        
    }
}, 1000); }

function stopTimer(){
    clearInterval(interval);
    totalSeconds = 0;
}



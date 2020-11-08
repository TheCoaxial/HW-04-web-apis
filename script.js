
// Global variables
var totalSeconds = 75;
var secondsElapsed = 0;
var interval;
var secondsLeft = 0;



// Creating the start button
var startButton = document.createElement("button");
startButton.className += 'start';
startButton.innerHTML = "Start Quiz";

var footer = document.getElementsByTagName("footer")[0];
footer.appendChild(startButton);


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

    // Creating a constructor function to make questions
    function Question(text, options, answer) {
        this.text = text;
        this.options = options;
        this.answer = answer;
        
    }
    
      // checking user choice vs answer property of Question
      Question.prototype.isAnswerCorrect = function(choice) {
        return this.answer === choice;
        
    }
    Question.prototype.isAnswerIncorrect = function(choice){
        return this.answer !== choice;
    }
    
    //checks how many questions have been answered against how many questions there are total
    QuestionList.prototype.isEnded = function() {
        return this.questionIndex === this.questions.length;
    }
    

    // populates quiz with information
    function create() {
        if(quiz.isEnded()) {
            showScores();
        }
        else {
            // show question
            var element = document.getElementById("question");
            element.innerHTML = quiz.getQuestionIndex().text;
    
            // show options
            var options = quiz.getQuestionIndex().options;
            for(var i = 0; i < options.length; i++) {
                var element = document.getElementById("choice" + i);
                element.innerHTML = options[i];
                guess("btn" + i, options[i]);
            }
    
            showProgress();
        }
    };
    
    // Get the users guess
    function guess(id, guess) {
        var button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);
            create();
        }
    };

    // Shows end scores
    function showScores() {
        stopTimer();
        var gameOverHTML = "<h1>Result</h1>";
        gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
        gameOverHTML += "<h2 id='timeLeft'>You had: "+ secondsLeft + " seconds remaining.</h2>";
        var element = document.getElementById("quiz");
        element.innerHTML = gameOverHTML;
    };
    
    // Tracks how many questions have been answered
    function showProgress() {
        var currentQuestionNumber = quiz.questionIndex + 1;
        var element = document.getElementById("progress");
        element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
        
    };
    
    
    
    // Questions
    var questions = [
        new Question("Which of the following is true about variable naming conventions in JavaScript?", ["JavaScript variable names must begin with a letter or the underscore character.", "JavaScript variable names are case sensitive.","Both of the above", "None of the above"], "Both of the above"),
        new Question(" - Which of the following function of String object returns the primitive value of the specified object.", ["valueOf()", "toString()", "toUpperCase", "toLocaleUpperCase"], "valueOf()"),
        new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
        new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
        new Question("Which of the following is a valid type of function javascript supports?", ["named function", "anonymous function", "both of the above", "none of the above"], "both of the above"),
        new Question("Which built-in method reverses the order of the elements of an array?",["changeOrder(order)","reverse()","sort(order)","none of the above"], "reverse()"),
        new Question("Inside which HTML element do we put the JavaScript",["js tag","javascript tag","script tag","You don't need one"], "script tag")
    ];
    
    // create quiz
    var quiz = new QuestionList(questions);
    
    // display quiz
    create();
      
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



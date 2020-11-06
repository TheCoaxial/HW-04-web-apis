

var quizQuestions = ["This is question 1", "This is question 2", "This is question 3"];

var quizAnswers = ["This is answer 1", "This is answer 2", "This is answer 3", "This is answer 4"];




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

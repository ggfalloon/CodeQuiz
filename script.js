var startButton = document.querySelector("#start-button");
var timeShowEl = document.getElementById("timeShow");
var quizContent = document.getElementById("quiz-content");
var questionArray = document.getElementById("question");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var intro = document.getElementById("intro");
var scorePlaceholder = document.getElementById("scoreCount");

var submitButton = document.getElementById("submit");
var wrongRight = document.getElementById("quizMessage");
var clearScores = document.getElementById("clearScores");
var playAgain = document.getElementById("play-again");


var quizQuestions = [
    {
        question: "When using JavaScript objects, which punctuation mark is used to seperate a property from its value?",
        choiceA: " ; ",
        choiceB: " / ",
        choiceC: " : ",
        correctAnswer: "c"
    },

    {
        question: "The addEventListener() method attaches an event handler to the specified element. Which event below is NOT an HTML DOM event?",
        choiceA: "mousein",
        choiceB: "mouseout",
        choiceC: "mouseover",
        correctAnswer: "a"
    },

    {
        question: "To prevent nested items from 'bubbling', we can do which of the following:",
        choiceA: "Use the stop.Propogation method.",
        choiceB: "Nest several items under one event.",
        choiceC: "Set the event on the target element.",
        correctAnswer: "a"
    },

    {
        question: "Utilizing the \"localStorage\" mechanism, data is saved even when the browser is closed and reopened.",
        choiceA: "Impossible to answser!",
        choiceB: "True",
        choiceC: "False",
        correctAnswer: "a"
    },

    {
        question: "To convert a JavaScript object or a value to a string, you can use which of the following methods?",
        choiceA: "JSON.stringaling",
        choiceB: "JSON.parse",
        choiceC: "JSON.stringify",
        correctAnswer: "c"
    }
];

var lastQuestion = quizQuestions.length - 1;
var currentQuestion = 0;
var count = 0;
var score = 0;

// Timer begins when user clicks the Start button and the first quesiton is displayed.
startButton.addEventListener("click", startTimer);

function startTimer() {
    "use strict";
    var count = 60;
    var timer = setInterval(function () {
        if (count === 1) clearInterval(timer);
        count--;
        timeShowEl.textContent = count;
    }, 1000);
} getQuestion

// // After timer begins, each question is displayed individually.
// quizQuestions[0].question
// quizQuestions[0].choiceA
// quizQuestions[0].choiceB
// quizQuestions[0].choiceC
// quizQuestions[0].correctAnswer



function getQuestion() {
    // return questionInner.innerHTML = quizQuestions[i].question;
    var quest = quizQuestions[currentQuestion];

    questionArray.innerHTML = "<p>" + quest.question + "</p>";
    choiceA.innerHTML = quest.choiceA;
    choiceB.innerHTML = quest.choiceB;
    choiceC.innerHTML = quest.choiceC;
}

startButton.addEventListener("click", runQuestions);

function runQuestions() {
    intro.style.display = "none";
    getQuestion();
    quizContent.style.display = "block";

}


function buttonFunction(answer) {
    if (answer === quizQuestions[currentQuestion].correctAnswer) {
        score + 20;
        wrongRight.textContent = "Correct!";
    } else {
        score - 10;
        wrongRight.textContent = "Wrong!";
    }

    count = 0;
    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        getQuestion();
    } else {
        return "All done! Now click \"View High Scores\" below to see and record your score."
    }
}
// function scoreCount() {
//     var count = 0;
//     var questionTime = -10;
//     var questionPoints = 20;

// When an answer selection is made, the next question pops up.

// function buttonFunction(answer) {
//     // for (var i = 0; i < quizQuestions.length; i += 1) {

//     function getQuestion() {



// clearScores.addEventListener("click");
// playAgain.addEventListener("click", nextQuestion);
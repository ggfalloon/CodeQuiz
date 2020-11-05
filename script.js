// var quizBody = document.querySelector("quiz-content");
var startButton = document.querySelector("#start-button");
var timeShowEl = document.getElementById("timeShow");
var quizContent = document.querySelector("quiz-content");
var questionArray = document.querySelector("question");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
// var scorePlaceholder = document.querySelector("scoreCount");
// var submitButton = document.querySelector("submit");

var answerButton = document.querySelector("button");
var wrongRight = document.querySelector("quizMessage")
var clearScores = document.getElementById("clearScores")
var playAgain = document.getElementById("play-again");
var currentQuestion = 0;
// var lastQuestion = quizQuestions.length - 1;

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
    },
]

// Timer begins when user clicks the Start button and the first quesiton is displayed.
function startTimer() {
    var count = 60;
    var timer = setInterval(function () {
        if (count == 1) clearInterval(timer);
        count--;
        timeShowEl.textContent = count;
    }, 1000);
    // nextQuestion();
}

// When timer begins, each question is displayed individually.

// function nextQuestion() {
//     var q = quizQuestions[currentQuestion];
//     question.innerHTML = "<p>" + q.question + "</p>";
//     choiceA.innerHTML = q.choiceA;
//     choiceB.innerHTML = q.choiceB;
//     choiceC.innerHTML = q.choiceC;
// }
// nextQuestion();


// for (var i = 0; i < quizQuestions.length; i++) {
//     if (quizQuestions == -1);
//     quizBody = "";

// if (choiceA === correctAnswer) {
//     return "Correct!";
// } return "Wrong!";

// if (choiceB === correctAnswer) {
//     return "Correct!";
// } return "Wrong!";

// if (choiceC === correctAnswer) {
//     return "Correct!";
// } return "Wrong!";

// }




// When an answer selection is made, the next question pops up.

function buttonFunction(answer) {
    // for (var i = 0; i < quizQuestions.length; i += 1) {

    function getQuestion() {
        var questionInner = document.getElementById("question");
        return questionInner.innerHTML = quizQuestions[i].question;
    }
    getQuestion();

    function getAnswerOne() {
        var answerOneInner = document.getElementById("#choiceA");
        return answerOneInner.innerHTML = quizQuestions[i].choiceA;
    }
    getAnswerOne();


    function getAnswerTwo() {
        var answerTwoInner = document.getElementById("#choiceB");
        return answerTwoInner.innerHTML = quizQuestions[i].choiceB;
    }
    getAnswerTwo();

    function getAnswerThree() {
        var answerThreeInner = document.getElementById("#choiceC");
        return answerThreeInner.innerHTML = quizQuestions[i].choiceC;
    }
    getAnswerThree();
}

// var quizIndex = document.getElementById(quizQuestions[questionIndex].ques + "<br />");
// setElementById("question");




startButton.addEventListener("click", startTimer);
// clearScores.addEventListener("click");
// playAgain.addEventListener("click", nextQuestion);

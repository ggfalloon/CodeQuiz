var startButton = document.querySelector("#start-button");
var timeShowEl = document.getElementById("timeShow");
var timer = document.getElementById("timer");
var intro = document.getElementById("intro");
var quizContent = document.getElementById("quiz-content");
var questionArray = document.getElementById("question");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var wrongRight = document.getElementById("quizMessage");
var scorePlaceholder = document.getElementById("scoreCount");
var submitButton = document.getElementById("submit");
var scoreList = document.getElementById("score-list");
var clearScores = document.getElementById("clearScores");
var playAgain = document.getElementById("play-again");


var quizQuestions = [
    {
        question: "When using JavaScript objects, which punctuation mark is used to seperate a property from its value?",
        choiceA: "A. ; ",
        choiceB: "B. / ",
        choiceC: "C. : ",
        correctAnswer: "choiceC"
    },

    {
        question: "The addEventListener() method attaches an event handler to the specified element. Which event below is NOT an HTML DOM event?",
        choiceA: "A. mousein",
        choiceB: "B. mouseout",
        choiceC: "C. mouseover",
        correctAnswer: "choiceA"
    },

    {
        question: "To prevent nested items from 'bubbling', we can do which of the following:",
        choiceA: "A. Use the stop.Propogation method.",
        choiceB: "B. Nest several items under one event.",
        choiceC: "C. Set the event on the target element.",
        correctAnswer: "choiceA"
    },

    {
        question: "Utilizing the \"localStorage\" mechanism, data is saved even when the browser is closed and reopened.",
        choiceA: "A. Impossible to answser!",
        choiceB: "B. True",
        choiceC: "C. False",
        correctAnswer: "choiceB"
    },

    {
        question: "To convert a JavaScript object or a value to a string, you can use which of the following methods?",
        choiceA: "A. JSON.stringaling",
        choiceB: "B. JSON.parse",
        choiceC: "C. JSON.stringify",
        correctAnswer: "choiceC"
    }
];

var lastQuestion = quizQuestions.length - 1;
var currentQuestion = 0;
var count = 0;
var score = 0;

// Timer begins when user clicks the Start button the timer begins.
startButton.addEventListener("click", startTimer);

function startTimer() {

    var count = 60;
    var timer = setInterval(function () {
        if (count === 1) clearInterval(timer);
        count--;
        timeShowEl.textContent = count;
    }, 1000);
} getQuestion

function getQuestion() {
    var quest = quizQuestions[currentQuestion];

    questionArray.innerHTML = "<p>" + quest.question + "</p>";
    choiceA.innerHTML = quest.choiceA;
    choiceB.innerHTML = quest.choiceB;
    choiceC.innerHTML = quest.choiceC;
}
// The first queston is displayed in sync with the start of the timer.
startButton.addEventListener("click", runQuestions);

function runQuestions() {
    intro.style.display = "none";
    getQuestion();
    quizContent.style.display = "block";
}

// When the answer is chosen, the text will confirm whether correct or wrong.
function buttonFunction(answer) {
    if (answer === quizQuestions[currentQuestion].correctAnswer) {
        score + 20;
        wrongRight.textContent = "Correct!";
    } else {
        timer = setInterval(-10000);
        wrongRight.textContent = "Wrong!";
    }
    // You are directed to the "View High Scores" page to see your score.
    count = 0;
    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        getQuestion();
    } else if (currentQuestion === lastQuestion) {
        clearInterval(timer);
        quizContent.textContent = "All done! Now click \"View High Scores\" below to see and record your score.";
        timeShowEl.style.display = "none";
        timer.style.display = "none";
        renderScores();
    }
}
var nameInput = document.getElementById("name-text");
var nameList = ["Your High Score Here", ""];
var scoreForm = document.getElementById("score-form");

function renderScores() {
    scoreList.innerHTML = "";
    for (var i = 0; i < scoreList.length; i++) {
        var list = nameList[i];

        var li = document.createElement("li");
        li.textContent = list;
        li.appendChild(li);
    }
}
submitButton.addEventListener("submit", function (event) {
    event.preventDefault();

    var listText = nameInput.nodeValue.trim();
    if (listText === "") {
        return;
    }
    nameList.push(listText);
    nameInput.value = "";

    renderScores();
});
console.log(nameInput);









// clearScores.addEventListener("click");
// function scoreCount() {
//     for (var i = 0; i < )

//         var li = document.createElement("li");
//     li.textContent = newName;
//     var count = 0;
//     var questionTime = -10;
//     var questionPoints = 20;

// } scorePlaceholder.textContent = score

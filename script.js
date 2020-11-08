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
var resultsContainer = document.getElementById("results");
var cardFooter = document.getElementById("card-footer");
var nameInput = document.getElementById("name-text");
var scoreForm = document.getElementById("score-form");
var scoreList = document.getElementById("score-list");
var viewScores = document.getElementById("view");

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
var nameList = [];

// Timer begins when user clicks the Start button the timer begins.
startButton.addEventListener("click", runQuestions);

function startTimer() {

    count = 60;
    var timer = setInterval(function () {
        if (count < 1) {
            renderScores();
        }
        count--;
        timeShowEl.textContent = count;
    }, 1000);
    getQuestion();
}
function getQuestion() {
    var quest = quizQuestions[currentQuestion];

    questionArray.innerHTML = "<p>" + quest.question + "</p>";
    choiceA.innerHTML = quest.choiceA;
    choiceB.innerHTML = quest.choiceB;
    choiceC.innerHTML = quest.choiceC;
    console.log(getQuestion);
}

// The first queston is displayed in sync with the start of the timer.
function runQuestions() {
    startTimer();
    intro.style.display = "none";
    getQuestion();
    quizContent.style.display = "block";
}

// When the answer is chosen, the text will confirm whether correct or wrong, adds points or reduces time.
function buttonFunction(answer) {
    if (answer === quizQuestions[currentQuestion].correctAnswer) {
        score = score += 20;
        wrongRight.textContent = "Correct!";
    } else {
        count = count - 10;
        wrongRight.textContent = "Wrong!";
    }
    if (currentQuestion < lastQuestion && count > 0) {
        currentQuestion++;
        getQuestion();
    } else if (currentQuestion === lastQuestion || count === 0) {

        renderScores();
    }
}

// Page is reset to show results. Enter initials to add score to list.
init();

function renderScores() {
    clearInterval(timer);
    quizContent.textContent = "";
    timeShowEl.style.display = "none";
    cardFooter.style.display = "none";
    resultsContainer.style.display = "block";
    scorePlaceholder.textContent = score;
    scoreList.innerHTML = "";

    for (var i = 0; i < nameList.length; i++) {
        var list = nameList[i];

        var li = document.createElement("li");
        li.textContent = list;
        scoreList.appendChild(li);
    }
}

function init() {
    var storedNames = JSON.parse(localStorage.getItem("nameList"));
    if (storedNames !== null) {
        nameList = storedNames;
    }
}

//  Saves initials and High Scores to local storage.
function storedNames() {
    localStorage.setItem("nameList", JSON.stringify(nameList));
}

// When the submit button is clicked, name is added to list.
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var nameText = nameInput.value.trim();

    if (nameText === "") {
        return;
    }
    nameList.push(nameText + " - " + score);
    nameInput.value = "";

    storedNames();
    renderScores();
});

// When clear button is clicked, local storage and text are cleared.
function clearAll() {
    window.localStorage.clear();
    nameList = "";
}

clearScores.addEventListener("click", function (event) {
    event.preventDefault();
    clearAll();
    renderScores();
})

// When view highscore button is clicked, you are taken to the high score page.
viewScores.addEventListener("click", showScores)

function showScores() {
    intro.style.display = "none";
    resultsContainer.style.display = "block";
}
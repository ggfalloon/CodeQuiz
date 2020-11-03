var quizBody = document.getElementById("quiz-content");
var scorePlaceholder = document.getElementById("scores");
var submitButton = document.getElementById("submit");

var quizQuestions = [
    {
        question: "When using JavaScript objects, which punctuation mark is used to seperate a property from its value?",
        choices: {
            a: " ; ",
            b: " / ",
            c: " : "
        },
        correctAnswer: "c"
    },

    {
        question: "The addEventListener() method attaches an event handler to the specified element. Which event below is NOT an HTML DOM event?",
        choices: {
            a: "mousein",
            b: "mouseout",
            c: "mouseover"
        },
        correctAnswer: "a"
    },

    {
        question: "To prevent nested items from 'bubbling', we can do which of the following:",
        choices: {
            a: "Use the stop.Propogation method.",
            b: "Nest several items under one event.",
            c: "Set the event on the target element."
        },
        correctAnswer: "a"
    },

    {
        question: "Utilizing the \"localStorage\" mechanism, data is saved even when the browser is closed and reopened.",
        choices: {
            a: "Impossible to answser!",
            b: "True",
            c: "False"
        },
        correctAnswer: "a"
    },

    {
        question: "To convert a JavaScript object or a value to a string, you can use which of the following methods?",
        choices: {
            a: "JSON.stringaling",
            b: "JSON.parse",
            c: "JSON.stringify"
        },
        correctAnswer: "c"
    },
]


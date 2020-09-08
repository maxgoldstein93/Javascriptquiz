// timer function starts on click

var timeEl = document.querySelector("#timer");
var secondsLeft = 60;
var startbtn = document.querySelector("#startQuizBtn");
var question = document.getElementById("questionTitle");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var wrongAnswer = document.getElementById("wrong");
var correctAnswer = document.getElementById("wrong");

var gameOver = document.getElementById("gameOver");
var clearQuiz = document.getElementById("questionContainer")
var choiceEl = document.getElementsByClassName("choices")
console.log(choiceEl);

var questions = [
    {
        questionTitle: "How do you create a function in JavaScript?",
        choiceA: "function:myFunction()",
        choiceB: "function = myFunction()",
        choiceC: "myfun()",
        choiceD: "function myFunction() ",
        correct: "D",

    },
    {
        questionTitle: "How to write an IF statement in JavaScript?",
        choiceA: "if i = 5 then",
        choiceB: "if (i == 5)",
        choiceC: "if i = 5",
        choiceD: "if i == 5 then",
        correct: "B"
    },

    {
        questionTitle: "How can you add a comment in a JavaScript?",
        choiceA: "<!--This is a comment-->",
        choiceB: "**Coment**",
        choiceC: "This is a comment",
        choiceD: "//This is a comment",
        correct: "D"
    },
    {
        questionTitle: "Which event occurs when the user clicks on an HTML element?",
        choiceA: "onmouseover",
        choiceB: "onmouseclick",
        choiceC: "onclick",
        choiceD: "onchange",
        correct: "C"
    },
    {
        questionTitle: "Inside which HTML element do we put the JavaScript?",
        choiceA: "<js>",
        choiceB: "<script>",
        choiceC: "<scripting>",
        choiceD: "<javascript>",
        correct: "B"
    }];

// // GAME OVER
// function gameEnd(){
//     if(questions.length === currentQuestion + 1 ){
//         console.log("GAMEOVER")

//     }
// }gameEnd()

// variables
var lastQuestion = questions.length - 1;
var currentQuestion = 0;

// display a question
function displayQuestion() {
    var q = questions[currentQuestion];
    question.textContent = q.questionTitle;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;
    wrongAnswer.textContent = " The last question was wrong lol";
    wrongAnswer.setAttribute("style", "display: none");
    if (currentQuestion >= 4) {
        console.log("endgame")
        clearQuiz.setAttribute("style", "display: none");
        gameOver.setAttribute("style", "display: block");

    }
};

// check answer function
function checkAnswer(answer) {
    if (answer == questions[currentQuestion].correct) {
        console.log(answer);
        secondsLeft += 5;
        correctAnswer.textContent = "Correct!";
        correctAnswer.setAttribute("style", "display: block");
    }
    else {
        console.log("Wrong")
        secondsLeft -= 10;
        wrongAnswer.textContent = "Wrong!";
        wrongAnswer.setAttribute("style", "display: block");


    }
    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        setTimeout(displayQuestion, 500);

    }
};

function quizTimer() {
    var timerInterval = setInterval(function () {
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        } secondsLeft--;

    }, 1000);
}
// START QUIZ 

startbtn.addEventListener("click", function () {
    quizTimer();
    unHide();
    Hide();
    displayQuestion();

});
// function to unhide questions
function unHide() {
    var x = document.querySelector(".hidden");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};
// function to hide start screen
function Hide() {
    var hideContainer = document.querySelector("#hideOnClick");
    console.log(hideContainer);
    if (hideContainer.style.display === "block") {
        hideContainer.style.display = "none";
    }
};

// SAVING SCORES//
var submitBtn = document.querySelector("#submit")
var InitialsInput = document.querySelector("#email");
var msgDiv = document.querySelector("#msg");



//  renderLastRegistered()
 function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }



console.log(submitBtn)
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    var initials = document.querySelector("#initials").value;
    console.log(initials)

    if (initials === "") {
        displayMessage("error", "Initials cannot be blank");

    } else {
        displayMessage("success", "Score Submitted!!");

        localStorage.setItem("initials", initials)
        renderLastRegistered()
    }
});
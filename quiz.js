// timer function starts on click

var timeEl = document.querySelector("#timer");
var secondsLeft = 60;
var startbtn = document.querySelector("#startQuizBtn");
var question = document.getElementById("questionTitle");
console.log(question);
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var wrongAnswer = document.querySelector("wrong");
console.log(wrongAnswer);

var questions = [
    {
        questionTitle: "How do you create a function in JavaScript?",
        choiceA: "function:myFunction()",
        choiceB: "function = myFunction()",
        choiceC: "myfun()",
        choiceD: "function myFunction() ",
        correct: "D"
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

// variables
var lastQuestion = questions.length -1 ;
var currentQuestion = 0;

// display a question
function displayQuestion() {
    var q = questions[currentQuestion];
    question.textContent = q.questionTitle;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;

};


    // check answer function
    function checkAnswer(answer) {
        if (answer == questions[currentQuestion].correct) {
            console.log(answer);
            secondsLeft += 5;
            
            
        } 
        else {
            console.log("Wrong")
            secondsLeft -= 10;
            var newDiv = document.createElement("div");
            console.log(newDiv);
            newDiv.textContent = "WRONG!";
            document.body.appendChild(newDiv)
            
            
            
        }
        if(currentQuestion < lastQuestion){
            currentQuestion++;
            displayQuestion();
        }
    };

console.log(timeEl)

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




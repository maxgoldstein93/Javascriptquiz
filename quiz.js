// timer function starts on click

var timeEl = document.querySelector("#timer");
var secondsLeft = 60;

console.log(timeEl)

function quizTimer() {
    var timerInterval = setInterval(function () {
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        } secondsLeft--;

    }, 1000);
}
document.body.appendChild(timeEl);

// START QUIZ TIMER
var startbtn = document.querySelector("#startQuizBtn")

startbtn.addEventListener("click", function () {
    quizTimer()
    unHide()

});
function unHide() {
    var x = document.querySelector(".hidden");
    console.log(x);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}








// document.getelementbyid("questiontitle")

// Var questions = [
// {
// question title: "Inside which HTML element do we put the JavaScript?, 
// a1: "<js>",
// a2: "<script>"
// a3: "<scripting>"
// a4: "<javascript>".
// correctAnswer: a2
// }, 

// question title: "what is javascript?", 
// answer1: "Code",
// answer2: "coffee"
// answer3: "tea"
// answer4: "pizza".
// correctAnswer: answer1
// }, 

// ]
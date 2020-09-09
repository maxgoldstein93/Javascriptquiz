// displays and saves highscores
var userInitialsSpan = document.querySelector("#initials");
var userScoreSpan = document.querySelector("#score");



var finalScore = JSON.parse(localStorage.getItem("initials"));
console.log(finalScore)
userInitialsSpan.textContent = finalScore.initals;
userScoreSpan.textContent = finalScore.score;



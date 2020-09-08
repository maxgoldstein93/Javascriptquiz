// displays and saves highscores

var finalScore = JSON.parse(localStorage.getItem("initials"));
console.log(finalScore)
var showScore =document.createElement("h2")
showScore.textContent = finalScore.score
document.getElementById("showScore").appendChild(showScore)


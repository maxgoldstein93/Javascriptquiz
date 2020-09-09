// displays and saves highscores
var userInitialsSpan = document.querySelector("#initials");
var userScoreSpan = document.querySelector("#score");
var clearStorageBtn =document.querySelector("#clear")




var finalScore = JSON.parse(localStorage.getItem("initials"));
console.log(finalScore)
userInitialsSpan.textContent = finalScore.initals;
userScoreSpan.textContent = finalScore.score;


clearStorageBtn.addEventListener("click", function(){
    localStorage.clear();
})




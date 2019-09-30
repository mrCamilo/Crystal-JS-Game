// Variables
var totalScore = 0;

// Computer picks a random number greater than or equal to 19 and less than 120
var computerPick = Math.floor(Math.random() * (+120 - + 19)) + +19;

// display for total score
document.getElementById("totalScoreDisplay").innerHTML = totalScore;

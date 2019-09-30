// Variables
var totalScore = 0;
var numWins = 0;
var numLosses = 0;

// Computer picks a random number greater than or equal to 19 and less than 120
var computerPick = Math.floor(Math.random() * (+120 - + 19)) + +19;

// display for total score, wins, and losses
document.getElementById("totalScoreDisplay").innerHTML = totalScore;
document.getElementById("lossesDisplay").innerHTML = "Losses: " + numLosses;
document.getElementById("winsDisplay").innerHTML = "Wins: " + numWins;
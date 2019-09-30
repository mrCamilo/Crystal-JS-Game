// Variables
var totalScore = 0;
var numWins = 0;
var numLosses = 0;

// Computer picks a random number greater than or equal to 19 and less than 120
var computerPick = Math.floor(Math.random() * (+120 - + 19)) + +19;

// Random number between 1 and 12 for each button
var randomRubyValue = Math.floor(Math.random() * (+12 - + 1)) + +1;
var randomEmeraldValue = Math.floor(Math.random() * (+12 - + 1)) + +1;
var randomSapphireValue = Math.floor(Math.random() * (+12 - + 1)) + +1;
var randomCrystalValue = Math.floor(Math.random() * (+12 - + 1)) + +1;


// display for total score, wins, and losses
document.getElementById("totalScoreDisplay").innerHTML = totalScore;
document.getElementById("lossesDisplay").innerHTML = "Losses: " + numLosses;
document.getElementById("winsDisplay").innerHTML = "Wins: " + numWins;
document.getElementById("computerPickDisplay").innerHTML = "Target: " + computerPick;

// on click event
$(document).ready(function() {
    $(".crystal").on("click", function() {
        
    });

});
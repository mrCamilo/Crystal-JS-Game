// Variables
var totalScore = 0;
var numWins = 0;
var numLosses = 0;
var randomRubyValue = 0;
var randomEmeraldValue =0;
var randomSapphireValue = 0;
var randomCrystalValue =0;
var computerPick = 0;

// Use a function to initialize game
function resetTheGame() 
{
    // Random number between 1 and 12 for each button
    randomRubyValue = Math.floor(Math.random() * (+12 - + 1)) + +1;
    randomEmeraldValue = Math.floor(Math.random() * (+12 - + 1)) + +1;
    randomSapphireValue = Math.floor(Math.random() * (+12 - + 1)) + +1;
    randomCrystalValue = Math.floor(Math.random() * (+12 - + 1)) + +1;

    // Computer picks a random number greater than or equal to 19 and less than 120
    computerPick = Math.floor(Math.random() * (+120 - + 19)) + +19;
    totalScore = 0;
    //numWins = 0;
    //numLosses = 0;
    document.getElementById("computerPickDisplay").innerHTML = "Your Target Score: " + computerPick;
}

resetTheGame();

// display for total score, computer pick, wins, and losses
document.getElementById("totalScoreDisplay").innerHTML = totalScore;
document.getElementById("lossesDisplay").innerHTML = "Losses: " + numLosses;
document.getElementById("winsDisplay").innerHTML = "Wins: " + numWins;
document.getElementById("computerPickDisplay").innerHTML = "Your Target Score: " + computerPick;

// on click event
$(document).ready(function () {
    $(".btn").on("click", function () {
        if ($(this).hasClass("ruby")) {
            totalScore += randomRubyValue;
            document.getElementById("totalScoreDisplay").innerHTML = totalScore;            
        }
        else if ($(this).hasClass("emerald")) {
            totalScore += randomEmeraldValue;
            document.getElementById("totalScoreDisplay").innerHTML = totalScore;

        }
        else if ($(this).hasClass("crystal")) {
            totalScore += randomCrystalValue;
            document.getElementById("totalScoreDisplay").innerHTML = totalScore;

        }
        else if ($(this).hasClass("sapphire")) {
            totalScore += randomSapphireValue;
            document.getElementById("totalScoreDisplay").innerHTML = totalScore;
        }   

        // Increment losses and wins and restart the game
        if (totalScore > computerPick) {
            numLosses++;
            document.getElementById("lossesDisplay").innerHTML = "Losses: " + numLosses;
            alert("That's a loss.")
            //Reset!! and initialize
            resetTheGame();
            document.getElementById("totalScoreDisplay").innerHTML = totalScore;
        }
        else if (totalScore === computerPick)
        {
            numWins++;
            document.getElementById("winsDisplay").innerHTML = "Wins: " + numWins;
            alert("That's a W!");
            // Reset!! and initialize
            resetTheGame();
            document.getElementById("totalScoreDisplay").innerHTML = totalScore;
        }
    });
});
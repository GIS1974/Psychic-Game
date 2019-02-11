var letters = "abcdefghijklmnopqrstuvwxyz";
var winsCount = 0;
var lossesCount = 0;
var guessesLeft = 9;

// Computer generates a random letter
function computerGuess() {
    var randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
    return randomLetter;
}

document.getElementById("guesses-left").textContent = " " + guessesLeft; //

randomLetter = computerGuess();
console.log("random letter: " + randomLetter);

document.onkeyup = function (event) {

    var userTyped = event.key;
    var var1 = document.getElementById("guesses-so-far");
    var var2 = document.createTextNode(" " + userTyped);
    var1.appendChild(var2);
    console.log("user typed: " + userTyped);



    if (userTyped == randomLetter) {
        winsCount++;
        document.getElementById("wins").textContent = " " + winsCount;
        guessesLeft = 9;
        document.getElementById("guesses-left").textContent = " " + guessesLeft;
        document.getElementById("guesses-so-far").textContent = " ";
        console.log("wins: " + winsCount);
        console.log("Win!");
        randomLetter = computerGuess();
        console.log("random letter: " + randomLetter);
    }
    else {

        if (guessesLeft != 0) {
            guessesLeft--;
            document.getElementById("guesses-left").textContent = " " + guessesLeft;
        }

        if (guessesLeft == 0) {
            guessesLeft = 9;
            lossesCount++;
            document.getElementById("guesses-so-far").textContent = " ";
            document.getElementById("losses").textContent = lossesCount;
            document.getElementById("guesses-left").textContent = "9";
            console.log("Loss!");
            randomLetter = computerGuess();
            console.log("random letter: " + randomLetter);

        }
    }
}
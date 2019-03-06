var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//ID's & Var
let wins = 0;
let losses = 0;
let guesses = 9;
let guessesLeft = 9;
let guessedLetters = [];
var letterToGuess = null;



//letter generator
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.querySelector('.psychic').style.display = "none";
//Allows the user 9 guesses
function updateGuessesLeft() {
    // Display guesses left in html
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];

};


function updateGuessesSoFar() {
// Displays user's guesses in html as they press keys.
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// reset function
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    setTimeout(function() { document.querySelector('.psychic').style.display = 'none'; }, 5000);
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
    console.log(letterToGuess)

}

updateLetterToGuess();
updateGuessesLeft();

//User's guess onkeyup
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoices.includes(userGuess);

    if (check === false) {
        alert("That was not a valid guess, try again?");
        return false;
    } else if (check === true) {
  //If the Users choice was an alphabet char then update guesses left and add users guess to the array of guessed letters
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (userGuess == letterToGuess) {
                wins++;

                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                document.querySelector('.psychic').style.display = '';
                document.querySelector('.psychic').style.height = '4em';
                document.querySelector('.psychic').innerHTML = "That's right! the answer is " + userGuess +  ", next stop Venice Beach!";
                reset();
            }
        } else if (guessesLeft == 0) {
            // updates html to show loss
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            document.querySelector('.psychic').style.display = '';
            document.querySelector('.psychic').innerHTML = "You're no psychic! The letter I was thinking of is " + letterToGuess;
            // Then we'll call the reset.
            reset();

        }
        return false;
    } else {
        alert("error");
    }

};

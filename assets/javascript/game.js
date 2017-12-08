// Creating an array that will hold the holiday themed words

var words = ["Christmas", "Chanukkah", "New Years", "Times Square", "Presents", "Rockefellar Center"];

var wins = 0;

var lettersGuessed;
var lettersFound;
var remainingGuesses;
var currentWord;
var selectedWord;
var hiddenCurrentWord;

// display variables in the HTML
updateHtml = function() {
	document.querySelector("#wins").innerHTML = wins;
	document.querySelector("#letters-guessed").innerHTML = lettersGuessed;
	document.querySelector("#remaining-guesses").innerHTML = remainingGuesses;
	document.querySelector("#answer").innerHTML = hiddenCurrentWord.split('').join(' ');
}

// initialize variables
newGame = function() {
	lettersGuessed = [];
	lettersFound = [];
	remainingGuesses = 6;
	hiddenCurrentWord = "";
	selectedWord = words[Math.floor(Math.random()* words.length)];
	currentWord = selectedWord.toLowerCase();
	console.log(selectedWord);

	for (var i = 0; i < currentWord.length; i++) { 	//creating a loop to find the number of characters to display on screen
		if (currentWord.charAt(i) != ' ') { 					//For each character, look if there is not a space
			hiddenCurrentWord += "_";										// if there is a character, then display an underscore
		} else {
			hiddenCurrentWord += " ";										//otherwise, displaye a non breaking space
		}
	}
}

newGame();																				// Run the newGame function
updateHtml();																			// Run the updateHtml function

// handle a user's guess every time they type a letter
document.onkeyup = function(event) {
	if (event.keyCode < 65 || event.keyCode > 90) {	// Making sure that each character is actually a character and not a number or space
		// the typed key is not a letter
		return;																				// End this function if it is as there is no point looping through the rest
	}

	var userGuess = event.key;

	var found = false;
	// console.log(lettersFound);
	// console.log(lettersGuessed);

	if (lettersFound.includes(userGuess) || lettersGuessed.includes(userGuess.toUpperCase())) {
        alert("You have already guessed this letter.");
        return;
    }
    lettersGuessed.push(userGuess.toUpperCase());
//Creating a loop to go through each letter in the currentWord and determine if the userGuess belongs in place of the underscore

	for (var i = 0; i < currentWord.length; i++) {
		if (currentWord.charAt(i) == userGuess) {

			// correct guess... Go through each character in the index until you reach the character, then substitute with the userGuess

			hiddenCurrentWord = hiddenCurrentWord.substr(0, i) + userGuess.toUpperCase() + hiddenCurrentWord.substr(i + 1);
			found = true;
			lettersFound.push(userGuess);
		}
	}

	if (!found) {
		// incorrect guess
		remainingGuesses--;
		if (remainingGuesses == 0) {
			// the user lost this game
			alert("Oh no! You did not figure out that the word was: " + selectedWord);
			newGame();
		}
	}

	if (currentWord.replace(/\s/g, "").length == lettersFound.length) {
		// the user won this game
		wins++;
		newGame();
	}

	updateHtml();
}

// Creating an array that will hold the holiday themed words

var words = ["Christmas", "Chanukkah", "Yule Log", "New Years", "Times Square", "Presents", "Rockefellar Center", "Christmas Tree", "Dreidel","Menorah" ];

var wins = 0;

var lettersGuessed;
var lettersFound;
var remainingGuesses;
var currentWord;
var hiddenCurrentWord;
var selectedWord;

// display variables in the HTML
updateHtml = function() {
	document.querySelector("#wins").innerHTML = wins;
	document.querySelector("#letters-guessed").innerHTML = lettersGuessed;
	document.querySelector("#remaining-guesses").innerHTML = remainingGuesses;
	document.querySelector("#answer").innerHTML = hiddenCurrentWord;
};

// initialize variables
newGame = function() {
	lettersGuessed = [];
	lettersFound = [];
	remainingGuesses = 12;
	hiddenCurrentWord = "";
	currentWord = words[Math.floor(Math.random()*words.length)];
	selectedWord = currentWord.toLowerCase()

	for (var i = 0; i < selectedWord.length; i++) {
		if (selectedWord.charAt(i) != ' ') {
			hiddenCurrentWord += "_";
		} else {
			hiddenCurrentWord += "&nbsp" + "&nbsp";
		}
	}
};

newGame();
updateHtml();

// handle a user's guess every time they type a letter
document.onkeyup = function(event) {
	if (event.keyCode < 65 || event.keyCode > 90) {
		// the typed key is not a letter
		return;
	}

	var userGuess = event.key;
	lettersGuessed.push(userGuess);
	var found = false;

	if (lettersFound.includes(userGuess)) {
		alert("You have already guessed the letter: " + userGuess);
		return;
	}

	for (var i = 0; i < selectedWord.length; i++) {
		if (selectedWord.charAt(i) == userGuess) {
			// correct guess
			hiddenCurrentWord = hiddenCurrentWord.substr(0, i) + userGuess + hiddenCurrentWord.substr(i + 1);
			found = true;
			lettersFound.push(userGuess);
		}
	}

	if (!found) {
		// incorrect guess
		remainingGuesses--;
		if (remainingGuesses == 0) {
			// the user lost this game
			newGame();
		}
	}

	if (selectedWord.replace(/\s/g, "").length == lettersFound.length) {
		// the user won this game
		wins++;
    alert("Wahoo! You saved the day!")
		newGame();
	}

	updateHtml();
}

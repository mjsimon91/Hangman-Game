// Creating an array that will hold the holiday themed words

var wordsArray = ["Christmas", "Chanukkah", "Yule Log", "New Years", "Times Square", "Presents", "Rockefellar Center", "Christmas Tree", "Dreidel","Menorah" ];

//Creating the variables for Wins, remianing guesses, and letters guessed
var Wins = 0;
var lettersGuessed = [];
var lettersFound=[];
var remainingGuesses = 12;
var selectedWord;

//Displaying the variables in the correct location on the page
function resetHTML(){
  document.querySelector("#wins").innerHTML = Wins;
  document.querySelector("#remaining-guesses").innerHTML = remainingGuesses;
  document.querySelector("#lettersGuessed").innerHTML =

}
//The program will now select a word at random from the array


var selectedWord = wordsArray[Math.floor(Math.random()* wordsArray.length)];
console.log(selectedWord);

// var upperCaseWord = selectedWord.toUpperCase();
//
// console.log(upperCaseWord);
//
// wordChars = upperCaseWord.split('');
// console.log(wordChars);
//The program will now display the number of letters of the selectedWord and display them as underscores on the page

var characterSpace = " ";                          //Creating a variable that is looking for a space

for (var i = 0; i < selectedWord.length; i++) {   //For loop to go through each character in the word
  if (selectedWord.charAt(i) != ' ') {            //If the letter in the selectedWord is not equal to a space
    characterSpace += " _ ";                       //Display an underscore and a space
  } else {                                        //else
    characterSpace += " &nbsp" + "&nbsp";                        //Display a space
  }
}


// Creating an array for each letter in an answer

var lettersInWord = [];                           //Creating an array called lettersInWord
// for (var i = 0; i < selectedWord.length; i++) {   //Loop through each character in the selectedWord
//   lettersInWord[i] = "_";                         //Each character in the array (including spaces) will be set to "_"
// }


var remainingLetters = selectedWord.length;       //Creating a variable that we will depricate the number of guesses left from

// We will now create the code that the player will use to play the game



// while (remainingLetters > 0) {                 // As long as there are more letters to guess
  document.onkeyup = function(event) {            // This function is run whenever the user presses a key.
    var userGuess = event.key;                    // Determines which key was pressed.







    for (var j = 0; j < selectedWord.length; j++) { // Creating a loop to go through each letter and determine if there is a match
      if (selectedWord[j] === userGuess) {          //Does a letter in the selectedWord match the userGuess
        lettersInWord.push(userGuess);
        console.log(userGuess);             //If it does, then add the letter(s) to the lettersInWord array
        characterSpace.replace(j,userGuess);
        remainingLetters --;                        //Deduct a letter from the total letters in the array

      } else {lettersGuessed.push(userGuess);
        remainingGuesses --;
        document.querySelector("#letters-guessed").innerHTML = lettersGuessed;

      }
    }
  };

document.querySelector("#answer").innerHTML = characterSpace;

// Creating an loop to look at the letter that was guessed and compare to each letter in the selectedWord to determine if there is a match





// Creating a function to log all letters Guessed

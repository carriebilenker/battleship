var location1 = 3;
var location2 = 4;
var location3 = 5;
var userGuess;
var hits = 0;
var guessTotal = 0;
var isSunk = false;
/* Start of user loop */
while (isSunk == false) {
  userGuess = prompt ("Ready, aim, fire! Enter a number between 0 and 6 to hit the battleship:");
  if (userGuess < 0 || userGuess > 6) {
    alert ("Enter a valid cell number to play! (0-6)");
  } else {
   guessTotal = guessTotal + 1;
  /* "If userGuess is equal to location 1 OR  userGuess is equal to location 2..."*/
      if (userGuess == location1 || userGuess == location2 || userGuess == location3) {
        alert ("HIT!");
        hits = hits + 1;
      } else {
        alert ("MISS!")
      }
  /* "Alert the user they hit, then log hits = hits + 1"*/
  /*close the while loop when hits == 3*/
        if (hits == 3) {
          isSunk = true;
          alert ("You sank the battleship!");
        }
var stats = "You took " +  guessTotal + " hits to sink the battleship"  +
             " which means your shooting accuracy was " + (3/guessTotal);
alert (stats);



       /*

if (guessTotal == 3) {
  alert ("You're a DESTROYER! Excellent game!");
} if (guessTotal <= 5) {
  alert ("You're a true marksman. But can you be a perfect shot?")
} else {
  alert ("You need more practice in battle! Play again?")
}

  /* "If userGuess is equal to location 1 OR  userGuess is equal to location 2..."*/

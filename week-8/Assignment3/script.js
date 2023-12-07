function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random secret number once
const minNumber = 1;
const maxNumber = 100;
const secretNumber = generateRandomNumber(minNumber, maxNumber);

function playGuessingGame(userGuess) {
  if (userGuess < secretNumber) {
    console.log(`Sorry, your guess (${userGuess}) is Too low! Try again.`);
  } else if (userGuess > secretNumber) {
    console.log(`Sorry, your guess (${userGuess}) is Too high! Try again.`);
  } else {
    console.log(`Congratulations! Your guess (${userGuess}) is correct.`);
  }
}

// Call the function with different user guesses
const userGuess1 = 53;
const userGuess2 = 30;
const userGuess3 = 80;

playGuessingGame(userGuess1);
playGuessingGame(userGuess2);
playGuessingGame(userGuess3);

// Create a function that checks if the input/parameter is an even number.

function isEven(number) {
  return number % 2 === 0;
}

// Example usage:
let number = prompt("Please enter a number: ");

number = parseInt(number);

console.log(isEven(number));

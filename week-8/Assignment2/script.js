function calculateFactorial(number) {
  if (number < 0) {
    return "Invalid input. Factorial is not defined for negative numbers.";
  }

  if (number === 0 || number === 1) {
    return 1;
  }

  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
}

// Example usage:
const inputNumber = 5;
const result = calculateFactorial(inputNumber);
console.log(`The factorial of ${inputNumber} is: ${result}`);

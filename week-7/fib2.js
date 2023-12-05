function generateFibonacci(start, n) {
  if (start <= 0 || n <= 0) {
    return "Invalid input. Please provide positive integers.";
  }

  let fibNumbers = [1, 1];
  let fibPrev = 1;
  let fibCurrent = 1;

  for (let i = 3; i <= start + n - 1; i++) {
    let fibNext = fibPrev + fibCurrent;
    fibPrev = fibCurrent;
    fibCurrent = fibNext;

    if (i >= start) {
      fibNumbers.push(fibCurrent);
    }
  }

  return fibNumbers;
}

// Example usage
let start = prompt("Enter the starting position for Fibonacci: ");
let n = prompt("Enter the number of terms: ");

start = parseInt(start);
n = parseInt(n);

if (!isNaN(start) && !isNaN(n)) {
  const result = generateFibonacci(start, n);
  console.log(result);
} else {
  console.log("Invalid input. Please enter valid numbers.");
}

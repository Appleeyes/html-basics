function fibIterativeUpToLimit(limit) {
  if (limit <= 0) {
    return "Invalid input. Please provide a positive integer.";
  }

  let fibNumbers = [1, 1];
  let fibPrev = 1;
  let fibCurrent = 1;

  while (fibCurrent <= limit) {
    let fibNext = fibPrev + fibCurrent;
    fibPrev = fibCurrent;
    fibCurrent = fibNext;
    
    fibNumbers.push(fibCurrent);
  }

  return fibNumbers;
}

// Example usage
let limit = prompt('Enter a limit: ');
limit = parseInt(limit);

if (!isNaN(limit)) {
  const result = fibIterativeUpToLimit(limit);
  console.log(result);
} else {
  console.log("Invalid input. Please enter a valid number.");
}

// Create a function that sums the values in-between two numbers. For example, calcFunc(1,3) returns 6 (i.e., 1+2+3).

function calcFunc(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    sum += i;
  }
  return sum;
}

// Example usage:
console.log(calcFunc(1, 3));
console.log(calcFunc(2, 5));

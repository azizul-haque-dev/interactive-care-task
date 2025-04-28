/*
Problem 13:
Write a function called "findPrimeNumbers" that takes an array of positive integers as input and returns a new array containing only the prime numbers from the original array.
For example:
Input: [2, 3, 4, 5, 6, 7, 8, 9, 10]
Output: [2, 3, 5, 7]

*/

function findPrimeNumbers(arr) {
  let primeNum = arr.filter((item) => {
    if (item < 2) return false;
    for (i = 2; i <= Math.floor(Math.sqrt(item)); i++) {
      if (item % i === 0) return false;
    }
    return true;
  });

  console.log(primeNum);
  return primeNum;
}
const numbers = Array.from({ length: 50 }, (_, i) => i + 1);
console.log(numbers);

// Prime numbers from 1 to 50:

findPrimeNumbers(numbers);
// findPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]);

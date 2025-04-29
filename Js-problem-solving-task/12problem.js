// Problem 12:
// Write a function called "getMaxProduct" that takes an array of integers as input and returns the maximum product that can be obtained by multiplying any two distinct elements from the array.
// Sample Input: [2, 3, 5, 6, 7]
// Sample Output: 42 (obtained by multiplying 6 and 7)

function getMaxProduct(arr) {
  const sortedArr = arr.sort((a, b) => b - a);

  return sortedArr[0] * sortedArr[1];
}

console.log(getMaxProduct([2, 3, 5, 6, 7]));

/* 
Problem 10:
Given an array exists that has integers, write a function called "getPositiveNumbers" that takes the entire array as input and returns a new array containing only the positive numbers from the original array.
Sample Input : [2, -5, 10, -3, 8, -1, 0, 7]
Sample Output: [2, 10, 8, 7]
 */

function getPositiveNumbers(arr) {
  const newArr = arr.filter((el) => el > 0);
  console.log(newArr);
  return newArr;
}
getPositiveNumbers([2, -5, 10, -3, 8, -1, 0, 7]);

/* Problem 11:
Write a function called "findMissingNumber" that takes an array of consecutive integers from 1 to n, with one number missing, and returns the missing number.
For example:
Input: [1, 2, 3, 5, 6, 7, 8]
Output: 4
 */

function findMissingNumber(arr) {
  let res = [];
  let sortedArr = arr.sort((a, b) => a - b);
  let firstNum = sortedArr[0];
  let lastNum = sortedArr[sortedArr.length - 1];
  for (let i = firstNum; i < lastNum; i++)
    if (!sortedArr.includes(i)) {
      res.push(i);
      i++;
    }
  console.log(res);
  return res;
}
findMissingNumber([1, 2, 3, 5, 6, 8]);

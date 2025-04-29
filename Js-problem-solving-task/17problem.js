// Write a function called "findMedian" that takes an array of numbers as input and returns the median value of the numbers.
// For example:
// Input: [5, 2, 8, 1, 9]
// Output: 5
// Input: [4, 2, 7, 1, 9, 10]
// Output: 5.5

// function findMedian(arr) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   console.log(sortedArr);
//   let n = sortedArr.length;
//   let median;
//   if (n % 2 === 0) {
//     let sum = sortedArr.reduce((a, b) => a + b, 0);
//     median = sum / n;
//   } else {
//     let i = Math.floor(n / 2);
//     median = sortedArr[i];
//   }

//   return median;
// }
// findMedian([4, 2, 7, 1, 9, 10]);
// findMedian([5, 2, 8, 1, 9]);

function findMedian(arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  let n = sortedArr.length;
  let MidIndex = Math.floor(n / 2);
  if (n % 2 === 0) {
    return (sortedArr[MidIndex - 1] + sortedArr[MidIndex]) / 2;
  } else {
    return sortedArr[MidIndex];
  }
}
console.log(findMedian([4, 2, 7, 1, 9, 10]));
console.log(findMedian([5, 2, 8, 1, 9]));

function isObjEquivalent(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // if their lenth is not equal return false
  if (keys1.length !== keys2.length) return false;
  // if they dont have same key and value return false
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

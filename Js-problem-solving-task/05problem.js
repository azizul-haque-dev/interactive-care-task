/* 

Problem 5:
Write a function `mergeArrays` that takes in two arrays of integers and returns a new array that contains all the elements from both arrays, sorted in ascending order.
For example, if the two input arrays are:
[1, 3, 5, 7, 9]
[2, 4, 6, 8, 10]
The function should return the following array:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Example Input/Output:
- mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- mergeArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]

*/
function mergeArrays(arr1, arr2) {
  // this is a one way
  //   return [arr1, arr2].flat(1).sort((a, b) => a - b);
  // other one
  //   let newArray = [...arr1];
  //   for (let arr of arr2) {
  //     newArray.push(arr);
  //   }
  // return newArray.sort((a, b) => a - b);
  // most easy way

  return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
console.log(mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]));
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

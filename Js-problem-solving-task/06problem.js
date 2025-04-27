/* Write a function called `findShortestWord` that takes in a string as a parameter and returns the shortest word in the string. If there are two or more words that are the same length and shortest, return the first word from the string with that length. Ignore punctuation and assume the string will not be empty. Words may also contain numbers.
For example, if the input string is "The quick brown fox jumps over the lazy dog", the function should return "The".
Example Input/Output:
- findShortestWord("The quick brown fox jumps over the lazy dog") should return "The"
- findShortestWord("Hello world") should return "world"
- findShortestWord("Today is Monday") should return "is"
 */

function findShortestWord(str) {
  let arr = srt.split(" ");
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j].length > arr[j + 1].length) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr[0]);
  return arr[0];
}

findShortestWord("Hello world");
findShortestWord("Today is Monday");
findShortestWord("The quick brown fox jumps over the lazy dog");

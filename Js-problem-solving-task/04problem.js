/* 
Problem 4:
Write a function isPalindrome that takes in a string and returns true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.
Example Input/Output:
isPalindrome("racecar") should return true
isPalindrome("hello") should return false
isPalindrome("rotator") should return true
isPalindrome("peep") should return true 
*/

function isPalindrome(str) {
  let palindrome = str.split("").reverse().join("");
  if (str === palindrome) return true;
  return false;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("rotator"));
console.log(isPalindrome("peep"));

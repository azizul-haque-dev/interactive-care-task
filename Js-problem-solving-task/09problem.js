/* Problem 9:
Write a Javascript Program that takes String as a parameter and checks if the parameters are number or text. If the parameters are numbers then it will return a summation of the numbers. If the parameters are not numbers then it will generate a text by concatenating the strings.
Sample Input:
parseString(“21” , “24’ , “40”)
parseString(“Hello” , “Alpha”)
parseString(“Summer” , “2022”)
Sample Output:
85
Hello Alpha
Summer 2022


 */
function parseString(...args) {
  let isNum = true;
  let sum = 0;
  let str = "";
  let numbers;
  for (let i = 0; i < args.length; i++) {
    if (/\d/.test(str[i])) {
    }
    if (typeof args[i] !== "number") {
      isNum = false;
      break;
    }
  }
  if (isNum) {
    numbers = args.map((i) => Number(i));
  }

  return isNum
    ? numbers.reduce((a, b) => Number(a) + Number(b), 0)
    : args.join(" ");
}

console.log(parseString("21", "24", "40")); // 85
console.log(parseString("Summer", "2022")); // "Summer 2022"
console.log(parseString("Hello", "Alpha")); // "Hello Alpha"

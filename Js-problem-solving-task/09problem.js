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
  const isNumber = args.every((item) => !isNaN(Number(item)));

  let res;

  if (isNumber) {
    res = args.reduce((a, b) => Number(a) + Number(b), 0);
  } else {
    res = args.join(" ");
  }
  console.log(res);
  return res;
}

parseString("21", "24", "40");
parseString("Summer", "2022");
parseString("Hello", "Alpha");

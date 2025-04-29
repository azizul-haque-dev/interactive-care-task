// Problem 14:
// Write a program that prints a triangle asterisk (*). The number of rows in the triangle is determined by the user's input. Each row should contain a  string where the characters are repeated in a mirrored pattern.
// For example, if the user inputs 5, the program should print:
//       *
//     ***
//    ****
//   *****
//  ******

function asterisk(num) {
  let res = "";
  for (let i = 1; i <= num; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    res += line.padStart(num) + "\n";
  }
  return res;
}

console.log(asterisk(5));

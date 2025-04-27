/* 
Problem 2:
Have the function `CountPairs` take in a string of lowercase letters and digits. The function should return the count of all pairs of characters in the string that add up to an even number.
For example, if the input string is "a1b2c3d4e5f6", there are 3 pairs that add up to an even number: "b2", "d4", and "f6". So the function should return 3.
If there are no such pairs, the function should return 0.
Examples:
- `CountPairs("a1b2c3d4e5f6")` should return 3
- `CountPairs("x1y2z3")` should return 1
- `CountPairs("a2b2c2d2")` should return 4
 */

function countPairs(str) {
      let count = 0;
      // if last digit is not number then return null
   if (isNaN(Number(str[str.length - 1]))) {
    console.log('Last character should be a number');
    return null;
}
else{
let newStr='';
  for (let i = 0; i < str.length; i++) {
    newStr += str[i]
    if (/\d/.test(str[i]) ) {
   newStr += ' '
    }

  }
  const arr = newStr.split(' ')
   const res = arr.forEach(el=>{
    const digit = el[el.length -1]
  
    if(digit %2 === 0){
        count += 1
    }
  })
    }
return count
}

console.log(countPairs("a1b2c3d4e5f6"))
console.log(countPairs("x1y2z3"))
console.log(countPairs("a2b2c2d2"))




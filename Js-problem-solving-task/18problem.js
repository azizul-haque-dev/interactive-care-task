// Problem 18:
// Write a function called ‘countCharacter’ that takes a string as parameters and returns an object with character count.
// For Example:
// Input: “Hello”
// Output: {H:1, e:1, l: 2, o:1}

function countCharacter(str) {
  const arr = str.split("");

  let obj = {};
  for (el of arr) {
    if (!obj.hasOwnProperty(el)) {
      obj[el] = 1;
    } else {
      obj[el] += 1;
    }
  }
  console.log(obj);
  return obj;
}

countCharacter("arman");

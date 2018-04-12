/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function reverseString(str) {
  let myArray = [];
  for(let i = str.length - 1; i >= 0; i--) {
    myArray.push(str[i]);
  }
  str = myArray.join('');
  return str;
}

console.log(reverseString("hello"));

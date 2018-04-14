/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function truncateString(str, num) {
  // Clear out that junk in your trunk
  let myArray = [];
  let myString = "";
  if(num < str.length) {
    for(let i = 0;i < num; i++) {
      myArray.push(str[i]);
    }
    myString = myArray.join("") + "...";
  } else {
    return str;
  }
  return myString;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

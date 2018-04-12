/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/


// With a for loop
function factorialize(num) {
  let factorial;
  for(factorial = 1; num > 0; num --){
    factorial *= num;
  }
  return factorial;
}

console.log(factorialize(5));

// With recursion
function factorialize(num) {
  if(num === 0) {
    return 1;
  } else {
    return num * (factorialize(num-1));
  }
}

console.log(factorialize(5));

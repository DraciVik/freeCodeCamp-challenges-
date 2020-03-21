// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4, 1]) should return 10 because sum of all the numbers between 1 and 4(both inclusive) is 10.

function sumAll(arr) {
  let lowerValue = Math.min(...arr);
  let higherValue = Math.max(...arr);
  let result = 0;
  for (let i = lowerValue; i <= higherValue; i += 1) {
    result += i;
  }
  return result;
}

sumAll([1, 4]);

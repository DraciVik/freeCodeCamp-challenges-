// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.In other words, return the symmetric difference of the two arrays.

//     Note
// You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  const hashTable = {};

  arr1.forEach(value => (hashTable[value] = 1));
  arr2.forEach(value => {
    if (hashTable[value]) {
      hashTable[value] = 2;
    } else {
      hashTable[value] = 1;
    }
  });
  console.log(hashTable.length);
  const newArr = [];
  const entries = Object.entries(hashTable);
  for (let [key, value] of entries) {
    if (value === 1) {
      if (isNaN(key)) {
        newArr.push(key);
      } else newArr.push(Number(key));
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

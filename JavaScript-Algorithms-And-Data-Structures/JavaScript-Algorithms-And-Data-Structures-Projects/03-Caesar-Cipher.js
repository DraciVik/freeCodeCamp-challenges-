//  One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  let firstHalf = "abcdefghijklm".toUpperCase();
  let secondHalf = "nopqrstuvwxyz".toUpperCase();
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i += 1) {
    if (firstHalf.indexOf(strArr[i]) !== -1) {
      strArr[i] = secondHalf[firstHalf.indexOf(strArr[i])];
      continue;
    } else if (secondHalf.indexOf(strArr[i]) !== -1) {
      strArr[i] = firstHalf[secondHalf.indexOf(strArr[i])];
      continue;
    }
    continue;
  }
  return strArr.join("");
}

rot13("SERR PBQR PNZC");

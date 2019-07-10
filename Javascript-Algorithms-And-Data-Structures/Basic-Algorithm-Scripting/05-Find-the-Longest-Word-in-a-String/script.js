/*
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function findLongestWordLength(str) {
        const myArray = str.split(' ');
        const newArray = myArray.reduce((a, b) => (a.length > b.length ? a : b));
        return newArray.length;
}

console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));

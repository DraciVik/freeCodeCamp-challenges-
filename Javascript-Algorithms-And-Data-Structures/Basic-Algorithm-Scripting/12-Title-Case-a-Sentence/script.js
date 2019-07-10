/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function titleCase(str) {
        let strArr = str.toLowerCase();
        strArr = strArr.split(' ');
        const str2Arr = strArr.map(strng => strng.split(''));
        for (let i = 0; i < str2Arr.length; i += 1) {
                str2Arr[i][0] = str2Arr[i][0].toUpperCase();
        }
        return str2Arr.map(strng => strng.join('')).join(' ');
}

titleCase("I'm a little tea pot");

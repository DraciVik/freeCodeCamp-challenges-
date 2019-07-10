/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function repeatStringNumTimes(str, num) {
        // repeat after me
        let newStr = '';
        for (let i = 0; i < num; i += 1) {
                newStr += str;
        }
        if (num <= 0) {
                return '';
        }
        return newStr;
}

repeatStringNumTimes('abc', 3);

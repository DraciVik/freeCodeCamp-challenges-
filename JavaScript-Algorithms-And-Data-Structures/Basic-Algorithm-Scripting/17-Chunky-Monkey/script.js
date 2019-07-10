/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function chunkArrayInGroups(arr, size) {
        // Break it up.
        const newArr = [];
        let i = 0;
        while (arr.length) {
                newArr[i] = arr.splice(0, size);
                i += 1;
        }
        return newArr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);

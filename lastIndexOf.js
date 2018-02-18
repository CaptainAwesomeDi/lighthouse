function lastIndexOf(someArray, value) {
    var result = -1;
    for (var i = 0; i < someArray.length; i++) {
        if (someArray[i] === value) {
            result = i;
        }
    }
    return result;
}
console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
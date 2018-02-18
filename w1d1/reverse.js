myArg = process.argv.slice(2);

for (var i = 0; i < myArg.length; i++) {
    var newString = "";
    for (var y = myArg[i].length - 1; y >= 0; y--) {
        newString += myArg[i][y];
    }
    console.log(newString);
}
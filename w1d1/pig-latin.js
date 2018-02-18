var myArg = process.argv.slice(2);
//console.log(myArg);
var finalString = '';

for (var i = 0; i < myArg.length; i++) {
    var newWord = myArg[i];
    var firstLetter = newWord[0];
    var newString = newWord.slice(1, newWord.length);
    newString = newString + firstLetter + "ay ";
    finalString += newString + ' ';
}
console.log(finalString);
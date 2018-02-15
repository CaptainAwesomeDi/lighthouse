var words = ["ground", "control", "to", "major", "tom"];

function map (arr,callback){
var myArr = [];
  arr.forEach(function(word,i){
    var str = callback(arr[i]);
    myArr.push(str);
  });
console.log(myArr);
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


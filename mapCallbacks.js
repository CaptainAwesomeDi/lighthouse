var words = ["ground", "control", "to", "major", "tom"];

function map (arr,callback){
  arr.forEach(console.log(callback))

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


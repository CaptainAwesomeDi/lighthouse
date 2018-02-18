var repeatNumbers = function(data) {
  var numString = '';
    for (var i = 0; i < data.length; i++) {
      if (i>0){
        numString += ',';
      }
      for (var j = 0; j < data[i][1]; j++){
      //  console.log('i: ' + i + 'j: ' + j);
        numString += data[i][0];
      }
    }
    return numString;
};


console.log(repeatNumbers([
    [1, 10]
]));
console.log(repeatNumbers([
    [1, 2],
    [2, 3]
]));
console.log(repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2]
]));
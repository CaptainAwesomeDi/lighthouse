var myArr = [];

function storeNumber(arrNumbers) {
  myArr.push(arrNumbers);
}

function sorted() {
  arr = myArr;
  arr.sort(function(a,b){
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  });
  return arr;
}

exports.storeNumberFn = storeNumber;
exports.sortedFn = sorted;
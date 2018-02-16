function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var sequence = -1;

  return function() {
    /* your code here */
    sequence += 1;
    return list[sequence];
  }

}

var rollLoadedDie = makeLoadedDie();

// console.log(rollLoadedDie()); // 5
// console.log(rollLoadedDie()); // 4
// console.log(rollLoadedDie()); // 6

var countdownGenerator = function(x) {
  /* your code here */
  return function() {
    if (x > 0) {
      console.log(`T-minus ${x} ...`)
      return x--;
    } else if (x === 0) {
      console.log(`Blast Off!`);
      return x--;
    } else {
      return console.log(`Rockets already gone, bub!`);
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
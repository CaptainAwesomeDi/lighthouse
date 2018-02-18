var numOfDice = process.argv.slice(2);

function rollDice() {
  var numOfRolls = parseInt(numOfDice);
  var diceRoll = '';
  for (var i = 0; i < numOfRolls; i++) {
    var min = 1;
    var max = 6;
      diceRoll += (Math.floor(Math.random() * (max - min + 1)) + min).toString()
    }
return 'Rolled ' + numOfDice + ' dice: ' + diceRoll.split();
};

console.log(rollDice(numOfDice));
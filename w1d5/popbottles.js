var userInput = parseInt(process.argv[2]);
var totalNewBottles = 0;

function moneyForTotalBottles(input) {
  var totalBottle = 0;
  totalBottle = input + newBottlesTotal(input);

  return console.log(totalBottle);
}



function newBottlesTotal(number) {

  if ((number % 2 === 1) && (number > 1)) {
    number -= 1;
  } else if (number === 1) {
    return totalNewBottles;
  }

  number = number / 2;
  totalNewBottles += number;


  console.log("新的总数" + totalNewBottles);
  return newBottlesTotal(number);
}
//moneyForTotalBottles(userInput);
newBottlesTotal(100000000);
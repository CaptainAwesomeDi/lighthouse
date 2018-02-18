var chalk = require("chalk");
var storeNumber = require("./storeNumbersInAList.js");


function main(){
  for (var i = 0; i < 100; i++) {
    storeNumber.storeNumberFn(Math.random());
  }
  var sortedCrap = storeNumber.sortedFn();
  var smallest = sortedCrap[0];
  return smallest;
}

export default main;


//var message = "Hello" + chalk.yellow("World");
//console.log(message);
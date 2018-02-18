var fs = require("fs");
var userInput = process.argv[2];
var filepath = "./temp/test_async.txt"

fs.writeFile(filepath, userInput, function(err) {
  if (err) {
    throw err;
  }
  console.log(`Successfully wrote ${userInput} to `, filepath);
});
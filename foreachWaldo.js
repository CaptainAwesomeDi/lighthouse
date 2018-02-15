// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(found); // execute callback
}

function actionWhenFound(str,i) {
  if (str === 'Waldo') {
    console.log("Found Waldo at : " + i);
  }
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(name){
    if(name === 'Waldo'){
      found();
    }
  }); // execute callback
}

function actionWhenFound() {
    console.log("Found");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
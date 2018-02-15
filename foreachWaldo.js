// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(name,i){
    if(arr[i] === 'Waldo'){
      found();
    }
  }); // execute callback
}

function actionWhenFound() {
    console.log("Found");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
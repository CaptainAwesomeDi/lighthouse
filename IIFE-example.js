
var foo = function() {
  var x = 10;

  var inner = function() {
    console.log("Value of x is: " + x);
  }
  return inner;
}(); // Notice the () at the end,
      // which will immediately invoke the function,
      // assigning the returned value (inner) to foo

foo();

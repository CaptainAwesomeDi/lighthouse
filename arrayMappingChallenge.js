var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(obj) {
  var z = (Math.pow(obj.x, 2)) + (Math.pow(obj.y, 2));
  return Math.sqrt(z);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

//function(o) { return Math.sqrt(o.x * o.x + o.y * o.y); }
// var result2 = input.map(o => Math.sqrt(o.x * o.x + o.y * o.y))
// var clamped = inputs.map(x => Math.max(0, Math.min(1, x)))
// var crap = some_numbers.filter(x => x >= 0).map(x => x * x).reduce((acc, ele) => acc + ele, 0);
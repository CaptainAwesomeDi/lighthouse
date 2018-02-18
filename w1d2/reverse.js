var input = process.argv.slice(2).toString();

function reverse(input) {
  return input.split('').reverse().join('');
}
console.log(reverse(input));


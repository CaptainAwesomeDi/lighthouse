let ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let number = ingredients.length;
let times = 0;
while (number > times) {
	console.log(ingredients[times]);
	times++;
}
// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
	console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:let number = ingredients.length -1;

for (var i = ingredients.length - 1; i >= 0; i--) {
	console.log(ingredients[i]);
}
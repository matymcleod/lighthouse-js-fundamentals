const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log('This is the while loop:');
i = 0;
while(i < ingredients.length){
  console.log(ingredients[i]);
  i++
}
// Write a for loop that prints out the contents of ingredients:
console.log('This is a for loop:');
for(let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
};
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('This is a for loop that prints the array in reverse:');
let lastPos = ingredients.length - 1;
let stopAt = 0;
for(let i = lastPos; i >= stopAt; i--){
  console.log(ingredients[i]);
};
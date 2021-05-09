//---------- UDACITY - ARRAYS
//----- EXAMPLE 1
/*
var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

for(var index = 0; index<prices.length; index++){
  if(index===0){
    prices[index]=1;
  } else if(index===2){
    prices[index]=2;
  }else if(index===6){
    prices[index]=3;
  }
}
console.log(prices);
*/
//----- EXAMPLE 2
/*
  for (var index = 0; index<prices.length; index++){
    //change the value of first element
    if(index===0){
        prices[index]=11;
    }
    //change the value of third element
    else if(index===2){
        prices[index]=33;
    }
    //change the value of seventh element
    else if(index===6){
        prices[index]=77;
    }
}
console.log(prices);
*/
//----- EXAMPLE 3
/*
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche");
console.log(donuts);
*/
//----- EXAMPLE 4
/*
var donuts = ["cookies", "cinnamon sugar", "creme de leche"];

donuts.splice(-2, 0, "chocolate frosted", "glazed");
*/

//----- EXAMPLE 5
/*
var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
// From index position 2, remove 1 element. Afterwards, add all the elements mentioned in the argument.
rainbow.splice(2, 1, "Yellow", "Green");

// From index position 5, remove 0 elements. This means, no removal of any element. 
// Afterwards, add all the elements mentioned in the argument.
rainbow.splice(5, 0, "Purple");

// Did you noticed that the above method call is equivalent to adding an element at a specific index in the array?

//Print
console.log(rainbow);
*/
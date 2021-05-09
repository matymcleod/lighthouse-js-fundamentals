/*
//---------- FUNCTION DECLARATION - UDACITY----------
//----- EXAMPLE 1
function sayHello() {
    var message = "Hello!"
    return message; // returns value instead of printing it
  }
  
  // function returns "Hello!" and console.log prints the return value
  console.log(sayHello());
  
  //----- EXAMPLE 2
  function laugh(){
    var a = 'hahahahahahahahahaha!';
    return a;
};
console.log(laugh());

//----- EXAMPLE 3
let ha = "";
function laugh(num){
    for(let x = 0; x < num; x++){
    ha = ha + "ha";
    }
    ha = ha + "!";
    return ha;
}
console.log(laugh(3));
*/
//----- QUIZ: Laugh (5-4)
//Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
/*var sound = '';
var laugh = function(num){
  for(let i = 0; i < num; i++){
  sound = sound + 'ha';
} 
sound = sound + '!'
return sound;
}
console.log(laugh(10));
*/

//----- QUIZ: Cry (5-5)
//Write a named function expression that stores the function in a variable called cry and returns "boohoo!". Don't forget to call the function using the variable name, not the function name

/*
var cry = function cryFunction(){
  const sound = 'boohoo!';
  return sound;
};
console.log(cry());
*/

//----- QUIZ: Inline (5-6)
//Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.
function emotions(myString, myFunc){
  console.log('I am ' + myString + ', ' + myFunc(2)); 
}
emotions ('happy', function(num){
var sound = '';
  for(let i = 0; i < num; i++){
  sound = sound + 'ha';
} 
sound = sound + '!'
return sound;
});


/*
//----- EXAMPLE 4
function square(x) {
    return x * x;
  }
  
  function subtractFour(x) {
    return square(x) - 4;
  }
  
  console.log(subtractFour(5));


function makeLine(length){
    var line = "";
    for(var j = 1; j <= length; j++){
        line += "* ";
    }
    return line + "\n";
} 

function buildTriangle(length){
    var triangle = "";
    var lineNumber = 1;
    for(lineNumber=1; lineNumber<=length; lineNumber++){
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
} 
console.log(buildTriangle(10));
*/

//----- FUNCTIONS AS PERAMETERS

//----- EXAMPLE 1
/*
// function expression catSays
var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };
  
  // function declaration helloCat accepting a callback
  function helloCat(callbackFunc) {
    return "Hello " + callbackFunc(3);
  }
  
  // pass in catSays as a callback function
  helloCat(catSays);
*/

/*
//----- CODE TRAIN - LONG VERSION - HIGHER ORDER FUNCTION EXAMPLE
function sing(callback) {
    console.log('la la la la');
    if (callback instanceof Function) {
        callback();
    }
}

function meow() {
    console.log('meow meow');
}

//----- CODE TRAIN - MULTIPLIER - HIGHER ORDER FUNCTION EXAMPLE
function multiplier(factor) {
    return function(x) {
        return x * factor;
    }
}
//----- MULTIPLIER REWRITTEN AS ARROW FUNCTION
function multiplier(factor) {
    return x => x * factor;
}

let doubler = multiplier(2);
let tripler = multiplier(3);
//Now in js console you can enter 'doubler(3);' or 'tripler(3); and get a multiplied return
*/

/*
//---------- JEFFS FUNCTION TO EXPLAIN SCOPE AND FUNCTIONS
function topLevelDoSomething() {
    var didSomething = false;

    function doSomething(callback) {
      var topLevelDidSomething = didSomething;
      var didSomething = false;
      didSomething = callback(topLevelDidSomething);
    
    }

     function doAnotherThing(didSomething) {
       didSomething = true;
       return didSomething;
     }
    
}

doSomething(doAnotherThing);
*/
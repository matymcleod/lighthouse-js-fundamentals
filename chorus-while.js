//----------- UDACITY - WHILE LOOPS ------------
/*  
// A different version of "FizzBuzz"
    var x = 1;

    while (x <= 20) {
      if(x % 3 === 0 && x % 5 === 0){
          console.log("JuliaJames");
      }else if(x % 3 === 0){
          console.log("Julia");
      }else if(x % 5 === 0){
          console.log("James");
      }else{
          console.log(x);
      } x = x + 1;
  }


var num = 99;

while (num >=1) {
    if(num === 1){
        console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around..."+ (num -1) + " bottles of juice on the wall!");
    }else if(num ===2){
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around..."+ (num -1) + " bottle of juice on the wall!");
    }else{
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around..."+ (num -1) + " bottles of juice on the wall!");
    }
        num = num - 1;
}


var countDown = 60;

while (countDown >= 0 ){
    if(countDown === 50){
        console.log("Orbiter transfers from ground to internal power");
    }else if(countDown === 31){
        console.log("Ground launch sequencer is go for auto sequence start");
    }else if(countDown === 16){
        console.log("Activate launch pad sound suppression system");
    }else if(countDown === 10){
        console.log("Activate main engine hydrogen burnoff system");
    }else if(countDown === 6){
        console.log("Main engine start");
    }else if(countDown === 0){
        console.log("Solid rocket booster ignition and liftoff!");
    }else{
    console.log("T-" + countDown + " seconds");
    } countDown = countDown - 1;
}
*/

//---------- LHL - WHILE LOOPS ----------
/*
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 7) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
*/

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");



// --------- UDACITY - FOR LOOPS ---------
/*
var row = 0;
var seat = 0;
for(row=0; row<=25;row++){
    for(seat=0; seat<=99; seat++){
    console.log(row + '-' + seat);
    }
}
*/

/*
var row = 0;  // initial value of the row
var seat = 0; // initial value of the seat within a row

// One loop inside another is called Nested loop.
// Outer `for` loop, to iterate over the rows
for (row = 0; row <= 25; row++){

    // Inner `for` loop, to iterate over the seats within a row
    // In this loop, the value of `row` variable would change only after 100 iterations
    for(seat = 0; seat <= 99; seat++){
        console.log(row+"-"+seat);
    }
}
*/
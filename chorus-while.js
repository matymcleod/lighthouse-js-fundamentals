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

/*
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
*/

var x = 100;

while (x <= 200) {
  if(x % 3 === 0 && x % 4 === 0){
      console.log("LoopyLighthouse");
  }else if(x % 3 === 0){
      console.log("Loopy");
  }else if(x % 4 === 0){
      console.log("Lighthouse");
  }else{
      console.log(x);
  } x = x + 1;
}
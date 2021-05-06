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

const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
  console.log(chorus);
}
console.log("Until the sun comes up!");
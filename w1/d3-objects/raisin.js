const raisinAlarm = function(cookie) {
  let output = [];
  for(let i = 0; i < cookie.length; i++) {
    if(cookie[i] === "🍇") {
      output.push("Raisins alert!")
    } else {
      output.push("All good!");
    }
  }
  return output;
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach(name => {
    if (name === "Waldo") {
      found(name);   // execute callback
    }
  });
};

const actionWhenFound = function(name) {
  console.log(`Found him at index ${name} !`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
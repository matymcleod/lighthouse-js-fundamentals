const swapper = function(key1, object1, key2, object2) {
    //swap the values of a and c in each object
    //key1 = 'a'
    //key2 = 'c'
    console.log('Swap!');
    let fSwap;
    let sSwap;
    for (let keys in object1) {
        //we have key1, we need to check if keys is equal to key1 
        if (key1 === keys) {
           //access value of the given key using brack notation or dot
            fSwap = object1[key1];
        }
    }
    for (let keys in object2) {
        if(key2 === keys) {
            sSwap = object2[key2];
        }
    }
    // Put your solution here
    // we need to update the values accordingly in object1 and object2
    // swap the value of 'a' into the value of 'c'
    // take the value of fSwap and assign it as the value of c in object2
    object2[key2] = fSwap;
    // take the value of sSwap and assign it as the value of a in object1
    object1[key1] = sSwap;
    console.log('object1: ', object1);
    console.log('object2: ', object2);
  };
  
  swapper('a', { a: 1 , b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
  //object1: { a: 5 , b: 2, c: 3 }  object2: { a: 4, b: 3, c: 1 }
  swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
  swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });
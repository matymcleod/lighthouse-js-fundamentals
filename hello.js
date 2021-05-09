//---------- LHL - HIGHER ORDER FUNCTIONS
//----- EXAMPLE 1 - USING CONSOLE.LOG TO PRINT MESSAGES TO CONSOLE
const sayHello = function(name){
console.log('Hello ' + name);
}

//----- EXAMPLE 2 - USING RETURN TO RETURN MESSAGES TO THE CONSOLE
const returnSayHello = function (name) {
    return 'Hello, ' + name;
}
const greeting = returnSayHello('Maty');
let howManyHundreds = function(num){
  if(num >= 100){
    return Math.floor(num/100);
  }else{
    return 0;
  }
}
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
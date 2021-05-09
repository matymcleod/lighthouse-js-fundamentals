let name = "";
function ageCalculator(name, yearOfBirth, currentYear){
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}
console.log(ageCalculator("mathew", 1979, 2021));

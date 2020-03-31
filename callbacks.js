let numbers = [ 1, 4 ,11,234,21];

let menoresDe9 = (number) => number < 9;

console.log(numbers.filter(menoresDe9));

console.log(numbers.filter((number) => number < 9));
let score = "33abc"
let score1 = "33";

let score2 = null

console.log(typeof score);
console.log(typeof(score)); //another way

console.log(typeof score1);

let valueInNumber = Number(score)       //we can also use like this, now score is convert into number
console.log(typeof valueInNumber);
console.log(valueInNumber);

let valueInNumber1 = Number(score2)
console.log(valueInNumber1);


// "33" => 33
// "33abc" => NaN(not a number)-> output
// "true" => 1; false= => 0

let isLoggedIn = "ritik"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => output is true; 0 => false
// "" => output is false
// "ritik" => output is true 


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
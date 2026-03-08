const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2)); // output is=> 100.00 => toFixed(2) me property bhi pass krni hoti hai i.e number

const otherNumber = 23.8966

//console.log(otherNumber.toPrecision(3)) //output => 23.9 =>give precise value and also roundoff the values.

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); //output=>    10,00,000 ('en-IN')=> now indian standard ke according commas put honge).  Bydefault US standard ke according commas put hote hai.


// +++++++++++++++++ Maths ++++++++++++++++++++++

// console.log(Math);  // Math is a object
// console.log(Math.abs(-4)); // abs=absolute value => -ve values +ve ho jati hai

// console.log(Math.round(4.3));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));    //ceil => uppervalue me round off krna
// console.log(Math.floor(4.9));  //floor => lowervalue me convert kr dega
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //this function always give value between 0 to 1

console.log((Math.random()*10 )+ 1);
console.log(Math.floor(Math.random()*100));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min );






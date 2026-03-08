// Primitive datatypes

// there are seven types in primitive datatypes:
// String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') //symbol me same value pass krne pr bhi jo result milega wo unique hoga for both.

console.log(id === anotherId); //false

const bigNumber = 2445641267885n //bigInt datatype example.



// Reference type(Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] //array exampel
let myObj = {
    name: "ritik",
    age: 21
}

const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof bigNumber);
console.log(typeof null); //output is object
console.log(typeof undefined); //output is undefined
console.log(typeof myFunction); //output is Function/object function




//JS is a Dynamically typed language => means variable types are interpreted and assigned at run time.
const name = "Bhartendra"
const repoCount = 50

//console.log(name + repoCount + "Value");    //not recommended(old syntax)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

console.log(`${name} ${repoCount}`);

// (` ${} `) => This feature is called string interpolation.

const gameName = new String('Bhartendra-bt-com')  //another way to declare string with the help of new keyword. new String() create a string object.

console.log(gameName[0]);   //access first index value of string
console.log(gameName.__proto__);  //access prototype 


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

const newStringOne = "    Ritik    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh')) //to ask that the given string is present or not.


console.log(gameName.split('-'));   //seperate on the basis of dash(-).







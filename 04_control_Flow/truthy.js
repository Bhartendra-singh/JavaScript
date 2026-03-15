// Truthy and falsy value concept

// truthy value => Jb hum maan lete h ki string ki value true h .

const userEmail = "rk@k.ai"

if(userEmail) {
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}


// falsy values are: => false, 0 , -0 , BigInt 0n , "" , null , undefined , NaN 

// Truthy values are => "0" , 'false' , " " , [] , {} , function(){} -> (empty function)


// how to check array is empty
if(userEmail.length === 0) {
    console.log("Array is empty");
}

// how to check object is empty or not

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// Nullish coalescing Operator (??): only for => null and undefined

let val1;
let val2;
let val3;
// val1 = 5 ?? 10
val1 = null ?? 10  // o/p=> 10 
val2 = undefined ?? 15

val3 = null ?? 10 ?? 20   //=> jo bhi first value mil jayegi wo hi assign ho jayegi.

console.log(val1);
console.log(val2);
console.log(val3);


//terniart operator

// condition ? true : false  

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") :  console.log("more than 80")



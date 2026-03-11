// objects declared by two ways: 1=> literals ki tarah , 2=> constructors ki tarah.

//singleton => when we create an object with the help of constructors , then a singleton object is created.(Object.create => se hi singleton objects form hoti h)


//Object literals

const mySym = Symbol("key1") //now use this symbol as a key in object(INTERVIEW QUESTION)

const JsUser = {
    name: "Ritik",
    "full name": "Ritik Singh", //we can't access this value with the help of dot(.) operator.
    [mySym] : "key1",   //we use symbol as key in object with square bracket, [mySym] like that.
    age: 21,
    location: "Dehradun",
    email: "rk@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//how to access objects
console.log(JsUser.email); //way1=> not too much prefer

console.log(JsUser["email"]);  //way2=> use square bracket
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


// change objects value

JsUser.email = "ritik@gmail.com"
console.log(JsUser["email"]);

//we can also lock/freez the objects

Object.freeze(JsUser)
JsUser.email = "ritik@microsoft.com"

console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


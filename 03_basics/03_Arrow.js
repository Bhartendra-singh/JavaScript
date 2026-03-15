//this refers to the current contex(values) .eg: user object ki kisi bhi property ko use krna h to hm this keyword use krte h .("this" keyword refers to an object that is executing the current piece of code.)


const user = {
    username: "Ritik",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  // here this refers to the empty object.


// Arrow Function:

// function chai(){
//     let username = "Ritik"
//     console.log(this.username); //o/p=> undefined. here we can't able to use this in functions.4
// }

// chai()

// const chai = function () {
//     let username = "Ritik"
//     console.log(this.username);
// }

// chai()

// Arrow function

const chai = () => {
    let username = "Ritik"
    console.log(this.username); // o/p=> undefined
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) =>  ( num1 + num2 )     
//implicit return=>(return keyword likhne ki jarurat nhi h b/c statement one line ki h ya function kuch or task perform nhi kr rha h. only value return kr rha h).

const addTwo = (num1, num2) => ({username: "Ritik"})        // object return krne ke liye parenthesis me wrap krna hota h.

console.log(addTwo(3, 4));


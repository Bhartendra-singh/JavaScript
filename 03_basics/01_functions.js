// function

function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("K");
}

// sayMyName();    // function call

function addTwoNumbers(num1, num2){ // num1, num2 are parameters
    console.log(num1 + num2);
}

function addTwoNumbers(num1, num2){
    
    // let result = num1 + num2
    // return result

    return num1 + num2

    console.log("Ritik")       // this statement never execute because after return statement, function will not work . return line ke baad kuch bhi line likhi hue ho wo execute nhi krta function.
}

// addTwoNumbers(3, 4);     // 3, 4 are arguments(actual values which we pass during the function call)

// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

const result = addTwoNumbers(3, 4);

// console.log("Result:", result);

function loginUserMessage(username = "sam"){    //we pass "sam" as a default value . if does not pass any value the sam will execute and(sam just logged in).

    if(username === undefined){ // if(!username){ console.log("please enter a username")}
        console.log("please enter a username");
        return
    }
    return `${username} just logged in` //modern way

    // return username + " just logged in "
}

// console.log(loginUserMessage("Ritik"));

// console.log(loginUserMessage());    //when we do not pass any value then output is undefined.=> (na ki null)

function calculateCartPrice(val1, val2, ...num1){   //here ... means rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Ritik",
    prices: 199
}

//how to pass objects in functions

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)  //we can also pass object directly
handleObject({
    username: "RK",
    price: 399
})

// we can also pass array

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
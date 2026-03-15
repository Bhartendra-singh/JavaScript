// scope
let a = 300     //global scobe variable

if(true) {      
    let a = 10      //local scope/block scope variable
    const b = 20
    var c = 30      // var block variable can also access outside the scope.
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Ritik"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);       // this line gives error so that our two() function does not execute

    two()
}

one()


// In Nested functions child function can access the parent function variables. but not vice versa.

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);   //outside the scope => error
}

// console.log(username);



// +++++++++++++++++++++ interestin ++++++++++++++++


addone(4);  //=> here we can't get any error .

function addone(num){
    return num + 1
}

// addone(4);


addTwo(4) // error=> here we get error, we access function before decleration

const addTwo = function(num){
    return num + 2
}

// addTwo(4)


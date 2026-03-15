// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

// (function definition)(function execution)
//  // syntax of iife.

// global scope ke pollution se problem hoti h kafi baar , us global scope ke variables h ya jo bhi decleration h use pollution ko hatane ke liye iife use kiya h.

//simple iife 

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('Ritik') 


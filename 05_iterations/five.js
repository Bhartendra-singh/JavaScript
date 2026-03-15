// for each loop 

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// }  )   //ye aik call back function hai to eska name nhi hota hai.

// coding.forEach( (item) => { //item aik variable hai.
//     console.log(item);
// } )


function printMe(item){
    console.log(item);
}

// coding.forEach( printMe )


coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
} )
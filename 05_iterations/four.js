// forin loop is for objects.

const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}


// for (const key in myObj) {
//     // console.log(myObj[key]);
//     console.log(`${key} shortcut is for ${myObj[key]}`)
// }


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]); 
}

// map is not iteratable so we can not write it in a loop.
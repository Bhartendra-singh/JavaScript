// array

const myArr = [0, 1, 2, 3, 4, 5]    //JS arrays are resizable and can contain a mix of differnt data types(eg:number, string ,boolean,objects)

console.log(myArr[0]);  //access array elements

// Arrays in JS makes shallow copies when we perform copy operation.(important point)

//shallow copy=> of an object is a copy whose properties share the same references.

// Deep copies => of an object is a copy whose properties do not share the same references.

//another ways for array declaration
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) 
console.log(myArr2[1]);   

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()     //remove last value form array and we don't pass any argument

myArr.unshift(9)
myArr.shift(9)      //we don't pass any argument, shift() removes the first element of the array

console.log(myArr.includes(9)); // it tell us that the given element is present in array or not

console.log(myArr.indexOf(9));


const newArr = myArr.join() // it join the array and also convert array into string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


// slice , splice methods

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //it cannot manipulate the orignal array and last index value excluded rhti h
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)  // splice method orignal array ko hi manupulate kr deta h. o/p=> myArr2=[1, 2, 3] and myArr=>[0, 4, 5]

console.log("C ", myArr);   
console.log(myn2);




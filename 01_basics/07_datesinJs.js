//Dates

let myDate = new Date()
// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toJSON());

// console.log(typeof myDate);  //interview question=>output is object

let myCreatedDate = new Date(2026, 0, 23)   // Months are start form 0 in js. 0=>january, 1=>february
console.log(myCreatedDate.toDateString());

let myCreatedDateOne = new Date(2026, 0, 23, 5, 3) 
console.log(myCreatedDateOne.toLocaleString());

let myCreatedDateTwo = new Date("2026-01-14") //syntax=> yy-mm-dd => in india we does not follow this syntax 
console.log(myCreatedDateTwo.toLocaleString());

let myCreatedDateThree = new Date("01-15-2026")  //syntax=> mm-dd-yy => we follow this syntax
console.log(myCreatedDateThree.toLocaleString());


//Time stamp => for exact time value , quiz design , polls design in js then we use time stamp

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000); //to get a time in second we divide it by 1000. by default it is in millisecond.(1sec=1000ms). => INTERVIEW QUESTION

console.log(Math.floor(Date.now()/1000)); //to get value without decimal.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: "long",
})








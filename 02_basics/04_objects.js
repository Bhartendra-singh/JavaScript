// Object singleton

// const tinderUsers = {}   // this is a non singleton objec

const tinderUser = new Object() // this is singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ritik",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

// combine objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign( obj1, obj2)
// const obj4 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} //spread operator
// console.log(obj3);

// console.log(obj4);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

const obj4 = users[1].email     //another way to access the object elements

// console.log(obj4);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //property h ya nhi pucchne ke liye



// destructuring the objects=> extract values from objects and assign them to variables in a shorter, cleaner way. and You can rename variables while destructuring.

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course   //destructure the object

// console.log(courseInstructor);
console.log(instructor);

//JSON format: => keys and values both are written in double Quotes("")
// {
//    "name": "ritik",
//     "coursename": "Js in hindi",
//     "price": "free"
// }

//APIs in array format:
// [
//     {},
//     {},
//     {}
// ]





// Reduce method (important)

const myNums = [1, 2, 3, 50, 60, 400, 700]

//acc => accumulator , currval=> current value

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)


// write reduce using arrow function

const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


// add all prices in shopping cart

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)       //item denote each object in array

console.log(priceToPay);
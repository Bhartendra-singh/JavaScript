// const coding = ["js", "ruby", "java", "python", "cpp"]


//forEach loop values return nhi krta hai.

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = myNums.filter( (num) => num > 4 )


// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// } )

// console.log(newNums); 



const Books = [
    { title: 'Book One', genre: 'History', publish: 1986, edition: 1996},
    { title: 'Book Two', genre: 'fiction', publish: 1980, edition: 2000},
    { title: 'Book Three', genre: 'Non-Fiction', publish: 1992, edition: 2007},
    { title: 'Book Four', genre: 'History', publish: 1999, edition: 2008},
    { title: 'Book Five', genre: 'Fiction', publish: 1989, edition: 2010},
    { title: 'Book Six', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'Book Seven', genre: 'English', publish: 1995, edition: 2001},
    { title: 'Book Eight', genre: 'History', publish: 2000, edition: 2015},
    { title: 'Book Nine', genre: 'Science', publish: 1993, edition: 2017},
] 

let userBooks = Books.filter(  (bk) => bk.genre === 'History') 

userBooks = Books.filter(  (bk) => {
    return bk.publish >=1995 && bk.genre === "History"
})

console.log(userBooks);


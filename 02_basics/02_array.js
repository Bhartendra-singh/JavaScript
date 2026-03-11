const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]    //(...)=>spread operator=> it is used to concat the two or more arrays . easy way just write (...arrayname);

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(real_another_array);


console.log(Array.isArray("Ritik"))

console.log(Array.from("Ritik"))    //convert the given values into the array(it can be object, string, etc)

console.log(Array.from({name: "ritik"}))    //o/p=> here it return the empty array, here it can't convert this object into array .(interview)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //Returns a new array from a set of elements.
// @param items — A set of elements to include in the new array object.





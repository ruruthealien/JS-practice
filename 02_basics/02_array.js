const marvel = ["spiderman", "ironman", "thor"]
const dc = ["superman", "batman", "flash"]

// marvel.push(dc)
// console.log(marvel); // arrar inside array

// const all_hero = marvel.concat(dc)
// console.log(all_hero)

//spread operator (best for combining both array)
const all_hero2 = [...marvel, ...dc]
console.log(all_hero2);

const arr3 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const arr4 = arr3.flat(Infinity)
console.log(arr4);


console.log(Array.isArray("rupanjana")) // doesn't exist
console.log(Array.from("rupanjana")); // convert ito array
console.log(Array.from({name: "rupanjana"})); // * returns empty string

let a = 100
let b = 200
let c = 300
console.log(Array.of(a,b,c));

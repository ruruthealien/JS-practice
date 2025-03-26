// array
const myArr = [1,2,3,4,5,6]
const myHeros = ["ironman","spideman","antman"]

const myArr2 = new Array(1,8,5)
// console.log(myArr[0]);

// array methods

// myArr.push(50)
// myArr.push(60)
// myArr.pop()
// myArr.unshift(55)
// myArr.shift()
// console.log(myArr.includes(4));
// console.log(myArr.indexOf(20));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

//slice the range is not included
console.log("A", myArr); // original array

const arr1 = myArr.slice(1,3) // 1,3 are indexes
console.log(arr1);

console.log("B",  myArr); // after slicing array remain same

const arr2 = myArr.splice(1,3)
console.log("C",  myArr); // after splicing it delete the part and print the remaining array
console.log(arr2);


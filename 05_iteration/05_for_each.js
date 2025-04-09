// const  animal = ['lion', 'tiger', 'elephant', 'puma', 'rabbit']

// animal.forEach(function (item) {
//     console.log(item); 
// })

// animal.forEach( (item) => {
//     console.log(item); 
// })

// const printMe= (item)=>{
//     console.log(item);
// }
// animal.forEach(printMe)



// animal.forEach((item, index, arr) => {
//     console.log(item, index, arr);  
// })

// for each does not return value


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// filter return values
const newNums =myNums.filter( (num)=> num > 4)

// {} for scope use return
const newNums2 =myNums.filter( (num)=> {
    return num > 8})
// console.log(newNums);
// console.log(newNums2);

// for each
const newNums3 = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums3.push(num)
    }
});
// console.log(newNums3);



const  animal = ['lion', 'tiger', 'elephant', 'puma', 'rabbit']

// animal.forEach(function (item) {
//     console.log(item); 
// })

animal.forEach( (item) => {
    console.log(item); 
})

const printMe= (item)=>{
    console.log(item);
}
animal.forEach(printMe)



animal.forEach((item, index, arr) => {
    console.log(item, index, arr);  
})
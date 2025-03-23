const num = 400
console.log(num);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num2 = 23.674
console.log(num2.toPrecision(3));

const num3 = 1000000
console.log(num3.toLocaleString('en-IN'));

// ************** MATHS ****************
// console.log(Math);
// console.log(Math.abs(-5)); // 5
// console.log(Math.round(31.987)); // 32
// console.log(Math.ceil(10.5)); // 11
// console.log(Math.floor(10.5)); // 10
// console.log(Math.min(1,2,3));
// console.log(Math.max(1,2,3));

console.log(Math.random()); // gives values between 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1); // between 1 to 9

//formula

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min)) + min);
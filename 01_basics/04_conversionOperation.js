let score ="33"
console.log(typeof score);
console.log(typeof (score));

let valueInNum = Number(score)
console.log(typeof valueInNum);

// "33" => 33
// "33abc" => NaN
// true = 1; false = 0

let isLoggedIn = "rups"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 = true; 0 = false
// "" = false; "rups" = true

let num = 33
let stringNum = String(num)
console.log(stringNum)
console.log(typeof stringNum)

// *********************operation***********

let val = 3
let negVal = -val
console.log(negVal)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 ="hello"
let str2 =" world"
let str3 = str1 + str2
console.log(str3)

// console.log("1"+2) //12
// console.log(1+"2") //12
// console.log("1"+2+2) //122
// console.log(1+2+"2") //32

// console.log(+true); //1
// console.log(+""); //0

let gameCounter = 100
++gameCounter;
gameCounter++;
console.log(gameCounter);
console.log(gameCounter);

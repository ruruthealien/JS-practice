const name = "rups"
const repoCont = 50
// console.log(name + repoCont + " Value")

console.log(`hello, my anme is ${name} and my repo count is ${repoCont}`);

const gameName = new String('hello-world')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newStr = gameName.substring(0,5)
console.log(newStr);

const str2 = gameName.slice(-10,5)
console.log(str2);

const str3 = "   ripmm   "
console.log(str3);
console.log(str3.trim());

const url = "https://rups.com/ripm coups"
console.log(url.replace(" ","%2"));
console.log(url.includes('rimps'));

console.log(gameName.split('-'));

//node 01_basics/08_strings.js
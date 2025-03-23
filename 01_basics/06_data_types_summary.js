// primitive
// 7 types: string, number, boolean, null, undefined, symbol, bigint
const score =100
const scoreVal = 100.3

const isLogged = false
const outLogges = null
let userEmail;
//symbol
const id = Symbol('123')
const id2 =  Symbol('123')
console.log(id === id2);

//bigint
const bigNum = 14864613754655n

// reference/ non-primitive: arrays, objects,functions

const hero = ["captaon america","spiderman","black widow"]

let myObj = {
    name:"rups",
    age:21,
}

const func = function(){
    console.log("hello world");
    
}
//***********************MEMORY*************************
// stack: primitive, heap: non-primitive
let name1 = "rupanjana"
let name2 = name1
name2 = "dimpy"
console.log(name1)
console.log(name2)

let user1 = {
    email: "abc@gmail.com",
    upi: "user@415"
}

let user2 = user1

user2.email = "125abc@gmail.com"

console.log(user1.email);
console.log(user2.email);
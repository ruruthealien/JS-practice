// function sayMyName(){
//     console.log("R");
//     console.log("U");
//     console.log("R");
//     console.log("U");
// }
// sayMyName() // reference

// function addTwoNums(num1, num2) {
//     console.log(num1 + num2);
    
// }
// addTwoNums(3,5)
// addTwoNums(3,"4")

function addTwoNums(num1, num2) {
//   let result = num1 + num2
//   return result
    return num1 + num2
}

const result = addTwoNums(3,5)
// console.log("Result: ", result);


function loginMessage(username) {
    if (!username) {
        console.log("Please enter a username");
        return
    } // (username === undefined) == (!username)
    return `${username} just logges in`    
}
// console.log(loginMessage("Rupanjana Majhi"));
// console.log(loginMessage()); // when nothing is passed then returned undefined

// for shopping cart
function calculateCCartPrice(val1, ...num1) {
    return num1
}
console.log(calculateCCartPrice(200, 300, 400)); // ... -rest operartor / spread operator

const user={
    fruit: "apple",
    price: 50
}
function handleObject(anyObj) {
    console.log(`the price of ${anyObj.fruit} is ${anyObj.price}`);
}
// handleObject(user)
handleObject({
    fruit: "apple",
    price: 50
})

const array = [200,400,100,700]

function returnSecondVal(getArray) {
    return getArray[2]
}

// console.log(returnSecondVal(array));
console.log(returnSecondVal([200,400,100,700]));

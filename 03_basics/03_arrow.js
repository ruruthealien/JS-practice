// this keyword refers to an object (current context)

const user = {
    username: "rupa",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "rajeev"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username ="rups"
//     console.log(this);
    
//     console.log(this.username); undefined
    
// }
// one()

// arrow function
// const one =() => {
//     let username ="rups"    
//     console.log(this.username); 
//     console.log(this);
        
// }
// one()

// explicite return
// const add = (num1, num2) => {
//     return num1 + num2
// }
// console.log(add(8,5));


// implicite return
// const add = (num1, num2) => num1 + num2
// const add = (num1, num2) => (num1 + num2)
// for object
const add = (num1, num2) => ({username: "rups"})
console.log(add());
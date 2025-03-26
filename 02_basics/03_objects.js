// singleton; formed by constructors
// Object.create


// object literal

const mySym = Symbol("key1")

const user = {
    name: "rupanjana",
    "full name": "Rupanjana Majhi",
    [mySym]: "myKey1", // for symbol use []
    age: 21,
    location: "Kolkata",
    email: "rupa123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Tuesday", "Friday", "Saturday"]
}
// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySym]);
 
// user.location = "Bangalore"

// freezing the object no change will be entertained
// // Object.freeze(user) 
// user.location = "Pune"

// console.log(user);

//function
user.greeting = function () {
    console.log("Hello user!!");
}
console.log(user.greeting());

// reference from the object
user.greeting2 = function () {
    console.log(`Hello user, ${this["full name"]}!!`);
}
console.log(user.greeting2());


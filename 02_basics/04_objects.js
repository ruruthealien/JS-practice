// const tinderUser = new Object() // singleton object
const tinderUser = {} //non-singleton object

tinderUser.id = "45nmp"
tinderUser.name = "Rohit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
 
// object inside object ****

const regularUser = {
    email: "rup_145@gmail.com",
    full_name: {
        user_full_name: {
            first_name: "Rupanjana",
            last_name: "Majhi"
        } 
    }
}

// console.log(regularUser.full_name.user_full_name.first_name);

// combining array
const ob1 = {1: "apple", 2: "banana"}
const ob2 = {3: "lion", 4: "giraffe"}
// const ob3 = {ob1, ob2}
// const ob3 = Object.assign({},ob1, ob2)

// here we can also use spread
const ob3 = {...ob1, ...ob2}
// console.log(ob3);

const users = [
    {
        id: 1,
        name1: "gfdj12@gmail.com"
    },
    {
        id: 2,
        name1: "ruydj12@gmail.com"
    },
    {
        id: 3,
        name1: "dhs1@gmail.com"
    },
]
const ob = users[1].name1
// console.log(ob)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// --------------- de-structure and JSON API---------------

const course  = {
    coursename: "js",
    price : "999",
    instructor: "rupanajan"
}

// course.instructor

const {instructor: inst} = course
// console.log(instructor);
console.log(inst);


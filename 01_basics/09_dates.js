// Dates

let mydate = new Date()
// console.log(mydate);
// console.log(typeof mydate);
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());


// let myDate2 = new Date(2003, 9, 23)
// console.log(myDate2.toDateString());

// // let myDate3 = new Date("2003-01-14")
// // let myDate3 = new Date("01-14-2003")
let myDate3 = new Date(2003, 9, 2, 11, 3)
// console.log(myDate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myDate3.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
})
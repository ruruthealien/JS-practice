var c = 300 // global scope
let a =45
if(true){
    let a = 10
    const b  = 20
    // console.log("inner: ",a);
} // block scope

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "rupanjana"

    function two() {
        const website = "youtube"
        console.log(username);
       
    }
    
    // console.log(username);
    two()
    
}
one()

if(true){
    const username = "rupa"
    if (username === "rupa") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);

}

// console.log(username);

// ***************************************************

console.log(addOne(5));
function addOne(num){
    return num+1
}


const addTwo = function(num){
    return num+2
}
console.log(addOne(5));
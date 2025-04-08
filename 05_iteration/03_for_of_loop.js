// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    console.log(i);
}

const greet = "hello world"
for (const i of greet) {
    console.log(`each char is ${i}`);   
}


// maps

const map = new Map()
map.set('in',"india")
map.set('uk',"united kingdom")
map.set('fr',"france")
console.log(map);



// for (const key of map) {
//     console.log(key);
    
// }

for (const [key, value] of map) {
    console.log(key, ': ', value);
    
}


const myObj = {
    'game1': 'nfs',
    'game2': 'uno'
}

for (const [key, value] of myObj) {
    console.log(key, ': ', value);
}
// myObj is not iterable
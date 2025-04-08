// for in

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    py: 'python'
}

for (const key in myObject) {
    console.log(`${key} for  ${myObject[key]} `);
}


const  animals = ['lion', 'tiger', 'elephant', 'puma', 'rabbit']
for (const key in animals) {
    console.log(animals[key]);
}
// reduce
const myNums = [1,2,3]

//  const myTotal = myNums.reduce((acc, curVal) => (acc + curVal),0)

 const myTotal = myNums.reduce((acc, curVal) => 
     {console.log(`acc: ${acc} and curVal: ${curVal}`);
    return acc + curVal},0)

// console.log(myTotal);

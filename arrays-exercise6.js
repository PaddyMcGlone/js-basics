const myArray  = [1,2,3,4,5,6];
let maxNumber = GetMax(myArray);

console.log("The max number is : ", maxNumber);

// Simple approach
function GetMax(array){
    let max = 0;

    for (let num of array)
        max = max < num ? num : max;
    
    return max;
}

const myArray2 = [1,2,3,4,10,5,6,7,8];
let otherMax = GetMaxWithReduce(myArray2);

console.log("Reduce methods turn : ", otherMax);

// Reduce method approach
function GetMaxWithReduce(array){
    return array.reduce((accumulator, currentValue) => {        
        return accumulator < currentValue ? currentValue : accumulator;
    },0);
}
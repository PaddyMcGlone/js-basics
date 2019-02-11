const myArray  = [1,2,3,4,5,6];
let maxNumber = GetMax(myArray);

console.log("The max number is : ", maxNumber);

function GetMax(array){
    let max = 0;

    for (let num of array)
        max = max < num ? num : max;
    
    return max;
}
const numbers = [1,2,3,4,5,6,1,7,8,1];

let results = CountOccurences(numbers, 1);
console.log("Total count : ", results);

let reduceResults = CountOccurencesWithReduce(numbers, 2);
console.log("With reduce : ", reduceResults);

// 1. Simple approach.
function CountOccurences(array, serachItem){
    let total = 0;

    for(let n of array){
        if(n === serachItem)
            total += 1;
    }

    return total;
}

// 2. Advanced reduce method.
function CountOccurencesWithReduce(array, serachItem) {
     let sum = array.reduce((total, currentValue) => {
        return total += currentValue === serachItem ? 1 : 0;
     }, 0);

     return sum;
}
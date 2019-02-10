const numbers = [1,2,3,4,5,6,1,7,8,1];

let results = CountOccurences(numbers, 1);
console.log("Total count : ", results);

results = CountOccurencesWithReduce(numbers, 1);
console.log("With reduce : ", results);

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
function CountOccurencesWithReduce(array, serachItem){
    return sum = array.reduce((serachItem, currentValue) => {
        if(serachItem === currentValue) sum += 1;
    }, 0);
}
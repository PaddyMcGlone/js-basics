const numbers = [1,2,3,4,5,6,1,7,8,1];

let results = CountOccurences(numbers, 1);
console.log("Total count : ", results);

let reduceResults = CountOccurencesWithReduce(numbers, 2);
console.log("With reduce : ", reduceResults);

let moshExample = MoshHelperReduceMethod(numbers, 1);
console.log("Mosh example code: ", moshExample);

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

function MoshHelperReduceMethod(array, searchItem) {
    return array.reduce((accumulator, currentValue) => {
        let occurance = (currentValue === searchItem) ? 1 : 0;        
        console.log(searchItem, currentValue, accumulator);
        return accumulator += occurance;
    }, 0);
}
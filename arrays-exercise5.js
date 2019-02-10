const numbers = [1,2,3,4,5,6,1,7,8,1];

let results = CountOccurences(numbers, 1);
console.log("Total count : ", results);

function CountOccurences(array, serachItem){
    let total = 0;

    for(let n of array){
        if(n === serachItem)
            total += 1;
    }

    return total;
}
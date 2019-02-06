const numbers = [1,2,3,4,5];
let result = Move(numbers, 5, -3);

console.log(result);

function Move(array, index, offset){
    // Position moving item to
    let position = index + offset;

    // Error scenarios
    if(offset > array.length || position < 0){
        return console.error("Invalid offset");
    }

    //Create a copy of the array
    let output = [...array];

    //Remove the number from starting position
    const itemToMove = output.splice(array.indexOf(index), 1)[0];
    
    //Add the item back into the new array
    output.splice(array.indexOf(index) + offset, 0, itemToMove);

    //Return the output.
    return output;
}
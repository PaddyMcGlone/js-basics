const output = FizzBuzz(15)
console.log(output);

function FizzBuzz(input) {

    // if(input !== 1)
    //     return "Not a number";

    switch (input){
        case isFizz(input) && isBuzz(input):
            return 'FizzBuzz';
        case isFizz(input):
            return 'Fizz';
        case isBuzz(input):
            return 'Buzz';
        default:
            return input;
    }
}

// Is divisible by 3
function isFizz(input){
    if((input % 3 ) == 0)
        return true;
}

// Is divisible by 5
function isBuzz(input){
    if((input % 5) == 0)
        return true;
}

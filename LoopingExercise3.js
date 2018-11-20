const output = FizzBuzz("true")
console.log(output);

function FizzBuzz(input) {
    if(isNaN(input))
         return NaN;

    if(isFizz(input) && isBuzz(input))
        return "FizzBuzz";
    else if(isFizz(input))
        return 'Fizz';
    else if(isBuzz(input))
        return 'Buzz';
    else
        return input;``
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

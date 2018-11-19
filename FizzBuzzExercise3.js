const output = FizzBuzz(3)
console.log(output);

function FizzBuzz(input) {

    if(input !== 1)
        return "Not a number";

    if((input % 3) == 0)
        return 'Fizz';
    if((input % 5) == 0)
        return 'Buzz';

    if((input % 3) == 0 && (input % 5) == 0)
        return 'FizzBuzz';
}

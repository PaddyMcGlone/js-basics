let name = 'Paddy';
let age = 30;
let isApproved = true;
let firstName = undefined;
let favouriteColour = null;

let person = {
    name : 'Paddy',
    age : 30,
    isApproved : true
};

// Dot notation
person.name = 'John';

// Bracket notation
person['name'] = 'Mary';

// Adding an array
let myArray = ["red", "blue"];
myArray[2] = 'green';
console.log(myArray);

// Adding a simple funciton

function greet() {
    console.log('Hello world')
}

greet();

function greetPerson(name) {
    console.log('Hello: ' + name )
}

greetPerson('Jonthan');

function greetFullName(firstName, lastname){
    console.log('Hello '+firstName+' '+lastname)
}

greetFullName('Patrick', 'McGlone');

function square(number) {
    return number * number;
}

var result = square(2);
console.log('Output from result is: ' + result);

// Increment and Decrement operators

let x = 2;
console.log(++x);

let y = 5;
console.log(x++);
console.log(y);


let value = 1;

console.log(value === 1);
console.log(value != 1);


// using Ternary operators
let value = 100;
let customerType = value > 100 ? 'Gold standard' : 'Silver standard';
console.log(customerType);
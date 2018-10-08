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
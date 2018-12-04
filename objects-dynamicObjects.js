// Creating an object.
const circle = {
    radius: 10
}

// Adding to the object.
circle.Colour = 'Yellow';
circle.Draw = function () {
    console.log('Drawing a circle now.');
}

// Removing from the object.
delete circle.Colour;

// Log the contents of the object.
console.log(circle);
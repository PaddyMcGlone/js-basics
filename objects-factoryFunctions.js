// Factory functions
function createCircle(radius){
    return{
        radius,
        draw() {
            console.log('Drawing');
        }
    }    
}

const circle2 = createCircle(10);
circle2.draw();

// Constructor functions
function Circle(radius){
    this.radius = radius,
    this.draw = function() {
        console.log('Drawing a circle.');
    }
}

// Create an instance of the circle.
const circle3 = new Circle(10);
circle3.draw();
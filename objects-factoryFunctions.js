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
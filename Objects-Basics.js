/* Below are highly related objects. */
let radius = 10;
let x = 1;
let y = 1;

/* Can combine to form an object. */
const circle = {
    radius : 10,
    x :1,
    y : 1
}

/* An example of a nested object. */
const circle2 = {
    radius : 10,
    definition = {
        placeholder : 10,
        image : true
    },
    display : false,
    draw : function(){
        console.log('Draw')
    }
}

// As the code displays above, a function is
// just another item within the key value pair.


// A standard function.
function Draw(){
    console.log('Draw')
}
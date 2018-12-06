let obj = {value : 10} ;

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj.value);

// Iterateing over an objects properties

const circle = {
    radius : 1,
    draw : function(){
        console.log('draw');
    }
}

for(let key in circle){
    console.log(key);
}
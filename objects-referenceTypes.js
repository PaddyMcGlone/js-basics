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
    console.log(key, circle[key]);
}

for(let key of Object.keys(circle)){
    console.log(key);
}

if('radius' in circle) console.log('Yes'); 


// Copying a value from the source to a destination object.

const another = {};

for(let key in circle){
    another[key] = circle[key];
}

for(let akey in another){
    console.log(akey);
}

const another2 = Object.assign({}, circle);
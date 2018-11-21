const values = [0, null, undefined, '', 2 ,3];

console.log(countThruthyValues(values));

function countThruthyValues(values) {
    let total = 0;
    for(let value of values){         
        if(value){
            console.log(value, "Thruthy");
            total++;
        } 
    }
    console.log(total);
}
console.log(sum(10));

function sum(limit){
    let total = 0;
    for(i = 1; i <= Math.floor(limit / 3 ); i++ ){
        total += (i * 3);        
    }

    for(i = 1; i <= Math.floor(limit / 5); i++){
        total += (i * 5);  
    }

    console.log("Multiplier total: ", total);
}
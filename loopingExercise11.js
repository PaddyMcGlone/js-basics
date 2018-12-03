showPrimes(20);

function showPrimes(limit){
    for(i = 1; i <= limit; i++){
        if(i % 2 == 1) 
            console.log(i);
    }
}
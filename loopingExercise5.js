let numberLimit = 10;

DisplayAllOddsAndEvens(numberLimit);

function DisplayAllOddsAndEvens(limit){
    for (let i = 1; i <= limit;  i++){
        if ((i % 2) == 0)
            console.log("EVEN", i);
        else
            console.log("ODD", i);
    }
}
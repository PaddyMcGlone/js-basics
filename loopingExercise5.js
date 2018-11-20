DisplayAllOddsAndEvens(10);

function DisplayAllOddsAndEvens(limit){
    for (let i = 1; i <= limit;  i++){
        if (i % 2 == 0)
            console.log(i, "Even");
        else
            console.log(i, "Odd");
    }
}
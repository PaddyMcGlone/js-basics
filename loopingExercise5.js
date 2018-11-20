DisplayAllOddsAndEvens(10);

function DisplayAllOddsAndEvens(limit){
    for (let i = 1; i <= limit;  i++){
        let message = i % 2 == 0 ? "Even" : "Odd";
        console.log(i, message);
    }
}
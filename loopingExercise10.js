ShowStars(10);

function ShowStars(rows){
    for(let row = 1; row <= rows; row++){
        
        let stars = 1
        let message = "";
        
        while(stars <= row){
            message += "* "
            stars++;
        }

        console.log(message);
    }
}
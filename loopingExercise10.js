ShowStars(10);
Mosh_ShowStars(10);

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

function Mosh_ShowStars(stars){
    for (let row = 1; row <= stars; row++){
        let message = '';

        for (let star = 1; star <= row; star++)
            message += "*";

        console.log(message);
    }
}
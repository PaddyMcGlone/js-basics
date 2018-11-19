console.log(CheckSpeed(180));

// CheckSpeed program
function CheckSpeed(input){
    if(input <= 70)
        return 'ok';

    let points = 0;    
    let total = input - 70;
    points = Math.floor(total / 5);

    if(points >= 12)
        return 'Licence suspended';

    return 'Your speeding points: ' + points;
}
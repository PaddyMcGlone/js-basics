console.log(CheckSpeed(130));

// CheckSpeed program
function CheckSpeed(input){
    const Speedlimit = 70

    if(input <= speedlimit)
        return 'Ok';

    let points = 0;    
    let total = input - speedlimit;
    points = Math.floor(total / 5);

    if(points >= 12)
        return 'Licence suspended';

    return 'Your speeding points: ' + points;
}
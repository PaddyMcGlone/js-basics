console.log(CheckSpeed(120));

// CheckSpeed program
function CheckSpeed(CurrentSpeed){
    const Speedlimit = 70

    if(CurrentSpeed <= Speedlimit)
        return 'Ok';

    let points = Math.floor((CurrentSpeed - Speedlimit) / 5);

    if(points >= 12)
        return 'Licence suspended';

    return 'Your speeding points: ' + points;
}
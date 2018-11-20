console.log(CheckSpeed(129));

// CheckSpeed program
function CheckSpeed(CurrentSpeed){
    const Speedlimit = 70
    const PointsPerMph = 5

    if(CurrentSpeed < (Speedlimit + PointsPerMph))
        return 'Ok';

    const points = Math.floor((CurrentSpeed - Speedlimit) / PointsPerMph);

    if(points >= 12)
        return 'Licence suspended';

    return 'Your speeding points: ' + points;
}
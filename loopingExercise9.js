const marks = [80, 80, 50];

console.log(CalculateGrades(marks))

function CalculateGrades(marks){
    let total = 0;
    for (const i of marks) {
        total += i;
    }

    let average = total / marks.length;

    switch (average) {
        case (average <= 59):
            console.log(average, "F");
            break;
        case (average >= 60) && (average <= 69):
            console.log(average, "D");
            break;
        case (average >= 70) && (average <= 79):
            console.log(average, "C");
            break;
        case (average >= 80) && (average <= 89):
            console.log(average, "B");
            break;
        default:
            console.log(average, "A")
            break;
    }
}
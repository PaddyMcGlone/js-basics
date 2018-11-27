const marks = [80, 80, 50];

console.log(CalculateGrades(marks))

function CalculateGrades(marks){
    let total = 0;
    for (const mark of marks) {
        total += mark;
    }

    let average = total / marks.length;

    if(average > 60) return "F";
    if(average > 70) return "D";    
    if(average > 80) return "C";
    if(average > 90) return "B"

    return "A";
    
}
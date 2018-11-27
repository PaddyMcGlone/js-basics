const marks = [80, 80, 50];

console.log(CalculateGrades(marks))

function CalculateGrades(marks){
    let total = 0;
    for (const i of marks) {
        total += i;
    }

    let average = total / marks.length;

    if(average >= 50 && average <= 59)
        console.log(average, "F")

    if(average >= 60 && average <= 69)
        console.log(average, "D")
    
    if(average >= 70 && average <= 79)
        console.log(average, "C")

    if(average >= 80 && average <= 89)
        console.log(average, "B")

    if(average >= 90)
        console.log(average, "A")
    
}
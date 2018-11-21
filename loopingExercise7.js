const person = {
    FirstName : "Patrick",
    Surname : "McGlone",
    Age : 34,
    FavouriteFood : "Pizza"
};

ShowStringProperties(person);

function ShowStringProperties(object){
    let total = 0;
    for(let key in object){
        if(typeof object[key] === "string")
            total++;
    }
    console.log(total);
}
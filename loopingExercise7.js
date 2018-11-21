const person = {
    FirstName : "Patrick",
    Surname : "McGlone",
    Age : 34,
    FavouriteFood : "Pizza"
};

ShowStringProperties(person);

function ShowStringProperties(object){ 
    for(let key in object)
        if(typeof object[key] === "string")
            console.log(object[key], "is a string");
}
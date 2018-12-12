const MyAddress = {
    number : "74",
    street : "Galwally Park",
    city : "Belfast",
    country : "Northern Ireland"
}

function ShowAddress(Address){
    for (const key in Address) {
        console.log(key+" :", Address[key])
    }
}

ShowAddress(MyAddress);
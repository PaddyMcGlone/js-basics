const MyAddress = {
    number : "74",
    street : "Galwally Park",
    city : "Belfast",
    country : "Northern Ireland"
}

function CreateAddress(){
    return{
        Address() {
            Number: "18";
            Street: "Galwally Park";
            City: "Belfast";
            Country : "Northern Ireland";
        }        
    }
}

function ShowAddress(Address){
    for (const key in Address) {
        console.log(key+" :", Address[key])
    }
}

ShowAddress(MyAddress);

let createAddress = CreateAddress();
let address1 = createAddress.Address().City;
ShowAddress(address1);
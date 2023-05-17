function findUserCountry(user){
    let country = user && user.address && user.address.country
    return country || "unknown";
}

let user1 = {
    name: "Megawati", age: 60,
    address: {
        city: "Jombang",
        country: "Indonesia",
    },
};
let user2 = {
    name: "Puan Chan",
    age: 30,
};
console.log(findUserCountry(user1));
console.log(findUserCountry(user2));
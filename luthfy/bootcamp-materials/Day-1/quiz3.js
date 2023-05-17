function findUserCountry(user) {
    let country = user.address && user.address.country;
    return country || "unknown";
}

let user1 = {
    name: "Puan Maharani", 
    age: 25,
    address: {
        city: "Tangerang",
        country: "Indonesia"
    },
};

let user2 = {
    name: "Mega chan", 
    age: 30
};

console.log(findUserCountry(user1));
console.log(findUserCountry(user2));
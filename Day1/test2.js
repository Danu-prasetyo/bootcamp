function findUserCountry(user) {
    //jawaban
    let negara = user && user.address && user.address.country
    return negara || "unknown"
}

let user1 = {
    name: "Puan chan",
    age: 25,
    address: {
        city: "jakarta",
        country: "indonesia",
    }
}

let user2 = {
    name: "Mega chan",
    age: 30,
}

console.log(findUserCountry(user1)); //output Indonesia
console.log(findUserCountry(user2)); //output Unknown
function findUserCountry(user) {
  if (user.address && user.address.country) {
    return user.address.country;
  } else {
    return "unknown";
  }
}

let user1 = {
  nama: "puan chan",
  age: 25,
  address: {
    city: "jakarta",
    country: "Indonesia",
  },
};

let user2 = {
  name: "Mega chan",
  age: 30,
};

console.log(findUserCountry(user1));
console.log(findUserCountry(user2));

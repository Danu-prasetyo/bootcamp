// let x = 155;
// let y = 10;
// let z = 5;
// let penjumlahan = x + y;

// console.log("=================");
// console.log("Penjumlahan = ", penjumlahan);

function findUserCountry(user) {
  let negara = user.address && user.address.country;
  return negara || "unknown";

  //  return user?.address?.country || "unknown";
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


// ----- Asynchronous ----- 

// console.log("start");
// setTimeout(() => {
//   console.log("Baris ini akan di eksekusi setelah dua detik");
// }, 2000);

// console.log("selesai");

// --- Callback 

// -- Function Biasa 

// function greet(name) {
//   console.log(`Halo ${name} !`);
// }

// greet("Diki")

// -- Function Callback

// function greetUser(name, callback) {
//   callback(name)
// }

// greetUser("Arif", greet)

// --- Promise 

// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error))
// belajar asynchronus javascript
// funnction biasa
function greet(name) {
  console.log("halo," + name + "!");
}

// memanggil function biasa
greet("Diki slebew"); // outout :Halo,Andi!

// function callback
function greetUser(name, callback) {
  callback(name);
}

// memanggil function callback
greetUser("shihnta sitata", greet); // output: Halo,Budi!

// promise
fetch("https://jsonplaceholder.type.com/todos/20")
  .then((response) => response.json())
  .then((data) => console.log(data)) 
  .catch((error) => console.error(error));

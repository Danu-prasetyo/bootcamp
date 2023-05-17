//materi1
console.log("start");
setTimeout(function () {
    return console.log("baris ini di print setelah 3 detik");    
}, 3000);

console.log("selesai");

//function biasa
function greet(name){
    console.log("halo, " + name + "!");
}

//memangil function biasa
greet ("diki slebew"); // output : Halo Andi

//Function callback
function greetUser(name,callback){
    callback(name)
}

// // memanggil function callback
// greetUser("shinta sitata",greet); //output : Halo, shinta sitata

// //promise
// fetch ("https://jsonplaceholder.typicode.com/todos/20")
// .then ((response) => response.json())
// .then ((data) => console.log(data))
// .catch ((error) => console.error(error));
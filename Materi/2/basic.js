//function biasa
function greet(name){
    console.log("Halo," + name + "!");
}

greet("Diki");

//function callback
function greetUser(name,callback){
    callback(name);
}
//memanggil function callback
greetUser("shinta",greet);

// //promise
// fetch("https://jsonplaceholder.typicode.com/todos/20")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => consoler.error(error))
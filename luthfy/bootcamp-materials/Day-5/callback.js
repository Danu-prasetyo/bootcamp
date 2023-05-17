// ASYNCHRONOUS
/*Pada javascript blok kode akan dieksekusi secara berurutan, namun pada fungsi ini ketika javascript mengeksekusi kode lain,
fungsi ini pun akan dieksekusi secara bersamaan, jadi tidak selalu berurutan.*/

function greet(name) {
    console.log("Hi! " + name);
}

greet("Andi")

function userGreet(name, callback) {
    callback(name);
}

userGreet("Budi", greet) // Memanggil fungsi greet pada fungsi userGreet

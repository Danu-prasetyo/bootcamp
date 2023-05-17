const { error, log } = require('console');

// readline pada node.js
// readline = sama kek argumen input fungsinya buat masukin inputan kedalam CLI

/** buat valiabel buat nampung modul readline tersebut pake require
 * .createInterFace() buat bikin interface yang ngebaca input dari user
 */
const readLine = require('readline').createInterface({
    input: process.stdin, //buat nerima input
    output: process.stdout //buat output
});

// function buat minta inputan dari user
function input(prompt){
    return new Promise((callback, error)=>{
        // buat nampilin prompt di console
        readLine.question(prompt,(inputnya)=>{
            // buat close interface readline setelah user nginput
            readLine.close()
            // panggil callback dengan nilai yang diinput oleh user
            callback(inputnya)
        })
    })
}

// eksekusi program pake asynchronous
(async () => {
    try{
        // minta inputan
        const name = await input("masukan nama : ")
        console.log(`Hallo, ${name}!`);
    } catch (err){
        console.error(err);
    }
})();

// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// Readline pada Node.js
/**
 * Readline mirip dengan argument input
 * Fungsinya untuk memasukan inputan ke dalam CLI
 */

const { error } = require('console');
const { read } = require('fs');

// READLINE
/**
 * Buat variable untuk menampung modul readline tersebut menggunakan require.createInterface()
 */
const readline = require('readline').createInterface({
    input: process.stdin, // Menerima input
    output: process.stdout // Menampilkan output
});

// Function untuk menerima input dari user
function input(prompt) {
    return new Promise((callback, error) => {
        readline.question(prompt, (yourInput) => { // Untuk menampilkan prompt di console
            readline.close(); // Close interface setelah user memberikan inputan
            callback(yourInput); // Memanggil callback dengan nilai yang diinputkan oleh user
        });
    });
}

// Eksekusi program menggunakan asynchronous
(async () => {
    try {
        // Meminta inputan
        const name = await input("Enter name: ");
        // Menampilkan inputan 
        console.log(`Hi! ${name}`);
    } catch (error) {
        // Menampilkan error
        console.log(error);
    }
})();

// const main = async () => {
//     try {
//         const name = await input("Enter name: ");
//         console.log(`Hi! ${name}`);
//     } catch (error) {
//         console.log(error);
//     }
// };

// main();
// ----- Read Line -----

// /** Readline = sama kaya argumen input
//   * fungsinya buat masukin inputan kedalam CLI */

// /** Buat variable untuk nampung modul readline tersebut pake require.createInterface
//  *  buat bikin interface yang ngebaca input dari user */
// const readLine = require('readline').createInterface({
//   input: process.stdin, // Buat nerima input 
//   output: process.stdout // Buat output
// })

// // Function buat minta inputan dari user
// function input(prompt) {
//   return new Promise((callback, error) => {
//     // Buat nampilin prompt di console
//     readLine.question(prompt, (uinput) => {
//       // Buat close interface readlin setelah diinput 
//       readLine.close()
//       // Panggil callback dengan nilai yang diinput useer
//       callback(uinput)
//     }, () => {
//       error()
//     })
//   })
// }

// // Eksekusi program oake asynchronous
// (async () => {
//   try {
//     // Minta inputan
//     const name = await input("Masukan nama: ")
//     console.log(`Halo ${name}!`);
//   } catch (error) {
//     console.error(error);
//   }
// })()
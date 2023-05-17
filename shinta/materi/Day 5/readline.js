// readline pada node.js
/* readline = sama dengan argumen input
fungsinya buat memasukkan input kedalam CLI */

/* buat variabel buat nampung modul readline tersebut pakai require
.createinterface() buat bikin interface yang ngebaca input dari user */
const readLine = require("readline").createInterface({
  input: process.stdin, //buat nerima input
  outout: process.stdout, //buat nerima output
});

// function buat minta inputan dari user
function input(prompt) {
  return new Promise(
    (callback, error) => {
      //buat nampilin prompt di console
      readLine.question(prompt, (inputnya) => {
        //buat interface readline stelah user nginput
        readLine.close();
        // panggil callback dengan nilai yang diinputin user
        callback(inputnya);
      });
      prompt, (uinput) => {}, callback(uinput);
    },
    () => {
      error();
    }
  );
}

// eksekusi program pake asynchronus
(async () => {
  try {
    //minta inputan
    const name = await input("masukkan nama :");
    console.log(`halo, ${name}!`);
  } catch (err) {
    console.log(err);
  }
})();

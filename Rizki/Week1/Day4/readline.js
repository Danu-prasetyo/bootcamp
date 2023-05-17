//readline pada node.js
//readline sama seperti argumen input fungsinya untuk menginput ke CLI

//buat variabel untuk menampung modul readline tersebut pake require
// .createInterface() untuk membuat interFace yang ngebaca input dari user

const readline = require("readline").createInterface({
    input: process.stdin, // untuk nerima input 
    output: process.stdout, //untuk nerima output
})

//function untuk minta inputan dari user
function input(prompt){
    return new Promise((callback, error) => {
        //untuk menampilkan promp di console
        readline.question(
            prompt,(inputnya) => {
                //buat close interface readline setelah user menginput
                

                //panggil callback dengan nilai yang di input user 
            callback(inputnya);
            
        });
        readline.question(
            prompt,(inputnya2) => {
                //buat close interface readline setelah user menginput
                readline.close();

                //panggil callback dengan nilai yang di input user 
            callback(inputnya2);
            
        });
    });
}

//eksekusi program pake Asynchronous
(async() => {
    try {
        //minta inputan
        const name = await input("Masukan Nama: ");
        const name2 = await input("Masukan Nama: ");
        console.log(`Halo, ${name}! ${name2}!`);
    } catch (err) {
        console.error(err);
    }
}) ();
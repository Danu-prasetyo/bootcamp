//readline pada node.js
//readline=sama kaya argumen input
//fungsiny buat masukin inputan kedalam CLI

//buat variabel buat nampung modeul readline tersebut pake require
//.createInterface() buat bikin interface yang ngebaca input dari user

const readLine = require('readline').createInterface({
    input:process.stdin, // input
    output: process.stdout, // output
});

//function buat minta inputan dari user
function input(prompt){
    return new Promise((callback, error)=> {  //buat nampilin prompt di console
        readLine.question(prompt,(inputnya)=> { //buat close interface readline setelah user input
            readLine.close(); //manggil callback dengan nilai yang di input user
            callback(inputnya);
        });
    });
}

//eksekusi program pake asynchrounous
(async () => {
    try {
        //minta inputan
        const name = await input("Masukan nama :");
        console.log(`Halo, ${name}!`);
    } catch (err){
        console.error(err);
    }
})();

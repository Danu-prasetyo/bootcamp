// //materi 2
// //argument input pada javascript menggunakan `procces.agrv`
// //process.env = array yang berisi argumen2 yang kita ketik di CLI/terminal
// if (process.argv.length === 2) {
//     //jika data arraynya sama dengan 2 maka akan cetak log
//     console.log("Expeted at least one argument bro!");
//     process.exit(404); //setelah itu program diakhiri dengan exit
// }

// const custom = process.argv[2] || "default";

// //log yang ini untuk mencetak argumen yang udah di input
// console.log(`Argumen text : ${process.argv[2]}`);


// //MATERI READLINE
const readLine = require(`readline`).createInterface({
    input:process.stdin,
    output:process.stdout
})

function input(prompt){
    return new Promise((callback,error)=> {
        readLine.question(prompt,(uinput)=> {
            callback (uinput)
        }, () => {
            error()
        })
    })
}

(async () => {
    try {
        const name = await input ("masukan nama : ");
        console.log("halo,", name);
    } catch (err) {
        console.error(err);
    }
}) ();
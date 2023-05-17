//Argument Input pada javascript

//process.argv = array yang berisi argumen yang kita ketik di CLI
if (process.argv.length === 2) {

    //jika data arraynya sama dengan 2 maka akan cetak log
    console.log("Expected at least one argument bro!");
    process.exit(); //setelah itu program diakhiri dengan exit (break)
}

const custom = process.argv[2] || "Default"; 

//log ini untuk mencetak argumen yang udah d input
console.log(`Argument text : ${process.argv[2]} `);
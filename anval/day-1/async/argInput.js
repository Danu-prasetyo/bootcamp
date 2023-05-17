// argumen input pada javascript menggunakan 'process.argv

if(process.argv.length == 2) {
    // jika data arranya sama dengan 2 maka akan cetak log
    console.log("Expected at least one argument bro!");
    process.exit(1);
    //setelah itu programnya diakhiri dengan exit, klo ga ada exit datanya undefined
}

// const custom = process.argv[2] || "Default";

// log ini mencetak argumen yng udah diinput
console.log(`Argument text : ${process.argv[2]} ${process.argv[3]}`);
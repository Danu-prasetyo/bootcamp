// argumen input pada javascript enggunakan 'process.agrv
// argumen input = cara memasukkan input menggunakan CLI/CMD di javascript

// process.argv = array yang berisi argumen2 yang akan kita ketik di CLI
if(process.argv.length === 2){
    // jika data arranya sama dengan 2 maka akan cetak log
    console.log("expected at least one argument bro!");
    process.exit(500)
    // setelah itu program diakhiri dengan exit, klo ga ada exit maka datanya undefint
    // angka dalam process exit tuh cma buat ngisi tau kode error
}

// const custom = process.argv[2] || "Default";

// log yang ini untuk mencetak argumen yang sudah diinput
console.log(`argument text: ${process.argv[2]} ${process.argv[3]} ${process.argv[4]}`);
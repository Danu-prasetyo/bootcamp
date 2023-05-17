// ARGUMENT INPUT
// Argument input pada javascript menggunakan 'process.argv'
// process.env = array yang berisi argumen-argumen yang kita ketik di CLI
if (process.argv.length === 2) {
    // Jika di CLI kita hanya mengetikan 2 argumen / array maka tampilkan kode di bawah ini
    console.log("Expected at least one argument bro!");
    process.exit(404); // Program akan dieksekusi sampai di sini, blok kode yang di bawah tidak akan ditampilkan
}

// const custom = process.argv[2] || "Default";

// Log yang ini akan mencetak argumen yang sudah kita input
console.log(`Argument text: ${process.argv[2]} ${process.argv[3]}`);
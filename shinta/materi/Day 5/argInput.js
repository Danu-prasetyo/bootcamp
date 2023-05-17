// argumen input data pada javascript

// process.env = array yang berisi argumen2 yanng kita ketik di CLI
if(process.argv.length === 2 ){
    // jika data arraynya sama dengan 2 maka akan dicetak log
    console.log("Expected at leats one argument bro!");
    process.exit(1);// setelah itu program akan diakhiri dengan exit
}

// tanpa exit aian terjadi undefined
//akan hanya berperan pemberitahuan error

const custom = process.argv[2] || "default"

//log yang ini untuk mencetak argument yang sudah di input
console.log(`Argument text : ${process.argv[2]}`) 
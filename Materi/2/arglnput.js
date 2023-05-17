//Argumen input pada js menggunkana 'process.agrv'
//argumen input = cara memasukkan input menggunakan CLI di js

//proces.argv = array yang berisi argumen 2 yang kita ketik di CLI

if(process.argv.length === 2) { //jika data arrayny sama dengan 2 maka akan cetak log
    console.log("Expected at least one argument bro!! ");
    process.exit(500); // setelah itu program diakhiri dengan exit
    //angka dalam process ecit tuh cuma buat ngasi tau kode error
}

const costum = process.argv[2] || "Default"; //setelah program d exit, kalo ga ada exit maka data akan undefined
//angka dalam procees exit tuh cuma buat ngasih tau kode

//log yg ini untuk mencetak argumen yg udah di input
console.log(`Argument text : ${process.argv[2]}`); 
//${process.argv{2}} = jumlah index array yang mempresentasikan jumlah kata yang di input
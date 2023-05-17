// const fs = require("fs") //memungkinkan untuk membaca, menulis, mengedit, menghapus, atau memanipulasi file || file system (fs) yang memungkinkan kita untuk mengakses file system.

// async function readFile() { 
//     try{
//         const data = fs.readFileSync('acak.txt', {encoding: 'utf-8', flag: 'r'}) // modul fs yang digunakan untuk membaca file
    
//         const convert = data.split(',').map(Number) // Data splitting atau pemisahan data, map adalah metode yang dibuat untuk melakukan sesuatu
//         const sort = convert.sort(function (a, b) { //mengurutkan data 
//             return a - b //mengurutkan data dari a ke z
//         })
//         const str = await sort.toString()  //sort data jadi string
//         const writeStream = fs.createWriteStream('sort.txt')  // modul fs yang digunakan untuk menulis data ke file.
//         writeStream.write(str) //menuliskannya menggunakan tipe string
//         writeStream.end() // lalu berhenti
//         console.log(str) //mencetak
//     }catch (err){
//         console.error("error:", err); //ketika error maka cekat ini
//     }
// }

// // ---output

// console.log('mulai') //cetak mulai

// readFile() //memanggil fungsi readfile

// console.log('akhir'); //cetak akhir


function factorial(number) {
    if(number == 0){ //jika nomor 0 maka return 1 muncul
        return 1 //mengembalikan nilai
    }else{
        return number * factorial(number - 1) //eksekusi faktorial
    }
}


let input = process.argv[2] //inputan pada cli setelah file
let no = parseInt(input) //mengubah string menjadi integer atau mengubah ke bilangan bulat

let result = factorial(no) // eksekusi inputan dengan fungsi faktorial
console.log(result); //cetak hasil

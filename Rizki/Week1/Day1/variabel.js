
let nama = "rizki";
console.log(nama)

const angka = "123";
console.log(angka)


//Boolean

let a = 19
let b = 20
let checkNilai = a>b
console.log(checkNilai)

//array - kurung siku

let array = ["rizki","maulana","rajabi"]
console.log(array[0],array[2])

//object - kurung kurawal 

/* untuk catatan Shortcut (CTRL + /)*/

let tim = {
    nama: "OG",
    coach: "Sebastian",
    umur: 22
}

let tim2 = {
    nama: "RRQ",
    coach: "Koala",
    umur: 23,
    kontak: {
        no: 081380284207,
        email: "rrqkoala@email.com"
    } 
    
}

console.log(tim.nama,tim.coach);
console.log(tim2.nama,tim2.kontak.email);

// parseFLoat() (String ke pecahan)
// toString()   ()
// parseInt () (Interger to String)

let number = "1234567,8"
console.log(parseInt(number))
console.log(parseFloat(number))
console.log(number.toString())

//Aritmatika

let x = 115
let y = 5
let z = 10
let penjumlahan = x + y
let jumlahkalibagi = ((x+z) * y) / z
console.log(jumlahkalibagi)
console.log(jumlahkalibagi.toString())
console.log(penjumlahan)


// Equal / not equal
//  === (cek Tipe data dan datanya sama)

let equal = 10
console.log(equal==100)


let notequal = 10
console.log(notequal != 100)

// AND OR 



function kata(huruf){
    huruf = huruf.match([/[a-zA-Z0-9]+/gi]);
    let terpanjang = "";
         
    for(let i = 0; i < huruf.length; i++){

        if(huruf[i].length > terpanjang.length){
        terpanjang = huruf[i]
        }
    }
    return terpanjang;
    }
     
    console.log(kata("Rizki Maulana Rajabi"))

//Function
function test(){
    console.log("test")
}
test()

//Arrow Function
const sapa = (nama,nama2) => {
    console.log(`hai ${nama} ${nama2}`)
}
sapa ("Rizki","Maulana")

//anonFunction
const anonFunction = ()=>{
    console.log("anon")
}
anonFunction()

//Function

function penjumlahan(angka){
    return angka + 12
}
let hasil1 = penjumlahan(3)
let hasil2 = penjumlahan(6)
console.log(`hasil penjumlahan = ${hasil1}`)
console.log(`hasil penjumlahan = ${hasil2}`)


function cetakAngka(angka = 1){
    return angka
}
let hasil = cetakAngka (3)
console.log(`hasil cetakAngka ${hasil}`)

// function namaFuntion(parameter1,parameter2,...) {
//     [isi perintah / tugas dalam blok function]
//     return [expression]

// Materi If Else = untuk mengecek suatu kondisi 
let a= 100
if (a>70){
    console.log("a lebih besar dari 70");
} else{
    console.log("a lebih kecil dari 70");
}

if (a==100){
    console.log("nilainya 100");
}

let classStatus = "close"
let minuteRemain = 7
if(classStatus == "open"){
    console.log("kelas bootcamp sedang berjalan");
} else if(minuteRemain <=5){
    console.log("kelas bootcamp tersisa 5 menit lagi");
} else {
    console.log("kelas bootcamp telah berakhir");
}

let grade = 63
if (grade >=70){
    if (grade >=90){
        console.log("Nilai A");
    } else {
        console.log("nilai B");
    }
} else {
    console.log("nilai C");
}

//Materi SwitchCase = mengecek kondisi yang banyak

let tombol = 1;
switch (tombol) {
    case 1:{
        console.log(" Turn On ");
        break;
    }
    case 2:{
        console.log(" Turn Off");
        break;
    }
    case 3:{
        console.log(" Menu Setting");
        break;
    }
    default:{
        console.log(" Do Nothing");
    }
}

// Ternary Option

// let b = 100
// let hasil = b > 50 ? "lebih besar dari 50" : "lebih kecil dari 50"
// console.log(hasil);

//let c = 70
//let hasil1 = c === 100 ? "nilai 100" : c> 50 ? "lebih besar dari 50" : "lebih kecil dari 50"
//console.log(`angka ${angka} adalah bilangan ${jenis}`); 
//backtik digunakan untuk menggabungkan string dan variabel menggunakan${}

//console.log("angka "+angka+" adalah bilangan "+jenis")
//opsi lain menggabungkan string dengan variabel menggunakan +

//Materi Looping:

//contoh while loop mencari bilangan prima
// let n = 20
// let i = 2
// while (i<=n){
//   let bilanganPrima = true;
//   let j=2;
//   while (j<i){
    // if (i%j === 0){
    //   bilanganPrima = false;
    //   break;
    // }
    // j++
//   }
//   if (bilanganPrima){
//   console.log(i);
//   }
//   i++;
// }

//Foor Loop
// inisialisasi variabel i dengan nilai 0; selama nilai i kurang dari 5 dia bakal trus loop

//contoh:
//1. contoh for loop mencari bilangan prima
//for(let i = 0; i<5; i++){
    // console.log('for loop ke ${i}')
//   }

//2. contoh for loop mencari bilangan prima
// for(let i = 0; i<5; i++){
    // console.log('for loop ke ${i}')
// }
  
//mengkalikan elemen didalam array
const arr = [2,3,4,5] // buat array
let result= 2 // buat variabel result dengan nilai 1
//buat variabel i dengan nilai 0, selama nilai i kurang dari panjang array maka dia bakal loop
for(let i = 0; i < arr.length; i++){
    result *= arr[i] //kalikan nilai result dengan elemen array arr pada indeks i
}
console.log(result) //output 

function test() {
    console.log("test");
}
test()

const sapa= (nama, nama2) =>{
    console.log(`hai ${nama} ${nama2}`);
}
sapa("maniez","qoeh")

const anonFunction = ()=>{
    console.log("anon");
}
anonFunction()

// function penjumlahan(angka){
    // return angka + 12
// }
// let hasil = penjumlahan(3)
// let hasil2 = penjumlahan(8)
// console.log(`hasil penjumlahan = ${hasil}`);
// console.log(`hasil penjumlahan = ${hasil2}`);

//contoh baru
function cetakAngka(angka = 1){
    return angka
}
let hasil=cetakAngka(3)
console.log(`hasil cetakAngka = ${hasil}`)
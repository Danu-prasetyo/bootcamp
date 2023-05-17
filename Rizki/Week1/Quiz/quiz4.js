// Buatlah sebuah program yang menghasilkan bilangan ganjil antara 1 hingga 50 menggunakan for loop
// buatlah sebuah program yang menghasilkan nilai rata-rata dari sebuah array bilangan bulat menggunakan function
// Buatlah sebuah program yang menghitung jumlah huruf kapital pada sebuah string

//Soal 1
let n = 50; 
for(let i = 0; i < n; i++){ 
    let bilanganGanjil = true; 
    let angka = i
        if (angka % 2 === 0 ) { 
            bilanganGanjil = false;
        }
        if (bilanganGanjil){
            console.log(i)
        }

    }

//Soal 2
function hitungRataRata(arr) {
    let HasilPenjumlahan = 0
    for (let i=0; i < arr.length; i++){
        HasilPenjumlahan += arr[i]
        hasil = HasilPenjumlahan/arr.length
    }
    return hasil
}

const arr = [2,4,6,8,10];
const rataRataArr = hitungRataRata(arr);
console.log(rataRataArr)


// //Soal 3
function hitungKapital(String){
    let hitung = 0 
    let huruf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (i=0;i<String.length;i++){
        for(j=0;j<huruf.length;j++) {
            if(String[i] == huruf [j]){
                hitung++
            }
        }
        
    }
    return hitung

}

const string1 = "RiZKi"
const string2 = "mAuLaNA"

console.log(hitungKapital(string1))
console.log(hitungKapital(string2))


//Cara Lain
function hitungKapital2(String2){
    let hitung = 0 
    for (let i = 0; i < String2.length; i++){
            if(String2[i] === String2 [i].toUpperCase() && String2 [i] !==" "){
                hitung++
            }
        }
        return hitung
    }
    



const string3 = "RiZKi"
const string4 = "mAuLaNA"

console.log(hitungKapital2(string3))
console.log(hitungKapital2(string4))


//Cara Lain
function hitungKapital4 (string){
    let hitung2 = 0;
    let hitung3 = 0

    for (let i = 0; i<string.length; i++){
        if(string[i]>="A" && string[i] <= "Z"){
            hitung2++
        }
    }

    for (let i = 0; i<string.length; i++){
        if(string[i]>="a" && string[i] <= "z"){
            hitung3++
        }
    }
    return ([hitung2,hitung3]);
}
const string5 = "Hi"
console.log(hitungKapital4(string5))
console.log(string5.length)
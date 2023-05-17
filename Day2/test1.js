// Soal 1
// let tombol = "monday";
// switch (tombol) {
//     case "monday" :{
//         console.log(" Hari ke 1 ");
//         break;
//     }
//     case 2:{
//         console.log(" Tuesday");
//         break;
//     }
//     case 3:{
//         console.log(" Wednesday");
//         break;
//     }
//     case 4:{
//         console.log(" Thursday ");
//         break;
//     }
//     case 5:{
//         console.log(" Friday ");
//         break;
//     }
//     case 6:{
//         console.log(" Saturday ");
//         break;
//     }
//     case 7:{
//         console.log(" Monday ");
//         break;
//     }
//     default:{
//         console.log(" Not Valid");
//     }
// }

//Soal 2
let a = 0
let hasil = a === 0 ? "Nilainya 0" : a<0 ? "Nilai Negatif" : "nilai positif"
console.log("Angka",a,hasil);

// let angka = 0
// let jenis = angka > 0 ? "positif" : angka < 0 ? "negatif" : "nol";
// console.log(`angka ${angka} adalah bilangan ${jenis}`);

//soal 3
// cara 1
// let mat=100
// let fis=90
// let kim=95

// if (mat>0 && mat<=100){
    // if (fis>0 && fis<=100) {
    //     if (kim>0 && kim<=100) {
            
            // sum = (mat+fis+kim)/3
            // console.log(sum);

            // if (sum>80 && sum<=100){
                // console.log("Selamat anda lulus dengan baik");
            // }else if (sum>60 && sum<=80) {
                    // console.log("Anda lulus");
            // }else if (sum <=60) 
                    // console.log("Anda tidak lulus");
                // }else {
                    // console.log("Nilai tidak valid");
            // }
        // }else {
            // console.log("Nilai tidak valid");
        // }
    // }else {
        // console.log("Nilai tidkak valid");
    // }

//cara 2
// let mat=90
// let fis=90
// let kim=70
// sum= (mat+fis+kim)/3
// console.log(sum);
// if ((mat>0)&&(mat<=100)&&(fis>0)&&(fis<=100)&&(kim>0)&&(kim<=100)){
//     if ((sum>80 && sum<=100)) {
//         console.log("Selamat anda lulus dengan baik")
//     }else if (sum>60 && sum<=80) {
//         console.log("Anda Lulus")
//     }else if (sum <=60){
//         console.log("Anda tidak lulus")
//     }
// }else
//         console.log("Nilai tidkak valid");



// Soal 4
// let n = 50
// for(let i=1; i<n; i++){
//     let bilanganGanjil=true
//     let bilangan = i 
//     if (bilangan % 2 ===0){
//         bilanganGanjil=false
//     }
//     if (bilanganGanjil){
//         console.log(i);
//     }
// }
    

//soal 5
// function hitungRataRata(arr){
//     let result = 0
//     for (let i = 0; i < arr.length; i++){
//         result += arr[i]
//         sum = result/arr.length
//     }
//     return sum
// }

// const arr = [2, 4, 6, 8, 10]
// const hitungRataArr = hitungRataRata(arr)
// console.log(hitungRataArr);

// soal 6
//cara1
// function hitungKapital(string){
//     let hitung = 0
//     let huruf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     for (let i = 0; i < string.length; i++) {
//         for(j=0;j<huruf.length;j++){
//             if(string[i] == huruf [j]){
//                 hitung++
//             }
//         }
//     }
//     return hitung
// }
// const string1 = "Hi ManiEzzZ"
// const string2 = "Owi Kun"

// console.log(hitungKapital(string1));
// console.log(hitungKapital(string2));

// cara2
// function hitungKapital(string){
//     let hitung = 0
//     for(let i = 0; i < string.length; i++){
//         if(string[i] >= "a" && string[i] <= "z"){
//             hitung++
//         }
//     }
//     return hitung;
// }

// const string1 = "Hi ManiEzzZ"
// const string2 = "Owi KunN"

// console.log(hitungKapital(string1));
// console.log(hitungKapital(string2));


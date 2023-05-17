// function 
function test() {
    console.log("test");
}

// function arrow
const sapa  = (nama,nama1)=> {
    console.log(`hai ${nama} ${nama1}`);
}
sapa ("maniez","qoeh")

// functio penjumlahan
function penjumlahan(angka){
    return angka + 12
}
let hasil = penjumlahan (3)
let hasil1 = penjumlahan (6)
console.log(`hasil penjumlahan = ${hasil}`);
console.log(`hasil penjumlahan = ${hasil1}`);


//////////////////////
function cetakAngka(angka = 1){
return angka 
}
let angka1=cetakAngka(3)
console.log(`angkanya ${angka1}`);


//   let total = 0;
//   for(let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   const rataRata = total / arr.length;
//   return rataRata;
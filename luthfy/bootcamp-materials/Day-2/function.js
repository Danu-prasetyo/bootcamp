// FUNCTION
console.log("==========================");
console.log("FUNCTION");
console.log("==========================");

function sapa(nama1, nama2) {
    console.log(`Hai ${nama1} ${nama2}`);
};

sapa("Luthfy", "Rahmani")

function penjumlahan(angka) {
    return angka + 12;
};

let hasil_1 = penjumlahan(3);
let hasil_2 = penjumlahan(8);

console.log(`Hasil penjumlahan = ${hasil_1}`);
console.log(`Hasil penjumlahan = ${hasil_2}`);

function cetakAngka(angka = 1) {
    return angka
}

let angka10 = cetakAngka(10)
console.log("Angka bukan 1, jadinya angka: ", angka10);

console.log("==========================");
console.log("==========================");
console.log(" ");
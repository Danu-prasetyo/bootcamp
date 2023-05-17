//soal7

let jumlah = 2
let smartphone = "oddo"
let harga = 1000000
let total = jumlah * harga

if (total >= 1000000) {
    diskon = 0.1;
    hargaSetelahDiskon = total - (total * diskon)
    console.log(`Anda membeli ${jumlah} ${smartphone} dengan harga ${harga} per smarthphone. Total harga sebelum diskon adalah ${total}`);
    console.log(`Selamat anda mendapatkan diskon sebesar ${diskon *100}%. Harga setelah diskon adalah ${hargaSetelahDiskon}.`);
} else if (total >500000 && total <1000000 ) {
    diskon = 0.05;
    hargaSetelahDiskon = total - (total * diskon)
    console.log(`Anda membeli ${jumlah} ${smartphone} dengan harga ${harga} per smarthphone. Total harga sebelum diskon adalah ${total}`);
    console.log(`Selamat anda mendapatkan diskon sebesar ${diskon *100}%. Harga setelah diskon adalah ${hargaSetelahDiskon}.`);
} else if (total >0 && total <=500000) {
    diskon = 0
    hargaSetelahDiskon = total - (total * diskon)
    console.log(`Maaf, anda tidak mendapatkan diskon. Harga total adalah ${hargaSetelahDiskon}.`);
} else {
    console.log("Harga tidak valid");
}
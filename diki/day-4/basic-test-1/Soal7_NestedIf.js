let jumlah = 1
let smartphone = "Sumsang"
let harga = 550000
let total = jumlah * harga

if (total > 0) {
  if (total > 1000000) {
    diskon = 0.1
    hargaSetelahDiskon = total - (total * diskon)
    console.log(`Anda membeli ${jumlah} ${smartphone} dengan harga ${harga} per smartphone. Total harga sebelum diskon adalah ${total}`);
    console.log(`Selamat! Anda mendapatkan diskon sebesar ${diskon * 100}%. Harga setelah diskon adalah ${hargaSetelahDiskon}`);
  } else if (total > 500000) {
    diskon = 0.05
    hargaSetelahDiskon = total - (total * diskon)
    console.log(`Anda membeli ${jumlah} ${smartphone} dengan harga ${harga} per smartphone. Total harga sebelum diskon adalah ${total}`);
    console.log(`Selamat! Anda mendapatkan diskon sebesar ${diskon * 100}%. Harga setelah diskon adalah ${hargaSetelahDiskon}`);
  } else {
    diskon = 0
    hargaSetelahDiskon = total - (total * diskon)
    console.log(`Maaf, Anda tidak mendapatkan diskon, Harga total adalah ${hargaSetelahDiskon}`);
  }
} else {
  console.log("Harga Tidak Valid");
}
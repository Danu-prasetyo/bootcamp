let jumlah = 0;
let smartphone = "Xiaomi Go";
let harga = 450000;
let total = harga * jumlah;
let hargaDiskon = null;
let setelahDiskon = null;

if (total > 0) {
    if (total >= 1000000) {
        hargaDiskon = total / 10 / 100;
        setelahDiskon = total - hargaDiskon;
        console.log(`Anda membeli ${jumlah} ${smartphone} dengan harga ${harga} per smartphone`);
        console.log(`Selamat! Anda mendapatkan diskon sebesar 10%. Harga setelah diskon adalah ${setelahDiskon}`);
    } else if (total >= 500000) {
        hargaDiskon = total / 5 / 100;
        setelahDiskon = total - hargaDiskon;
        console.log(`Anda membeli ${jumlah} ${smartphone} dengan harga ${harga} per smartphone`);
        console.log(`Selamat! Anda mendapatkan diskon sebesar 5%. Harga setelah diskon adalah ${setelahDiskon}`);
    } else if (total < 500000) {
        console.log(`Maaf anda tidak mendapatkan diskon, harga total adalah ${total}`);
    }
} else {
    console.log("Maaf total tidak valid");
}
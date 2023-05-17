function hitungTotalHarga(harga) {
  if (harga === 0) {
    return "Harga tidak valid";
  } else {
    let diskon = 0;
    let totalHarga = harga;

    if (totalHarga > 1000000) {
      diskon = 0.1;
    } else if (totalHarga > 500000) {
      diskon = 0.05;
    }

    let hargaDiskon = totalHarga * diskon;
    let hargaSetelahDiskon = totalHarga - hargaDiskon;

    return "Total harga: " + hargaSetelahDiskon;
  }
}


/* Fungsi hitungTotalHarga menerima parameter harga yang merupakan harga pembelian smartphone.
Pertama, kita melakukan pengecekan jika harga sama dengan 0, maka fungsi akan mengembalikan string "Harga tidak valid".
Jika harga bukan nol, kita inisialisasikan variabel diskon dengan nilai awal 0 dan totalHarga dengan nilai harga.
Selanjutnya, kita menggunakan nested if untuk menentukan apakah totalHarga melebihi 1 juta atau 500 ribu untuk mengatur nilai diskon.
Jika totalHarga melebihi 1 juta, kita berikan diskon sebesar 10% dengan mengatur nilai diskon menjadi 0.1.
Jika totalHarga tidak melebihi 1 juta tetapi melebihi 500 ribu, kita berikan diskon sebesar 5% dengan mengatur nilai diskon menjadi 0.05.
Setelah itu, kita hitung hargaDiskon dengan mengalikan totalHarga dengan diskon.
Selanjutnya, kita hitung hargaSetelahDiskon dengan mengurangi hargaDiskon dari totalHarga.
Terakhir, kita mengembalikan string yang berisi total harga setelah diskon.
Contoh pemanggilan fungsi digunakan untuk menguji beberapa kasus dengan harga yang berbeda-beda dan menampilkan hasilnya menggunakan console.log().
 */
// Contoh pemanggilan fungsi
console.log(hitungTotalHarga(800000)); // Output: Total harga: 760000
console.log(hitungTotalHarga(1500000)); // Output: Total harga: 1350000
console.log(hitungTotalHarga(300000)); // Output: Total harga: 300000
console.log(hitungTotalHarga(0)); // Output: Harga tidak valid

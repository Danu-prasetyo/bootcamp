function filterLaptop(laptops, minHarga, maxHarga) {
  // Menggunakan metode filter untuk mencari laptop yang memenuhi kriteria
  const filteredLaptops = laptops.filter((laptop) => laptop.harga >= minHarga && laptop.harga <= maxHarga);

  return filteredLaptops;
}

// Contoh penggunaan
const laptops = [
  { nama: "Laptop Asus", harga: 5000000 },
  { nama: "Laptop macbook", harga: 8000000 },
  { nama: "Laptop acer", harga: 3500000 },
  { nama: "Laptop sky", harga: 10000000 },
];

const minHarga = 4000000;
const maxHarga = 9000000;

const filteredLaptops = filterLaptop(laptops, minHarga, maxHarga);
console.log(filteredLaptops);

/* Fungsi filterLaptop menerima tiga parameter: laptops (array laptop), minHarga (minimal harga), dan maxHarga (maksimal harga).
Pada fungsi ini, kita menggunakan metode filter pada array laptops untuk mencari laptop yang memiliki harga di antara minHarga dan maxHarga.
Dalam fungsi filter, kita memeriksa setiap objek laptop dengan menggunakan kondisi laptop.harga >= minHarga && laptop.harga <= maxHarga. Jika kondisi tersebut terpenuhi, laptop akan tetap ada dalam array hasil filter.
Hasil filter kemudian diassign ke variabel filteredLaptops.
Terakhir, fungsi mengembalikan filteredLaptops.
Contoh penggunaan dengan membuat array laptops yang berisi objek laptop dan melakukan pemanggilan fungsi filterLaptop dengan minHarga dan maxHarga tertentu. Hasilnya kemudian dicetak menggunakan console.log(). */
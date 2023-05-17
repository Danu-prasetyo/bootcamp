/* exercise basic 2 
balapan mobil
buatlah opsi untuk input panjang track
mulai balapan
gambar balapan mobil(ketuk ennter lalu acak angka berdasarkan min dan max kecepatan mobil)
tampilkan pemenang balapan yang sampai dengann max panjang track duluan
menambahkan mobil dengan data:
-icon mobil
-kecepatan mobil
-min kecepatan
-max kecepatan
dikerjakan menggunakan menggunakan kaidah oop


outputnya:
&==================================================
=*================================================

-panjang track :10
-jumlah mobil:2
-input icon mobil:*
-min kecepatan: 1
max kecepatan: 4
input icon mobil:&
min kecepatan : 1
max kecepatan : 4

*/

// Inisialisasi variabel
let kecepatanMobil1 = 0;
let kecepatanMobil2 = 0;
let jarakTempuhMobil1 = 0;
let jarakTempuhMobil2 = 0;

// Fungsi untuk menghasilkan kecepatan acak antara 1-10
function generateKecepatan() {
  return Math.floor(Math.random() * 10) + 1;
}

// Melakukan balapan selama jarak tempuh kurang dari 100
while (jarakTempuhMobil1 < 100 && jarakTempuhMobil2 < 100) {
  kecepatanMobil1 = generateKecepatan();
  kecepatanMobil2 = generateKecepatan();

  jarakTempuhMobil1 += kecepatanMobil1;
  jarakTempuhMobil2 += kecepatanMobil2;

  console.log("Mobil 1: Kecepatan " + kecepatanMobil1 + ", Jarak tempuh " + jarakTempuhMobil1);
  console.log("Mobil 2: Kecepatan " + kecepatanMobil2 + ", Jarak tempuh " + jarakTempuhMobil2);
}

// Menentukan mobil pemenang
if (jarakTempuhMobil1 >= 100 && jarakTempuhMobil2 >= 100) {
  console.log("Balapan berakhir, hasilnya seri!");
} else if (jarakTempuhMobil1 >= 100) {
  console.log("Balapan berakhir, Mobil 1 menang!");
} else {
  console.log("Balapan berakhir, Mobil 2 menang!");
}

/* Tentu! Berikut adalah contoh program balap mobil menggunakan while loop di JavaScript:

/* 

1. Pertama, kita memulai dengan menginisialisasi beberapa variabel yang akan digunakan dalam program. Variabel-variabel ini akan melacak kecepatan dan jarak tempuh masing-masing mobil.

2. Kemudian, kita mendefinisikan sebuah fungsi bernama `generateKecepatan()`. Fungsi ini akan menghasilkan sebuah angka acak antara 1 hingga 10 yang akan mewakili kecepatan mobil.

3. Setelah itu, kita memasuki while loop. Loop ini akan berjalan selama jarak tempuh kedua mobil masih di bawah 100. Ini berarti balapan akan berlangsung sampai salah satu mobil mencapai atau melebihi jarak 100.

4. Di setiap iterasi loop, kita menghasilkan kecepatan baru untuk masing-masing mobil menggunakan fungsi `generateKecepatan()`. Kecepatan ini akan diatur untuk masing-masing mobil.

5. Setelah mendapatkan kecepatan baru, kita menambahkannya ke jarak tempuh masing-masing mobil. Ini akan memperbarui jarak yang telah ditempuh oleh mobil sejauh ini.

6. Di setiap iterasi loop, kita mencetak kecepatan dan jarak tempuh masing-masing mobil ke konsol. Ini memungkinkan kita melacak perkembangan balapan.

7. Setelah loop selesai, kita memeriksa kondisi akhir untuk menentukan pemenang balapan. Jika kedua mobil mencapai atau melebihi jarak 100, maka balapan dianggap seri. Jika hanya salah satu mobil yang mencapai atau melebihi jarak 100, maka mobil tersebut dianggap sebagai pemenang. Kita mencetak hasil balapan ke konsol sesuai dengan kondisi tersebut.

8. Program selesai dan hasil balapan ditampilkan di konsol.

Itulah penjelasan langkah demi langkah tentang program balap mobil menggunakan while loop di JavaScript. Program ini mensimulasikan balapan antara dua mobil dengan kecepatan acak dan mencetak hasilnya ketika salah satu mobil mencapai atau melebihi jarak 100. */

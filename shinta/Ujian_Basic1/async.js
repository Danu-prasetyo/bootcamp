/* // String angka yang akan diurutkan
let angkaString = "1,5,4,2,3,7,6,8,10,9";

// Memisahkan string menjadi array berdasarkan spasi
let angkaArray = angkaString.split(" ");

// Mengonversi elemen array menjadi angka
for (let i = 0; i < angkaArray.length; i++) {
  angkaArray[i] = parseInt(angkaArray[i]);
}

// Mengurutkan array angka
angkaArray.sort(function (a, b) {
  return a - b;
});

// Menampilkan array angka yang telah diurutkan
console.log(angkaArray);
 */



















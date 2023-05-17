function cariHurufTerpanjang(kalimat) {
  // Menghapus karakter selain huruf dan spasi menggunakan regular expression
  kalimat = kalimat.replace(/[^a-zA-Z ]/g, "");

  // Memisahkan kalimat menjadi array kata-kata
  let kataArr = kalimat.split(" ");

  // Variabel untuk menyimpan kata terpanjang
  let kataTerpanjang = "";

  // Loop melalui setiap kata dalam array
  for (let i = 0; i < kataArr.length; i++) {
    let kata = kataArr[i];

    // Membandingkan panjang kata dengan panjang kata terpanjang saat ini
    if (kata.length > kataTerpanjang.length) {
      kataTerpanjang = kata;
    }
  }

  /* Fungsi cariHurufTerpanjang menerima parameter kalimat yang merupakan input teks.
Pertama, menggunakan regular expression (/[^a-zA-Z ]/g) untuk menghapus karakter selain huruf dan spasi dalam kalimat menggunakan metode replace().
Selanjutnya, memisahkan kalimat menjadi array kata-kata menggunakan metode split() dengan spasi sebagai pemisah.
Inisialisasi variabel kataTerpanjang dengan string kosong.
Melakukan loop melalui setiap kata dalam array kataArr.
Membandingkan panjang kata saat ini dengan panjang kata terpanjang yang telah ditemukan sejauh ini.
Jika panjang kata saat ini lebih panjang, maka kata tersebut akan dijadikan kata terpanjang yang baru.
Setelah loop selesai, mengembalikan kata terpanjang yang telah ditemukan.
Contoh pemanggilan fungsi menggunakan console.log() untuk menguji beberapa kasus dan menampilkan hasilnya. */

  return kataTerpanjang;
}

// Contoh pemanggilan fungsi
console.log(cariHurufTerpanjang("fun&!! time")); // Output: time
console.log(cariHurufTerpanjang("I love dogs")); // Output: love

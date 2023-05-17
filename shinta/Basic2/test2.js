function displayAkhir() {
  console.log("Akhir");
}

function proses() {
  console.log("Proses...");
}

function displayMulai() {
  console.log("Mulai");
  proses();
  displayAkhir();
}

displayMulai();


/*  
Dalam kode ini, kita menambahkan fungsi `proses` di antara pesan "Mulai" dan "Akhir". Fungsi `proses` mencetak pesan "Proses...".

Fungsi `displayMulai` tetap mencetak pesan "Mulai" seperti sebelumnya, kemudian memanggil fungsi `proses` yang mencetak pesan "Proses...". Setelah itu, kita tetap memanggil fungsi `displayAkhir` untuk mencetak pesan "Akhir".

Dengan demikian, urutan pesan yang akan dicetak adalah "Mulai", "Proses...", dan "Akhir".*/
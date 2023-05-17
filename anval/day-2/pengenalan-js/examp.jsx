// let buah = ["apel", "mangga"]

// console.log(buah)

// // let nama
// let orang = {nama:"anval", umur:19}
// console.log(orang.nama)

function hitungRataRata(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let average = sum / arr.length;
    return average;
  }
  
  // Contoh penggunaan
  let angka = [5, 10, 15, 20];
  let rataRata = hitungRataRata(angka);
  console.log("Rata-rata: " + rataRata);
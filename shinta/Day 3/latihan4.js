class Persegi {
  constructor(lebar, tinggi) {
    this.lebar = lebar;
    this.tinggi = tinggi;
  }
  hitungLuas() {
    return this.lebar * this.tinggi;
  }
}

const persegi = new Persegi(5, 5);
console.log(persegi.hitungLuas()); //

const nama = ["danu", "dini", "deni", "rizky", "rifky", "riki", "rizieq", "ridwan"];

function filterNama(namaOrang, cari) {
  const hasilFilter = namaOrang.filter((nama) => nama.includes(cari));
  return hasilFilter;
}

const namaYangDicari = "ri";
const hasilFilter = filterNama(nama, namaYangDicari);

console.log(hasilFilter);

/* buatlah sebuah fungsi dengan nama "filterlaptpop" yang menerima tiga parameter,yaitu array laptop,minimal harga,dan maksimal harga (laptop,minHarga,maxHarga).
fungsi ini akan mencari laptop yang memiliki harga diantara minimal dan maksimal harga,lalu mengambalikan nilai array baru yang hanya berisi laptop-laptop tersebut. */

const laptop = [
  { id: 1, nama: "Lenoboy", harga: 15000000 },
  { id: 2, nama: "Asu REOG", harga: 50000000 },
  { id: 3, nama: "De El", harga: 10000000 },
  { id: 4, nama: "MSG", harga: 30000000 },
];

const laptopFiltered = filterlaptpop(laptop, 10000000, 17000000);
console.log(laptopFiltered);

function filterlaptpop(laptop, minHarga, maxHarga) {
  // Filter laptop berdasarkan harga
  const laptopFiltered = laptop.filter((laptop) => laptop.harga >= minHarga && laptop.harga <= maxHarga);

  // Mengembalikan laptop yang telah difilter
  return laptopFiltered;
}


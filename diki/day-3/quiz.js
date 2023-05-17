// --- No. 1

// class Persegi {
//   constructor(x, y) {
//     this.panjang = x
//     this.lebar = y
//   }

//   luas() {
//     let luas = this.panjang * this.lebar
//     return luas
//   }
// }

// hitung = new Persegi(5, 5)
// console.log(hitung.luas());

// --- No. 2

// function filterNama(arr, cari) {
//   let nama = arr
//   let filter = nama.filter(cari)
//   return filter
// }

// const nama = ["danu", "dini", "deni", "rizky", "rifky", "riki", "riziq", "ridwan",]
// console.log(filterNama(nama, "ri"));

// --- No. 3

// function filterNama(nama, cari) {
//   const list = nama
//   let hasil = list.filter(list => list.includes(cari))
//   if (hasil.length != 0) {
//     return hasil
//   } else {
//     return "Not Found";
//   }
// }

// const nama = ["danu", "dini", "deni", "rizky", "rifky", "riki", "riziq", "ridwan",]
// const key = "luthfy"

// console.log(filterNama(nama, key));

// --- No. 4

// function filterLaptop(laptop, minHarga, maxHarga) {
//   const list = laptop
//   const filter = list.filter(list => list.harga >= minHarga && list.harga <= maxHarga)
//   const result = filter.map(item => ({ nama: item.nama, harga: item.harga }))
//   if (result.length != 0) {
//     return result
//   } else {
//     return "Not Found";
//   }
// }

// const laptop = [
//   { id: 1, nama: "Lenoboy", harga: 15000000 },
//   { id: 2, nama: "Asu REOG", harga: 50000000 },
//   { id: 3, nama: "De El", harga: 10000000 },
//   { id: 4, nama: "MSG", harga: 30000000 },
// ]
// const min = 100
// const max = 1000

// console.log(`Minimal Harga: ${min}`);
// console.log(`Maximal Harga: ${max}`);
// console.log(filterLaptop(laptop, min, max))

// --- Answer


// function filterNama(nama, cari) {
//   const names = nama
//   const result = []
//   names.forEach(name => {
//     if (name.includes(cari)) {
//       result.push(name)
//     }
//   });
//   return result.toString()
// }

// const nama = ["danu", "dini", "deni", "rizky", "rifky", "riki", "riziq", "ridwan",]
// const key = "ziq"

// console.log(`Data nama: ${nama.toString()}`);
// console.log(`Keyword: ${key}`);
// console.log(`Output: ${filterNama(nama, key)}`);

// --- Answer

function filterLaptop(laptop, minHarga = 0, maxHarga = 0) {
  const laptops = laptop
  const result = []
  laptops.forEach(laptop => {
    if (laptop.harga >= minHarga && laptop.harga <= maxHarga) {
      result.push(`Nama: ${laptop.nama} Harga: ${laptop.harga}`)
    }
  });

  if (result == 0) {
    return "Data Not Found"
  }

  return result
}

const laptop = [
  { id: 1, nama: "Lenoboy", harga: 100000 },
  { id: 2, nama: "Asu REOG", harga: 200000 },
  { id: 3, nama: "De El", harga: 300000 },
  { id: 4, nama: "MSG", harga: 400000 },
  { id: 5, nama: "AEER", harga: 500000}
]
const min = 300000
const max = 500000

console.log(`Minimal Harga: ${min}`);
console.log(`Maximal Harga: ${max}`);
console.log(filterLaptop(laptop, min, max))
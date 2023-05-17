/* const laptop = [
  { id: 1, nama: "Lenovo", harga: 17000000 },
  { id: 2, nama: "Asus", harga: 50000000 },
  { id: 3, nama: "Hp", harga: 10000000 },
  { id: 4, nama: "Macbook", harga: 30000000 },
];

//80000000 = array baru

const laptopFiltered = filterlaptpop(laptop, 40000000, 170000000);
console.log(laptopFiltered);

function filterlaptpop(laptop, minHarga, maxHarga) {
  const laptopFiltered = laptop.filter((laptop) => laptop.harga >= minHarga && laptop.harga <= maxHarga);

  return laptopFiltered;
}
 */

const laptop = [
  { id: 1, nama: "Lenovo", harga: 15000000 },
  { id: 2, nama: "Asus", harga: 50000000 },
  { id: 3, nama: "Hp", harga: 10000000 },
  { id: 4, nama: "Macbook", harga: 30000000 },
];

const laptopFiltered = filterlaptpop(laptop, 10000000, 17000000);
console.log(laptopFiltered);

function filterlaptpop(laptop, minHarga, maxHarga) {
  // Filter laptop berdasarkan harga
  const laptopFiltered = laptop.filter((laptop) => laptop.harga >= minHarga && laptop.harga <= maxHarga);

  // Mengembalikan laptop yang telah difilter
  return laptopFiltered;
}

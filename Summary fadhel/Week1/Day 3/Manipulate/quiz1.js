    class persegi {
      constructor(sisi1, sisi2) {
        this.sisi1 = sisi1;
        this.sisi2 = sisi2;
      }
    
      hitungLuas() {
        return this.sisi1 * this.sisi2;
      }
    }
    
    const kotak = new persegi(5, 5);
    
    
    const luas = kotak.hitungLuas();
    console.log(luas);

    //2 
    function filternama(namaOrang, cari) {
        const hasilFilter = namaOrang.filter(function(nama) {
        return nama.includes(cari);
        });
        return hasilFilter;
      }
       const namaOrang = ["joan", "mahmud", "kumi", "joni", "toni", "dodi"];
        const cari = "a"
        const hasilFilter = filternama(namaOrang, cari);
        console.log(hasilFilter);
      
      //3
      function filterlaptop(laptop, minHarga, maxHarga) {
  const pilihLaptop = laptop.filter((a) => {
    return a.harga >= minHarga && a.harga <= maxHarga;
  });
  return pilihLaptop;
}
const laptop = [
  { name: "Lenovo", harga: 8000 },
  { name: "Mac", harga: 15000 },
  { name: "Del", harga: 12000 },
  { name: "Acer ", harga: 9000 },
  { name: "HP", harga: 140000 },
];

const pilihLaptop = filterlaptop(laptop, 10000, 20000);
console.log(pilihLaptop);

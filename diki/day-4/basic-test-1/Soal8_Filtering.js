function filterLaptop(laptop, minHarga = 0, maxHarga = 0) {
    const laptops = laptop
    const result = []
    laptops.forEach(laptop => {
      if (laptop.harga >= minHarga && laptop.harga <= maxHarga) {
        result.push(laptop)
      }
    });
  
    if (result == 0) {
      return "Data Not Found"
    }
  
    return result
  }
  
  const laptop = [
    { nama: "Lenoboy", harga: 1 },
    { nama: "Asu REOG", harga: 2 },
    { nama: "De El", harga: 3 },
    { nama: "MSG", harga: 4 },
    { nama: "AEER", harga: 5}
  ]
  const min = 3
  const max = 5
  
  console.log(`Minimal Harga: ${min}`);
  console.log(`Maximal Harga: ${max}`);
  console.log(filterLaptop(laptop, min, max))
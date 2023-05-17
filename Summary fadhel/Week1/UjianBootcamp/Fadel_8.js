function filterlaptop(laptop, minHarga, maxHarga) {
    const pilihLaptop = laptop.filter((a) => {
      return a.harga >= minHarga && a.harga <= maxHarga;
    });
    return pilihLaptop;
  }
  const laptop = [
    { name: "Lenovo", harga: 8000 },
    { name: "Mac", harga: 25000 },
    { name: "HP", harga: 14000 },
  ];
  
  const pilihLaptop = filterlaptop(laptop, 8000, 15000);
  console.log(pilihLaptop);
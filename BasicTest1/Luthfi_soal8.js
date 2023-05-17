//soal 8

const laptop = [
  { id: 1, nama: "Lenoboy", harga : 3000000},
  { id: 2, nama: "Asu REOG", harga : 5000000},
  { id: 3, nama: "de el", harga : 7000000},
  { id: 4, nama: "MSG", harga : 9000000}
]
function filterlaptop(laptop, minHarga = null, maxHarga = null) {
  let data = []
  let no = 0
  laptop.forEach(element => {
      if (element.harga >= minHarga && element.harga <= maxHarga ) {
          data[no++] = "nama: " + element.nama + " harga:" + element.harga
      }
  })
  if (data.length == 0) {
      return "data Not Found"
  }

  return(data);
  
}

console.log(filterlaptop(laptop, minHarga = 5000000, maxHarga = 9000000));
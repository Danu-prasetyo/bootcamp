function updateSiswa(newData) {
  let siswa = {
    name: "Deez",
    age: 25,
    address: "Jl. Lorem Ipsum"
  }

  if (newData != null) {
    siswa = {
      name: newData.name,
      age: newData.age,
      address: newData.address
    }
    return siswa
  } 

  return siswa
}

const newSiswa = {
  name: "Eimi Fukada",
  age: 20,
  address: "Tokyo"
}

console.log('Data Sebelum di Update: ');
console.log(updateSiswa());
console.log('Data Sesudah di Update: ');
console.log(updateSiswa(newSiswa));
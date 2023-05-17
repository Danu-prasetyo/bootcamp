function updateSiswa(newData) {
    const siswa = {
      nama: 'Hitomi',
      umur: 17,
      alamat : "Cikarang",
      
    };
  
    if (newData.nama) {
      siswa.nama = newData.nama;
    }
    if (newData.umur) {
        siswa.umur = newData.umur;
      }
       if(newData.alamat) {
        siswa.alamat = newData.alamat;
      }
    return siswa ;
}
let newData = {
    nama: 'SiskaEEE',
    umur: 26,
    alamat : "BojongSari",
};
let anakBaru =updateSiswa(newData)
console.log(anakBaru);
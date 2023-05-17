/**
 * Exercise Basic 2
 * 
 * 1. Input Panjang Track
 * 
 * 2. Mulai Balapan
 *  a. Gambar balapan ketuk enter lalu acak angka (berdasarkan min dan max kecepatan mobil)
 *  b. Tampilkan pemenang balapan yang sampai dengan max panjang track duluan
 * 
 * 3. Menambahkan mobil dengan data :
 *  a. Icon mobil
 *  b. Kecepatan mobil
 *     - Min kecepatan
 *     - Max kecepatan
 * 
 * DIKERJAKAN DENGAN KAIDAH OOP
 */

const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function input(prompt) {
  return new Promise((callback, error) => {
    readLine.question(prompt, (uinput) => {
      callback(uinput)
    }, () => {
      error()
    })
  })
}

(async () => {
  try {
    const panjangTrack = await input("Input Panjang Track: ")
    const jumlahMobil = await input("Input Jumlah Mobil : ")
    const iconMobil = await input(`Input Icon Mobil: `)
    const min = await input(`Min Kecepatan Mobil: `)
    const max = await input(`Max Kecepatan Mobil: `)
    // Convert si min dan max soalnya output nya string
    const convertMin = parseInt(min)
    const convertMax = parseInt(max)

    // Ngatur Posisi Awal
    console.log("Start !");
    let start = `${iconMobil}${'='.repeat(panjangTrack)}`
    let race = 0

    readLine.on('line', () => {
      try {
        // console.log('Clicked'); // Cek ke klik atau ngga
        // Hitung random number
        const random = Math.floor(Math.random() * (convertMax - convertMin + 1)) + convertMin
        race += random
        start = start.replace(iconMobil, '=')
        const maju = `${'='.repeat(race)}${iconMobil}${'='.repeat(panjangTrack - race)}`
        // console.log(`${iconMobil}${'='.repeat(panjangTrack)}`);
        // console.log(`Random Number : ${random}`);
        // console.log(`Track Kiri: ${race}`);
        console.log(maju);
      } catch (err) {
        race = panjangTrack
        // console.log(`Track Kiri: ${race}`);
        console.log(`${'='.repeat(race)}${iconMobil}`);
        console.log(`Race Selesai`);
        readLine.close()
      }
    });

    console.log(`${iconMobil}${'='.repeat(panjangTrack)}`);

  } catch (error) {
    console.error(error);
  }
})()
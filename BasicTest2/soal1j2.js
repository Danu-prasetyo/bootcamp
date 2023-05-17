const readline = require('readline-sync');

// Menentukan jumlah mobil dan kecepatannya
const carCount = readline.question('Masukkan jumlah mobil: ');
const maxSpeed = readline.question('Masukkan kecepatan maksimum: ');

// Membuat array untuk menyimpan kecepatan mobil
const speeds = [];

// Meminta pengguna untuk memasukkan kecepatan setiap mobil
for (let i = 0; i < carCount; i++) {
  const speed = readline.question(`Masukkan kecepatan mobil ${i + 1}: `);
  speeds.push(Number(speed));
}

// Memulai balapan
let raceInProgress = true;

while (raceInProgress) {
  // Menampilkan posisi setiap mobil
  for (let i = 0; i < carCount; i++) {
    const position = '-'.repeat(speeds[i]);
    console.log(`Mobil ${i + 1}: ${position}`);
  }

  // Menghentikan balapan jika salah satu mobil mencapai garis finish
  if (speeds.some(speed => speed >= maxSpeed)) {
    raceInProgress = false;
    console.log('Balapan selesai!');
  } else {
    // Meningkatkan kecepatan setiap mobil
    for (let i = 0; i < carCount; i++) {
      speeds[i]++;
    }
  }
}

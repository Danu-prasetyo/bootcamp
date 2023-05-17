// Import readline menggunakan require
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Input template readline
function input(prompt) {
  return new Promise((resolve) => {
    readline.question(prompt, (yourInput) => {
      resolve(yourInput);
    });
  });
}

// Membuat class Race
class Race {
  constructor(trackLength, totalCar, iconCar, maxCar, minCar) {
    this.trackLength = trackLength;
    this.totalCar = totalCar;
    this.iconCar = iconCar;
    this.maxCar = maxCar;
    this.minCar = minCar;
  }

  startRaceLoop() {
    let carPosition = 0; // Inisialisasi posisi start
    let trackIcon = "="; // Menggunakan tanda = sebagai icon dari track
    let totalTrack = trackIcon.repeat(this.trackLength); // Menggunakan method repeat() untuk mengulangi icon track sesuai dengan panjang track yang diinput

    const interval = setInterval(() => {
      // Mengubah posisi mobil
      carPosition += this.calculateCarPosition();
      if (carPosition > this.trackLength) {
        carPosition = this.trackLength;
      }

      // Membuat track dengan mobil sesuai dengan posisinya yang telah diacak mengguakan fungsi calculateCarPosition
      let trackWithCar = totalTrack.substr(0, carPosition) + this.iconCar + totalTrack.substr(carPosition + 1); // Icon car dimasukan ke dalam track menggunakan method substr untuk menggabungkan string
      console.log(trackWithCar);

      // Jika posisi mobil sudah sama dengan panjangnya track maka program
      if (carPosition >= this.trackLength) {
        clearInterval(interval); // Menghentikan waktu yang diberikan
      }
    }, 1000); // Jeda waktu per output selama 1 detik
  }

  // Fungsi untuk menghasilkan posisi mobil secara acak
  calculateCarPosition() {
    const range = this.maxCar - this.minCar;
    const carPosition = Math.round((Math.random() * range) + this.minCar);
    return carPosition;
  }
}

async function main() {
  // Input panjang track dan jumlah mobil yang akan dibalapkan
  const inputTrack = Number(await input("Enter track length: "));
  const inputCarTotal = Number(await input("Enter total number of cars: "));

  // Inisialisasi array kosong yang nantinya akan dimasukan icon mobil, kecepatan maksimal, dan kecepatan minimal
  const cars = [];
  
  // Melakukan perulangan input tergantung dari jumlah mobil yang dimasukan
  for (let i = 0; i < inputCarTotal; i++) {
    const inputIconCar = await input(`Enter icon of car ${i + 1}: `);
    const inputMaxCar = Number(await input(`Enter max speed of car ${i + 1}: `));
    const inputMinCar = Number(await input(`Enter min speed of car ${i + 1}: `));
    cars.push({ iconCar: inputIconCar, maxCar: inputMaxCar, minCar: inputMinCar }); // Mengisi array kosong yang sudah diinisialisasi sebelumnya, dengan inputan yang dimasukan
  }

  for (let i = 0; i < inputCarTotal; i++) {
    const car = cars[i]; // Menampung array cars yang sudah diisi sebelumnya sesuai dengan jumlah mobil yang diinputkan
    const race = new Race(inputTrack, inputCarTotal, car.iconCar, car.maxCar, car.minCar); // Membuat object dengan menggunakan class Race dan meneruskan inputan untuk dicek pada class Race
    race.startRaceLoop(); // Memanggil method startRaceLop yang ada pada class Race
    console.log(); // Untuk menambahkan jarak antara input dan output
  }

  readline.close(); // Menghentikan readline
}

main(); // Menjalankan fungsi main
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function moveCar(car) {
    car.position += Math.floor(Math.random() * 2) + 1;
}

function showCarPosition(car) {
    let road = '';
    for (let i = 0; i < car.position; i++) {
        road += '=';
    }
    road += car.name;
    console.log(road);
}

const car1 = { name: '*', position: 0 };
const car2 = { name: '&', position: 0 };

function startRace() {
    console.log('Balapan dimulai!');
    setInterval(() => {
        moveCar(car1);
        moveCar(car2);
        showCarPosition(car1);
        showCarPosition(car2);
    }, 1000);
}

rl.question('Ketik "start" untuk memulai balapan: ', (answer) => {
    if (answer === 'start') {
        startRace();
    } else {
        console.log('Belum Siap.');
    }
    rl.close();
});










// const readline = require('readline');

// class Mobil {
//   constructor(nama, ikon, minKecepatan, maxKecepatan) {
//     this.nama = nama;
//     this.ikon = ikon;
//     this.kecepatan = this.generateKecepatan(minKecepatan, maxKecepatan);
//   }

//   generateKecepatan(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   tampilkan(posisi, trackPanjang) {
//     let jalur = '';
//     if (posisi < this.kecepatan) {
//       jalur = '='.repeat(posisi) + this.ikon + '='.repeat(this.kecepatan - posisi - 1);
//       if (jalur.length > trackPanjang) {
//         jalur = jalur.slice(0, trackPanjang);
//       }
//     } else {
//       jalur = '='.repeat(trackPanjang);
//     }
//     console.log(`${this.nama}: ${jalur}`);
//   }
// }

// class Balapan {
//   constructor(trackPanjang) {
//     this.trackPanjang = trackPanjang;
//     this.mobilPeserta = [];
//   }

//   tambahMobil(mobil) {
//     this.mobilPeserta.push(mobil);
//   }

//   async mulaiBalapan() {
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//     });

//     await new Promise((resolve) => {
//       rl.question('Ketik "start" untuk memulai balapan: ', (input) => {
//         if (input === 'start') {
//           resolve();
//         } else {
//           console.log('Input tidak valid.');
//           process.exit(0);
//         }
//       });
//     });

//     rl.close();

//     let maxKecepatan = -Infinity;
//     let pemenang = null;

//     for (let i = 0; i < this.mobilPeserta.length; i++) {
//       const mobil = this.mobilPeserta[i];
//       if (mobil.kecepatan > maxKecepatan) {
//         maxKecepatan = mobil.kecepatan;
//         pemenang = mobil;
//       }
//     }

//     console.log(`Balapan dimulai di trek sepanjang ${this.trackPanjang} km.`);
//     console.log("Peserta balapan:");
//     for (let posisi = 0; posisi < this.trackPanjang; posisi++) {
//       for (let i = 0; i < this.mobilPeserta.length; i++) {
//         const mobil = this.mobilPeserta[i];
//         mobil.tampilkan(posisi, this.trackPanjang);
//       }
//       console.log();
//     }
//     console.log(`Pemenang balapan adalah ${pemenang.nama}!`);

//     console.log("Jalur balapan:");
//     let jalur = '='.repeat(this.trackPanjang);
//     console.log(jalur);
//   }
// }

// const balapan = new Balapan(10);

// const mobil1 = new Mobil("Mobil 1", "*");
// const mobil2 = new Mobil("Mobil 2", "&");

// balapan.tambahMobil(mobil1);
// balapan.tambahMobil(mobil2);

// balapan.mulaiBalapan();

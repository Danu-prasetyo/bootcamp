class Mobil {
  constructor(icon, min_kecepatan, max_kecepatan) {
    this.icon = icon;
    this.min_kecepatan = min_kecepatan;
    this.max_kecepatan = max_kecepatan;
    this.kecepatan = 0;
  }

  acak_kecepatan() {
    this.kecepatan = Math.floor(Math.random() * (this.max_kecepatan - this.min_kecepatan + 1) + this.min_kecepatan);
  }

  gambar_mobil() {
    return this.icon.repeat(this.kecepatan);
  }
}

class BalapanMobil {
  constructor(panjang_track) {
    this.panjang_track = panjang_track;
    this.mobil_list = [];
  }

  tambah_mobil(mobil) {
    this.mobil_list.push(mobil);
  }

  mulai_balapan() {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < this.mobil_list.length; j++) {
        const mobil = this.mobil_list[j];
        mobil.acak_kecepatan();
      }
      this.tampilkan_posisi_balapan();
      if (this.cek_pemenang()) {
        break;
      }
      //   prompt("Tekan Enter untuk melanjutkan...");
    }
  }

  tampilkan_posisi_balapan() {
    let output = "";
    for (let i = 0; i < this.mobil_list.length; i++) {
      const mobil = this.mobil_list[i];
      output += `Mobil ${i + 1}: ${mobil.gambar_mobil()} `;
    }
    console.log(output);
    console.log("-".repeat(this.panjang_track));
  }

  cek_pemenang() {
    for (let i = 0; i < this.mobil_list.length; i++) {
      const mobil = this.mobil_list[i];
      if (mobil.kecepatan >= this.panjang_track) {
        console.log(`Pemenang balapan: Mobil ${i + 1} dengan icon ${mobil.icon}`);
        return true;
      }
    }
    return false;
  }
}

// Main program
const panjang_track = 100;
const jumlah_mobil = 2;

const balapan = new BalapanMobil(panjang_track);

const iconMobil1 = "*";
const minKecepatanMobil1 = 1;
const maxKecepatanMobil1 = 4;
const mobil1 = new Mobil(iconMobil1, minKecepatanMobil1, maxKecepatanMobil1);
balapan.tambah_mobil(mobil1);

const iconMobil2 = "&";
const minKecepatanMobil2 = 1;
const maxKecepatanMobil2 = 4;
const mobil2 = new Mobil(iconMobil2, minKecepatanMobil2, maxKecepatanMobil2);
balapan.tambah_mobil(mobil2);

balapan.mulai_balapan();

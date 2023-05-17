//soal 9

function cariKataTerpanjang(x) {
    let arr = x.split(' ');
    let kataTerpanjang = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > kataTerpanjang.length) {
        kataTerpanjang = arr[i];
      }
    }
    return kataTerpanjang;
  }

let x = `Fun$!! Time`;
let kataTerpanjang = cariKataTerpanjang(x);
console.log(kataTerpanjang);

let x2 = `I love Dogs`;
let kataTerpanjang2 = cariKataTerpanjang(x2);
console.log(kataTerpanjang2);
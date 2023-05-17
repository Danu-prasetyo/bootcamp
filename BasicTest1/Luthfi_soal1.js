//Soal 1
function piramidaBintang(x) {
  for (let i = 1; i <= x; i++) {
    let hasil = "";
    for (let j = 1; j <= x - i; j++) {
      hasil += " ";
    }
    for (let k = 1; k <= i; k++) {
      hasil += "* ";
    }
    console.log(hasil);
  }
}

console.log(piramidaBintang(7));
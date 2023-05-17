//Soal 1
function piramidaBintang(x) {
  for (let i = 0; i <= x; i++) {
    let hasil = "";
    for (let j = 0; j <= x; j++) {
      hasil += " ";
    }
    for (let k = 0; k <= i - i; k++) {
      hasil += "* ";
    }
    return hasil;
  }
}

console.log(piramidaBintang(7));
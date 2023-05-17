function cariHurufPanjang(kata) {
    let hurufPanjang = "";
    let kataArr = kata.split(" ");
    for (let x = 0; x < kataArr.length; x++) {
      let hurufArr = kataArr[x].split(" ");
      for (let y = 0; y < hurufArr.length; y++) {
        if (hurufArr[y].length > hurufPanjang.length) {
          hurufPanjang = hurufArr[y];
        }
      }
    }
    return hurufPanjang
  }
  const kalimat = "love you"
console.log(cariHurufPanjang(kalimat)); 
  
  
 
  
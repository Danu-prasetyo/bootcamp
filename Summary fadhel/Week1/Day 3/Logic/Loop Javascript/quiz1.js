//1
  
for (let ganjil = 1; ganjil <= 50; ganjil++) {
    if (ganjil % 2 !== 0) {
      console.log(ganjil);
    }
  }

  //2 
  function hitungRata(arr){
      let jumlah = 0;
  for(let rata = 0; rata < 5; rata++) {
    jumlah += arr[rata];
  }
  const rataRata = jumlah / 5;
  return rataRata
  }
  const arr = [2,4,6,8,10];
  const rataRataArr = hitungRata(arr);
  console.log(rataRataArr);

  //3
 function hitungKapital(string){
  let hitung = 0;
  let hitung2 = 0;
  for(let a = 0; a < string.length; a++){
    if(string[a] === string[a].toUpperCase() && string[a] !== " "){
      hitung++;
    }
  }
  for(let a = 0; a < string.length; a++){
    if(string[a] === string[a].toLowerCase() && string[a] !== " "){
      hitung2++;
      
}
}
return ([hitung,hitung2]);
 }

const string1 = "Hi ManieZZZ"
const string2 = "Owl Kun"
console.log("Huruf Kapital String 1 ada");
console.log(hitungKapital(string1)); 
console.log("Huruf Kapital String 2 ada");
console.log(hitungKapital(string2)); 

 
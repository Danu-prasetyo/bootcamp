/* //split untuk menentukan karakter
const kata1= "fun&!! time"
const kata2= "I love dogs"

function cariPanjangKata(kata) {
    const kataKata = kata.replace(/[^a-zA-z]/g, '').split(' ');

    let panjangKata = '';

    kataKata.forEach((kataAdalahKunci)) => {
        if(kataAdalahKunci.length > panjangKata.length){
            panjangKata = kataAdalahKunci;
        }
    }
};

return panjang panjangKata;
{
}

console.log(cariPanjangKata(kata1))
console.log(cariPanjangKata(kata2))


 */
const kata1 = "fun&! time";
const kata2 = "I love dogs";
function findLongestWord(str) {
  let strSplit = str.split("");
  let longestWord = 0;
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}
findLongestWord("kata1" && "kata2");

function reverse(str) {
  let x = str.length,
    y = "";
  while (x > 0) {
    y += str[x - 1];
    x--;
  }
  return y;
}
let kata = "kasur ini rusak";

if (kata === reverse(kata)) {
  console.log("Kata `" + kata + "` yang anda masukkan adalah kata Palindrome.");
} else {
  console.log("Kata `" + scramble + "` yang anda masukkan bukan kata Palindrome.");
}

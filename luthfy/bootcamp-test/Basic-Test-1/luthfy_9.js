const input = ["laptop", "kacamata", "gelas"];

function findMaxWord(words) {
  let maxLength = 0;
  let maxWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      maxWord = words[i];
    }
  }
  return maxWord;
}

console.log(findMaxWord(input));

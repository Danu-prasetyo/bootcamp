function checkLongestWord(words) {
  let check = words.split(' ')
  let longestWord = ""

  for (i = 0; i < check.length; i++) {
    if (check[i].length > longestWord.length) {
      longestWord = check[i]
    }
  }
  
  return longestWord
}


let kata = "Lorem Ipsum Dolor sit Amet"
console.log(`Input: "${kata}"`);
console.log(`Output: "${checkLongestWord(kata)}"`);
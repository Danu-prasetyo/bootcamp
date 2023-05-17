function palindromeCheck(word) {
    console.log("Pengecekan Palindrome");
    console.log("---");
    console.log("Kata yang anda masukan:", word);
    console.log("---");
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return "Kata yang anda masukan bukan Palindrome"
        }
    }
    return "Kata yang anda masukan adalah Palindrome"
}

console.log(palindromeCheck("iki"));
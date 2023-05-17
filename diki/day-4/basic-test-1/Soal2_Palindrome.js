function palindromCheck(word) {
    let format = word.toUpperCase();
    let check = format.split("")
    let reverse = check.reverse()
    let result = reverse.join("")

    if (format == result) {
        return `${result} \nKata yang anda masukan adalah Palindrome`
    }

    return `Kata yang anda masukan bukan palindrome`
}

let kata = "KaSur RusAk"
console.log(`--- \nCheck Palindrome \n---`);
console.log(`Masukan Kata: ${kata} \n--- \n`);
console.log(`${palindromCheck(kata)} \n---`);
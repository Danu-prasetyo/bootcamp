//soal 2

function isPalindrome(str) {
    str = str.toLowerCase();
    var reverseStr = str.split("").reverse().join("");
    return str === reverseStr;
  }


console.log(isPalindrome("kasur rusak"));
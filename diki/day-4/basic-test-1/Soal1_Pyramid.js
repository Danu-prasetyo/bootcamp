let tinggi = 8;
let asterisk = "";
console.log(`Input tinggi segitiga: ${tinggi}`);
for (let i = 0; i <= tinggi; i++) {
    for (let j = 0; j < i; j++) {
        asterisk += "*" + " ";
    }
    console.log(asterisk);
    asterisk = "";
} 
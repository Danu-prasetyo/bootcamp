

const fs = require('fs');
const data = fs.readFileSync("test.txt", "utf-8").split(",")

data.sort((a,b) => a-b);

fs.writeFileSync("angkaUrut", data.join());

console.log("Angka Sudah Berurutan");




console.log('mulai');
const { log } = require('console');
const fs = require('node:fs');
const data = fs.readFileSync("hasil.txt", "utf8").split(",");
data.sort((a, b) => a - b);

fs.writeFileSync("hasiltest.txt", data.join());
console.log(data);



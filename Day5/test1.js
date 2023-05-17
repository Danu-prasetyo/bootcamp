// console.log("Mulai");

// const fs = require('fs');

// const data = fs.readFileSync("angka.txt", "utf8").split (",")

// data.sort((a,b) => a-b);

// fs.writeFileSync("angkaUrut", data.join());

// console.log("angkasudahBerurut");

//cara 2

const fs = require('fs')

async function readFile() {
  try {
    const data = await fs.readFileSync('angka.txt',
      { encoding: 'utf-8'});

    const convert = await data.split(",").map(Number);
    const sort = await convert.sort(function (a, b) {
      return a - b;
    })
    const str = await sort.toString();
    const writeStream = await fs.createWriteStream("angkaUrut.txt")
    writeStream.write(str)
    console.log(str);
  } catch (error) {
    console.error('Error:', error);
  }
}

console.log("Mulai");
readFile()
console.log("akhir");
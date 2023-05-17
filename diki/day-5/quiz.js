/**
 * Output Harus Akhir, Mulai, Baru Function
 */

// ---Asynchronous

const fs = require('fs')

async function readFile() {
  try {
    const data = await fs.readFileSync('./scramble.txt',
      { encoding: 'utf-8', flag: 'r' });

    const convert = data.split(",").map(Number);
    const sort = convert.sort(function (a, b) {
      return a - b;
    })
    const str = sort.toString();
    const writeStream = fs.createWriteStream("sort.txt")
    writeStream.write(str)
    writeStream.end()
    console.log(str);
  } catch (error) {
    console.error('Error:', error);
  }
}

// ---Output

console.log("Mulai");

readFile();

console.log("Akhir");
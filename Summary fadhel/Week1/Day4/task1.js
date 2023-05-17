const fs = require('fs')
console.log("mulai");
async function readFile() {
  try {
    const data = fs.readFileSync('./AngkaAcak.txt',
      { encoding: 'utf-8'});

    const convert = data.split(",").map(Number);
    const sort = convert.sort(function (a, b) {
      return a - b;
    })
    const str = await sort.toString();
    const writeStream = fs.createWriteStream("AngkaUrut.txt")
    writeStream.write(str)
    writeStream.end()
    return console.log("angka urut sudah dibuatkan");
  } catch (error) {
    console.error('Error:', error);
  }
  
}
readFile()
console.log("Akhir");
// setTimeout(function(){
//     return console.log("mulai");
//   }, 1000);

// const fs = require("fs");

// const data = fs.readFileSync("AngkaAcak.txt", "utf8").split(",");

// data.sort((a, b) => a - b);

// fs.writeFileSync("AngkaUrut.txt", data.join());

// setTimeout(function(){
//     return console.log("angka urut sudah dibuatkan");
//   }, 2000);

// console.log("akhir")



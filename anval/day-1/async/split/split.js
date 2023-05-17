console.log('mulai');
async function tuker(){
    try {
        const fs = require('fs');
        const data = fs.readFileSync('kuis1.txt', 'utf8').split(",");
        const result = await data.sort((a, b) => a - b);
        // fs.writeFileSync("hasil.txt", data.join());
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}
tuker();
console.log('selesai');


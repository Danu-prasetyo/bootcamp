const fs = require('fs');

console.log("Start");

(async () => {
    fs.readFile('value.txt', async function read(err, data) {
        try {
            const content = await data.toString();
            const getArray = await content.split(",");
            const sort = await getArray.sort();
            sort.sort(function (a, b) { return a - b });
            const joined = await sort.join(",")
            console.log(joined);
            
            fs.writeFile('value.txt', joined, (err) => {
                if (err) throw err;
            })

        } catch (error) {
            console.log(error);
        }
    })
})();

console.log("End");
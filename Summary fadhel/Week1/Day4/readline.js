const readLine = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
 function input(prompt){
    return new Promise((callback,error) => {
        readLine.question(prompt,(inputan)=> {
                readLine.close();
                callback(inputan);
            });
        });
    }
    (async () => {
        try {
            const name = await input ("masukan nama :");
            console.log(`halo, ${name}!`);
        } catch (err) {
            console.error(err);
        }
    })();
            


    // function cariAngkaNol(data, barisData = 0, barisDenganNol = []) {
    
    //     if (barisData === data.length) {
    //       return barisDenganNol;
    //     }  
    //     if (data[barisData].includes(0)) {
    //       barisDenganNol.push(barisData); 
    //     }
      
    //     return cariAngkaNol(data, barisData + 1, barisDenganNol);
    //   }
    //   const data = [
    //     [0, 1, 1, 1, 1],
    //     [1, 0, 1, 1, 1],
    //     [1, 0, 1, 1, 1],
    //     [1, 1, 0, 1, 1],
    //     [1, 1, 1, 1, 0]
    //   ];
      
    //   const barisDenganNol= cariAngkaNol(data);
    //   console.log(`Nilai 0 ditemukan di baris: ${barisDenganNol.join(', ')}`);
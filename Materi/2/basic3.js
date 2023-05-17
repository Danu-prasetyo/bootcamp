function getDataFromServer(){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            var data = ;
            resolve(data);
            reject()
        }, 2000);
    });
}

// getDataFromServer()
//     .then(function(data) {
//         console.log("Data yang diterima:",data);
//     })
//     .catch(function (error) {
//         console.log("Terjadi kesalahan", error);
//     });
async function fetchData(){
    try{
        constdata = await getDataFromServer();
        console.log("Data yang diterima:", data);
    } catch(err){
        console.log("Terjadi kesalahan:", err);
    }
  }
//   panggil function async await
fetchData();
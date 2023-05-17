function getDataFromServer() {
    return new Promise(function (resolve, reject) {
        setTimeout( () => {
            var data = {id: 1, nama: 'anval'};
            resolve(data);
        }, 1000)
    })
}

getDataFromServer()
    .then( (data) =>{
        console.log('data yang diterima:', data);
    })
    .catch((error)=>{
        console.log('terjadi kesalahan:', error);
    })

async function fetchData() {
    try{ //fungsi
        const data = await getDataFromServer()
        console.log('data yang diterima:', data);
    } catch (error){
        console.log('terjadi kesalahan:', error);
    }
}
// panggil func async await
fetchData()
const person = {
    nama : "Rizki",
    umur : 26,
    pekerjaan : "pengembang web",
    alamat : {
        jalan : "Jl.Raya No.123",
        kota : "Jakarta",
        negara : "indonesia",
    },
    hobi : ["Olahraga","Musik","Membaca"],
    };
    console.log(person.hobi[1])


    person.name = "rizki mr"
    person.hobi.push("Menari")
    delete person.hobi // cara hapus data di objek

    let ambilIdentitas = Object.keys(person) //ambil keys di dalam objek
    console.log(ambilIdentitas)


    let objectToString = JSON.stringify(person) // Mengubah JSON jd String
    console.log(objectToString)

    let stringToJSON = JSON.parse('{"Nama" : "Rizki"}') //Kebalikan dari Object to String
    console.log(stringToJSON)
    
    let waktu = new Date()
    console.log(waktu)
    console.log(waktu.getDate())
    console.log(waktu.getMonth())
    console.log(waktu.getFullYear())
    console.log(waktu.getHours())
    console.log(person)
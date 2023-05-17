// While Loop

let test = 1 // Start Condition
while (test<5){
    //stop condition
    console.log("looping ke - " + test); //output
    test ++; // increment / menambahkan 1 nilai
}

// bilangan prima

let n = 20; // cari bilangan prima 1 - 20
let i = 2 ; // inisialisasi bilangan prima terkecil
while (i<=n){ // selamaa nilai i kurang dari atau sama dengan n, maka
    let bilanganPrima = true; //inisialisasi variabel bilangan prima dengan nilaim true
    let j = 2; // inisialisasi variabel untuk dimasukan ke rumus
    while (j < i) { // selama nilai j < i maka loop berjalan
        if (i % j === 0) { //jika i bisa di bagi j tiap kali loop selesai
            bilanganPrima = false;
            break;
        }
        j++;
    }
    if (bilanganPrima) { //jika bilanganPrima bernilai tru maka i adalah bilangan prima 
        console.log(i); // output nilai is
    }
    i++;
}

// for loop

for(let i = 0 ; i < 5; i++){ //inisialisasi variable i dengan nilai 0; selama nilai i kurang dari 5 akan terus loop sampai terpenuhi
    console.log(`for loop ke - ${i}`) //cetak
}


// Factorial

const arr = [2,3,4,5] // buat array
let result = 1 //buat variabel result dengan nilai 1

for(let i = 0; i < arr.length; i++){
    result *= arr[i] //kalikan nilai result dengan element array arr pada indeks i
}
console.log(result) //output



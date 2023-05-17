//While loop
let test = 1; // start condition
while (test < 5) {
  //stop condition
  console.log("while loop ke - " + test); //output
  test++; //increment / menambahkan 1 ke nilai test yang membutuhkan kondisi
}

//while loop mencari bilangan prima
let n = 20; // cari bilangan prima 1 sampe 20
let i = 2; //inisialisasi bilangan prima terkecil
while (i <= n) {
  //selama nilai i kurang dari atau sama dengan n , maka dia akan melakukan looping hingga kondisi terpenuhi
  let bilanganPrima = true; // inisialisasi variabel bilangan prima dengan nilai true
  let j = 2; // inisialisasi variabel untuk dimasukkan ke dalam rumus
  while (j < i) {
    //selama nilai j kuranng dari i,maka loop akan tetap berjalan
    if (i % j === 0) {
      //jika i bisa dibagi dengan j, maka i bilangan prima
      bilanganPrima = false; //ubah nilai menjadi false
      break; //loop selesai
    }
    j++; //increment atau menambahkan 1 ke nilai j tiap kali loop selesai
  }
  if (bilanganPrima) {
    // jika bilanganPrima vernilai true maka i adalah bilangan prima
    console.log(i);
  }
  i++;
}

//for loop
//innisialisasi variabel i dengan nilai 0; selama nilai i kurang dari 5 maka loop akan terus berjalan
for (let i = 0; i < 5; i++) {
  console.log(`for loop ke - ${i}`);// cetak
}



//faktorial
const arr =[2,3,4,5]//buat array
let result = 1//buat variabel result dengan nilai 1
//buat variabel i dengan nilai 0, selama nilai i kurang dari panjang array maka akan terus mengalami loop 
for(let i = 0; i < arr.length; i++) {
    result = 1
    for (let i = 0; i < arr.length; i++) { //arr.length untuk menghitung banyak data dalam satu array
 result *= arr[i]//kalikan nilai result dengan elemen array arr pada indeks i
}
console.log(result)//output
}

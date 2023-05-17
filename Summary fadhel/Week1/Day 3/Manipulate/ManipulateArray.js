const threeDimensionaArray = [
   [
    [1,2,3],
    [4,5,6],
    [7,8,9]
   ],
   [
    [10,20,30],
    [40,50,60],
    [70,80,90]
   ]
];
// akses data dalam array multidimensi
console.log(threeDimensionaArray[0]);
console.log(threeDimensionaArray[1][2]);
console.log(threeDimensionaArray[0][1][2]);

// ubah nilai pada elemen array multidimensi
threeDimensionaArray[0][1][2]=100;
console.log(threeDimensionaArray[0][1][2]);
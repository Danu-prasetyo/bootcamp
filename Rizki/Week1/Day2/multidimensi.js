//array multidimensi dengan tiga dimensi
const threeDimensionalArray = [ //array 1

[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
],
[ //array 2
    [10, 20, 30], //array 3
    [40, 50, 60],
    [70, 80, 90]
]  
];

//akses data dalam array
console.log(threeDimensionalArray[0]); 
console.log(threeDimensionalArray[0][1]);
console.log(threeDimensionalArray[0][1][2]);

//ubah nilai pada element array multidimensi
threeDimensionalArray[0][1][2] = 100;
console.log(threeDimensionalArray[0][1][2]); 
console.log(threeDimensionalArray[0]);
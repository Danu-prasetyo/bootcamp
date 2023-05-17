// //soal2

// const arr = 
// [
//     [0,1,1,1,1],
//     [1,0,1,1,1],
//     [1,0,1,1,1],
//     [1,1,0,1,1],
//     [1,1,1,1,0]
// ];

// const searchIndex = 0

// for (let i = 0; i < arr.length; i++) { 
//     for (let j = 0; j < arr[i].length; j++) { 
//         if (arr[i][j]===searchIndex) {
//         console.log(`angka ${searchIndex} ditemukan pada index ${i},${j}`);
//       }
//     }
// }

//===============================================================================
// const arr =
//     [
//         [0, 1, 1, 1, 1],
//         [1, 0, 1, 1, 1],
//         [1, 0, 1, 1, 1],
//         [1, 1, 0, 1, 1],
//         [1, 1, 1, 1, 0]
//     ];

// var test = 0
// var test1 = 0
// function findzero(data, n_1) {
//     var data2 = data[test]
//     if (n_1 != 0) {
//         if (data2 != 0) {
//             // console.log(data2);
//             // if (arr[test1][test] = 0) {

//                 // console.log(test1);
//             // }
//             // findzero(data, n_1-1)
//             console.log(n_1);

//             test1++
//             findzero(data, n_1 )

//         }

//         test++
//         findzero(data, n_1-1)
//     }
// }

// findzero(arr, arr.length)


// function searchIndex(array,al = 0,ex = 0) {
//     if (al<array.length){
//         if(ex<array[al].length){
//             if(array[al][ex]=== 0){
//                 console.log("("+al+","+ex+")");
//             }
//         }
//     }
//     if(ex<array[al].length){
//         searchIndex(array,al,ex+1)
//     }else if (al<array.length-1){
//         searchIndex(array,al+1,0)
//     }
// }
// searchIndex(arr)
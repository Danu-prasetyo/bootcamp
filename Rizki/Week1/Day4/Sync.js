// const { find } = require("async");

// function contohSyncronous() {
//     console.log('Urutan 1');
//     console.log('Urutan 2');
//     console.log('Urutan 3');
//   }

//  contohSyncronous();

 function findIndex(arr, target, index = 0)

 if (index >= arr.length) {
  return 0;
 }

  if (arr[index] === target) {
     return index;
 }

 return findIndex(arr, target, index + 1 );



 const target = 0
 const array = [
  [0,1,1,1,1],
  [1,0,1,1,1],
  [1,0,1,1,1],
  [1,1,0,1,1],
  [1,1,1,1,0]
]
 const index = findIndex(array, target)
 console.log(index)
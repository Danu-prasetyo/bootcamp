// function mencariIndex (array,target,index = 0){
//     if (index >= array.length) {
//           return "Gaada bang";
//          } 
//     if (array[index] === target){
//         return index;
//     }
//         return mencariIndex(array, target, index + 1 );
//      }


// let array2 = [1,0,1,1,1,]
//     // [0,1,1,1,1],
//     // [1,0,1,1,1],
//     // [1,0,1,1,1],
//     // [1,1,0,1,1],
//     // [1,1,1,1,0]

// let target = 0 ;
// let index = mencariIndex(array2, target)
// console.log(index)
 

function mencariIndex(array,index = 0,index2 = 0){ 
    if(index<array.length){
        if(index2<array[index].length){
                if(array[index][index2]=== 0){
                console.log("("+index+","+index2+")");
            }
    }
}
if(index2<array[index].length){
    mencariIndex(array,index,index2+1)
} else if(index<array.length-1){
    mencariIndex(array,index+1,0)
}
}

const array2 =
[
    [0,1,1,1,1],
    [1,0,1,1,1],
    [1,0,1,1,1],
    [1,1,0,1,1],
    [1,1,1,1,0],
]

mencariIndex(array2)





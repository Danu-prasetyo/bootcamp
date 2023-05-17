// Quiz Nested IF
let mtk = 80
let fisika = 120
let bio = 70
let rata = ((mtk+fisika+bio )/ 3)
if (rata >= 60){
    if (mtk > 0 && mtk < 100){
        if (fisika > 0 && fisika < 100){
            if (bio > 0 && bio < 100){
                if(rata <= 80 ){
                    console.log(`anda lulus dengan nilai ${rata}`);
                } else  if (rata >= 80){
                    console.log(` anda mendapatkan nilai yang baik dengan nilai ${rata}`);
                }
                } else if (rata < 60) {
                    console.log(`anda tidak lulus karena nilai anda adalah ${rata}`);
            
                }  
            } else {
                console.log("ga valid");
            }
        } else {
            console.log("ga valid");
        }
    } else {
        console.log("ga valid");
    }

// if (mtk > 100)  {
//     console.log("ga valid");
// } else if (mtk < 0){
//     console.log("ga valid");
// } else if  (fisika < 0) {
//     console.log("ga valid");   /////////////////////////////////////////////////////
// } else if (fisika > 100){      /////////// Cara tolol////////////////////////////// 
//     console.log("ga valid");
// } else if  (bio < 0) {
//     console.log("ga valid");
// } else if (bio > 100){
//     console.log("ga valid");
 

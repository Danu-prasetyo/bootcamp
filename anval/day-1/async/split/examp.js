function start(counter){
  if(counter < 10){
    setTimeout(() => {
      counter++;
      console.log(counter);
      start(counter);
    }, 1000);
  }
}
start(0)

// setTimeout(() => {
//   console.log("hello world")
// }, 2000)

// const timeoutID = setTimeout(() => {
//   console.log("hello world")
// }, 2000)

// clearTimeout(timeoutID)
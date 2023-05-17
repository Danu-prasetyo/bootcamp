
//Promise
fetch("https://jsonplaceholder.typicode.com/todos/20")
.then((response) => response.json())
.then((data) => console.log(data.title)) //hanya memanggil title
.catch((error) => console.error(error));
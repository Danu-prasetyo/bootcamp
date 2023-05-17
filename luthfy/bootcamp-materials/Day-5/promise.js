// PROMISE
fetch("https://jsonplaceholder.typicode.com/todos/90")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
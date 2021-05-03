
 
 document.addEventListener("DOMContentLoaded", () => {
     fetchJokes();
 })

 const url = "https://icanhazdadjoke.com/"

 function fetchJokes() {
     fetch(url, {
        headers: {
          Accept: 'application/json'
        }
      }) 
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
 }
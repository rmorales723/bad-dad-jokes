const url = "https://icanhazdadjoke.com/"
const newJokeBtn = document.querySelector('.new-joke-btn');  

document.addEventListener("DOMContentLoaded", fetchJokes);

newJokeBtn.addEventListener('click', fetchJokes);

function fetchJokes() {
     fetch(url, {
        headers: {
          Accept: 'application/json'
        }
      }) 
        .then(response => response.json())
        .then(data => renderJoke(data.joke))
        .catch(error => console.error(error))
 }

 function renderJoke(joke){
    const h3 = document.createElement("h3")
    h3.innerText = joke
    document.querySelector(".container").append(h3)
 }


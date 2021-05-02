document.addEventListener("DOMContentLoaded", () => {
    fetchJokes();
})

const jokes = "https://icanhazdadjoke.com/"

function fetchJokes() {
    fetch(jokes)
        .then(response => response.json())
        .then(data => jokesRender(data))
        .catch(error => console.log(error));
}

function jokesRender(jokes) {
        jokes.forEach(joke => {
        jokeRender(joke)
    })
  }

function jokeRender(joke) {
        
  }
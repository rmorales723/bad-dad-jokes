document.addEventListener("DOMContentLoaded", () => {
    fetchJokes();
})

const dadJokes = "https://icanhazdadjoke.com/"

function fetchJokes() {
    fetch(dadJokes)
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(error => console.log(error)) 
}
const url = "https://icanhazdadjoke.com/"
const newJokeBtn = document.querySelector('.new-joke-btn');  
const likeBtn = document.querySelector(".like-btn");
const counter = document.getElementById("counter")
let count = 0;


document.addEventListener("DOMContentLoaded", fetchJokes);

newJokeBtn.addEventListener('click', fetchJokes);



likeBtn.addEventListener('click', () => {
    count ++;
    counter.innerHTML = count; 
});

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
    document.querySelector(".container").innerHTML = "";
    document.querySelector(".container").append(h3)
}
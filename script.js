const url = "https://icanhazdadjoke.com/"
const newJokeBtn = document.querySelector('.new-joke-btn');  
const likeBtn = document.querySelector(".like-btn");
const counter = document.getElementById("counter")
let count = 0;


document.addEventListener("DOMContentLoaded", fetchJokes);

newJokeBtn.addEventListener('click', fetchJokes);

newJokeBtn.addEventListener('click', () => {
    count = 0;
    counter.innerHTML = count; 
    counter.className = "is-size-2 has-text-centered has-text-weight-bold"
});

likeBtn.addEventListener('click', play);

function play() {
    var audio = document.getElementById("audio");
    audio.play();
};

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
};

 function renderJoke(joke){
    const h3 = document.createElement("h3")
    h3.innerText = joke
    h3.className = "is-size-4 has-text-black has-text-centered has-text-weight-bold"
    document.querySelector(".container").innerHTML = "";
    document.querySelector(".container").append(h3)
};
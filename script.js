const url = "https://icanhazdadjoke.com/"
const newJokeBtn = document.querySelector('.new-joke-btn');  

document.addEventListener("DOMContentLoaded", fetchJokes);

newJokeBtn.addEventListener('click', fetchJokes);

const likeBtn = document.querySelector(".like-btn");

likeBtn.addEventListener("click",(e) => {
    e.preventDefault()
    postJoke()
    })

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
    const btn = document.createElement("button")
    btn.innerText = `likes: ${joke.likes}`
    //btn.id = joke.id

    btn.addEventListener("click", likeJoke) 

 }

 function postjoke() {
    fetch(url, {
      method: 'POST',
      headers:
       {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
  
      body: JSON.stringify({
        "likes": 0
      })
    })
  
      .then(response => response.json())
      .then(data => renderJoke(data))
      .catch(error => console.log(error))
}
  
  function likeJoke(e) {

    let more = parseInt(e.target.innerText) + 1 
    const url2 = "https://icanhazdadjoke.com/" + e.target.id
      fetch(url2, {
      method: 'PATCH',
      headers:
       {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
  
      body: JSON.stringify({
        "likes": more
      })
    })
  
      .then(response => response.json())
        .then(data => e.target.innerText = "likes: " + data.likes)
        
  }

  
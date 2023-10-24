const btn = document.getElementById('btn');

const loadJokes = () => {
    const jokesText = document.getElementById('jokes');
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(res => res.json())
    .then(data => {
        if(data.joke != undefined){
            jokesText.innerText = data.joke;
            console.log(data.joke)
        }
    });
}
btn.addEventListener('click',loadJokes);
const jokeEl = document.querySelector('#joke');
const btnjoke = document.querySelector('#jokeBtn');

btnjoke.addEventListener('click', generatingthejoke);
async function generatingthejoke() { 
    const jokes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            accept: 'application/json'
        }
    });

    const laugh = await jokes.json();
    console.log(laugh);

    jokeEl.innerHTML = laugh.joke
}
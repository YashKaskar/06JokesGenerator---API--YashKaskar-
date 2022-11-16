const joke = document.querySelector('#joke');
const btnjoke = document.querySelector('#jokeBtn');

btnjoke.addEventListener('click', generatingthejoke);
async function generatingthejoke() { 
    const jokes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            accept: 'application/json'
        }
    });
}
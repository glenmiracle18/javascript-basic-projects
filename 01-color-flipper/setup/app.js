const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', () => {
    // getting a ramdom number between 0 and 3 (just int)
    const randomNumber = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})
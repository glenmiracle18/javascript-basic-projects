// initilain count
let count = 0;

// select elements (value & btns)
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const classes = e.currentTarget.classList;
        if (classes.contains('decrease')) {
            count --; 
        }
        else if(classes.contains('increase')){
            count ++;
        }
        else {
            count = 0
        }

        // changing the colors
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count === 0) {
            value.style.color = 'var(--clr-black)'
        }

        // changing the text content for the value
        value.textContent = count;
    });
});
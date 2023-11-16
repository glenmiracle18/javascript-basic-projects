const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const contents = document.querySelectorAll('.content')

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id){
        // remove active from other btns
        btns.forEach(btn => {
            btn.classList.remove('active')
        });
        e.target.classList.add('active')
        // hide active content
        contents.forEach(content => {
            content.classList.remove('active')
        });
        const element = document.getElementById(id)
        element.classList.add('active')
    }
});


// another method to toggle around with the button activity
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         btns.forEach(btn => btn.classList.remove('active'));
//             btn.classList.add('active');
//             })
// })


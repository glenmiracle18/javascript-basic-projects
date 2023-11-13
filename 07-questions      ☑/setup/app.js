//using selectors inside the element

const questions = document.querySelectorAll('.question')

questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn')
    // console.log(question)
    btn.addEventListener('click', () =>  {
        // closing previously opened question cards
        questions.forEach(function (item) {
            if (item !== question)
            item.classList.remove('show-text')
        })

        // main toggle function
        question.classList.toggle('show-text')
    })
})
    
// ..


// traversing the DOM tree
// const btns = document.querySelectorAll('.question-btn')

// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         // console.log(e.currentTarget.parentElement)
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//     })
// })
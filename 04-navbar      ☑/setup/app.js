// classList - shows/gets all classes
const navBtn = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navBtn.addEventListener('click', () => {
    links.classList.toggle('show-links')
})
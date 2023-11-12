// collect all elements that will be needed
const toggleBtn = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
const removeBtn = document.querySelector('.close-btn')

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
})

removeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar')
})

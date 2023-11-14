// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// scrollY is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels


// ********** set date ************
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

// ********** close links ************
const toggletBtn = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
const linksContainer = document.querySelector('.links-container')

toggletBtn.addEventListener('click', () => {
    // linksContainer.classList.toggle('show-links');
    const linksContainerHieght = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    // console.log(linksHeight)
    if (linksContainerHieght === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0;
    }
})

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const toplink = document.querySelector('.top-link');

window.onscroll = function () {
    const scrollHeight = scrollY;
    // console.log(scrollHeight)
    const navHeight = navbar.getBoundingClientRect().height

    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
        toplink.classList.add('show-link');
    } else {
        navbar.classList.remove("fixed-nav");
        toplink.classList.remove('show-link');
    }

    toplink.addEventListener('click', () => {
        window.scrollTo(top)
    })
};
// ********** smooth scroll ************
// select links

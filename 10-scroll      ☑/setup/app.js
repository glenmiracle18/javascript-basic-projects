// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// scrollY is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

window.addEventListener('DOMContentLoaded', () => {
    scrollTo(top)
})
// ********** set date ************
const date = document.getElementById('date')
date.textContent = new Date().getFullYear()

// ********** close links ************
const toggletBtn = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
const linksContainer = document.querySelector('.links-container')

toggletBtn.addEventListener('click', () => {
    const linksContainerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    // console.log(linksHeight)

    if (linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0
    }
})

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const toplink = document.querySelector('.top-link');

toplink.addEventListener('click', () => {
    window.scrollTo(top)
})

const navHeight = navbar.getBoundingClientRect().height
window.onscroll = function() {
    // console.log(scrollY);
    const scrollHeight = scrollY
    
    console.log(navHeight);

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
        toplink.classList.add('show-link')
    } else {
        navbar.classList.remove('fixed-nav');
        toplink.classList.remove('show-link')
    }
}

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        // prevent defaild
        e.preventDefault();
        // navigating to a specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id)
        const linksContainerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight
        } 
        if (navHeight > 82) {
            position = position + linksContainerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        })
        // close the navbar
        linksContainer.style.height = 0
        
    })
})
// select links

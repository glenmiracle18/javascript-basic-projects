const preloader = document.querySelector('.preloader');
// preloader functionality
window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader')
});

const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

let playing  = true;
btn.addEventListener('click', () => {
    if (playing) {
        btn.classList.add('slide');
        video.pause();
        playing = false;
        console.log(playing)
    } else {
        btn.classList.remove('slide');
        video.play();
        playing = true;
        console.log(playing)
    }
});

// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

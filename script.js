let player;
let current = 0;
const slides = document.querySelectorAll('.slide');

// This function runs when the YouTube API is ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: '73_C83i2u4M', // Official ID for Somesa Egwanga
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    console.log("Music Ready in Background");
}

function startApp() {
    // 1. Hide Overlay
    document.getElementById('overlay').style.opacity = '0';
    setTimeout(() => { document.getElementById('overlay').style.display = 'none'; }, 1000);

    // 2. Play Internet Music
    if (player) {
        player.playVideo();
    }

    // 3. Start Image Cycle
    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 5000); 
}

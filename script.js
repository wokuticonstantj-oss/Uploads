let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function startApp() {
    // 1. Hide Overlay
    document.getElementById('overlay').style.opacity = '0';
    setTimeout(() => { document.getElementById('overlay').style.display = 'none'; }, 1000);

    // 2. Play Music
    const music = document.getElementById('bg-music');
    music.volume = 0.6;
    music.play();

    // 3. Start Image Cycle
    setInterval(nextSlide, 5000); // Change image every 5 seconds
}

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

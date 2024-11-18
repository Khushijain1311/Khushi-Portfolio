const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '🌜' : '🌞';
});

const fadeInElements = document.querySelectorAll('.fade-in, .slide-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.1 });

fadeInElements.forEach((el) => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

const themeBtn = document.getElementById('themeBtn');
const icon = themeBtn.querySelector('i');

const setTheme = (mode) => {
    const isLight = mode === 'light';
    document.body.classList.toggle('light-mode', isLight);
    icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', mode);
};

themeBtn.addEventListener('click', () => {
    const isNextLight = !document.body.classList.contains('light-mode');
    setTheme(isNextLight ? 'light' : 'dark');
});

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'light') setTheme('light');
});

const navMenu = document.getElementById('navMenu');

document.getElementById('menuToggle').addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') navMenu.classList.remove('active');
});

const typingSpan = document.querySelector('.typing');
const words = ['Pratik Sapkota', 'a Developer', 'a Designer'];
let wordIdx = 0, charIdx = 0, isDeleting = false;

function typeEffect() {
    const current = words[wordIdx];

    charIdx += isDeleting ? -1 : 1;
    typingSpan.textContent = current.substring(0, charIdx);

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIdx === current.length) {
        isDeleting = true;
        delay = 1000; // Pause at full word
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length; // Next word
    }

    setTimeout(typeEffect, delay);
}
typeEffect();

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value;
        const msg = contactForm.querySelector('textarea').value.trim();

        // One combined check instead of three separate blocks
        if (!name) return alert('Please enter your name');
        if (!email.includes('@')) return alert('Please enter a valid email');
        if (!msg) return alert('Please enter a message');

        alert('Message sent successfully! Thank you for reaching out.');
        contactForm.reset();
    });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 50 ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none';
});

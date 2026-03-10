// script.js

// Functionality for smooth scrolling
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
};

// Mobile menu toggle
const toggleMenu = () => {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('active');
};

// Portfolio filtering
const filterPortfolio = (category) => {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
        if (item.classList.contains(category) || category === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
};

// Form handling
const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Process form data as needed
    console.log('Form submitted:', Object.fromEntries(formData));
};

// Scroll animations
const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
};

// Event Listeners
document.querySelector('.mobile-menu-button').addEventListener('click', toggleMenu);
window.addEventListener('scroll', revealOnScroll);
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', handleFormSubmit);
}

// Initialization for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});
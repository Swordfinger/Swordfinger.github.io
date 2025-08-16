// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.timeline-item, .skill-category, .project-card, .education-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize elements with opacity 0 for animation
document.querySelectorAll('.timeline-item, .skill-category, .project-card, .education-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
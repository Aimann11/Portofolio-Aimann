// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Close menu when clicking on nav links
document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('fa-times');
        navbar.classList.remove('active');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
    
    // Show/hide back to top button
    const backToTop = document.querySelector('.back-to-top');
    backToTop.classList.toggle('active', window.scrollY > 500);
});

// Typing Animation
const typed = new Typed('.typing-teks span', {
    strings: ['Web Developer', 'UI/UX Designer', 'Frontend Engineer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Scroll Reveal Animation
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-container, .timeline, .experience-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .skill-item', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Animate progress bars when scrolled to
const skillItems = document.querySelectorAll('.skill-item');

function animateProgressBars() {
    skillItems.forEach(item => {
        const progressBar = item.querySelector('.progress-bar span');
        const percent = parseInt(progressBar.style.width);
        progressBar.style.width = '0';
        
        setTimeout(() => {
            progressBar.style.width = percent + '%';
        }, 200);
    });
}

// Intersection Observer for skills section
const skillsSection = document.querySelector('.skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);

// Form submission
const contactForm = document.querySelector('.contact form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', { name, email });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
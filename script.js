// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  body.setAttribute('data-theme', 'dark');
} else {
  body.removeAttribute('data-theme');
}

themeToggle.addEventListener('click', () => {
  if (body.hasAttribute('data-theme')) {
    body.removeAttribute('data-theme');
    localStorage.removeItem('theme');
  } else {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navList = document.querySelector('.nav-list');

mobileToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll Animations (Fade-in)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.section, .timeline-item, .project-card, .skill-card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Contact Form (basic handling)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Simulate send
  alert('Thank you for your message! I\'ll get back to you soon.');
  contactForm.reset();
});

// Portfolio Project Links (modal simulation)
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Project details coming soon!');
  });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.background = body.hasAttribute('data-theme') 
      ? 'rgba(15, 23, 42, 0.98)' 
      : 'rgba(255, 255, 255, 0.98)';
  } else {
    header.style.background = body.hasAttribute('data-theme') 
      ? 'rgba(15, 23, 42, 0.95)' 
      : 'rgba(255, 255, 255, 0.95)';
  }
});


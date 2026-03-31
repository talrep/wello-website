// ============================================
// WELLO PET HEALTH - WEBSITE SCRIPTS
// ============================================

let currentLang = 'vi';

function applyLang(lang) {
  currentLang = lang;
  document.getElementById('langLabel').textContent = lang === 'en' ? 'VI' : 'EN';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });
  document.title = lang === 'en'
    ? 'Wello Pet Health | Comprehensive Pet Care Solutions for Vet Clinics'
    : 'Wello Pet Health | Giai phap Cham soc Thu cung Toan dien cho Phong kham Thu y';
}

// Language toggle
function toggleLang() {
  applyLang(currentLang === 'en' ? 'vi' : 'en');
}

// Mobile menu toggle
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('active');
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll reveal using CSS classes (no hiding by default)
document.addEventListener('DOMContentLoaded', () => {
  // Apply Vietnamese by default
  applyLang('vi');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.about-card, .product-card, .why-card, .contact-card').forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });

  // Active nav link highlight
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        if (scrollPos >= top && scrollPos < top + height) {
          link.style.color = 'var(--primary)';
          link.style.background = 'rgba(21,101,160,0.06)';
        } else {
          link.style.color = '';
          link.style.background = '';
        }
      }
    });
  });
});

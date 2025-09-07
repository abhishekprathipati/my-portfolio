// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {

  // ===== Theme Toggle =====
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggle.textContent = '☀️';
    }
  });

  // ===== Mobile Menu Toggle =====
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // ===== Scroll Progress Bar =====
  const scrollProgress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
  });

  // ===== Skill Bars Animation =====
  const skills = document.querySelectorAll('.skill-progress');
  const animateSkills = () => {
    skills.forEach(skill => {
      const rect = skill.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        skill.style.width = skill.style.width || skill.getAttribute('style');
      }
    });
  };
  window.addEventListener('scroll', animateSkills);
  animateSkills();

  // ===== Smooth Scroll for Nav Links =====
  const navLinkElements = document.querySelectorAll('.nav-link');
  navLinkElements.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
      if (navLinks.classList.contains('open')) navLinks.classList.remove('open');
    });
  });

  // ===== Navbar Scroll Shadow =====
  const navbar = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // ===== Loading Animation =====
  const loading = document.getElementById('loading');
  window.addEventListener('load', () => {
    if (loading) loading.style.display = 'none';
  });

});

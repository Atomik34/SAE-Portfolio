// elements a animer
const reveals = document.querySelectorAll('.reveal');

// observer pour detecter quand ça apparait
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // animation une seule fois
    }
  });
}, { threshold: 0.1 });

// activer sur chaque element
reveals.forEach(r => observer.observe(r));

/* scroll (déjà geré en css) */

/* effets au scroll */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');

  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 0 50px rgba(99, 102, 241, 0.2)';
  } else {
    nav.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.1)';
  }
});

/* lien actif */
window.addEventListener('scroll', () => {
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const rect = targetSection.getBoundingClientRect();

      if (rect.top <= 200 && rect.bottom > 0) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
});

/* scroll fluide */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    if (href === '#') return;

    e.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* mode sombre */
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode) {
  document.documentElement.setAttribute('data-theme', 'dark');
}
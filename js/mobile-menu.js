const hamburger = document.querySelector('.navbar__hamburger');
const navbar = document.querySelector('.navbar');

function toggleMobileMenu() {
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !isExpanded);
  navbar.classList.toggle('navbar--active');
}

function closeMenu(e) {
  if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
    navbar.classList.remove('navbar--active');
    hamburger.setAttribute('aria-expanded', 'false');
  }
}

function initMobileMenu() {
  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
    document.addEventListener('click', closeMenu);
    document.querySelectorAll('.mobile-menu__link').forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('navbar--active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

export default initMobileMenu;
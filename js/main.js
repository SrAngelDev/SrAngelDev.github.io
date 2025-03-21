import initThemeSwitcher from './theme-switcher.js';
import initMobileMenu from './mobile-menu.js';
import initIntersectionObserver from './intersection-observer.js';
import initFormValidation from './form-validation.js';
import initScreenLoader from './screen-loader.js'; 

// Inicializar todas las funcionalidades
document.addEventListener('DOMContentLoaded', () => {
    initScreenLoader(); 
    initThemeSwitcher();
    initMobileMenu();
    initIntersectionObserver();
    initFormValidation();
});

const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Función para alternar el tema
function toggleTheme() {
    const isDark = body.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    console.log(`Tema cambiado a: ${newTheme}`);
}

// Cargar el tema guardado al cargar la página
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme') || body.getAttribute('data-theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    localStorage.setItem('theme', savedTheme); // Asegurar sincronización con localStorage
    console.log(`Tema cargado: ${savedTheme}`);
}

// Inicializar tema y eventos
function initThemeSwitcher() {
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    loadSavedTheme();
}

export default initThemeSwitcher;

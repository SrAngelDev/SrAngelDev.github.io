export default function initScreenLoader() {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");
    const canvas = document.getElementById("particles-background");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function hideLoader() {
        loader.classList.add("hidden"); // Aplicamos la clase de desvanecimiento
        setTimeout(() => {
            loader.style.display = "none"; // Eliminamos completamente el loader
            mainContent.style.display = "block"; // Mostramos el contenido principal
            mainContent.classList.add("visible"); // Animación del contenido
        }, 0); // Tiempo de transición sincronizado con CSS - remplazar 0 por 1500
    }

    resizeCanvas();

    setTimeout(hideLoader, 0); // remplazar 0 por 5000
}

const animateElements = document.querySelectorAll('[data-aos]');

function initIntersectionObserver() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Dejar de observar después de la animación
                }
            });
        },
        { threshold: 0.1 } // Disparar cuando el 10% del elemento sea visible
    );

    animateElements.forEach((element) => observer.observe(element));
}

export default initIntersectionObserver;
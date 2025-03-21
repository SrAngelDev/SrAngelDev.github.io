const contactForm = document.getElementById('contactForm');

function handleFormSubmit(e) {
    e.preventDefault();

    // Validar campos
    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Simular envío
    alert('Mensaje enviado con éxito. ¡Gracias!');
    contactForm.reset();
}

// Inicializar el formulario
function initFormValidation() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

export default initFormValidation;
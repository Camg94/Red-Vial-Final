// Seleccionamos todos los artículos que contienen los párrafos desplegables
const icons = document.querySelectorAll('.about__icons');

// Agregamos un evento de clic a cada uno de los artículos
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Alternamos la clase 'active' para mostrar u ocultar el párrafo
        icon.classList.toggle('active');

        // Cambiar el icono a "-" cuando se despliega, y "+" cuando se oculta
        const toggleIcon = icon.querySelector('.about__toggle-icon');
        toggleIcon.textContent = icon.classList.contains('active') ? '-' : '+';
    });
});

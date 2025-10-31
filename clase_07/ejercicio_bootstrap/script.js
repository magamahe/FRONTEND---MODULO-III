document.addEventListener('DOMContentLoaded', () => {

    // ------------------------------------------------------------------
    // 1. Lógica del Modo Claro/Oscuro (Theme Toggle) - MANTENIDA
    // ------------------------------------------------------------------
    const htmlTag = document.documentElement;
    const toggleSwitch = document.getElementById('darkModeSwitch');

    // A) Cargar preferencia al inicio
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlTag.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }

    // B) Función para cambiar el tema al hacer clic
    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            htmlTag.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlTag.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    // NOTA: El código original para el Navbar Burger y el Acordeón nativo fue ELIMINADO 
    // porque Bootstrap 5.3 maneja esas interacciones automáticamente con su propio JavaScript.

});
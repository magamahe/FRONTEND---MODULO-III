document.addEventListener('DOMContentLoaded', () => {

    // ------------------------------------------------------------------
    // 1. Lógica del Navbar Burger (Menú Móvil)
    // ------------------------------------------------------------------
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

    // ------------------------------------------------------------------
    // 2. Lógica del Modo Claro/Oscuro (Theme Toggle)
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

    // ------------------------------------------------------------------
    // 3. Lógica del Acordeón Nativo (CORREGIDA)
    // ------------------------------------------------------------------
    const titulos = document.querySelectorAll('.acordeon-titulo');
    
    titulos.forEach(t => t.addEventListener('click', () => {
        const contenido = t.nextElementSibling;
        
        // Alternar entre 'block' (visible) y 'none' (oculto)
        contenido.style.display = (contenido.style.display === 'block') ? 'none' : 'block';
    }));

}); 
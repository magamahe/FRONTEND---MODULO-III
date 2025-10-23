const titulos = document.querySelectorAll('.acordeon-titulo');

titulos.forEach(titulo => {
  titulo.addEventListener('click', () => {
    // Alternar clase activa en el botón
    titulo.classList.toggle('active');

    // Seleccionar el contenido siguiente
    const contenido = titulo.nextElementSibling;

    // Mostrar u ocultar contenido
    contenido.classList.toggle('show');
  });
});

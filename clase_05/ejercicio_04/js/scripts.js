const btnTema = document.getElementById('toggleTema');
const body = document.body;

btnTema.addEventListener('click', () => {
  body.classList.toggle('oscuro');  // Alterna entre oscuro y claro

  // Actualiza el texto del botón según el modo
  if (body.classList.contains('oscuro')) {
    btnTema.textContent = 'Modo Claro';
  } else {
    btnTema.textContent = 'Modo Oscuro';
  }
});

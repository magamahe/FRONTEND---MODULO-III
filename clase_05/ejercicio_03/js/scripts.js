const abrir = document.getElementById('abrirModal');
const cerrar = document.getElementById('cerrarModal');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

// Abrir modal
abrir.addEventListener('click', () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';
});

// Cerrar modal con el botón
cerrar.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

// Cerrar modal al hacer clic en overlay
overlay.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

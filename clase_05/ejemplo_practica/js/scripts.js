/* ===== Sidebar ===== */
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleSidebar');
const closeBtn = document.getElementById('closeSidebar');

toggleBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
closeBtn.addEventListener('click', () => sidebar.classList.remove('open'));

window.addEventListener('click', (e) => {
  if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== toggleBtn) {
    sidebar.classList.remove('open');
  }
});

/* ===== Toggle Tema ===== */
const btnTema = document.getElementById('toggleTema');
btnTema.addEventListener('click', () => {
  document.body.classList.toggle('oscuro');
  btnTema.textContent = document.body.classList.contains('oscuro') ? 'Modo Claro' : 'Modo Oscuro';
});

/* ===== FAQ Collapse ===== */
const preguntas = document.querySelectorAll('.faq-question');
preguntas.forEach(p => p.addEventListener('click', () => {
  const respuesta = p.nextElementSibling;
  respuesta.style.display = (respuesta.style.display === 'block') ? 'none' : 'block';
}));

/* ===== Acordeón ===== */
const titulos = document.querySelectorAll('.acordeon-titulo');
titulos.forEach(t => t.addEventListener('click', () => {
  const contenido = t.nextElementSibling;
  contenido.style.display = (contenido.style.display === 'block') ? 'none' : 'block';
}));

/* ===== Modal de Confirmación ===== */
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const cerrarModal = document.getElementById('cerrarModal');
const confirmarCompra = document.getElementById('confirmarCompra');

const botonesComprar = document.querySelectorAll('.comprar-btn');
botonesComprar.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'block';
    overlay.style.display = 'block';
  });
});

cerrarModal.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

confirmarCompra.addEventListener('click', () => {
  alert('¡Compra confirmada!');
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

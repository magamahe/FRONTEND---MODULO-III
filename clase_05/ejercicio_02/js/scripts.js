const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleSidebar');
const closeBtn = document.getElementById('closeSidebar');
const mainContent = document.querySelector('.main-content');

// Abrir/cerrar con el botón
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  mainContent.classList.toggle('shifted');
});

// Cerrar con la X
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
  mainContent.classList.remove('shifted');
});

// Cerrar al hacer clic fuera del sidebar
window.addEventListener('click', (e) => {
  if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== toggleBtn) {
    sidebar.classList.remove('open');
    mainContent.classList.remove('shifted');
  }
});

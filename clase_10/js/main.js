// Espera a que todo el contenido del DOM (HTML) esté cargado antes de ejecutar las funciones.
document.addEventListener("DOMContentLoaded", () => {
  // =================================================================
  // 1. MANEJO DEL MENÚ MÓVIL (NAVBAR BURGER)
  // =================================================================

  // Selecciona el botón del menú hamburguesa (el icono de tres líneas).
  const navbarBurger = document.querySelector(".navbar-burger");

  // Agrega un listener para manejar el evento click en el botón.
  navbarBurger.addEventListener("click", () => {
    // Obtiene el ID del menú que debe abrir/cerrar desde el atributo 'data-target'.
    const target = navbarBurger.dataset.target;
    // Selecciona el elemento del menú de navegación completo.
    const menu = document.getElementById(target);
    
    // Alterna (toggle) la clase 'is-active' en el botón para cambiar su apariencia.
    navbarBurger.classList.toggle("is-active");
    // Alterna la clase 'is-active' en el menú para mostrarlo u ocultarlo.
    menu.classList.toggle("is-active");
  });

  // =================================================================
  // 2. VERIFICACIÓN Y GESTIÓN DE SESIÓN
  // =================================================================
  
  // Intenta obtener la información del usuario ('currentUser') de dos lugares:
  // 1. localStorage (si marcó "Recordarme") o 
  // 2. sessionStorage (si NO marcó "Recordarme").
  // Si encuentra la sesión en cualquiera de ellos, la variable 'currentUser' tendrá un valor.
  const currentUser =
    localStorage.getItem("currentUser") ||
    sessionStorage.getItem("currentUser");

  // Si 'currentUser' existe (el usuario está logueado):
  if (currentUser) {
    // Oculta el botón 'Login' principal.
    document.getElementById("login-button").classList.add("is-hidden");
    // Oculta el enlace 'Login' en la barra de navegación (si existe).
    document.getElementById("login-link-nav").classList.add("is-hidden");
    // Muestra el botón 'Logout' (Cerrar Sesión).
    document.getElementById("logout-button").classList.remove("is-hidden");
  } else {
    // Si 'currentUser' es nulo (el usuario NO está logueado):
    // Muestra el botón 'Login' principal.
    document.getElementById("login-button").classList.remove("is-hidden");
    // Muestra el enlace 'Login' en la barra de navegación.
    document.getElementById("login-link-nav").classList.remove("is-hidden");
    // Oculta el botón 'Logout'.
    document.getElementById("logout-button").classList.add("is-hidden");
  }
});

// =================================================================
// 3. FUNCIÓN DE CERRAR SESIÓN (LOGOUT)
// =================================================================

// Función que se llama cuando el usuario hace clic en "Cerrar Sesión".
function handleLogout(event) {
  // Previene que el enlace navegue a otra página antes de procesar el logout.
  event.preventDefault();
  
  // Elimina la sesión del localStorage (para usuarios que marcaron "Recordarme").
  localStorage.removeItem("currentUser");
  // Elimina la sesión del sessionStorage (para usuarios que NO marcaron "Recordarme").
  sessionStorage.removeItem("currentUser");
  
  // Recarga la página para que se vuelva a ejecutar la lógica de sesión (punto 2),
  // detecte que ya no hay usuario y muestre los botones de 'Login'.
  window.location.reload();
}
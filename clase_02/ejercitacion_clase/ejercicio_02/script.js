// Seleccionamos los elementos del DOM
const boton = document.getElementById('publicarBtn');
const input = document.getElementById('mensaje');
const feed = document.getElementById('feed');

// Evento de clic sobre el botón
boton.onclick = () => {
  // Verificar que el input no esté vacío
  if (input.value.trim() === "") {
    alert("⚠️ Por favor, escribí un mensaje antes de publicar.");
    return;
  }

  // Crear el contenedor de la publicación
  const publicacion = document.createElement("article");
  publicacion.classList.add("publicacion");

  // Crear contenido con Template String e innerHTML
  const ahora = new Date();
  publicacion.innerHTML = `
    <p>${input.value}</p>
    <p class="fecha">🕓 Publicado el ${ahora.toLocaleTimeString()}</p>
  `;

  // Insertar la publicación en el feed
  feed.appendChild(publicacion);

  // Limpiar el input
  input.value = "";

  // Enfocar nuevamente el input para escribir otro mensaje
  input.focus();
};

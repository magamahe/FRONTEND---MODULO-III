// =====================
// CREAR ELEMENTOS CON DOM
// =====================

// 1️⃣ Crear un título <h1>
const titulo = document.createElement("h1");
titulo.textContent = "Evitar Comportamiento por Defecto con DOM";

// 2️⃣ Agregar el título al body
document.body.appendChild(titulo);

// 3️⃣ Crear un párrafo explicativo
const parrafo = document.createElement("p");
parrafo.textContent = "Haz clic en el enlace de abajo. Se mostrará un mensaje y no se redirigirá automáticamente.";

// 4️⃣ Agregar el párrafo al body
document.body.appendChild(parrafo);

// 5️⃣ Crear el enlace <a>
const enlace = document.createElement("a");
enlace.href = "https://www.google.com"; // URL externa
enlace.textContent = "Ir a Google";
enlace.id = "enlace"; // para identificarlo si queremos

// 6️⃣ Agregar el enlace al body
document.body.appendChild(enlace);

// 7️⃣ Crear un contenedor para mensajes dinámicos
const contenedorMensajes = document.createElement("div");
contenedorMensajes.id = "mensajes";
document.body.appendChild(contenedorMensajes);

// =====================
// AGREGAR EVENTOS
// =====================

// 8️⃣ Capturar clic en el enlace
enlace.addEventListener("click", function(event) {
    // Detener la acción por defecto (evita ir a Google)
    event.preventDefault();

    // Mostrar mensaje en consola
    console.log("Clic en el enlace detectado, redirección detenida");

    // Mostrar mensaje en pantalla
    const msg = document.createElement("p");
    msg.textContent = "Clic detectado: la redirección ha sido detenida.";
    contenedorMensajes.appendChild(msg);
});



 /* 
 1️⃣ ¿Cómo puedes capturar el evento de clic en el enlace?
Usando addEventListener("click", callback) sobre el elemento <a>. 

2️⃣ ¿Qué sucede si no usas preventDefault()?
El navegador realiza la acción por defecto del enlace, es decir: navega a la URL indicada en href.
Por ejemplo, si el enlace apunta a Google, sin preventDefault(), al hacer clic se abrirá Google inmediatamente y no podremos mostrar mensajes o detener la acción.

3️⃣ ¿Cómo podrías permitir la redirección solo si el usuario confirma su acción?
Usando confirm() dentro del evento y preventDefault() solo si el usuario cancela:

// Versión avanzada: permitir redirección solo si el usuario confirma
/*  enlace.addEventListener("click", function(event) {
     if (!confirm("¿Deseas realmente ir a Google?")) {
         event.preventDefault(); */ // si el usuario cancela, detenemos redirección
         /* const msg = document.createElement("p");
         msg.textContent = "Redirección cancelada por el usuario";
         contenedorMensajes.appendChild(msg);
     }
 });

- Si el usuario hace clic en Aceptar, la redirección ocurre normalmente.
- Si hace clic en Cancelar, preventDefault() evita que se abra la página.
 */



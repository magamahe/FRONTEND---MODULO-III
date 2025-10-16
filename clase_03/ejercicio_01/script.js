// =====================
// CREAR ELEMENTOS CON DOM
// =====================

// 1️⃣ Crear un título <h1>
const titulo = document.createElement("h1"); // Crea un elemento h1 en memoria
titulo.textContent = "Practicando Eventos con DOM"; // Le agregamos texto

// 2️⃣ Agregar el título al body
document.body.appendChild(titulo); // Insertamos el h1 en la página

// 3️⃣ Crear un párrafo <p>
const parrafo = document.createElement("p"); // Crea un p
parrafo.textContent = "Haz clic en cualquier parte de la página para ver el elemento en consola."; // Texto del párrafo

// 4️⃣ Agregar el párrafo al body
document.body.appendChild(parrafo); // Insertamos el p en la página

// 5️⃣ Crear un contenedor <div>
const contenedor = document.createElement("div"); // Crea un div
contenedor.style.border = "1px solid black"; // Le damos estilo desde JS (temporal)
contenedor.style.padding = "10px"; // Espaciado
contenedor.style.marginTop = "10px"; // Margen superior
contenedor.textContent = "Soy un contenedor (div). Dentro habrá otros elementos."; // Texto

// 6️⃣ Agregar el contenedor al body
document.body.appendChild(contenedor);

// 7️⃣ Crear un botón normal
const boton1 = document.createElement("button"); // Crea un botón
boton1.textContent = "Botón 1"; // Texto del botón

// 8️⃣ Agregar el botón dentro del div contenedor
contenedor.appendChild(boton1);

// 9️⃣ Crear un botón especial
const botonEspecial = document.createElement("button"); // Crea otro botón
botonEspecial.textContent = "Botón Especial"; // Texto
botonEspecial.classList.add("especial"); // Le agregamos una clase para identificarlo

// 🔟 Agregar el botón especial dentro del div contenedor
contenedor.appendChild(botonEspecial);

// ✅ HASTA AQUÍ: ya creamos estructura básica usando DOM.
// Lo siguiente será agregar eventos para practicar clics.

// =====================
// AGREGAR EVENTOS
// =====================

// =====================
// MOSTRAR CLICS EN PANTALLA
// =====================

// 1️⃣ Crear un contenedor para mostrar los mensajes
const mensajes = document.createElement("div");
mensajes.style.marginTop = "20px"; // Separación del contenedor principal
document.body.appendChild(mensajes);

// 2️⃣ Función para mostrar mensaje en pantalla
function mostrarMensaje(texto) {
    const msg = document.createElement("p"); // Cada mensaje es un párrafo
    msg.textContent = texto;
    msg.style.backgroundColor = "#ffe4e1"; // Color pastel
    msg.style.padding = "5px 10px";
    msg.style.borderRadius = "5px";
    msg.style.marginBottom = "5px";
    mensajes.appendChild(msg);
}

// 3️⃣ Evento para clic en toda la página
document.body.addEventListener("click", function(event) {
    console.log("Clic en la página:", event.target);
    mostrarMensaje("Clic en la página: " + event.target.tagName); // Mostrar el tipo de elemento
});

// 4️⃣ Evento para clic en Botón 1
boton1.addEventListener("click", function(event) {
    console.log("Clic en Botón 1");
    mostrarMensaje("Clic en Botón 1");
    event.stopPropagation(); // Evita que se registre también en body
});

// 5️⃣ Evento para clic en Botón Especial
botonEspecial.addEventListener("click", function(event) {
    console.log("Clic en Botón Especial");
    mostrarMensaje("Clic en Botón Especial");
    event.stopPropagation();
});


/* 
1️⃣ ¿Cómo puedes capturar el evento de clic en toda la página?
Puedes agregar un listener de eventos al elemento document.body o incluso a document usando addEventListener("click", callback).

2️⃣ ¿Qué propiedad del evento te dice qué elemento fue clickeado?
La propiedad es event.target.
event.target devuelve el elemento exacto sobre el que hiciste clic.

3️⃣ ¿Cómo podrías hacer que solo se muestren los clics en botones específicos?
Puedes seleccionar solo los botones que te interesan con document.querySelectorAll o getElementById y luego agregarles un listener.
También puedes usar una clase específica para identificarlos. 
*/
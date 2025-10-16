// =====================
// CREAR ELEMENTOS CON DOM
// =====================

// 1️⃣ Título
const titulo = document.createElement("h1");
titulo.textContent = "Detección de Teclas Presionadas";
document.body.appendChild(titulo);

// 2️⃣ Input de texto
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Escribe algo y presiona teclas";
document.body.appendChild(input);

// 3️⃣ Contenedor para mensajes en pantalla
const contenedorMensajes = document.createElement("div");
contenedorMensajes.id = "mensajes";
document.body.appendChild(contenedorMensajes);

// =====================
// EVENTOS DE TECLADO
// =====================

// 4️⃣ keydown: se dispara cuando se presiona cualquier tecla
input.addEventListener("keydown", function(event) {
    console.log("keydown - Tecla presionada:", event.key);
});

// 5️⃣ keyup: se dispara cuando se suelta la tecla
input.addEventListener("keyup", function(event) {
    console.log("keyup - Tecla soltada:", event.key);
});

// 6️⃣ keypress: se dispara al presionar teclas que generan caracteres (obsoleto, pero funciona en algunos navegadores)
input.addEventListener("keypress", function(event) {
    console.log("keypress - Tecla presionada (carácter):", event.key);
});

// 7️⃣ Mostrar mensaje solo cuando se presiona "Enter"
input.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        const msg = document.createElement("p");
        msg.textContent = "Has presionado Enter!";
        contenedorMensajes.appendChild(msg);
    }
});

// 8️⃣ Ejemplo: solo ciertas teclas disparan un evento específico
input.addEventListener("keydown", function(event) {
    if(event.key === "a" || event.key === "A") {
        console.log("Se presionó la tecla A");
    }
});

/* ✅ Preguntas para reflexionar

1. ¿Qué diferencia hay entre keydown, keypress y keyup?
- keydown: se dispara al presionar cualquier tecla, incluso Shift, Ctrl, etc.
- keypress: se dispara solo para teclas que generan caracteres, es más limitado y está obsoleto.
- keyup: se dispara cuando se suelta la tecla.

2. ¿Cómo podrías hacer que solo ciertas teclas disparen un evento específico?
Comprobando event.key dentro del listener:
    if(event.key === "a") { /* acción  } 


3. ¿Cómo podrías mostrar un mensaje en la página cuando se presiona la tecla "Enter"?

Dentro de un keydown o keyup, comprobando event.key === "Enter" y agregando un elemento <p> al DOM, como hicimos en el ejemplo. */
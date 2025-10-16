// =====================
// CREAR ELEMENTOS CON DOM
// =====================

// 1️⃣ Título
const titulo = document.createElement("h1");
titulo.textContent = "Teclas Presionadas Visual";
document.body.appendChild(titulo);

// 2️⃣ Input de texto
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Escribe algo y mira las teclas";
document.body.appendChild(input);

// 3️⃣ Contenedor para mostrar teclas presionadas
const contenedorTeclas = document.createElement("div");
contenedorTeclas.id = "teclas";
document.body.appendChild(contenedorTeclas);

// =====================
// FUNCIONES AUXILIARES
// =====================

// Función para generar un color aleatorio
function colorAleatorio() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// =====================
// EVENTOS DE TECLADO
// =====================

// keydown: detectar cuando se presiona una tecla
input.addEventListener("keydown", function(event) {
    console.log("Tecla presionada:", event.key);

    // Crear un elemento para mostrar la tecla
    const tecla = document.createElement("div");
    tecla.classList.add("tecla");
    tecla.textContent = event.key;

    // Asignar un color aleatorio
    tecla.style.backgroundColor = colorAleatorio();

    // Agregar la tecla al contenedor
    contenedorTeclas.appendChild(tecla);
});

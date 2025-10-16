// =====================
// CREAR DIVS CON DOM
// =====================

// 1️⃣ Div abuelo
const abuelo = document.createElement("div");
abuelo.id = "abuelo";
abuelo.textContent = "Abuelo";
document.body.appendChild(abuelo);

// 2️⃣ Div padre dentro del abuelo
const padre = document.createElement("div");
padre.id = "padre";
padre.textContent = "Padre";
abuelo.appendChild(padre);

// 3️⃣ Div hijo dentro del padre
const hijo = document.createElement("div");
hijo.id = "hijo";
hijo.textContent = "Hijo (haz clic aquí)";
padre.appendChild(hijo);

// =====================
// AGREGAR EVENTOS DE CLIC
// =====================

// Evento en abuelo
abuelo.addEventListener("click", function() {
    console.log("Clic en Abuelo");
});

// Evento en padre
padre.addEventListener("click", function() {
    console.log("Clic en Padre");
});

// Evento en hijo con stopPropagation()
hijo.addEventListener("click", function(event) {
    console.log("Clic en Hijo");
    event.stopPropagation(); // Evita que el clic suba a padre y abuelo
});


/* 
✅ Preguntas para reflexionar

1. ¿Qué sucede cuando haces clic en el div hijo sin stopPropagation()?
El evento se propaga hacia los padres, por lo que se ejecutan los eventos de hijo → padre → abuelo.
En consola verías:
    Clic en Hijo
    Clic en Padre
    Clic en Abuelo

2. ¿Qué cambia al agregar stopPropagation() en el hijo?
El evento no sube a los padres, solo se ejecuta el evento del hijo.
En consola verías únicamente:
    Clic en Hijo


3. ¿Cómo podrías usar esta técnica en un proyecto real?
Cuando tienes elementos anidados con clics distintos, pero quieres que al hacer clic en un hijo no se ejecute la acción del padre.
Ejemplos:
- Un menú desplegable dentro de un botón, donde clic en el menú no cierra el botón.
- Formularios dentro de modales: clic en el formulario no cierra el modal.
- Galerías con elementos clickeables dentro de un contenedor clickeable.
*/
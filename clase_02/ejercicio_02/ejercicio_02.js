const contenedor = document.getElementById("contenedor");
const btnAgregar = document.getElementById("btnAgregar");

// Array de textos aleatorios
const textos = [
    "Hola mundo",
    "JavaScript es divertido",
    "DOM dinámico",
    "Aprendiendo JS",
    "Ejercicio interactivo"
];

btnAgregar.addEventListener("click", () => {
    // Crear un nuevo párrafo
    const nuevoParrafo = document.createElement("p");

    // Elegir un texto aleatorio
    const textoAleatorio = textos[Math.floor(Math.random() * textos.length)];
    nuevoParrafo.textContent = textoAleatorio;

    // Agregar el párrafo al contenedor
    contenedor.appendChild(nuevoParrafo);
});

/* 💡 Tips:

1️⃣ ¿Qué método de JavaScript puedes usar para crear un nuevo elemento?

Puedes usar document.createElement("tag"), por ejemplo document.createElement("p") para crear un párrafo nuevo.

2️⃣ ¿Cómo puedes agregar ese nuevo elemento dentro del div?

Usando appendChild() sobre el contenedor:

contenedor.appendChild(nuevoElemento);


3️⃣ ¿Cómo podrías hacer que el texto del párrafo sea aleatorio en cada clic?

Crear un array con textos posibles y seleccionar uno al azar con Math.random():

const textos = ["Texto 1", "Texto 2", "Texto 3"];
nuevoParrafo.textContent = textos[Math.floor(Math.random() * textos.length)]; */
// =====================
// CREAR ELEMENTOS CON DOM
// =====================

// 1️⃣ Crear un título
const titulo = document.createElement("h1");
titulo.textContent = "Resaltando Elementos con Mouse";
document.body.appendChild(titulo);

// 2️⃣ Crear una lista <ul>
const lista = document.createElement("ul");
document.body.appendChild(lista);

// 3️⃣ Palabras para la lista
const palabras = ["HTML", "CSS", "JavaScript", "DOM", "Eventos", "Front-End"];

// 4️⃣ Colores diferentes para cada elemento al pasar el mouse
const colores = ["#ff9999", "#ffcc99", "#ffff99", "#ccff99", "#99ffcc", "#99ccff"];

// 5️⃣ Crear los elementos <li> dinámicamente
palabras.forEach((palabra, index) => {
    const li = document.createElement("li");
    li.textContent = palabra;
    
    // Guardamos el color original
    const colorOriginal = li.style.backgroundColor;

    // =====================
    // EVENTOS DEL MOUSE
    // =====================

    // mouseover: cambiar color al pasar el mouse
    li.addEventListener("mouseover", function() {
        li.style.backgroundColor = colores[index % colores.length]; // color diferente según índice
    });

    // mouseout: volver al color original al salir el mouse
    li.addEventListener("mouseout", function() {
        li.style.backgroundColor = "#ffe4e1"; // color inicial
    });

    // Agregar el <li> a la lista
    lista.appendChild(li);
});


/* 

1️⃣ ¿Cómo puedes capturar el evento de mouseover en cada elemento?
Usando addEventListener("mouseover", callback) en cada <li> de la lista

2️⃣ ¿Cómo puedes hacer que el color original se recupere al salir el mouse?
Usando el evento mouseout para restaurar el color inicial:


3️⃣ ¿Cómo podrías hacer que cada elemento tenga un color diferente al pasar el mouse?
Creando un array de colores y asignando uno según el índice del elemento.
También podrías generar colores aleatorios dentro del evento si quieres más variabilidad.
*/

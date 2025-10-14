const nombreInput = document.getElementById("nombre");
const descripcionInput = document.getElementById("descripcion");
const btnCrear = document.getElementById("btnCrear");
const btnEliminarUltima = document.getElementById("btnEliminarUltima");
const contenedor = document.getElementById("contenedorTarjetas");

// Función para generar un color aleatorio
function colorAleatorio() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

btnCrear.addEventListener("click", () => {
    const nombre = nombreInput.value.trim();
    const descripcion = descripcionInput.value.trim();

    if (!nombre || !descripcion) {
        alert("Por favor completa ambos campos");
        return;
    }

    // Crear el div de la tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.style.backgroundColor = colorAleatorio();

    // Crear contenido con template strings
    tarjeta.innerHTML = `
        <h2>${nombre}</h2>
        <p>${descripcion}</p>
    `;

    // Botón para eliminar esta tarjeta
    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar tarjeta";
    btnEliminar.addEventListener("click", () => {
        tarjeta.remove();
    });

    tarjeta.appendChild(btnEliminar);
    contenedor.appendChild(tarjeta);

    // Limpiar inputs
    nombreInput.value = "";
    descripcionInput.value = "";
});

btnEliminarUltima.addEventListener("click", () => {
    const tarjetas = contenedor.getElementsByClassName("tarjeta");
    if (tarjetas.length > 0) {
        tarjetas[tarjetas.length - 1].remove();
    } else {
        alert("No hay tarjetas para eliminar");
    }
});


/* 💡 Tips: Respuestas a las preguntas de reflexión

1️⃣ ¿Cómo puedes estructurar la tarjeta para que se vea bien sin usar CSS?

Usando etiquetas HTML con jerarquía visual: <div> como contenedor, <h2> para el nombre y <p> para la descripción.

Se pueden usar atributos como border y padding directamente en style si quieres algo mínimo.

Separadores como <hr> ayudan a distinguir tarjetas sin CSS.

2️⃣ ¿Cómo podrías permitir que la usuaria cree varias tarjetas sin borrar las anteriores?

Tener un contenedor principal (<div id="contenedor">) y agregar cada nueva tarjeta con appendChild() en lugar de reemplazar el contenido.

Esto mantiene todas las tarjetas anteriores y solo añade la nueva al final.

3️⃣ ¿Cómo podrías agregar un botón en cada tarjeta para eliminarla individualmente?

Crear un <button> dentro de cada tarjeta y asociarle un evento click que ejecute tarjeta.remove().

Así, cada botón elimina únicamente la tarjeta a la que pertenece, sin afectar las demás. */
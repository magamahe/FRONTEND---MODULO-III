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




/* // **🔥 Desafío Extra:**

// * **Agrega un botón "Eliminar Última Tarjeta"** que borre la última tarjeta creada.
// * **Modifica el color de fondo de cada tarjeta de forma aleatoria al crearse.**

// Lo primero que hago es guardar en variables los elementos del HTML con los que voy a trabajar.
const nombre = document.getElementById('nombre');
const descripcion = document.getElementById('descripcion');
const boton = document.getElementById('crear');
const eliminarUltima = document.getElementById('eliminar');

// Primero selecciono el body.
const body = document.querySelector('body');

// Ahora creo mi div contenedor con createElement.
const contenedor = document.createElement('div');

// Agrego unas clases css.
contenedor.classList.add('centrado', 'row');

// Agrego este nuevo div al body para que realmente aparezca en la página.
body.appendChild(contenedor);

// Esta función es para el desafío extra del color.
// Me va a dar un número al azar entre 0 y 255, que es lo que necesita el RGB.
function generarNumeroAleatorio() {
    // Math.random() me da un número entre 0 y 1.
    // Lo multiplico por 256 para que me dé hasta 255.99...
    // y con Math.floor() le quito los decimales (Redondeo).
    return Math.floor(Math.random() * 256);
}

// Le asigno una función al evento 'onclick' de mi botón.
boton.onclick = () => {
    // Primero, tengo que "capturar" lo que el usuario escribió en los inputs.
    // Para eso, uso la propiedad .value.
    let valorNombre = nombre.value;
    let valorDescripcion = descripcion.value;

    // Una pequeña validación. No quiero crear tarjetas vacías.
    // Uso .trim() para quitar espacios en blanco.
    if (valorNombre.trim() === '' || valorDescripcion.trim() === '') {
        // Si algo está vacío, muestro una alerta y no sigo adelante.
        alert(`Los campos no pueden estar vacios.`);
        return; // El 'return' detiene la función aquí.
    }

    // Uso createElement para crear un 'article'.
    const tarjeta = document.createElement('article');
    tarjeta.classList.add('tarjeta'); // Le pongo su clase para los estilos.

    // --- Parte del Desafío Extra: Color Aleatorio ---
    // Llamo a mi función tres veces para tener los tres valores de RGB.
    let r = generarNumeroAleatorio();
    let g = generarNumeroAleatorio();
    let b = generarNumeroAleatorio();

    // Construyo el string de CSS para el color
    let colorRandom = `rgb(${r},${g},${b})`;

    // Y se lo aplico directamente al estilo de la tarjeta que acabo de crear.
    tarjeta.style.background = colorRandom;

    // Ahora le meto el contenido a la tarjeta.
    // Uso Template Strings (los backticks ``)  para poner mis variables adentro con ${}.
    tarjeta.innerHTML = `
        <h2>${valorNombre}</h2>
        <p>${valorDescripcion}</p>
    `;

    // Ahora tengo que crear el botón para eliminar ESTA tarjeta en particular.
    const button = document.createElement('button');
    button.classList.add('boton');
    button.innerHTML = 'Eliminar';

    // A este nuevo botón también le pongo su propio evento onclick.
    button.onclick = (event) => {
        // 'event' es un objeto que me dice todo sobre el evento.
        // 'event.target' es el elemento exacto donde hice clic (o sea, este botón).
        // 'parentElement' me da el padre de ese botón, que es ¡la tarjeta!
        const tarjetaSeleccionada = event.target.parentElement;

        // Ahora le digo al contenedor grande que elimine a uno de sus hijos, que es la tarjeta que acabo de encontrar.
        contenedor.removeChild(tarjetaSeleccionada);
    }

    // Agrego el botón a la tarjeta.
    tarjeta.appendChild(button);

    // Y finalmente, agrego la tarjeta completa (con título, párrafo y botón)
    // a mi div contenedor.
    contenedor.appendChild(tarjeta);

    // Para que la experiencia sea mejor, limpio los inputs después de crear la tarjeta.
    nombre.value = '';
    descripcion.value = '';

    // Y pongo el cursor de nuevo en el primer input, listo para la siguiente tarjeta.
    nombre.focus();
}

// --- Parte del Desafío Extra: Eliminar la última tarjeta ---
// Le asigno una función al evento onclick del botón "Eliminar Última".
eliminarUltima.onclick = () => {
    // Primero, necesito saber cuántas tarjetas hay.
    // 'contenedor.children' me da una lista de todos los elementos hijos (las tarjetas).
    const tarjetas = contenedor.children;

    // Si no hay tarjetas, mejor no hacer nada para evitar un error.
    if (tarjetas.length === 0) {
        alert("No hay tarjetas para eliminar.");
        return;
    }

    // El índice del último elemento es siempre la cantidad de elementos menos 1
    const indiceUltimoElemento = tarjetas.length - 1;

    // Ahora le digo al contenedor que elimine al hijo que está en esa última posición.
    contenedor.removeChild(tarjetas[indiceUltimoElemento]);
} */
const inputNombre = document.getElementById("nombre");
const btnMostrar = document.getElementById("btnMostrar");
const mensajeDiv = document.getElementById("mensaje");

btnMostrar.addEventListener("click", () => {
    const nombre = inputNombre.value || "invitada";

    // Usamos Template Strings con backticks ``
    const mensaje = `Hola ${nombre}, hoy es ${new Date().toLocaleDateString()}, bienvenida a la clase de DOM!`;

    // Insertamos el mensaje en el div
    mensajeDiv.innerText = mensaje;

    // Cambiamos estilo para hacerlo más visible
    mensajeDiv.style.backgroundColor = "#d1ffd6"; // Verde claro
    mensajeDiv.style.fontWeight = "bold";
});


/* 💡 Tips:

Las Template Strings usan backticks ` `, no comillas simples ' ' ni dobles " ".

1️⃣ ¿Por qué no podemos usar comillas simples o dobles en lugar de los backticks (`)?

Porque los backticks permiten interpolación de variables usando ${variable} dentro del string, mientras que las comillas simples o dobles solo crean texto plano.

Con comillas normales, tendrías que usar concatenación (+) para insertar valores dinámicos.

2️⃣ ¿Cómo podrías agregar más información en el mensaje sin concatenar con +?

Simplemente agregando más texto dentro del Template String y usando ${variable} para insertar las variables donde quieras.

Por ejemplo:

`Hola ${nombre}, bienvenida a la clase de JavaScript! Hoy es ${fecha}.` */
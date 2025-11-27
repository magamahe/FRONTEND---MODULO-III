const formulario = document.querySelector("#formulario");
const estado = document.querySelector("#estado");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();  // Evita que se recargue la página

    // Datos que envío a la API
    const post = {
        title: document.querySelector("#titulo").value,
        body: document.querySelector("#contenido").value
    };

    estado.textContent = "Enviando...";

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(data => {
            estado.textContent = "¡Post creado!";
            console.log("Respuesta del servidor:", data);
        })
        .catch(error => {
            estado.textContent = "Error al enviar";
            console.error("Hubo un error:", error);
        });
});


/* Qué está pasando (explicación para entregar)
- El usuario completa un formulario con un título y contenido.
- Al apretar “Enviar”, se arma un objeto con esos datos.
- Se hace un fetch con:
    method: "POST"
    headers indicando que envío JSON
    body: JSON.stringify(post)
- Mientras se envía se muestra:
    "Enviando..."
- Si la respuesta llega correctamente:
    "¡Post creado!"
-   Si hay un error:
    "Error al enviar" */
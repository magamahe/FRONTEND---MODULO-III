const lista = document.getElementById("lista");
const estado = document.getElementById("estado");

// Mostrar "Cargando..." mientras llega la respuesta
estado.textContent = "Cargando...";

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
        // Cuando llegan los datos, borro el mensaje y los muestro
        estado.textContent = "";

        posts.forEach(post => {
            const li = document.createElement("li");
            li.textContent = post.title;
            lista.appendChild(li);
        });
    })
    .catch(err => {
        // Si algo falla, muestro mensaje de error
        estado.textContent = "Error al cargar los posts";
        console.error(err);
    });


    /* La página arranca mostrando "Cargando...".
    Se hace una petición GET a la API pública:
        https://jsonplaceholder.typicode.com/posts

    Si responde bien:
        Se oculta el mensaje de carga.
        Se crea un <li> por cada título de post.
    Si ocurre un error:
        El mensaje cambia a "Error al cargar los posts".
        El error se muestra en la consola. */
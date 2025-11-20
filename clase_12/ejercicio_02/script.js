// script.js
const lista = document.getElementById('lista-posts');
const mensaje = document.getElementById('mensaje');

// Mostramos mensaje de carga
mensaje.textContent = "Cargando...";

// Consumir API con promesas (.then / .catch)
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        // Verificar si la respuesta HTTP es exitosa
        if (!response.ok) {
            throw new Error("Error al cargar los datos");
        }
        return response.json(); // Parsear JSON
    })
    .then(posts => {
        // Limpiar mensaje
        mensaje.textContent = "";
        
        // Renderizar lista
        posts.forEach(post => {
            const li = document.createElement('li');
            li.textContent = post.title;
            lista.appendChild(li);
        });
    })
    .catch(error => {
        // Manejo de errores
        mensaje.textContent = "Ocurrió un error: " + error.message;
        mensaje.style.color = "red";
    });
const form = document.getElementById('postForm');
const statusDiv = document.getElementById('status');

// Event Listener con función ASYNC
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevenir recarga
    
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    // Mostrar estado de carga
    statusDiv.textContent = "Enviando...";

    try {
        // AWAIT fetch
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({ title, body, userId: 1 }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        });

        // Verificar respuesta
        if (response.ok) {
            statusDiv.textContent = "¡Post creado!";
            form.reset(); // Limpiar formulario
            setTimeout(() => {
                statusDiv.textContent = "";
            }, 2000);
        } else {
            statusDiv.textContent = "Error al crear post";
        }

    } catch (error) {
        // Manejo de errores de red
        console.error(error);
        statusDiv.textContent = "Error de conexión";
    }
});
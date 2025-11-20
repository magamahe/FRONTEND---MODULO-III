
const resultado = document.getElementById('resultado');
// Referencia al botón para poder modificar su texto y clases
const boton = document.querySelector('button'); 

async function cargarDatos() {
    // 1. Estado "Intentando conectar" (Deshabilitado, gris y girando)
    resultado.textContent = "Intentando conectar...";
    resultado.className = ""; // Limpiar clases previas
    
    // Deshabilitar el botón, cambiar texto y añadir la clase 'loading'
    boton.disabled = true;
    boton.innerHTML = '<span class="spinner">↻</span> Intentando conectar...';
    boton.classList.add('loading');
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/INVALIDO');
        
        if (!response.ok) {
            throw new Error('La API respondió con error ' + response.status);
        }

        const data = await response.json();
        
        // 2. Estado "Éxito"
        resultado.textContent = "✅ Datos cargados correctamente";
        resultado.classList.remove("error-box");
        
        // Restaurar botón a estado normal (o un estado de éxito si lo deseas)
        boton.disabled = false;
        boton.innerHTML = 'Reintentar';
        boton.classList.remove('loading');

    } catch (error) {
        // ... (Tu lógica de error se mantiene igual) ...
        console.error("Error capturado:", error);
        
        // 3. Estado "Error"
        const mensajeError = 'No se pudieron cargar los datos. Intente más tarde.';
        resultado.innerHTML = `
            <div class="error-content">
                <span class="error-title">⚠️ Error Detectado</span>
                <span class="error-message">${mensajeError}</span>
            </div>
        `;
        resultado.classList.add("error-box");
        
        // Restaurar botón a estado "Reintentar"
        boton.disabled = false;
        boton.innerHTML = 'Reintentar';
        boton.classList.remove('loading');
    }
}

// Ejecutar al cargar
cargarDatos();
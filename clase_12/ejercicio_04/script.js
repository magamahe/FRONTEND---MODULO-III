// script.js
const btn = document.getElementById('btnTimer');
const mensaje = document.getElementById('mensaje');
const icono = document.getElementById('icono');

btn.addEventListener('click', () => {
    // 1. Deshabilitar botón
    btn.disabled = true;
    
    // 2. Mostrar estado de "Esperando" (Reloj)
    mensaje.textContent = "Espere 3 segundos...";
    btn.textContent = "Esperando...";
    icono.textContent = "⏰"; 

    // 3. Iniciar temporizador
    setTimeout(() => {
        // 4. Pasado el tiempo: Habilitar botón y cambiar mensaje
        btn.disabled = false;
        btn.textContent = "Iniciar Temporizador";
        mensaje.textContent = "¡Listo!";
        mensaje.style.color = "#16a34a"; // Verde
        
        // 5. Cambiar icono al "Dedito" (Thumbs Up)
        icono.textContent = "👍"; 
    }, 3000); // 3000 ms = 3 segundos
});
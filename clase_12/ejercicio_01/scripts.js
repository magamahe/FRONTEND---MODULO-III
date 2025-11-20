// script.js
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    // 1. Tarea Síncrona
    console.log("Inicio");

    // 2. Tarea Asíncrona (se va a la Web API -> Callback Queue)
    setTimeout(() => {
        console.log("Timeout");
    }, 0);

    // 3. Tarea Síncrona
    console.log("Fin");
});

// Explicación:
// El Event Loop no ejecutará el callback del setTimeout 
// hasta que el Call Stack (pila principal) esté vacío.
// Por eso "Timeout" aparece al final.
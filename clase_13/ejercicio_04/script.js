const estado = document.querySelector("#estado");
const retry = document.querySelector("#retry");

function cargarDatos() {
    estado.textContent = "Cargando...";
    retry.style.display = "none";

    // URL incorrecta para provocar error
   fetch("https://jsonplaceholder.typicode.com/INVALIDO")
    .then(res => {
        if (!res.ok) {
            // Esto fuerza un error para que vaya al catch
            throw new Error("Error HTTP: " + res.status);
        }
        return res.json();
    })
    .then(data => {
        estado.textContent = "Datos cargados correctamente";
    })
    .catch(err => {
        console.error(err);
        estado.textContent = "No se pudieron cargar los datos";
        retry.style.display = "inline";
    });}

retry.addEventListener("click", cargarDatos);

// Ejecuta al inicio
cargarDatos();

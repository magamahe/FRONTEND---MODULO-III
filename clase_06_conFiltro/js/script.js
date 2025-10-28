// 1) Referencias al DOM (Refactorizado: mejor nombre y query para el botón de borrar)
const formulario = document.getElementById("formulario");
const inputTarea = document.getElementById("tarea");
const selectCategoria = document.getElementById("categoria");
const listaTareas = document.getElementById("lista-tareas");
const btnBorrarTodo = document.getElementById("borrar-todo");
const selectFiltro = document.getElementById("filtro");

// 2) Cargar tareas desde localStorage
let listaDeTareas = JSON.parse(localStorage.getItem("tareas")) || [];

// 3) Mostrar tareas al cargar el documento
document.addEventListener("DOMContentLoaded", () => mostrarTareas());

// 4) Agregar nueva tarea
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = inputTarea.value.trim();
    const categoria = selectCategoria.value;

    if (texto === "") {
        // Mejor UX: usar el atributo 'required' en el HTML y el manejo del navegador
        return; 
    }

    const nuevaTarea = {
        texto,
        categoria,
        completada: false,
        id: Date.now()
    };

    listaDeTareas.push(nuevaTarea);
    guardarTareas();
    mostrarTareas();
    formulario.reset();
});

// 5) Función para mostrar tareas (Mejora: muestra la categoría de forma separada)
function mostrarTareas(tareas = listaDeTareas) {
    listaTareas.innerHTML = "";

    if (tareas.length === 0) {
        // Mensaje de lista vacía para mejor UX
        listaTareas.innerHTML = '<p class="empty-message">🎉 ¡No hay tareas en esta lista!</p>';
        return;
    }

    tareas.forEach((tarea) => {
        // se crea <div>...</div>
        const div = document.createElement("div");

        //<div class="tarea"></div>
        div.classList.add("tarea");
        
        //<div class="tarea completada"></div>
        if (tarea.completada) div.classList.add("completada");

        //<div class="tarea-content"></div> anidado para mejor estructura
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("tarea-content");

        const pTexto = document.createElement("p");
        pTexto.textContent = tarea.texto;

        const pCategoria = document.createElement("p");
        pCategoria.classList.add("tarea-category");
        pCategoria.textContent = `Categoría: ${tarea.categoria}`;
        
        // El click para completar la tarea ahora está en el área de contenido
        contentDiv.addEventListener("click", () => {
            marcarCompletadaPorId(tarea.id);
        });

        contentDiv.appendChild(pTexto);
        contentDiv.appendChild(pCategoria);

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "✖️"; // Usamos un ícono para el botón de eliminar

        btnEliminar.addEventListener("click", (e) => {
             e.stopPropagation(); // Evita que el evento de click del padre (marcar completada) se dispare
             eliminarTareaPorId(tarea.id);
        });

        div.appendChild(contentDiv);
        div.appendChild(btnEliminar);
        listaTareas.appendChild(div);
    });
}

// 6) Guardar en localStorage (sin cambios)
function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(listaDeTareas));
}

// 7) Marcar completada (sin cambios)
function marcarCompletadaPorId(id) {
    const idx = listaDeTareas.findIndex(t => t.id === id);
    if (idx === -1) return;
    listaDeTareas[idx].completada = !listaDeTareas[idx].completada;
    guardarTareas();
    // Vuelve a mostrar aplicando el filtro actual
    aplicarFiltro(); 
}

// 8) Eliminar por id (sin cambios)
function eliminarTareaPorId(id) {
    listaDeTareas = listaDeTareas.filter(t => t.id !== id);
    guardarTareas();
    // Vuelve a mostrar aplicando el filtro actual
    aplicarFiltro(); 
}

// 9) Borrar todas (sin cambios)
btnBorrarTodo.addEventListener("click", () => {
    if (confirm("¿Seguro que quieres borrar todas las tareas? Esta acción es irreversible.")) {
        listaDeTareas = [];
        guardarTareas();
        mostrarTareas();
    }
});

// 10) Función central de FILTRO para ser reutilizada
function aplicarFiltro() {
    const categoria = selectFiltro.value;
    const tareasFiltradas = categoria === "Todas"
        ? listaDeTareas
        : listaDeTareas.filter(t => t.categoria === categoria);
    mostrarTareas(tareasFiltradas);
}

// 11) Escucha el evento 'change' en el select del filtro, no solo el botón
selectFiltro.addEventListener("change", aplicarFiltro);

// 12) El botón de Filtrar ahora solo llama a la función principal.
document.getElementById("btnFiltrar").addEventListener("click", aplicarFiltro);
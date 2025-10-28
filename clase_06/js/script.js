
// 1) Referencias al DOM
const formulario = document.getElementById("formulario");
const inputTarea = document.getElementById("tarea");
const selectCategoria = document.getElementById("categoria");
const listaTareas = document.getElementById("lista-tareas");
const btnBorrarTodo = document.getElementById("borrar-todo");

// 2) Cargar tareas desde localStorage (o iniciar array vacío)
let listaDeTareas = JSON.parse(localStorage.getItem("tareas")) || [];

// 3) Mostrar tareas al cargar el documento
document.addEventListener("DOMContentLoaded", mostrarTareas);

// 4) Evento submit: agregar nueva tarea
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // evita recargar la página

  const texto = inputTarea.value.trim();
  const categoria = selectCategoria.value;

  if (texto === "") {
    alert("Por favor, escribe una tarea.");
    return;
  }

  const nuevaTarea = {
    texto,
    categoria,
    completada: false,
    id: Date.now() // id único para identificar la tarea incluso si se filtra
  };

  listaDeTareas.push(nuevaTarea);
  guardarTareas();
  mostrarTareas();
  formulario.reset();
});

// 5) Función: mostrar tareas (considera filtro por URL)
function mostrarTareas() {
  listaTareas.innerHTML = "";

  // leer parámetro de URL ?categoria=...
  const params = new URLSearchParams(window.location.search);
  const categoriaFiltrada = params.get("categoria");

  // Si hay categoría filtrada, mostramos solo las que coinciden,
  // pero mantenemos el índice real usando el id.
  const tareasAMostrar = categoriaFiltrada
    ? listaDeTareas.filter(t => t.categoria === categoriaFiltrada)
    : listaDeTareas;

  tareasAMostrar.forEach((tarea) => {
    const div = document.createElement("div");
    div.classList.add("tarea");
    if (tarea.completada) div.classList.add("completada");

    const p = document.createElement("p");
    p.textContent = `${tarea.texto} - Categoría: ${tarea.categoria}`;
    p.style.cursor = "pointer";


    // marcar completada usando el id como referencia
    /* p.addEventListener("click", () => {
      marcarCompletadaPorId(tarea.id);
    });
 */
      // 📌 BOTÓN "Completar" — cambia el estado de la tarea
    const btnCompletar = document.createElement("button");
    btnCompletar.textContent = tarea.completada ? "Desmarcar" : "Completar";
    btnCompletar.addEventListener("click", () => {
    marcarCompletadaPorId(tarea.id);
    });

    // 📌 BOTÓN "Eliminar" — borra la tarea
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    // eliminar usando id
    btnEliminar.addEventListener("click", () => {
      eliminarTareaPorId(tarea.id);
    });

    div.appendChild(p);
    div.appendChild(btnCompletar);
    div.appendChild(btnEliminar);
    
    listaTareas.appendChild(div);
  });
}

// 6) Guardar en localStorage
function guardarTareas() {
  localStorage.setItem("tareas", JSON.stringify(listaDeTareas));
}

// 7) Marcar tarea como completada (busca por id)
function marcarCompletadaPorId(id) {
  const idx = listaDeTareas.findIndex(t => t.id === id);
  if (idx === -1) return;
  listaDeTareas[idx].completada = !listaDeTareas[idx].completada;
  guardarTareas();
  mostrarTareas();
}

// 8) Eliminar tarea por id
function eliminarTareaPorId(id) {
  listaDeTareas = listaDeTareas.filter(t => t.id !== id);
  guardarTareas();
  mostrarTareas();
}

// 9) Borrar todas las tareas
btnBorrarTodo.addEventListener("click", () => {
  if (confirm("¿Seguro que quieres borrar todas las tareas?")) {
    listaDeTareas = [];
    guardarTareas();
    mostrarTareas();
  }
});

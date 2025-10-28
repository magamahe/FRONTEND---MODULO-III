# Actividades Clase Numero 6

## Actividad Integradora: "Crea tu propia To-Do App"

🎯 **Objetivo:**
Hoy trabajarán en grupos de 4 para desarrollar una pequeña aplicación web: una To-Do App o Lista de Tareas. Esta aplicación les permitirá agregar, visualizar y eliminar tareas, mientras aplican lo aprendido en clases sobre eventos de formulario, validaciones, almacenamiento en el navegador (localStorage), JSON y el objeto location.

El reto es completarlo en 2 horas, así que deberán organizarse y distribuir tareas dentro del equipo. ¡Trabajen juntas y diviértanse programando! 🚀

---

## 🛠️ ¿Qué deben lograr? (Requisitos de la To-Do App)

Su aplicación debe:
- ✅ Permitir agregar nuevas tareas mediante un formulario.
- ✅ Validar que la usuaria no agregue tareas vacías.
- ✅ Mostrar las tareas en pantalla después de agregarlas.
- ✅ Marcar tareas como completadas y poder eliminarlas.
- ✅ Almacenar las tareas en localStorage, para que no se pierdan al recargar la página.
- ✅ Borrar todas las tareas con un solo botón.
- ✅ Filtrar las tareas por categoría a través de la URL.

---

## ⏳ Tiempo estimado y distribución del trabajo

🕐 **Tendrán 2 horas** para desarrollar la aplicación, por lo que deben organizarse bien:
- 30 min: Definir la estructura HTML y los eventos necesarios.
- 60 min: Programar la funcionalidad en JavaScript.
- 30 min: Pruebas, mejoras y presentación.

**Distribución sugerida:**
- 👩💻 Una persona trabaja en la estructura HTML.
- 👩💻 Otra en la validación y captura de eventos en el formulario.
- 👩💻 Otra en la manipulación del localStorage.
- 👩💻 Y la última en la implementación del filtro de tareas con location.search.

---

## 📌 Paso a paso: ¿Cómo hacerlo?

### 1️. Creen la estructura HTML de su To-Do App

En su archivo `index.html`, incluyan:
- ✅ Un formulario con un campo de texto para escribir la tarea y un botón para agregarla.
- ✅ Un select con categorías de tareas (Ej: "Trabajo", "Estudio", "Personal").
- ✅ Un div donde se mostrarán las tareas agregadas.
- ✅ Un botón para borrar todas las tareas.

**Ejemplo de estructura HTML:**
```html
<form id="formulario">
   <input type="text" id="tarea" placeholder="Escribe una tarea">
   <select id="categoria">
       <option value="Trabajo">Trabajo</option>
       <option value="Estudio">Estudio</option>
       <option value="Personal">Personal</option>
   </select>
   <button type="submit">Agregar</button>
</form>

<div id="lista-tareas"></div>
<button id="borrar-todo">Borrar todas las tareas</button>
```

---

### 2️. Capturen eventos y validen datos en JavaScript

**Eventos del formulario:**
- Escuchen el evento `submit` para detectar cuando la usuaria agregue una tarea.
- Eviten que el formulario se envíe por defecto usando `event.preventDefault()`.
- Si la usuaria intenta agregar una tarea vacía, muestren un mensaje de error y eviten que se agregue.

**Eventos en botones:**
- Agreguen un evento `click` al botón de borrar todas las tareas para limpiar la lista.
- Agreguen eventos a cada tarea para marcarla como "completada" o eliminarla.

---

### 3️. Muestren las tareas en pantalla

Cada vez que una usuaria agregue una tarea, deben mostrarla en la pantalla dentro del div `id="lista-tareas"`.

**Pistas:**
- Usen `createElement()` para generar los elementos dinámicamente.
- Agreguen un botón dentro de cada tarea para eliminarla si la usuaria lo desea.

**Ejemplo de cómo debería verse una tarea agregada:**
```html
<div>
   <p>Estudiar JavaScript - Categoría: Estudio</p>
   <button>Eliminar</button>
</div>
```

---

### 4️. Almacenen las tareas en localStorage

**¿Por qué es importante?**
- Si la usuaria recarga la página, no queremos que sus tareas desaparezcan. Para eso, guardaremos las tareas en `localStorage` como un array de objetos en formato JSON.

**¿Cómo hacerlo?**
1. Cada vez que agreguen una tarea, conviértanla a JSON y guárdenla en `localStorage`.
```javascript
localStorage.setItem("tareas", JSON.stringify(listaDeTareas));
```
2. Al cargar la página, revisen si hay tareas guardadas y muéstrenlas en pantalla.

---

### 5️. Filtren las tareas usando parámetros en la URL

**¿Cómo hacerlo?**
- Si una usuaria accede a `index.html?categoria=Trabajo`, deben mostrar solo las tareas de "Trabajo".

**Obtener la categoría desde la URL:**
```javascript
const params = new URLSearchParams(window.location.search);
const categoriaFiltrada = params.get("categoria");
if (categoriaFiltrada) {
    // Mostrar solo tareas que coincidan con esa categoría
}
```

---

## 📢 Criterios de Evaluación y Presentación

1️. Cada grupo tendrá 5 minutos para mostrar su To-Do App y explicar cómo la implementaron.
2️. Se evaluará:
- ✅ Correcta implementación de eventos y validaciones.
- ✅ Uso de `localStorage` para guardar tareas.
- ✅ Manipulación del DOM para mostrar y eliminar tareas.
- ✅ Uso del objeto `location` para filtrar tareas en la URL.

---

## 💡 Ideas extra si terminan antes

- ✨ Agregar un contador de tareas pendientes y completadas.
- ✨ Permitir editar una tarea haciendo clic en su texto.
- ✨ Agregar un botón para marcar todas las tareas como completadas.

---

## 📌 ¡Manos a la obra!

Trabajen en equipo, repartan tareas y asegúrense de que cada integrante pueda explicar su parte. ¡Tienen 2 horas para completar el desafío! 🚀💻


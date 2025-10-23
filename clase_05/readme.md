# 🌙 Clase Nº5 – Actividades de DOM Interactivo (JavaScript)

¡Bienvenidas, chicas! 💜  
En esta clase trabajaremos con **interacciones dinámicas en el DOM**, aplicando conceptos de eventos, manipulación de estilos y control de visibilidad.  
Aprenderás a crear **FAQ colapsables, sidebars, modales, toggles de tema y acordeones**, todo con HTML, CSS y JavaScript.

---

## 🧰 Requisitos

Antes de comenzar:
- Asegurate de tener una estructura de proyecto con archivos `index.html`, `style.css` y `script.js`.
- Abre el proyecto con **Live Server** o desde tu navegador.

---

## 🟣 Actividad 1: Crear un Collapse para un FAQ

### 🎯 Consigna:
Crea una sección de **preguntas frecuentes (FAQ)** donde cada pregunta tenga una respuesta que se muestre u oculte al hacer clic.

### 🔹 Pasos:

#### 1. Estructura HTML:
- Crea un contenedor para las preguntas y respuestas.
- Usa un botón o enlace para cada pregunta.
- Añade un bloque de contenido (por ejemplo, un `div`) para la respuesta.

#### 2. Estilos CSS:
- Oculta el contenido de las respuestas inicialmente (`display: none`).

#### 3. Interacción con JavaScript:
- Usa el evento `click` en el botón o enlace para alternar la visibilidad.
- Cambia el valor de `display` entre `none` y `block` cuando se hace clic.

#### 💡 Pistas:
- Usá `nextElementSibling` para acceder al elemento siguiente (la respuesta).

```html
<div class="faq-item">
  <button class="faq-question">¿Qué es JavaScript?</button>
  <div class="faq-answer">JavaScript es un lenguaje de programación que da vida al sitio web.</div>
</div>
```

```javascript
const preguntas = document.querySelectorAll('.faq-question');

preguntas.forEach(p => {
  p.addEventListener('click', () => {
    const respuesta = p.nextElementSibling;
    respuesta.style.display = (respuesta.style.display === 'block') ? 'none' : 'block';
  });
});
```

---

## 🟣 Actividad 2: Implementar un Sidebar Navegable

### 🎯 Consigna:
Crea un menú lateral (sidebar) que se abra y cierre al hacer clic en un botón.

### 🔹 Pasos:

#### 1. Estructura HTML:
- Crea un botón para abrir/cerrar el sidebar.
- Añade un `div` para el sidebar con enlaces de navegación.

#### 2. Estilos CSS:
- `width: 0` para ocultarlo al inicio.
- `position: fixed` para mantenerlo en pantalla.
- `transition` para animar la apertura.

#### 3. Interacción con JavaScript:
- Usa el evento `click` para alternar el ancho entre `0` y `250px`.

#### 💡 Pistas:
- Podés cerrar el sidebar si el usuario hace clic fuera de él.

```html
<button id="toggleSidebar">☰ Menú</button>
<div id="sidebar">
  <a href="#">Inicio</a>
  <a href="#">Acerca de</a>
  <a href="#">Contacto</a>
</div>
```

```javascript
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleSidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.style.width = (sidebar.style.width === '250px') ? '0' : '250px';
});
```

---

## 🟣 Actividad 3: Crear un Modal de Confirmación

### 🎯 Consigna:
Crea una ventana emergente (modal) que se muestre al hacer clic en un botón.  

### 🔹 Pasos:

#### 1. Estructura HTML:
- Botón para abrir el modal.
- Div para el modal y otro para el fondo oscuro (overlay).

#### 2. Estilos CSS:
- `display: none` inicialmente.
- `position: fixed` y `transform` para centrar el modal.
- Fondo oscuro con `rgba`.

#### 3. Interacción con JavaScript:
- Mostrar el modal con `display: block`.
- Cerrar al hacer clic fuera o en el botón cerrar.

```html
<button id="abrirModal">Abrir Modal</button>

<div id="overlay" class="overlay"></div>
<div id="modal" class="modal">
  <p>¿Confirmas esta acción?</p>
  <button id="cerrarModal">Cerrar</button>
</div>
```

```javascript
const abrir = document.getElementById('abrirModal');
const cerrar = document.getElementById('cerrarModal');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

abrir.addEventListener('click', () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';
});

cerrar.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});
```

---

## 🟣 Actividad 4: Implementar un Toggle para Cambiar el Tema

### 🎯 Consigna:
Crea un interruptor (toggle) que permita cambiar entre modo claro y oscuro.

### 🔹 Pasos:

#### 1. Estructura HTML:
- Botón para alternar los modos.

#### 2. Estilos CSS:
- Crea clases `.claro` y `.oscuro` para el `body`.

#### 3. Interacción con JavaScript:
- Usa `classList.toggle()` para cambiar el tema.
- Actualiza el texto del botón dinámicamente.

```html
<button id="toggleTema">Modo Oscuro</button>
```

```javascript
const btnTema = document.getElementById('toggleTema');

btnTema.addEventListener('click', () => {
  document.body.classList.toggle('oscuro');
  btnTema.textContent = document.body.classList.contains('oscuro')
    ? 'Modo Claro'
    : 'Modo Oscuro';
});
```

```css
body {
  background-color: white;
  color: black;
  transition: 0.3s;
}

body.oscuro {
  background-color: #222;
  color: white;
}
```

---

## 🟣 Actividad 5: Crear un Acordeón con Collapse

### 🎯 Consigna:
Crea un acordeón donde cada sección tenga un título y un contenido colapsable.

### 🔹 Pasos:

#### 1. Estructura HTML:
- Crea secciones con un título (botón) y contenido (div).

#### 2. Estilos CSS:
- Oculta el contenido inicialmente (`display: none`).

#### 3. Interacción con JavaScript:
- Usa `click` en el título para mostrar/ocultar el contenido.

```html
<div class="acordeon-item">
  <button class="acordeon-titulo">Sección 1</button>
  <div class="acordeon-contenido">Contenido de la sección 1</div>
</div>
```

```javascript
const titulos = document.querySelectorAll('.acordeon-titulo');

titulos.forEach(t => {
  t.addEventListener('click', () => {
    const contenido = t.nextElementSibling;
    contenido.style.display = (contenido.style.display === 'block') ? 'none' : 'block';
  });
});
```

---

✨ **¡Excelente trabajo!**
Con estas actividades reforzás tu manejo del **DOM, eventos y estilos dinámicos**, tres pilares del desarrollo front-end moderno.

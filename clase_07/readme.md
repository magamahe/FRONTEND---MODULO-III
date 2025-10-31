# 📘 Comparativa: Bootstrap vs Bulma

Guía rápida para entender qué clase usar en cada framework y cómo se traduce de uno a otro.

---

## 🧱 Estructura básica

| **Categoría** | **Bootstrap** | **Bulma** | **Qué hace** |
|----------------|----------------|------------|---------------|
| Contenedor principal | `.container`, `.container-fluid` | `.container` | Define un ancho máximo y centra el contenido. `.container-fluid` ocupa todo el ancho. |
| Sistema de columnas | `.row` + `.col`, `.col-6`, `.col-md-4` | `.columns` + `.column`, `.is-6`, `.is-4-desktop` | Divide el diseño en columnas responsivas. |

**Ejemplo:**
```html
<!-- Bootstrap -->
<div class="container">
  <div class="row">
    <div class="col-6">Columna 1</div>
    <div class="col-6">Columna 2</div>
  </div>
</div>

<!-- Bulma -->
<div class="container">
  <div class="columns">
    <div class="column is-6">Columna 1</div>
    <div class="column is-6">Columna 2</div>
  </div>
</div>
```

---

## 🎨 Botones y colores

| **Categoría** | **Bootstrap** | **Bulma** | **Qué hace** |
|----------------|----------------|------------|---------------|
| Botones | `.btn`, `.btn-primary`, `.btn-danger` | `.button`, `.is-primary`, `.is-danger` | Estilos predefinidos para botones con colores. |
| Colores de fondo | `.bg-primary`, `.bg-light`, `.bg-dark` | `.has-background-primary`, `.has-background-light`, `.has-background-dark` | Define colores de fondo predefinidos. |
| Colores de texto | `.text-primary`, `.text-white`, `.text-muted` | `.has-text-primary`, `.has-text-white`, `.has-text-grey-light` | Define colores del texto. |

**Ejemplo:**
```html
<!-- Bootstrap -->
<button class="btn btn-primary">Aceptar</button>
<button class="btn btn-danger">Cancelar</button>

<!-- Bulma -->
<button class="button is-primary">Aceptar</button>
<button class="button is-danger">Cancelar</button>
```

---

## 🧾 Tarjetas y contenido

| **Categoría** | **Bootstrap** | **Bulma** | **Qué hace** |
|----------------|----------------|------------|---------------|
| Tarjetas | `.card`, `.card-body`, `.card-title`, `.card-text` | `.card`, `.card-content`, `.title`, `.subtitle` | Crea contenedores con sombra y contenido estructurado. |
| Sombras | `.shadow`, `.shadow-lg` | `.box`, `.card` | Agrega sombra y contorno a contenedores. |

**Ejemplo:**
```html
<!-- Bootstrap -->
<div class="card shadow">
  <div class="card-body">
    <h5 class="card-title">Título</h5>
    <p class="card-text">Contenido de la tarjeta</p>
  </div>
</div>

<!-- Bulma -->
<div class="card">
  <div class="card-content">
    <p class="title">Título</p>
    <p class="subtitle">Contenido de la tarjeta</p>
  </div>
</div>
```

---

## 📋 Formularios

| **Categoría** | **Bootstrap** | **Bulma** | **Qué hace** |
|----------------|----------------|------------|---------------|
| Campos y etiquetas | `.form-group`, `.form-control`, `.form-label` | `.field`, `.control`, `.input`, `.label` | Estilos uniformes para inputs y labels. |

**Ejemplo:**
```html
<!-- Bootstrap -->
<div class="mb-3">
  <label for="nombre" class="form-label">Nombre</label>
  <input type="text" class="form-control" id="nombre" placeholder="Escribí tu nombre">
</div>

<!-- Bulma -->
<div class="field">
  <label class="label">Nombre</label>
  <div class="control">
    <input class="input" type="text" placeholder="Escribí tu nombre">
  </div>
</div>
```

---

## 🧭 Navegación y encabezados

| **Categoría** | **Bootstrap** | **Bulma** | **Qué hace** |
|----------------|----------------|------------|---------------|
| Navbar | `.navbar`, `.navbar-brand`, `.navbar-nav` | `.navbar`, `.navbar-brand`, `.navbar-menu`, `.navbar-item` | Barra de navegación superior con logo y enlaces. |
| Títulos | `.h1`, `.h2` o `<h1>` | `.title`, `.subtitle`, `.is-1` a `.is-6` | Define jerarquía visual de encabezados. |
| Hero / Encabezado grande | `.jumbotron` (Bootstrap 4) o `.bg-light p-5` | `.hero`, `.hero-body`, `.is-primary` | Sección destacada grande con texto. |

**Ejemplo:**
```html
<!-- Bootstrap -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Mi Sitio</a>
</nav>

<!-- Bulma -->
<nav class="navbar is-light">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">Mi Sitio</a>
  </div>
</nav>
```

---

## ⚙️ Otros componentes

| **Categoría** | **Bootstrap** | **Bulma** | **Qué hace** |
|----------------|----------------|------------|---------------|
| Alertas / mensajes | `.alert`, `.alert-success`, `.alert-danger` | `.notification`, `.is-success`, `.is-danger` | Muestra mensajes informativos o de error. |
| Modal | `.modal`, `.modal-dialog`, `.modal-content` | `.modal`, `.modal-card`, `.modal-background` | Ventanas emergentes superpuestas. |
| Footer | `.footer` | `.footer` | Pie de página con estilo predefinido. |

**Ejemplo:**
```html
<!-- Bootstrap -->
<div class="alert alert-success">Operación realizada con éxito</div>

<!-- Bulma -->
<div class="notification is-success">Operación realizada con éxito</div>
```

---

📎 **Tip final:**  
Ambos frameworks usan **nombres de clases descriptivos**, pero:  
- **Bootstrap** suele usar prefijos (`btn-`, `text-`, `bg-`, etc.)  
- **Bulma** usa modificadores (`is-`, `has-`, etc.) y una sintaxis más “natural”.  

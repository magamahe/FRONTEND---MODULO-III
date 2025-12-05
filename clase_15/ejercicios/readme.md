# 📌 Proyecto: CRUD de Posts con API REST

Este proyecto consiste en una interfaz web sencilla creada con **HTML**,
**Tailwind CSS** y **JavaScript**, que permite consumir la API pública
**JSONPlaceholder** para realizar operaciones CRUD reales (simuladas por
la API).

Incluye: - Obtener posts\
- Crear nuevos posts\
- Editar posts existentes\
- Eliminar posts\
- Buscar posts por texto\
- Mostrar solo 10 posts\
- Mostrar mensajes de estado: cargando, éxito y error (Punto C)

## 🚀 Tecnologías usadas

-   **HTML5**
-   **TailwindCSS**
-   **JavaScript (Fetch API)**
-   **JSONPlaceholder (API pública)**

## 📂 Funcionalidades implementadas

### ✔️ A) Obtención de recursos (GET)

-   `GET /posts`
-   `GET /posts?_limit=10`
-   Carga inicial de 20 posts.
-   Muestra los posts en una lista dinámica.

### ✔️ B) Manipulación de recursos

#### **Crear Post (POST)**

``` js
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Nuevo post", body: "Contenido..." })
});
```

#### **Editar Post (PATCH)**

``` js
fetch(`${API_URL}/${id}`, {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title, body })
});
```

#### **Eliminar Post (DELETE)**

``` js
fetch(`${API_URL}/${id}`, {
  method: "DELETE"
});
```

## ✔️ C) Mostrar mensajes de estado

Incluye una caja dinámica que muestra:

-   🟡 Cargando...
-   🟢 Éxito
-   🔴 Error

## ✔️ D) Manejo seguro de datos (Escape HTML)

``` js
function escapeHtml(s) {
  return s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
```

## 🧩 Funcionalidades extras

-   Búsqueda dinámica por texto.\
-   Botón para mostrar solo 10 posts.\
-   Cambio automático de "Crear Post" ↔ "Guardar Cambios".\
-   Reset automático del formulario.

## ▶️ Cómo ejecutar el proyecto

1.  Descargar los archivos del proyecto.\
2.  Abrir `index.html` en el navegador.

## 👩‍💻 Autora

**María Gabriela Martinez Herrero**\
Desarrolladora Front-End \| Back-End \| Data Analyst

📧 **Contacto:** maGgamahe@gmail.com

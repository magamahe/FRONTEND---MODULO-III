# Actividades Clase Número 14 – APIs REST

## Objetivo

Aplicar los conceptos vistos en clase sobre APIs REST, métodos HTTP, endpoints, parámetros y autenticación, para construir una interfaz que consuma datos de una API pública.

---

## Consigna Detallada

### 1. Elegir una API pública

Seleccionar una API REST pública de la siguiente lista (o proponer otra):

* **JSONPlaceholder** (simula posts, usuarios, comentarios)
* **PokeAPI** (datos de Pokémon)
* **OpenWeatherMap** (clima, requiere API Key gratuita)
* **The Dog API** (imágenes de perros)

---

### 2. Realizar las siguientes tareas

#### a) Consumir datos con GET

* Crear una página HTML + JavaScript (puede ser con `fetch` o `axios`).
* Mostrar en una lista los datos obtenidos de un endpoint (ej: `/posts`, `/pokemon`, `/breeds`).
* Usar parámetros de búsqueda (`?limit=10`) para paginar o filtrar resultados.

**Ejemplo de código base:**

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data));
```

#### b) Manipular recursos

* Implementar un formulario para enviar datos con **POST** (ej: crear un nuevo "post" o "comentario").
* Usar **PUT/PATCH** para editar un recurso existente (ej: actualizar el título de un post).
* Opcional: agregar botones para eliminar recursos (**DELETE**).

**Ejemplo de POST:**

```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Nuevo post", body: "Contenido..." })
});
```

#### c) Manejar errores y respuestas

* Mostrar mensajes al usuario según el código de estado HTTP (ej: 404 si no se encuentra el recurso).
* Usar `try/catch` para capturar errores de conexión.

#### d) Autenticación (opcional)

* Si la API requiere **API Key**, incluirla en los headers:

```javascript
{ "Authorization": "Bearer TU_KEY" }
```

* Importante: No hardcodear claves en el frontend. Usar variables de entorno o un backend intermedio.

---

## Requerimientos Técnicos

* Entregar un repositorio en GitHub con el código.
* Incluir un `README.md` que explique:

  * Endpoints usados
  * Métodos HTTP implementados
  * Capturas de pantalla de la interfaz

---

## Extras (para profundizar)

* Usar `localStorage` para guardar datos temporales
* Implementar búsqueda en tiempo real con parámetros de query (`?q=texto`)
* Diseñar una **UI responsive** con CSS

---

## Evaluación

Se valorará:

* Correcto uso de métodos HTTP (GET, POST, etc.)
* Manejo de respuestas y errores
* Claridad en la estructura de la URI (parámetros, rutas)
* Creatividad en la interfaz (aunque sea mínima)

---

¡Manos a la obra!

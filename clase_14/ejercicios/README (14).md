# Ejercitación Clase 14

## Actividad 1: Diseño de URIs para una API REST

Imagina que estás construyendo una aplicación de gestión de bibliotecas. Diseña las URIs para los siguientes recursos, siguiendo las buenas prácticas de REST:

- **Obtener la lista de todos los libros:**  
  `GET /libros`

- **Ver los detalles de un libro específico (ID: 58):**  
  `GET /libros/58`

- **Acceder a las reseñas de un libro (ID: 58):**  
  `GET /libros/58/resenas`

- **Filtrar libros por género "ciencia ficción" y ordenarlos por fecha de publicación descendente:**  
  `GET /libros?genero=ciencia-ficcion&sort=fecha_publicacion_desc`

- **Añadir una nueva reseña al libro (ID: 58):**  
  `POST /libros/58/resenas`

### Justificación
Estas URIs cumplen con las convenciones REST porque:
- Usan sustantivos en plural.
- Utilizan jerarquías de recursos.
- Los filtros y ordenamientos van en query params.
- Las acciones no se incluyen en la ruta.

---

## Actividad 2: Selección de Métodos HTTP y Manejo de Respuestas

Para cada escenario:

### 1. Un usuario envía un formulario de registro  
- **Método:** POST  
- **Código esperado:** 201 Created  
- **Interfaz:** Mostrar mensaje "Registro exitoso" o redirigir al login.

### 2. Intentas eliminar un producto que no existe  
- **Método:** DELETE  
- **Código esperado:** 404 Not Found  
- **Interfaz:** Mostrar alerta "El producto no existe".

### 3. Actualizas el correo electrónico de un perfil  
- **Método:** PATCH  
- **Código esperado:** 200 OK  
- **Interfaz:** Actualizar el email en pantalla y mostrar mensaje "Datos actualizados".

### 4. Solicitas la lista de pedidos recientes  
- **Método:** GET  
- **Código esperado:** 200 OK  
- **Interfaz:** Renderizar listado en una tabla o tarjetas.

---

## Actividad 3: Flujo de Comunicación Cliente-Servidor

Acción: Un usuario edita el título de una publicación (ID: 15) y guarda los cambios.

- **Método HTTP:** PATCH  
- **URI:** `/posts/15`  
- **Datos enviados:**  
  ```json
  {
    "titulo": "Nuevo título"
  }
  ```
- **Respuestas posibles:**
  - **200 OK:** Se actualizó correctamente.  
  - **400 Bad Request:** Datos inválidos.  
  - **404 Not Found:** No existe la publicación.  

- **Actualización en la interfaz:**  
  - Reemplazar el título en pantalla.  
  - Mostrar notificación "Cambios guardados".

---

## Actividad 4: Interpretación de Respuestas JSON

JSON recibido:

```json
{
  "id": 101,
  "nombre": "Ana López",
  "email": "ana@example.com",
  "ultimo_acceso": "2023-10-05"
}
```

### Esquema visual sugerido para la interfaz:

**Tarjeta de Perfil de Usuario**
- **Título:** Nombre del usuario (estilo destacado)
- **Subtítulo:** Email
- **Datos adicionales:**  
  - ID del usuario  
  - Último acceso (formato: "Último acceso: 05/10/2023")

Ejemplo visual:

```
------------------------------
| 👤  Ana López              |
| ✉️  ana@example.com        |
| ID: 101                    |
| Último acceso: 2023-10-05  |
------------------------------
```

---

## Actividad 5: Identificación de Errores Comunes

Analiza las siguientes URIs y corrige los errores REST:

1. `GET /obtenerUsuario/25`  
   ❌ Acción en la URI  
   ✔ `GET /usuarios/25`

2. `POST /actualizarProducto/10`  
   ❌ Acción + método incorrecto  
   ✔ `PATCH /productos/10`

3. `DELETE /usuarios?userId=5`  
   ❌ DELETE nunca debe recibir un ID en query param  
   ✔ `DELETE /usuarios/5`

4. `GET /libros/ciencia-ficcion`  
   ❌ El género no es un recurso hijo  
   ✔ `GET /libros?genero=ciencia-ficcion`

---

**Fin de las actividades de la Clase 14.**

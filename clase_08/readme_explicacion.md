# 📘 Resumen de Clases y Utilidades de Bulma CSS  
### Actividad: Página Responsiva con Bulma  

---

## 2️⃣ Encabezado
| Clase Bulma | Descripción | Ejemplo |
|--------------|-------------|----------|
| `.hero` | Crea una sección destacada tipo banner, ideal para títulos principales. | `<section class="hero is-primary">` |
| `.title` | Define un título grande y llamativo. | `<h1 class="title">Mi Página</h1>` |
| `.subtitle` | Añade un subtítulo más pequeño debajo del título principal. | `<h2 class="subtitle">Descripción breve</h2>` |
| `.has-text-centered` | Centra el texto horizontalmente. | `<p class="has-text-centered">Texto centrado</p>` |

💡 **Tip:** combiná `.hero`, `.title` y `.subtitle` para crear un encabezado profesional y responsivo.

---

## 3️⃣ Sistema de Columnas
| Clase Bulma | Descripción | Ejemplo |
|--------------|-------------|----------|
| `.columns` | Crea una fila que contendrá columnas. | `<div class="columns">...</div>` |
| `.column` | Crea una columna dentro de la fila. | `<div class="column">Contenido</div>` |
| `.is-half` | Hace que la columna ocupe la mitad del ancho disponible. | `<div class="column is-half">...</div>` |
| `.is-one-quarter` | Hace que la columna ocupe 1/4 del ancho. | `<div class="column is-one-quarter">...</div>` |
| `.is-three-quarters` | Ocupa 3/4 del ancho. | `<div class="column is-three-quarters">...</div>` |

💡 **Tip:** Podés combinar tamaños para lograr una distribución equilibrada.

---

## 4️⃣ Responsividad
| Clase Bulma | Descripción | Ejemplo |
|--------------|-------------|----------|
| `.is-full-mobile` | La columna ocupa el 100% en pantallas pequeñas. | `<div class="column is-full-mobile">...</div>` |
| `.is-half-tablet` | En tablet, ocupa la mitad del ancho. | `<div class="column is-half-tablet">...</div>` |
| `.is-one-third-desktop` | En escritorio, ocupa 1/3 del ancho. | `<div class="column is-one-third-desktop">...</div>` |

💡 **Tip:** Bulma adapta el diseño automáticamente según el tamaño del dispositivo.

---

## 5️⃣ Offset (Desplazamiento)
| Clase Bulma | Descripción | Ejemplo |
|--------------|-------------|----------|
| `.is-offset-1` | Desplaza la columna 1 parte del ancho de una columna. | `<div class="column is-one-third is-offset-1">...</div>` |
| `.is-offset-2` | Desplaza la columna 2 partes. | `<div class="column is-one-third is-offset-2">...</div>` |
| `.is-offset-3` | Desplaza la columna 3 partes. | `<div class="column is-one-third is-offset-3">...</div>` |

💡 **Tip:** Sirve para centrar o separar visualmente columnas sin agregar elementos vacíos.

---

## 6️⃣ Columnas Anidadas
| Clase Bulma | Descripción | Ejemplo |
|--------------|-------------|----------|
| `.columns` (dentro de `.column`) | Permite anidar sub-columnas dentro de una columna principal. | `<div class="column"><div class="columns"><div class="column">...</div></div></div>` |
| `.column` | Cada sub-columna puede contener texto o imágenes. | `<div class="column"><img src="..."></div>` |

💡 **Tip:** Ideal para dividir contenido dentro de una sección, como imágenes o listas.

---

## 🌈 Bonus: Helpers útiles
| Clase | Descripción | Ejemplo |
|--------|-------------|----------|
| `.has-background-light` | Agrega fondo claro a una sección. | `<section class="has-background-light">...</section>` |
| `.has-text-dark` | Cambia el color del texto a oscuro. | `<p class="has-text-dark">Texto oscuro</p>` |
| `.box` | Crea un contenedor con borde y sombra suave. | `<div class="box">...</div>` |
| `.is-rounded` | Redondea bordes de imágenes o elementos. | `<figure class="image is-rounded">...</figure>` |

---

📎 **Referencia Oficial:**  
🔗 [https://bulma.io/documentation/](https://bulma.io/documentation/)


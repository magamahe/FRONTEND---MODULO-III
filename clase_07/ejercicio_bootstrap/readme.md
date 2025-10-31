# 📚 Diccionario de Clases de Bootstrap (v5.3)

Este diccionario resume las clases de Bootstrap utilizadas en el sitio web de Chocolate, con énfasis en la **responsividad** y la **alineación perfecta** de los elementos.

---

## 1. Diseño Estructural y Responsividad (Grid y Layout)

| Clase(s) | Función Principal | Detalle y Responsividad |
| :--- | :--- | :--- |
| **`container`** | Define el área de contenido principal y la centra. | Define el ancho **máximo responsivo** del contenido (cambia automáticamente según el *breakpoint*). |
| **`row`** | Contenedor de la cuadrícula. | Establece un contexto Flexbox para que las columnas se envuelvan y apilen correctamente. |
| **`col-lg-4`** | Ancho de columna en pantallas grandes. | Ocupa **4 de 12 partes** del ancho en pantallas *grandes* (`lg`) y superiores (3 columnas por fila). |
| **`col-md-6`** | Ancho de columna en pantallas medianas. | Ocupa **6 de 12 partes** del ancho en pantallas *medianas* (`md`) y superiores (2 columnas por fila). |
| **`g-4`** | Gap (espacio) entre columnas. | Añade un espaciado uniforme entre las tarjetas de la cuadrícula. |
| **`justify-content-center`** | Alineación horizontal. | Centra las columnas o elementos horizontalmente. |

---

## 2. Flexbox y Alineación (Solución a las Tarjetas)

Estas clases son esenciales para la **alineación vertical** de las imágenes y botones.

| Clase(s) | Propósito de Flexbox | Aplicación en la Tarjeta |
| :--- | :--- | :--- |
| **`d-flex`** | Habilita `display: flex;` | Convierte la tarjeta (`card`) o el cuerpo (`card-body`) en un contenedor flexible. |
| **`flex-column`** | Habilita `flex-direction: column;` | Fuerza a que el contenido se apile verticalmente. |
| **`h-100`** | Establece `height: 100%;` | **CLAVE:** Asegura que todas las tarjetas en la misma fila ocupen la misma altura máxima. |
| **`mt-auto`** | Establece `margin-top: auto;` | **CLAVE:** Usado en el enlace `<a>`. Empuja el botón al fondo del `card-body` flexible, garantizando la **alineación perfecta de la base**. |
| **`align-items-center`** | Alineación vertical al centro. | Usado en la Navbar para centrar verticalmente el switch del Modo Oscuro. |

---

## 3. Componentes y Utilidades

| Clase(s) | Componente/Función | Detalle de Uso |
| :--- | :--- | :--- |
| **`navbar`**, **`fixed-top`** | Barra de navegación. | `navbar-expand-lg` colapsa el menú solo en pantallas pequeñas. `fixed-top` la mantiene visible arriba. |
| **`shadow-sm`** | Sombra. | Aplica una sombra suave y pequeña a elementos (Navbar, Cards). |
| **`card`**, **`card-body`** | Tarjeta. | Componentes base para agrupar contenido. |
| **`badge`**, **`rounded-pill`** | Etiqueta. | Pequeñas etiquetas con fondos de color para destacar información (ej: "Intenso"). |
| **`accordion`** | Acordeón (FAQ). | Proporciona la estructura para el componente colapsable interactivo. |
| **`input-group`**, **`form-control`** | Formularios. | Estiliza los campos de entrada y permite adjuntar iconos (`input-group-text`). |
| **`d-none`**, **`d-lg-flex`** | Utilidades de Visualización. | Oculta el elemento (`d-none`) y lo muestra como `flex` solo en pantallas grandes (`lg`). |

---

## 4. Espaciado, Tipografía y Color

| Clase(s) | Tipo de Propiedad | Valor Típico |
| :--- | :--- | :--- |
| **`py-5`** | Padding Vertical. | `padding-top` y `padding-bottom` con el valor más grande (3rem). |
| **`mb-3`**, **`mt-5`** | Margin Bottom/Top. | Controla el espaciado vertical entre elementos. |
| **`text-primary`**, **`text-dark`** | Color de Texto. | Aplica los colores de tema de Bootstrap. |
| **`bg-light`** | Color de Fondo. | Color gris claro para las secciones que no son Hero. |
| **`fs-4`**, **`fw-bold`** | Fuente. | `fs` (font size) define el tamaño. `fw` (font weight) define el grosor. |
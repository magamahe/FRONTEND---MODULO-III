# 📚 Diccionario de Clases de Bulma (TechStart Landing)

---

### I. 🧱 Estructura y Layout

| Clase de Bulma | Uso en la Sección | Explicación |
| :--- | :--- | :--- |
| **`container`** | General | Contenedor principal que centra y limita el ancho del contenido. |
| **`section`** | Servicios, Portfolio, Contacto | Contenedor para bloques de contenido con *padding* vertical estándar, usado para separar secciones. |
| **`box`** | Contacto | Componente que envuelve contenido en una caja con bordes, *padding* y una sombra sutil (usado en el formulario). |
| **`footer`** | Footer | Componente base que proporciona *padding* y estilos al pie de página. |

---

### II. 🖼️ Componentes y Colores Base

| Clase de Bulma | Uso en la Sección | Explicación |
| :--- | :--- | :--- |
| **`hero`**, **`hero-body`** | Hero, Testimonios | Componente para encabezados grandes de página y su contenedor de contenido. |
| **`notification`** | Servicios | Componente para mostrar mensajes de alerta o bloques de contenido destacados con color. |
| **`card`**, **`card-content`** | Portfolio | Contenedor flexible para agrupar contenido y su sección interna de *padding*. |
| **`is-primary`** | Hero, Botones | Modificador de color principal. |
| **`is-dark`** | Navbar | Modificador de color oscuro (usado en el fondo de la Navbar). |
| **`is-light`** | Botones | Modificador de color muy claro/blanco grisáceo. |
| **`is-info`** | Servicios, Testimonios | Modificador de color de información (azul cian/claro). |
| **`is-warning`** | Servicios | Modificador de color de advertencia (amarillo/naranja). |
| **`is-success`** | Servicios | Modificador de color de éxito (verde). |
| **`has-background-light`** | Portfolio | Helper que aplica un color de fondo gris claro a un elemento (`section`). |

---

### III. 📐 Grid y Responsividad

| Clase de Bulma | Uso en la Sección | Explicación |
| :--- | :--- | :--- |
| **`columns`**, **`column`** | General | Contenedores padre e hijo del sistema de cuadrícula (Grid). |
| **`is-variable`**, **`is-6`** | Servicios | Helpers para aumentar el espacio (margen) entre las columnas a un nivel `6`. |
| **`is-multiline`** | Portfolio | Permite que las columnas envuelvan a la siguiente fila. |
| **`is-centered`** | Contacto | Centra las columnas horizontalmente. |
| **`is-3`**, **`is-6`**, **`is-half`** | Servicios, Contacto | Modificadores de ancho para columnas (ej. 3/12, 6/12, 50%). |
| **`is-one-third-desktop`** | Portfolio | Ancho de 1/3 del contenedor, **solo en pantallas Desktop** (`≥ 1024px`). |
| **`is-half-tablet`** | Portfolio | Ancho de 1/2 del contenedor, **solo en pantallas Tablet** (`≥ 769px`). |

---

### IV. ✏️ Texto, Componentes y Helpers

| Clase de Bulma | Uso en la Sección | Explicación |
| :--- | :--- | :--- |
| **`title`**, **`subtitle`** | General | Clases para textos de encabezado y subtítulos. |
| **`is-1`**, **`is-4`** | Hero, Servicios | Modificadores de tamaño para títulos. |
| **`has-text-centered`** | General | Helper que centra la alineación del texto. |
| **`has-text-weight-bold`** | Navbar | Aplica un peso de fuente negrita (bold). |
| **`button`** | Hero, Contacto | Clase base para estilizar un botón. |
| **`is-large`**, **`is-rounded`** | Botones | Modificadores de tamaño y forma. |
| **`is-fullheight-with-navbar`** | Hero | Modificador de altura: ocupa el 100% de la altura de la ventana menos la altura de la navbar. |

---

### V. 📝 Formulario (Field, Control, Input)

| Clase de Bulma | Uso en la Sección | Explicación |
| :--- | :--- | :--- |
| **`field`** | Contacto | Contenedor flexible para agrupar la etiqueta y el control. |
| **`label`** | Contacto | Clase que estiliza la etiqueta de un formulario. |
| **`control`** | Contacto | Contenedor que envuelve el elemento del formulario (`input`, `textarea`). |
| **`input`**, **`textarea`** | Contacto | Clases que estilizan los campos de texto y áreas de texto. |

---

### VI. ⚙️ Navbar y Flexbox Helpers

| Clase de Bulma | Uso en la Sección | Explicación |
| :--- | :--- | :--- |
| **`navbar`**, **`navbar-brand`** | Navbar | Contenedor principal de la barra de navegación y contenedor para el logo. |
| **`navbar-item`** | Navbar | Contenedor para cada enlace o elemento dentro de la barra. |
| **`navbar-start`** | Navbar | Contenedor para agrupar enlaces que normalmente van al inicio o centro. |
| **`is-flex`** | Navbar | Fuerza el uso del modelo de caja flexible (flexbox). |
| **`is-justify-content-center`** | Navbar | Centra el contenido horizontalmente (usado para centrar el menú). |
| **`is-align-items-center`** | Navbar | Centra los elementos verticalmente. |
| **`style="flex: 1"`** | Navbar | (Estilo CSS inline) Hace que este div ocupe todo el espacio disponible. |
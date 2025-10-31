# 📚 Diccionario de Clases de Bulma Usadas en el Proyecto

---

## 🏗️ Estructura y Layout (Columnas y Contenedores)

| Clase de Bulma | Explicación Breve |
| :--- | :--- |
| `container` | Contenedor principal que centra y limita el ancho del contenido. |
| `section` | Contenedor con padding vertical por defecto, ideal para separar bloques de contenido. |
| `columns` | Contenedor padre que activa el sistema de grilla Flexbox de Bulma. |
| `column` | Define cada elemento hijo dentro del sistema de columnas. |
| `is-multiline` | Modificador para permitir que las columnas se envuelvan a la siguiente fila si no caben. |
| `is-4-desktop`, `is-6-tablet` | Helpers de responsividad para definir el ancho de columna en diferentes breakpoints. |

---

## 🔝 Navbar y Hero

| Clase de Bulma | Explicación Breve |
| :--- | :--- |
| `navbar` | El contenedor principal de la barra de navegación. |
| `navbar-burger` | El icono de "hamburguesa" que se usa para el menú móvil. |
| `is-fixed-top` | Fija la barra de navegación en la parte superior de la ventana. |
| `hero` | Contenedor grande para encabezados principales, ofrece padding amplio. |
| `hero-body` | Contenedor interno para centrar el contenido verticalmente dentro del `hero`. |
| `title`, `subtitle` | Clases para estilizar textos como títulos y subtítulos con jerarquía (`is-1`, `is-4`). |

---

## 🖼️ Componentes y Contenido (Cards, Boxes y FAQ)

| Clase de Bulma | Explicación Breve |
| :--- | :--- |
| `card` | Contenedor principal para una tarjeta de contenido. |
| `card-image` | Contenedor para imágenes dentro de la tarjeta, maneja la relación de aspecto (`is-4by3`). |
| `card-content` | Área para el cuerpo de texto, títulos y descripciones de la tarjeta. |
| `box` | Contenedor ligero que aplica un *padding* estándar y una sombra sutil (usado en FAQ y Contacto). |
| `tag` | Etiqueta de estilo para palabras clave o categorización (usado en las tarjetas de sabor). |
| `is-shady` | Modificador que añade una sombra de caja más prominente a un elemento. |

---

## 🎛️ Helpers y Utilidades (Colores y Espaciado)

| Clase de Bulma | Explicación Breve |
| :--- | :--- |
| `has-text-centered` | Centra la alineación del texto dentro del elemento. |
| `has-text-primary` | Helper de color para aplicar el color primario definido por Bulma (o tu variable). |
| `has-text-white`, `has-text-dark` | Helpers de color para cambiar el color del texto a blanco o negro/oscuro. |
| `mt-5`, `mb-6` | Helpers de espaciado: **M**argin **T**op (margen superior) y **M**argin **B**ottom (margen inferior) con nivel de espaciado (1 a 6). |
| `p-3`, `p-6` | Helpers de espaciado: **P**adding (relleno interior) con nivel de espaciado. |
| `is-hidden-touch` | Helper de responsividad que oculta el elemento en dispositivos móviles o tabletas pequeñas. |
| `is-flex` | Convierte el elemento en un contenedor Flexbox para manipular la alineación interna. |


# 📚 Diccionario Completo y Definitivo de Clases de Bulma

---

### I. 🧱 Estructura y Contenedores

| Clase de Bulma / Etiqueta | Sección(es) | Explicación |
| :--- | :--- | :--- |
| **`container`** | General | Contenedor principal centrado que limita el ancho del contenido. |
| **`is-max-desktop`** | FAQ, Contacto | Modificador del `container` que le permite ser más ancho hasta el *breakpoint* de Desktop (ancho `< 1280px`). |
| **`section`** | General | Contenedor para bloques de contenido con *padding* vertical estándar (ideal para separar secciones). |
| **`box`** | FAQ, Contacto | Contenedor estilizado con *padding*, bordes y una sombra sutil (usado para el acordeón y el formulario). |
| **`columns`**, **`column`** | General | Contenedor padre e hijo para el sistema de cuadrícula flexible. |
| **`is-multiline`** | Tipos | Permite que las columnas envuelvan a la siguiente fila. |
| **`is-4-desktop`**, **`is-6-tablet`** | Tipos | Helpers de responsividad para definir el ancho de columna en diferentes *breakpoints*. |

---

### II. ✏️ Helpers de Texto, Títulos y Pesos

| Clase de Bulma | Sección(es) | Explicación |
| :--- | :--- | :--- |
| **`title`**, **`subtitle`** | General | Clases para textos de encabezado y subtítulos. |
| **`is-1`** a **`is-6`** | General | Modificadores para definir el tamaño del título/subtítulo. |
| **`is-size-5`**, **`is-size-7`** | General | Modificadores para establecer un tamaño de fuente específico sin usar `title/subtitle`. |
| **`has-text-weight-semibold`** | Navbar, Footer | Aplica un peso de fuente **seminegrita** (semi-bold). |
| **`has-text-weight-bold`** | Footer, FAQ | Aplica un peso de fuente **negrita** (bold). |
| **`has-text-justified`** | Tipos | Helper de alineación que **justifica** el texto (alineado a ambos márgenes). |
| **`content`** | Tipos | Clase para formatear bloques grandes de texto, listas, etc. (Usado en el cuerpo de las Cards). |

---

### III. 🎨 Helpers de Color y Apariencia

| Clase de Bulma | Sección(es) | Explicación |
| :--- | :--- | :--- |
| **`has-text-white`**, **`has-text-dark`** | General | Helpers para forzar el color de la fuente a blanco o el color de texto principal. |
| **`has-text-primary`** | General | Aplica el color **Principal** del tema (para texto). |
| **`has-text-grey`**, **`has-text-grey-dark`** | General | Aplican colores grises específicos al texto. |
| **`has-text-warning`** | Navbar, Tipos | Aplica el color de **Advertencia** (amarillo/naranja). |
| **`has-background-grey-lighter`** | Footer | Aplica un color de fondo gris muy claro. |
| **`is-shady`** | Tipos | Modificador que añade una sombra de caja sutil a un componente (usado en las Cards). |

---

### IV. 📐 Helpers de Espaciado y Alineación

| Clase de Bulma | Sección(es) | Explicación |
| :--- | :--- | :--- |
| **`mt-5`**, **`mb-6`**, **`pt-3`**, etc. | General | Helpers de **Margin** (margen) y **Padding** (relleno) con nivel de espaciado (del 1 al 6). |
| **`mr-2`**, **`ml-2`** | Navbar, Footer | Margen a la derecha y a la izquierda. |
| **`is-pulled-right`** | FAQ | Helper que aplica `float: right;` para alinear un elemento a la derecha. |
| **`is-centered`** | Hero, Tipos | Flexbox helper que centra las columnas horizontalmente. |
| **`is-vcentered`** | Footer | Alinea el contenido de las columnas **verticalmente al centro**. |
| **`is-justify-content-center`** | Navbar, Formulario | Flexbox helper que centra el contenido horizontalmente. |
| **`is-align-items-center`** | Navbar | Flexbox helper que centra los elementos verticalmente. |

---

### V. 🔗 Navbar y Botones

| Clase de Bulma / Etiqueta | Sección(es) | Explicación |
| :--- | :--- | :--- |
| **`navbar`** | Navbar | Contenedor principal de la barra de navegación. |
| **`is-fixed-top`**, **`has-shadow`** | Navbar | Fija la barra en la parte superior y añade una sombra. |
| **`navbar-brand`**, **`navbar-item`** | Navbar | Contenedor del logo y de cada enlace/elemento. |
| **`navbar-burger`**, **`navbar-menu`** | Navbar | Icono de hamburguesa y contenedor de enlaces que se colapsa. |
| **`button`** | Hero, Contacto | Clase base que estiliza un botón. |
| **`is-primary`**, **`is-large`**, **`is-rounded`** | Botones | Modificadores de color, tamaño y forma. |
| **`is-fullwidth`** | Contacto | Hace que un elemento ocupe el **100% del ancho**. |

---

### VI. ⚙️ Forms e Iconos

| Clase de Bulma / Etiqueta | Sección(es) | Explicación |
| :--- | :--- | :--- |
| **`field`**, **`control`** | Contacto | Contenedores para agrupar y estilizar elementos de formulario. |
| **`has-icons-left`** | Contacto | Aplica *padding* para que un icono pueda colocarse a la izquierda del input. |
| **`input`**, **`textarea`**, **`select`** | Contacto | Clases que estilizan los elementos de formulario HTML. |
| **`icon`** | General | Clase base para dar formato y tamaño a un contenedor de iconos. |
| **`is-large`**, **`is-small`** | Iconos | Modificadores de tamaño para el contenedor `icon`. |
| **`fa-seedling`**, **`fa-moon`**, etc. | General | Clases de **Font Awesome** que definen el icono específico. |
| **`switch`** | Navbar | Clase del complemento `bulma-switch` que transforma el checkbox en un interruptor visual. |

---

### VII. 👻 Helpers de Ocultamiento (Responsividad)

| Clase de Bulma | Rango de Pantalla | Función |
| :--- | :--- | :--- |
| **`is-hidden-touch`** | **Ancho < 1024px** | **Oculta** el elemento en **Móviles y Tablets** (el rango `touch`). |
| **`is-hidden-mobile`** | Ancho **< 769px** | Oculta **solo** en el rango de Móviles. |
| **`is-hidden-tablet`** | `≥ 769px` y `< 1024px` | Oculta **solo** en el rango de Tablets. |
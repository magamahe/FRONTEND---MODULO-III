# Actividades Clase Numero 2

## 1. Explorando las relaciones entre elementos en el DOM
**Objetivo:**  
Comprender cómo acceder a elementos padre, hijos y hermanos en el DOM.

**Consigna:**  
- Crea una estructura HTML con un `div` que contenga tres párrafos (`p`).  
- Usa JavaScript para seleccionar uno de los párrafos y mostrar en la consola:  
  - Su elemento padre.  
  - Su primer hijo (si lo tiene).  
  - Su **hermano anterior** y su **hermano siguiente** (si existen).

**Preguntas para reflexionar:**  
- ¿Qué sucede si intentas acceder a un `previousElementSibling` o `nextElementSibling` en el primer o último párrafo?  
- ¿Cómo podrías recorrer todos los hijos de un div sin conocer la cantidad exacta?

---

## 2. Creando y agregando elementos dinámicamente
**Objetivo:**  
Practicar la creación de nodos y su inserción en el DOM.

**Consigna:**  
- Crea un botón en tu HTML con el texto **"Agregar Elemento"**.  
- Al hacer clic en el botón, debe crearse un **nuevo párrafo dentro de un div** con un texto aleatorio.

**Preguntas para reflexionar:**  
- ¿Qué método de JavaScript puedes usar para crear un nuevo elemento?  
- ¿Cómo puedes agregar ese nuevo elemento dentro del div?  
- ¿Cómo podrías hacer que el texto del párrafo sea aleatorio en cada clic?

---

## 3. Modificando el contenido de un elemento con `innerHTML` e `innerText`
**Objetivo:**  
Diferenciar el uso de `innerHTML` e `innerText`.

**Consigna:**  
- Crea una estructura HTML con un `div` que contenga un texto inicial.  
- Agrega dos botones:  
  - Uno para cambiar el texto dentro del div usando `innerText`.  
  - Otro para cambiar el contenido del div usando `innerHTML` e insertando etiquetas `<strong>`.

**Preguntas para reflexionar:**  
- ¿Qué diferencia notas entre `innerText` e `innerHTML`?  
- ¿Qué sucede si intentas insertar una etiqueta `<strong>` dentro del div usando `innerText`?

---

## 4. Trabajando con Template Strings para generar contenido dinámico
**Objetivo:**  
Aprender a usar Template Strings para generar contenido en el DOM.

**Consigna:**  
- Crea un formulario HTML con un input para ingresar un nombre y un botón que diga **"Mostrar Mensaje"**.  
- Al hacer clic en el botón, debe aparecer un mensaje en la página que diga:  
  `"Hola [nombre ingresado], bienvenida a la clase de JavaScript!"`  
- Usa **Template Strings** para construir el mensaje dinámicamente.

**Preguntas para reflexionar:**  
- ¿Por qué no podemos usar comillas simples o dobles en lugar de los backticks (\`)?  
- ¿Cómo podrías agregar más información en el mensaje sin concatenar con +?

---

## 5. Desafío final: Generador de tarjetas dinámicas
**Objetivo:**  
Integrar todos los conceptos vistos en la clase para manipular el DOM dinámicamente.

**Consigna:**  
Crea un formulario HTML con los siguientes campos:
- Un input para el **nombre**.
- Un input para una **descripción**.
- Un botón que diga **"Crear Tarjeta"**.

Cuando la usuaria complete los campos y haga clic en el botón:
- Debe generarse una **tarjeta dentro de un div**.
- La tarjeta debe mostrar el **nombre en un `<h2>`** y la **descripción en un `<p>`**, todo dentro de un div con **borde y padding**.
- Usa `createElement()`, `innerHTML` y **Template Strings** para construir la tarjeta.

**Preguntas para reflexionar:**  
- ¿Cómo puedes estructurar la tarjeta para que se vea bien **sin usar CSS**?  
- ¿Cómo podrías permitir que la usuaria **cree varias tarjetas sin borrar las anteriores**?  
- ¿Cómo podrías **agregar un botón en cada tarjeta para eliminarla individualmente**?

---

## 🔥 Desafío Extra:
- Agrega un botón **"Eliminar Última Tarjeta"** que borre la última tarjeta creada.  
- **Modifica el color de fondo de cada tarjeta de forma aleatoria al crearse.**

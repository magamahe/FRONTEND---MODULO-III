# Actividades Clase Número 1

## 1. Explorando el DOM desde la consola del navegador

El DOM es la representación estructurada de una página web. Para visualizarlo desde el navegador:

1. Abre cualquier página web y accede a la consola (F12 o clic derecho > "Inspeccionar" > pestaña "Consola").
2. Escribe:
```javascript
console.log(document.body);
```
3. Luego ejecuta:
```javascript
console.dir(document.body);
```

**Preguntas para reflexionar:**
- ¿Qué diferencias notas entre ambos comandos?
- ¿Cómo crees que podrías acceder a elementos específicos del documento usando la consola?

---

## 2. Creando y eliminando elementos dinámicamente

1. Crea un archivo HTML con un `div` vacío y un botón.
2. Escribe un código en JavaScript que agregue un nuevo párrafo al `div` al hacer clic en el botón.
3. Agrega otro botón que permita eliminar el último párrafo agregado.

**Preguntas para reflexionar:**
- ¿Cómo puedes crear un nuevo elemento desde JavaScript?
- ¿Qué método del DOM puedes usar para añadirlo a la página?
- ¿Cómo podrías hacer para eliminar solo el último elemento agregado y no todos?

---

## 3. Aplicando estilos dinámicamente

1. Crea una página con un botón que diga "Cambiar color".
2. Escribe un código en JavaScript que cambie el color de fondo de la página al hacer clic.
3. Modifica el código para que cada clic cambie a un tono diferente.

**Preguntas para reflexionar:**
- ¿Cómo puedes acceder al `body` desde JavaScript?
- ¿Cómo puedes modificar el color de fondo de un elemento?
- ¿Qué podrías hacer para que el color cambie aleatoriamente en cada clic?

---

## 4. Juego de búsqueda en el DOM

1. Crea una lista con varios nombres y asigna la clase `destacado` a algunos.
2. Agrega un botón que cambie el color de los nombres con la clase `destacado` al hacer clic.

**Preguntas para reflexionar:**
- ¿Cómo puedes seleccionar solo los elementos con la clase `destacado`?
- ¿Cómo podrías recorrer la lista de elementos y cambiar su color?
- ¿Qué método del DOM te permite modificar los estilos de un elemento?

---

## 5. Manipulación de atributos en imágenes

1. Crea una página con una imagen y un botón que diga "Cambiar imagen".
2. Haz que al hacer clic la imagen cambie a otra diferente, y vuelva a la original al volver a hacer clic.

**Preguntas para reflexionar:**
- ¿Cómo puedes obtener el atributo `src` de una imagen desde JavaScript?
- ¿Cómo podrías modificar el `src` para cambiar la imagen?
- ¿Cómo puedes hacer que el botón alterne entre una imagen y otra cada vez que se presiona?
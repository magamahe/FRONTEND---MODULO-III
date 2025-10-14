// Seleccionar uno de los párrafos
const parrafo = document.getElementById("parrafo2");

//Seleccionar el padre
const padre = document.getElementById("contenedor");

// 1. Mostrar su elemento padre
console.log("Padre del párrafo:", parrafo.parentElement);

// 2. Mostrar su primer hijo (si lo tiene)

// Los párrafos normalmente no tienen hijos, así que será null
console.log("Primer hijo del párrafo:", parrafo.firstElementChild);

// Primer hijo del padre
console.log("Primer hijo del padre:", padre.firstElementChild);

// 3. Mostrar su hermano anterior
console.log("Hermano anterior del parrafo2:", parrafo.previousElementSibling);

// 4. Mostrar su hermano siguiente
console.log("Hermano siguiente del parrafo2:", parrafo.nextElementSibling);

/*
-------------------------
Preguntas para reflexionar:
-------------------------

❓ ¿Qué sucede si intentas acceder a previousElementSibling en el primer párrafo?
👉 Retorna null, porque no hay ningún elemento hermano antes del primero.
*/
console.log("Hermano anterior de parrafo1:", document.getElementById("parrafo1").previousElementSibling);

/*❓ ¿Qué sucede si intentas acceder a nextElementSibling en el último párrafo?
👉 También retorna null, porque no hay ningún elemento después del último.
*/
console.log("Hermano posterior de parrafo3:", document.getElementById("parrafo3").nextElementSibling);

/*
❓ ¿Cómo podrías recorrer todos los hijos de un div sin conocer la cantidad exacta?
👉 Usando un bucle sobre contenedor.children, por ejemplo:
*/

const contenedor = document.getElementById("contenedor");
for (let hijo of contenedor.children) {
    console.log(hijo);
}


/* 💡 Tips:

1️⃣ ¿Qué sucede si intentas acceder a un previousElementSibling o nextElementSibling en el primer o último párrafo?

Si accedes a previousElementSibling del primer párrafo, o a nextElementSibling del último párrafo, obtendrás null, porque no existe un hermano anterior o siguiente respectivamente.

2️⃣ ¿Cómo podrías recorrer todos los hijos de un div sin conocer la cantidad exacta?

Puedes usar la propiedad children del div, que devuelve una colección HTML de todos sus elementos hijos, y recorrerla con un bucle:

const contenedor = document.getElementById("miDiv");
for (let i = 0; i < contenedor.children.length; i++) {
  console.log(contenedor.children[i]);
}


También puedes usar for...of:

for (const hijo of contenedor.children) {
  console.log(hijo);
} */
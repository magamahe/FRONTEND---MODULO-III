// =========================================================
// Ejemplos de desestructuración, spread, rest, inmutabilidad, etc.
// =========================================================

console.log("=== Desestructuración de Arrays ===");

// Array de frutas
const frutas = ["manzana", "banana", "pera"];

// Desestructuración: extrae cada elemento según su posición
const [f1, f2] = frutas;

console.log(f1, f2); // "manzana" "banana"


// Otro array
const coords = [10, 20, 30];

// Salteamos el valor del medio usando una coma vacía
const [x, , z] = coords;

console.log(x, z); // 10 30


// =========================================================
// Desestructuración de Objetos
// =========================================================
console.log("=== Desestructuración de Objetos ===");

// Objeto auto
const auto = { 
  marca: "Ford", 
  modelo: "Fiesta", 
  año: 2018 
};

// Extraemos propiedades por nombre
const { marca, modelo } = auto;

console.log(marca, modelo); // "Ford" "Fiesta"


// Objeto con valor faltante
const usuario = { nombre: "Ana" };

// Valor por defecto en "edad" si no existe en el objeto
const { nombre, edad = 25 } = usuario;

console.log(nombre, edad); // "Ana" 25


// =========================================================
// Renombrar Variables
// =========================================================
console.log("=== Renombrar Variables ===");

// Objeto persona
const persona = { nombre: "Lucía", pais: "Argentina" };

// Renombramos "nombre" a "fullName" y "pais" a "country"
const { nombre: fullName, pais: country } = persona;

console.log(fullName, country); // "Lucía" "Argentina"


// =========================================================
// Desestructuración Anidada
// =========================================================
console.log("=== Desestructuración Anidada ===");

// Objeto con otro objeto dentro
const empleado = {
  nombre: "Julián",
  direccion: { ciudad: "Rosario", cp: 2000 }
};

// Extraemos propiedad anidada
const { nombre: nEmp, direccion: { ciudad } } = empleado;

console.log(nEmp, ciudad); // "Julián" "Rosario"


// Objeto con array adentro
const alumno = { nombre: "Lara", notas: [10, 9, 8] };

// Extraemos primera y segunda nota
const { notas: [primera, segunda] } = alumno;

console.log(primera, segunda); // 10 9


// =========================================================
// Spread Operator (...)
console.log("=== Spread Operator ===");

// Copia de array + elemento nuevo
const original = [1, 2, 3];
const copia = [...original, 4];

console.log(copia); // [1, 2, 3, 4]


// Copia de objeto sin mutar el original
const persona1 = { nombre: "Ana", edad: 25 };
const persona2 = { ...persona1, edad: 26 };

console.log(persona2); // { nombre: "Ana", edad: 26 }


// Spread como argumentos
console.log(Math.max(...[5, 10, 15])); // 15


// =========================================================
// Rest Operator (...)
console.log("=== Rest Operator ===");

// Función con cantidad infinita de argumentos
function sumar(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

console.log(sumar(1, 2, 3)); // 6


// Rest en arrays — agrupa el resto
const [primero, ...otros] = [10, 20, 30, 40];

console.log(primero, otros); // 10 [20, 30, 41]


// Rest en objetos — agrupa propiedades restantes
const userRest = { nombre: "Ana", edad: 25, ciudad: "Mendoza" };
const { nombre: nomRest, ...resto } = userRest;

console.log(nomRest, resto); 
// "Ana" { edad: 25, ciudad: "Mendoza" }


// =========================================================
// Inmutabilidad
console.log("=== Inmutabilidad ===");

// Objeto original
const pA = { nombre: "Leo", edad: 20 };

// Nueva copia, NO modificamos pA
const pB = { ...pA, edad: 21 };

console.log(pA, pB);
// pA sigue con edad 20
// pB tiene edad 21


// =========================================================
// Pasaje por Valor vs Referencia
console.log("=== Pasaje por Valor vs Referencia ===");

// Valor (primitivo): copia independiente
let a = 10;
let b = a;
b = 20;

console.log(a, b); // 10 20


// Referencia: ambos apuntan al mismo objeto
const p1 = { nombre: "Ana" };
const p2r = p1;

p2r.nombre = "Carla";

console.log(p1); // { nombre: "Carla" }


// =========================================================
// Shallow vs Deep Copy
console.log("=== Shallow vs Deep Copy ===");

// Copia superficial (shallow)
const obj1 = { a: 1, nested: { x: 10 } };
const shallow = { ...obj1 };

// Cambia el objeto anidado en AMBOS
shallow.nested.x = 99;

console.log("Shallow:", obj1);
// nested.x quedó en 99 → mala noticia


// Copia profunda (deep)
const deep = JSON.parse(JSON.stringify(obj1));
deep.nested.x = 50;

// Ahora sí: obj1 NO cambia
console.log("Deep:", obj1);

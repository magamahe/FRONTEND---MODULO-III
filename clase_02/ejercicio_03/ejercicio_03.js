
const miDiv = document.getElementById("miDiv");
const btnInnerText = document.getElementById("btnInnerText");
const btnInnerHTML = document.getElementById("btnInnerHTML");

btnInnerText.addEventListener("click", () => {
    // Cambiamos el texto usando innerText
    miDiv.innerText = "Este texto reemplaza al anterior usando innerText. <strong>No se verá en negrita</strong>";
});

btnInnerHTML.addEventListener("click", () => {
    // Cambiamos el contenido usando innerHTML
    miDiv.innerHTML = "Este texto reemplaza al anterior usando innerHTML. <strong>Sí se verá en negrita</strong>";
});


/* 💡 Tips:

1️⃣ ¿Qué diferencia notas entre innerText e innerHTML?

innerText solo cambia el texto visible dentro del elemento, sin interpretar etiquetas HTML.

innerHTML permite insertar contenido HTML, por lo que puedes incluir etiquetas como <strong>, <em>, <p>, etc., y se renderizan como elementos.

2️⃣ ¿Qué sucede si intentas insertar una etiqueta <strong> dentro del div usando innerText?

La etiqueta <strong> se mostrará literalmente como texto, sin aplicar el formato en negrita, porque innerText no interpreta HTML. */
const miDiv = document.getElementById("miDiv");
const btnInnerText = document.getElementById("btnInnerText");
const btnInnerHTML = document.getElementById("btnInnerHTML");
const textoUsuario = document.getElementById("textoUsuario");

btnInnerText.addEventListener("click", () => {
    // Mostrar el texto ingresado usando innerText
    miDiv.innerText = textoUsuario.value || "No ingresaste nada";
    miDiv.style.backgroundColor = "#f0f8ff"; // Fondo azul claro
});

btnInnerHTML.addEventListener("click", () => {
    // Mostrar el texto ingresado usando innerHTML
    miDiv.innerHTML = textoUsuario.value || "No ingresaste nada";
    miDiv.style.backgroundColor = "#fffacd"; // Fondo amarillo claro
});

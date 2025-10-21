document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formOpciones");
  const resultado = document.getElementById("resultado");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita recargar la página

    // Capturamos el color seleccionado (radio)
    const colorSeleccionado = document.querySelector("input[name='color']:checked");

    // Capturamos los hobbies seleccionados (checkbox)
    const hobbiesSeleccionados = document.querySelectorAll("input[name='hobby']:checked");

    // Si no hay color ni hobbies, mostramos mensaje de advertencia
    if (!colorSeleccionado && hobbiesSeleccionados.length === 0) {
      resultado.textContent = "⚠️ Por favor selecciona al menos un color o un pasatiempo.";
      resultado.classList.add("error");
      return;
    }

    // Preparamos los textos para mostrar
    let mensaje = "";

    if (colorSeleccionado) {
      mensaje += `🎨 Tu color favorito es: <strong>${colorSeleccionado.value}</strong><br>`;
    }

    if (hobbiesSeleccionados.length > 0) {
      // Convertimos los NodeList en un array y extraemos sus valores
      const listaHobbies = Array.from(hobbiesSeleccionados).map(h => h.value);
      mensaje += `💡 Tus pasatiempos son: <strong>${listaHobbies.join(", ")}</strong>`;
    }

    // Mostramos el resultado
    resultado.innerHTML = mensaje;
    resultado.classList.remove("error");
  });
});

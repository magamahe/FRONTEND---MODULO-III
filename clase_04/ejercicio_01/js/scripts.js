// Esperamos que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Obtenemos referencias a los elementos del formulario
  const formulario = document.getElementById("formulario");
  const inputNombre = document.getElementById("nombre");
  const inputEdad = document.getElementById("edad");
  const resultado = document.getElementById("resultado");

  // Agregamos un "escuchador" del evento submit
  formulario.addEventListener("submit", (event) => {
    // Evita que la página se recargue al enviar el formulario
    event.preventDefault();

    // Capturamos los valores de los inputs
    const nombre = inputNombre.value;
    const edad = inputEdad.value;

    // Verificamos que los campos no estén vacíos
    if (nombre.trim() === "" || edad.trim() === "") {
      resultado.textContent = "⚠️ Por favor completa todos los campos.";
      resultado.style.color = "red";
      return;
    }

    // Mostramos los datos en pantalla
    resultado.style.color = "black";
    resultado.innerHTML = `👋 Hola <strong>${nombre}</strong>, tenés <strong>${edad}</strong> años.`;

    // Limpiamos el formulario después de mostrar el resultado
    formulario.reset();
  });
});

/*  VALIDAMOS EL NOMBRE STRING Y LA EDAD NUMERO > 0

// Esperamos que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  const inputNombre = document.getElementById("nombre");
  const inputEdad = document.getElementById("edad");
  const resultado = document.getElementById("resultado");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = inputNombre.value.trim();
    const edad = inputEdad.value.trim();

    // --- Validar nombre ---
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!soloLetras.test(nombre)) {
      resultado.textContent = "⚠️ El nombre debe contener solo letras.";
      resultado.style.color = "red";
      return;
    }

    // --- Validar edad ---
    const edadNumero = parseInt(edad);
    if (isNaN(edadNumero) || edadNumero <= 0) {
      resultado.textContent = "⚠️ La edad debe ser un número entero válido.";
      resultado.style.color = "red";
      return;
    }

    // --- Si todo está bien ---
    resultado.style.color = "black";
    resultado.innerHTML = `👋 Hola <strong>${nombre}</strong>, tenés <strong>${edadNumero}</strong> años.`;
    formulario.reset();
  });
});
 */

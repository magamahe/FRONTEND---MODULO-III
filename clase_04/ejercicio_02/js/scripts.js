// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Referencias a los elementos
  const formulario = document.getElementById("formulario");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const errorEmail = document.getElementById("errorEmail");
  const errorPassword = document.getElementById("errorPassword");
  const resultado = document.getElementById("resultado");

  // Escuchamos el evento submit
  formulario.addEventListener("submit", (event) => {
    // Evitamos que se recargue la página
    event.preventDefault();

    // Limpiamos mensajes anteriores
    errorEmail.textContent = "";
    errorPassword.textContent = "";
    resultado.textContent = "";

    // Capturamos valores
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validación de email
    if (!email.includes("@")) {
      errorEmail.textContent = "⚠️ El correo debe contener '@'.";
      return; // detenemos el envío
    }

    // Validación de contraseña
    if (password.length < 6) {
      errorPassword.textContent = "⚠️ La contraseña debe tener al menos 6 caracteres.";
      return; // detenemos el envío
    }

    // Si pasa las validaciones, mostramos los datos
    resultado.innerHTML = `✅ Bienvenido, tu correo <strong>${email}</strong> fue validado correctamente.`;

    // Limpiamos el formulario
    formulario.reset();
  });
});

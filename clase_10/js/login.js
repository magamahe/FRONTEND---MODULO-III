// =================================================================
// 1. INICIALIZACIÓN
// =================================================================

// Espera a que todo el contenido del DOM (HTML) esté cargado antes de ejecutar el script.
document.addEventListener("DOMContentLoaded", function () {
  // Inicializa la lista de usuarios si aún no existe en el almacenamiento local.
  initUsers();
  // Configura los 'listeners' para los eventos de envío de formularios (login y registro).
  setupEventListeners();
});

// =================================================================
// 2. GESTIÓN DE USUARIOS INICIALES
// =================================================================

// Función que inicializa usuarios por defecto.
function initUsers() {
  // Verifica si la clave 'users' NO existe en localStorage.
  if (!localStorage.getItem("users")) {
    // Define un array con los usuarios iniciales de ejemplo.
    const initialUsers = [
      {
        username: "admin",
        email: "admin@ejemplo.com",
        password: "admin123",
      },
      {
        username: "estudiante",
        email: "estudiante@ejemplo.com",
        password: "estudiante123",
      },
    ];
    // Almacena la lista de usuarios iniciales en localStorage como una cadena JSON.
    localStorage.setItem("users", JSON.stringify(initialUsers));
  }
}

// =================================================================
// 3. LISTENERS DE EVENTOS
// =================================================================

// Configura los manejadores de eventos para los formularios.
function setupEventListeners() {
  // Obtiene los elementos de los formularios por su ID.
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  // Agrega el manejador 'handleLogin' al evento 'submit' del formulario de inicio de sesión.
  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }

  // Agrega el manejador 'handleRegister' al evento 'submit' del formulario de registro.
  if (registerForm) {
    registerForm.addEventListener("submit", handleRegister);
  }
}

// =================================================================
// 4. MANEJADOR DE INICIO DE SESIÓN (handleLogin)
// =================================================================

// Función que maneja el envío del formulario de inicio de sesión.
function handleLogin(e) {
  // Previene el comportamiento predeterminado de recarga del formulario.
  e.preventDefault();

  // Obtiene y limpia los valores de los campos del formulario.
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  // Verifica si la casilla "Recordarme" está marcada.
  const remember = document.getElementById("remember").checked;

  // Validación básica: asegura que ambos campos estén llenos.
  if (!username || !password) {
    showError("Por favor, completa todos los campos");
    return;
  }

  // Obtiene la lista de usuarios del localStorage (si no existe, usa un array vacío '[]').
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Busca un usuario que coincida con el nombre de usuario/email Y la contraseña.
  const user = users.find(
    (u) =>
      (u.username === username || u.email === username) &&
      u.password === password
  );

  // Si se encuentra un usuario (inicio de sesión exitoso):
  if (user) {
    showSuccess("¡Inicio de sesión exitoso! Redirigiendo...");

    // Decide dónde guardar la sesión según la casilla 'Recordarme'.
    if (remember) {
      // Guarda la sesión en localStorage para persistencia a largo plazo.
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          username: user.username,
          email: user.email,
        })
      );
    } else {
      // Guarda la sesión en sessionStorage para que expire al cerrar la pestaña.
      sessionStorage.setItem(
        "currentUser",
        JSON.stringify({
          username: user.username,
          email: user.email,
        })
      );
    }

    // Espera 1 segundo y luego redirige al usuario.
    setTimeout(() => {
      // Redirección: ../../index.html sube dos niveles de carpeta para ir al index principal.
      window.location.href = "../..//index.html";
    }, 1000);
  } else {
    // Si no se encuentra el usuario, muestra un mensaje de error.
    showError("Usuario o contraseña incorrectos. Por favor, intenta de nuevo.");
  }
}

// =================================================================
// 5. MANEJADOR DE REGISTRO (handleRegister)
// =================================================================

// Función que maneja el envío del formulario de registro.
function handleRegister(e) {
  // Previene el comportamiento predeterminado de recarga del formulario.
  e.preventDefault();

  // Obtiene y limpia los valores de los campos de registro.
  const username = document.getElementById("reg-username").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value;
  const passwordConfirm = document.getElementById("reg-password-confirm").value;

  // Validación 1: asegura que todos los campos estén llenos.
  if (!username || !email || !password || !passwordConfirm) {
    showError("Por favor, completa todos los campos");
    return;
  }

  // Validación 2: longitud mínima del nombre de usuario.
  if (username.length < 3) {
    showError("El nombre de usuario debe tener al menos 3 caracteres");
    return;
  }

  // Validación 3: formato de email válido.
  if (!isValidEmail(email)) {
    showError("Por favor, ingresa un email válido");
    return;
  }

  // Validación 4: longitud mínima de la contraseña.
  if (password.length < 6) {
    showError("La contraseña debe tener al menos 6 caracteres");
    return;
  }

  // Validación 5: las contraseñas deben coincidir.
  if (password !== passwordConfirm) {
    showError("Las contraseñas no coinciden");
    return;
  }

  // Obtiene la lista de usuarios registrados.
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Validación 6: verifica si el usuario o email ya existen.
  const userExists = users.some(
    (u) => u.username === username || u.email === email
  );

  if (userExists) {
    showError("El usuario o email ya está registrado. Por favor, usa otro.");
    return;
  }

  // Crea un nuevo objeto de usuario.
  const newUser = {
    username: username,
    email: email,
    password: password,
  };

  // Agrega el nuevo usuario a la lista y actualiza localStorage.
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  // Muestra mensaje de éxito.
  showSuccess("¡Registro exitoso! Ahora puedes iniciar sesión.");

  // Limpia los campos del formulario de registro.
  document.getElementById("register-form").reset();

  // Después de 2 segundos, cambia a la vista de Login y rellena el campo de usuario.
  setTimeout(() => {
    showLogin();
    document.getElementById("username").value = username;
  }, 2000);
}

// =================================================================
// 6. FUNCIONES DE UTILIDAD Y VISTA
// =================================================================

// Verifica si una cadena tiene el formato básico de un email.
function isValidEmail(email) {
  // Expresión regular para la validación básica de email.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Muestra un mensaje de error. Determina si el error es para Login o Registro.
function showError(message) {
  const registerBox = document.getElementById("register-box");
  // Determina si el formulario de registro está visible (no tiene la clase 'is-hidden').
  const isRegisterVisible =
    registerBox && !registerBox.classList.contains("is-hidden");

  let errorDiv, errorText, successDiv;

  // Asigna los elementos de error/éxito correspondientes al formulario visible.
  if (isRegisterVisible) {
    errorDiv = document.getElementById("error-message-register");
    errorText = document.getElementById("error-text-register");
    successDiv = document.getElementById("success-message-register");
  } else {
    errorDiv = document.getElementById("error-message");
    errorText = document.getElementById("error-text");
    successDiv = document.getElementById("success-message");
  }

  // Muestra el div de error, oculta el de éxito y programa la desaparición del error.
  if (errorDiv && errorText) {
    errorText.textContent = message;
    errorDiv.classList.remove("is-hidden"); // Muestra el mensaje de error.

    if (successDiv) {
      successDiv.classList.add("is-hidden"); // Oculta el mensaje de éxito.
    }

    // El error se oculta automáticamente después de 5 segundos.
    setTimeout(() => {
      if (isRegisterVisible) {
        closeErrorRegister();
      } else {
        closeError();
      }
    }, 5000);
  }
}

// Muestra un mensaje de éxito. Determina si es para Login o Registro (similar a showError).
function showSuccess(message) {
  const registerBox = document.getElementById("register-box");
  const isRegisterVisible =
    registerBox && !registerBox.classList.contains("is-hidden");

  let successDiv, successText, errorDiv;

  // Asigna los elementos de éxito/error correspondientes.
  if (isRegisterVisible) {
    successDiv = document.getElementById("success-message-register");
    successText = document.getElementById("success-text-register");
    errorDiv = document.getElementById("error-message-register");
  } else {
    successDiv = document.getElementById("success-message");
    successText = document.getElementById("success-text");
    errorDiv = document.getElementById("error-message");
  }

  // Muestra el div de éxito y oculta el de error.
  if (successDiv && successText) {
    successText.textContent = message;
    successDiv.classList.remove("is-hidden"); // Muestra el mensaje de éxito.

    if (errorDiv) {
      errorDiv.classList.add("is-hidden"); // Oculta el mensaje de error.
    }
  }
}

// Oculta específicamente el div de error del formulario de Login.
function closeError() {
  const errorDiv = document.getElementById("error-message");
  if (errorDiv) {
    errorDiv.classList.add("is-hidden");
  }
}

// Oculta específicamente el div de error del formulario de Registro.
function closeErrorRegister() {
  const errorDiv = document.getElementById("error-message-register");
  if (errorDiv) {
    errorDiv.classList.add("is-hidden");
  }
}

// Función para cambiar la vista al formulario de Registro.
function showRegister() {
  // Nota: usa '.box' para seleccionar el primer contenedor (que es el de Login).
  const loginBox = document.querySelector(".box");
  const registerBox = document.getElementById("register-box");

  if (loginBox && registerBox) {
    loginBox.classList.add("is-hidden"); // Oculta el formulario de Login.
    registerBox.classList.remove("is-hidden"); // Muestra el formulario de Registro.
    // Limpia cualquier mensaje de error/éxito al cambiar de vista.
    closeError();
    closeErrorRegister();
  }
}

// Función para cambiar la vista al formulario de Login.
function showLogin() {
  // Nota: usa '.box' para seleccionar el primer contenedor (que es el de Login).
  const loginBox = document.querySelector(".box");
  const registerBox = document.getElementById("register-box");

  if (loginBox && registerBox) {
    loginBox.classList.remove("is-hidden"); // Muestra el formulario de Login.
    registerBox.classList.add("is-hidden"); // Oculta el formulario de Registro.
    // Limpia cualquier mensaje de error/éxito al cambiar de vista.
    closeError();
    closeErrorRegister();
  }
}
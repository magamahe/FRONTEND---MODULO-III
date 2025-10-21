const formulario = document.getElementById('formulario');
const resultadoDiv = document.getElementById('resultado');
const comentarios = document.getElementById('comentarios');
const contador = document.getElementById('contador');

// Contador de caracteres en comentarios
comentarios.addEventListener('input', () => {
  contador.textContent = `${comentarios.value.length} / 50`;
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  // Capturar valores
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const fecha = document.getElementById('fechaNacimiento').value;
  const pais = document.getElementById('pais').value;
  const dni = document.getElementById('dni').value.trim();
  const comentariosVal = comentarios.value.trim();

  // Checkbox
  const musica = Array.from(document.querySelectorAll('input[name="musica"]:checked'))
                      .map(cb => cb.value);

  // Radio
  const programar = document.querySelector('input[name="programar"]:checked')?.value || '';

  // Validaciones
  if(!nombre || !apellido || !correo || !fecha || !pais || !dni || !programar){
    resultadoDiv.textContent = "Por favor completa todos los campos obligatorios.";
    return;
  }

  if(dni.length < 7){
    resultadoDiv.textContent = "El DNI debe tener al menos 7 números.";
    return;
  }

  if(comentariosVal.length > 50){
    resultadoDiv.textContent = "Los comentarios no pueden superar los 50 caracteres.";
    return;
  }

  // Validar edad >= 18
  const fechaNacimiento = new Date(fecha);
  const hoy = new Date();
  const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const m = hoy.getMonth() - fechaNacimiento.getMonth();
  if(m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())){
    edad--;
  }

  if(edad < 18){
    resultadoDiv.textContent = "Debes ser mayor de 18 años.";
    return;
  }

  // Mostrar resultado
  resultadoDiv.textContent = 
    `Nombre: ${nombre} ${apellido}\n` +
    `Correo: ${correo}\n` +
    `Fecha de nacimiento: ${fecha} (Edad: ${edad})\n` +
    `País: ${pais}\n` +
    `DNI: ${dni}\n` +
    `Música favorita: ${musica.join(', ') || 'Ninguna'}\n` +
    `Le gusta programar: ${programar}\n` +
    `Comentarios: ${comentariosVal || 'Ninguno'}`;
});

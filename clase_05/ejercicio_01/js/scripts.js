// Seleccionamos todas las preguntas
const preguntas = document.querySelectorAll('.faq-question');

// Recorremos cada una
preguntas.forEach(pregunta => {
  pregunta.addEventListener('click', () => {
    // Alternamos el estado de la pregunta (activa/inactiva)
    pregunta.classList.toggle('active');

    // Obtenemos el div con la respuesta (el siguiente elemento)
    const respuesta = pregunta.nextElementSibling;

    // Mostramos u ocultamos la respuesta
    respuesta.classList.toggle('show');
  });
});

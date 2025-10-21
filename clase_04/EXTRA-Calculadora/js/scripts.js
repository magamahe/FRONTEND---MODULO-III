    // Capturamos los elementos del DOM
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operacionSelect = document.getElementById('operacion');
    const resultadoDiv = document.getElementById('resultado');
    const botonCalcular = document.getElementById('calcular');

    // Agregamos un evento al botón para calcular al hacer clic
    botonCalcular.addEventListener('click', (e) => {
      e.preventDefault(); // Evita que la página se recargue

      // Obtenemos los valores ingresados y los convertimos a número
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);
      const operacion = operacionSelect.value;

      let resultado;

      // Validamos que ambos números sean válidos
      if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.textContent = "Por favor ingresa ambos números.";
        return;
      }

      // Realizamos la operación según lo seleccionado
      switch(operacion) {
        case '+':
          resultado = num1 + num2;
          break;
        case '-':
          resultado = num1 - num2;
          break;
        case '*':
          resultado = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            resultadoDiv.textContent = "No se puede dividir entre cero.";
            return;
          }
          resultado = num1 / num2;
          break;
        default:
          resultadoDiv.textContent = "Operación inválida.";
          return;
      }

      // Mostramos el resultado en pantalla
      resultadoDiv.textContent = `Resultado: ${resultado}`;
    });
  
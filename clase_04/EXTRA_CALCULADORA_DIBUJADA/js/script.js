
    const display = document.getElementById('display');
    const botones = document.querySelectorAll('.boton');
    let operacionActual = '';

    botones.forEach(boton => {
      boton.addEventListener('click', () => {
        const valor = boton.getAttribute('data-value');

        if (boton.id === 'borrar') {
          operacionActual = '';
          display.textContent = '0';
          return;
        }

        if (boton.id === 'igual') {
          try {
            operacionActual = eval(operacionActual).toString();
            display.textContent = operacionActual;
          } catch {
            display.textContent = 'Error';
          }
          return;
        }

        // Evitar dos operadores seguidos
        const ultimo = operacionActual.slice(-1);
        if ('+-*/'.includes(valor) && '+-*/'.includes(ultimo)) {
          operacionActual = operacionActual.slice(0, -1);
        }

        operacionActual += valor;
        display.textContent = operacionActual || '0';
      });
    });

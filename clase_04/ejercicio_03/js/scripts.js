document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("comentario");
  const contador = document.getElementById("contador");
  const maxCaracteres = 150;

  textarea.addEventListener("input", () => {
    const texto = textarea.value;
    const caracteresUsados = texto.length;
    const caracteresRestantes = maxCaracteres - caracteresUsados;

    // Actualiza el texto del contador
    contador.textContent = `Te quedan ${caracteresRestantes} caracteres.`;

    // Si supera el límite, corta el texto y cambia color del contador
    if (caracteresRestantes < 0) {
      textarea.value = texto.substring(0, maxCaracteres);
      contador.textContent = "¡Límite de 150 caracteres alcanzado!";
      contador.classList.add("alerta");
    } else {
      contador.classList.remove("alerta");
    }
  });
});



/* 
1️⃣ ¿Cómo puedes detectar cada vez que la usuaria presiona una tecla dentro del textarea?
Podés usar el evento input o el evento keydown:
    input → se activa cada vez que cambia el contenido del textarea (cuando escribís, pegás o borrás texto).
Es el más recomendado porque detecta todos los cambios, no solo los del teclado.
    keydown → se activa cuando presionás una tecla, antes de que aparezca el carácter.
Sirve si querés evitar directamente la escritura.

2️⃣ ¿Cómo puedes actualizar el contador de caracteres sin recargar la página?
Usando el DOM dinámico:
    cada vez que se ejecuta el evento, actualizamos el texto del elemento contador (p o span) con .textContent.

3️⃣ ¿Qué método de JavaScript puedes usar para evitar que se escriban más caracteres?
Podés usar el método substring() (o también slice()) para recortar el texto y mantenerlo dentro del límite.
*/
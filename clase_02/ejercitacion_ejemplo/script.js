// ====================================
// EJERCICIO 1: Cambiar texto del título
// ====================================
const titulo = document.getElementById("titulo");
const btnTitulo = document.getElementById("btn-titulo");

btnTitulo.addEventListener("click", function () {
  if (titulo.innerText === "Título Principal") {
    titulo.innerText = "¡Bienvenido al DOM!";
  } else {
    titulo.innerText = "Título Principal";
  }
});


// ======================================
// EJERCICIO 2: Mostrar / Ocultar imagen
// ======================================
const imagen = document.getElementById("imagen-perfil");
const boton = document.getElementById("btn-toggle");

boton.addEventListener("click", () => {
  // Opción 1: toggle display
   /*  if (imagen.style.display === "none") {
    imagen.style.display = "block";
  } else {
    imagen.style.display = "none";
  }  */

  // Opción 2: toggle clase (recomendado)
  imagen.classList.toggle("oculto");
});



// ======================================
// EJERCICIO 3: Modificar atributo src
// ======================================
const portada = document.getElementById("portada");
const btnPortada = document.getElementById("btn-portada");

const url1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLU079MwZuhYqT3TL5KwQmrcpOkEA-Fo1j-A&s";
const url2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgT_2nOyFPbnAMdDPCtcrEuJgpbLnNLqLLxw&s";

btnPortada.addEventListener("click", function () {
  const actual = portada.getAttribute("src");

  if (actual === url1) {
    portada.setAttribute("src", url2);
  } else {
    portada.setAttribute("src", url1);
  }
});


// ======================================
// EJERCICIO 4: Manipular clases CSS
// ======================================
const parrafo = document.querySelector(".texto");
const btnDestacar = document.getElementById("btn-destacar");

btnDestacar.addEventListener("click", function () {
  if (parrafo.classList.contains("destacado")) {
    parrafo.classList.remove("destacado");
    console.log("Clase 'destacado' removida");
  } else {
    parrafo.classList.add("destacado");
    console.log("Clase 'destacado' aplicada");
  }
});

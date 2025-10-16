
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("num");
let totalEventos = 0;
// Función para incrementar el contador
function sumarEvento() {
  totalEventos++;
  contador.textContent = totalEventos;
  contador.classList.add("animar");
  setTimeout(() => contador.classList.remove("animar"), 400);
}
// 🎵 Sonidos seguros (Google)
const sonidoClick = new Audio("https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg");
const sonidoError = new Audio("https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg");
const sonidoNoti = new Audio("https://actions.google.com/sounds/v1/cartoon/slide_whistle_to_drum_hit.ogg");
// 🛑 preventDefault()
document.getElementById("enlaceGoogle").addEventListener("click", function(e) {
  e.preventDefault();
  mensaje.textContent = "🚫 preventDefault(): El enlace no te llevó a Google, acción nativa cancelada.";
  mensaje.classList.add("visible");
  document.body.style.backgroundColor = "#440044";
  sonidoError.play();
  sumarEvento();
});
// 🚷 stopPropagation()
const abuelo = document.getElementById("abuelo");
const padre = document.getElementById("padre");
const hijo = document.getElementById("hijo");
abuelo.addEventListener("click", () => {
  mensaje.textContent = "👴 Evento capturado por el ABUELO";
  mensaje.classList.add("visible");
  document.body.style.backgroundColor = "#002244";
  sonidoClick.play();
  sumarEvento();
});
padre.addEventListener("click", () => {
  mensaje.textContent = "👨 Evento capturado por el PADRE";
  mensaje.classList.add("visible");
  document.body.style.backgroundColor = "#004422";
  sonidoClick.play();
  sumarEvento();
});
hijo.addEventListener("click", (event) => {
  /* event.stopPropagation(); */
  mensaje.textContent = "🧒 stopPropagation(): El HIJO detuvo la propagación. Solo él reaccionó.";
  mensaje.classList.add("visible");
  document.body.style.backgroundColor = "#440000";
  sonidoNoti.play();
  sumarEvento();
});

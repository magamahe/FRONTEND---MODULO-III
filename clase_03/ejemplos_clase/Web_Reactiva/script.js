// 1️⃣ evento con .onclick (forma clásica)
const boton = document.getElementById('botonClick');
boton.onclick = function() {
  document.body.style.backgroundColor = "#1a0033";
  document.getElementById('mensaje').classList.add('visible');
  document.getElementById('mensaje').textContent = "🟣 Sistema ACTIVADO por evento ONCLICK";
  new Audio('https://assets.mixkit.co/sfx/preview/mixkit-game-click-1114.mp3').play();
};
// 2️⃣ evento con addEventListener (forma moderna)
window.addEventListener('keydown', function(e) {
  if (e.key === ' ') {
    document.body.style.backgroundColor = "#002a44";
    document.getElementById('mensaje').textContent = "🔵 Evento KEYDOWN detectado (tecla ESPACIO)";
  }
});
// 3️⃣ evento preventDefault() en enlace
const link = document.createElement('a');

link.href = "https://google.com";
link.textContent = "👉 Ir a Google";
link.style.display = "block";
link.style.marginTop = "30px";

document.body.appendChild(link);

link.addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('mensaje').textContent = "🚫 preventDefault() evitó salir del sitio";
  new Audio('https://assets.mixkit.co/sfx/preview/mixkit-retro-arcade-casino-notification-211.mp3').play();
});

// 4️⃣ stopPropagation() con elementos anidados
const abuelo = document.createElement('div');
const padre = document.createElement('div');
const hijo = document.createElement('div');

abuelo.textContent = "👴 Abuelo";
padre.textContent = "👨 Padre";
hijo.textContent = "🧒 Hijo";

abuelo.style.marginTop = "40px";
abuelo.style.padding = "20px";
abuelo.style.background = "#222";
padre.style.padding = "20px";
padre.style.background = "#333";
hijo.style.padding = "20px";
hijo.style.background = "#555";

abuelo.appendChild(padre);
padre.appendChild(hijo);
document.body.appendChild(abuelo);


abuelo.addEventListener("click", () =>
   alert("Abuelo reacciona 🧓"));

padre.addEventListener("click", () => 
  alert("Padre reacciona 👨"));

hijo.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Hijo reacciona 🧒 (stopPropagation activo)");
});

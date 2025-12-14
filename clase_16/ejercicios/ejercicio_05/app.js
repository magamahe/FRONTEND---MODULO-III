let page = 0;
const itemsPorPagina = 10;
let posts = [];

async function cargar() {
  posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(r => r.json());
  mostrar();
}

function mostrar() {
  const inicio = page * itemsPorPagina;
  const fin = inicio + itemsPorPagina;

  const slice = posts.slice(inicio, fin);

  document.querySelector("#lista").innerHTML =
    slice.map(p => `<li class="p-2 bg-pink-100 border border-pink-300 rounded">${p.title}</li>`).join("");
}

document.querySelector("#next").onclick = () => {
  if ((page + 1) * itemsPorPagina < posts.length) {
    page++;
    mostrar();
  }
};

document.querySelector("#prev").onclick = () => {
  if (page > 0) {
    page--;
    mostrar();
  }
};

cargar();

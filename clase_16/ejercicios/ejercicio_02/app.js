async function ejecutar() {
  const coleccion = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json());

  const recurso = await fetch("https://jsonplaceholder.typicode.com/posts/5")
    .then(res => res.json());

  document.querySelector("#coleccion").textContent =
    JSON.stringify(coleccion, null, 2);

  document.querySelector("#recurso").textContent =
    JSON.stringify(recurso, null, 2);
}

ejecutar();

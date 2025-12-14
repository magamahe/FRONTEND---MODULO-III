document.querySelector("#buscar").addEventListener("click", async () => {
  const q = document.querySelector("#query").value;

  const url = `https://api.github.com/search/repositories?q=${q}`;
  const res = await fetch(url);
  const data = await res.json();

  document.querySelector("#meta").textContent =
    `Mostrando ${data.items.length} de ${data.total_count} resultados`;

  document.querySelector("#lista").innerHTML =
    data.items.map(r => `<li class="p-2 bg-pink-100 border border-pink-300 rounded">${r.full_name}</li>`).join("");
});

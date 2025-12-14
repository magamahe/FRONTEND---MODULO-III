document.querySelector("#buscar").addEventListener("click", async () => {
  const userId = document.querySelector("#user").value;

  const url = new URL("https://jsonplaceholder.typicode.com/posts");
  url.searchParams.set("userId", userId);

  const data = await fetch(url).then(res => res.json());

  document.querySelector("#lista").innerHTML =
    data.map(p => `<li class="p-2 bg-pink-100 border border-pink-300 rounded">${p.title}</li>`).join("");
});

document.querySelector("#filtrar").addEventListener("click", async () => {
  const user = document.querySelector("#user").value;
  const order = document.querySelector("#orden").value;

  const url = new URL("https://jsonplaceholder.typicode.com/posts");

  if (user) url.searchParams.set("userId", user);
  url.searchParams.set("_sort", "title");
  url.searchParams.set("_order", order);

  const data = await fetch(url).then(res => res.json());

  document.querySelector("#lista").innerHTML =
    data.map(p => `<li class="p-2 bg-pink-100 border border-pink-300 rounded">${p.title}</li>`).join("");
});

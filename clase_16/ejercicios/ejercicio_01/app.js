const resumen = {
  colecciones: [
    { endpoint: "/posts", metodo: "GET", filtros: ["userId", "_sort", "_order"] },
    { endpoint: "/comments", metodo: "GET", filtros: ["postId"] },
    { endpoint: "/albums", metodo: "GET", filtros: ["userId"] },
    { endpoint: "/photos", metodo: "GET", filtros: ["albumId"] },
    { endpoint: "/todos", metodo: "GET", filtros: ["userId"] },
    { endpoint: "/users", metodo: "GET", filtros: [] }
  ],
};

document.querySelector("#resultado").textContent =
  JSON.stringify(resumen, null, 2);

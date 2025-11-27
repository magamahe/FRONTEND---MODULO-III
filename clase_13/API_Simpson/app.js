let personajes = [];

const $listaPersonajes = document.querySelector("#lista-personajes");

fetch("https://thesimpsonsapi.com/api/characters")
  .then((response) => response.json())
  .then((data) => {
    personajes = data.results;

    personajes.forEach((personaje) => {
      const { name, age, occupation, status, portrait_path, phrases } = personaje;

      const $personaje = document.createElement("li");
      $personaje.classList.add(
        "border",
        "border-gray-300",
        "col-span-1",
        "divide-y",
        "divide-gray-200",
        "rounded-lg",
        "bg-white",
        "shadow",
        "w-100"
      );

      $personaje.innerHTML = `
        <div class="flex w-full items-center justify-between space-x-6 p-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="truncate text-sm font-medium text-gray-900">${name}</h3>
              <span class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-blue-600 ring-1 ring-inset ring-green-600/20">
                ${age ? age : "Desconocido"}
              </span>
              <span class="inline-flex flex-shrink-0 items-center rounded-full bg-gray-200 px-1.5 py-0.5 text-xs font-medium text-gray-700">
                ${status ? status : "Desconocido"}
              </span>
            </div>
            <p class="mt-1 truncate text-sm text-gray-500">${occupation}</p>
          </div>
          <img class="h-15 w-14 flex-shrink-0 bg-gray-300 object-contain" src="https://cdn.thesimpsonsapi.com/500${portrait_path}" alt="">
        </div>
        <div class="px-6 py-4">
          <p class="text-sm text-gray-900 w-full truncate text-center italic" style="color: oklch(43.2% 0.232 292.759);">
            ${phrases[1] ? phrases[1] : "Desconocido"}
          </p>
        </div>
      `;

      $listaPersonajes.appendChild($personaje);
    });
  });

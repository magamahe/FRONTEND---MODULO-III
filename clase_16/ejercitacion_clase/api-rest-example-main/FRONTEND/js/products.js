const API_URL = "http://localhost:3000/api/products";

let allProducts = [];

async function loadProducts() {
  const res = await fetch(API_URL);
  const result = await res.json();
  allProducts = result.data;
  renderProducts(allProducts);
}

function formatPrice(value) {
  return new Intl.NumberFormat("es-AR").format(value);
}
 
function renderProducts(products) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = `
      <p class="col-span-full text-center text-gray-500">
        No hay productos para mostrar
      </p>
    `;
    return;
  }

  products.forEach(p => {
    container.innerHTML += `
      <div class="bg-white rounded-2xl shadow-lg p-5 flex flex-col justify-between">
        <div>
          <h2 class="text-2x1 text-lg font-bold text-indigo-700 text-center uppercase tracking-wide">${p.name}</h2>
          <p class="text-sm text-gray-600">${p.description}</p>
          
          <p class="text-xs text-gray-500">Stock: ${p.stock}</p>
          <p class="text-xs text-gray-500">Marca: ${p.brand}</p>

          <p class="mt-4 text-2xl font-bold text-green-600 text-center">$ ${formatPrice(p.price)}</p>
        </div>

        <div class="mt-4 flex gap-2">
          <a
            href="edit.html?id=${p._id}"
            class="flex-1 text-center bg-blue-400 text-white py-1 rounded hover:bg-blue-500"
          >
            ✏️ Editar
          </a>
          <button
            onclick="deleteProduct('${p._id}')"
            class="flex-1 bg-yellow-500 text-white py-1 rounded hover:bg-yellow-600"
          >
            🗑️ Eliminar
          </button>
        </div>
      </div>
    `;
  });
}

// Buscar
document.getElementById("searchInput").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = allProducts.filter(p =>
    p.name.toLowerCase().includes(value) ||
    p.brand.toLowerCase().includes(value)
  );
  renderProducts(filtered);
});

// Eliminar
async function deleteProduct(id) {
  if (!confirm("¿Eliminar este producto?")) return;

  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  loadProducts();
}

function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
}

loadProducts();

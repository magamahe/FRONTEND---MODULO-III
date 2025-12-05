/* ============================================================
   SCRIPT COMPLETO FINAL (CON AUTO-CLEAR DE MENSAJES)
   ============================================================ */

/* ---------------------------
   Referencias DOM
----------------------------*/
const postsList = document.getElementById('postsList');
const postForm = document.getElementById('postForm');
const titleInput = document.getElementById('title');
const bodyInput = document.getElementById('body');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const limitBtn = document.getElementById('limitBtn');
const formTitle = document.getElementById('formTitle');
const submitBtn = document.getElementById('submitBtn');
const statusBox = document.getElementById('status');

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Estado local
let postsData = [];
let editingId = null;

/* ---------------------------
   Mensajes con auto-clear (Punto C)
----------------------------*/
let statusTimeout;

function showStatus(html) {
  statusBox.innerHTML = html;

  if (statusTimeout) clearTimeout(statusTimeout);

  statusTimeout = setTimeout(() => {
    statusBox.innerHTML = "";
  }, 3000);
}

function setStatusLoading(msg) {
  showStatus(`<p class="bg-yellow-200 text-yellow-800 p-2 rounded">${msg}</p>`);
}

function setStatusSuccess(msg) {
  showStatus(`<p class="bg-green-200 text-green-800 p-2 rounded">${msg}</p>`);
}

function setStatusError(msg) {
  showStatus(`<p class="bg-red-200 text-red-800 p-2 rounded">${msg}</p>`);
}

/* ---------------------------
   Escape HTML (seguridad)
----------------------------*/
function escapeHtml(s) {
  if (!s) return "";
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* ---------------------------
   Render de un post (li)
----------------------------*/
function addPostToDOM(post, prepend = false) {
  const li = document.createElement("li");
  li.className = "border p-2 mb-2 rounded bg-white shadow flex justify-between items-center";
  li.dataset.id = post.id;

  li.innerHTML = `
    <div class="flex-1">
      <span class="font-semibold">${post.id} - </span>
      <span class="post-title">${escapeHtml(post.title)}</span>
      <p class="post-body text-sm text-gray-600">${escapeHtml(post.body)}</p>
    </div>
    <div class="ml-4 flex gap-2">
      <button class="editBtn bg-yellow-400 text-white px-2 py-1 rounded">Editar</button>
      <button class="delBtn bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
    </div>
  `;

  /* ---- Editar ---- */
  li.querySelector(".editBtn").addEventListener("click", () => {
    editingId = post.id;

    titleInput.value = post.title;
    bodyInput.value = post.body;

    formTitle.textContent = "Editar Post";
    submitBtn.textContent = "Guardar Cambios";
    submitBtn.classList.remove("bg-blue-500");
    submitBtn.classList.add("bg-yellow-500");

    titleInput.focus();
  });

  /* ---- Eliminar ---- */
  li.querySelector(".delBtn").addEventListener("click", async () => {
    if (!confirm("¿Seguro querés eliminar este post?")) return;

    try {
      await fetch(`${API_URL}/${post.id}`, { method: "DELETE" });

      li.remove();
      postsData = postsData.filter(p => p.id !== post.id);

      setStatusSuccess("Post eliminado exitosamente.");
    } catch (err) {
      setStatusError("Error al eliminar el post.");
    }
  });

  if (prepend) postsList.prepend(li);
  else postsList.appendChild(li);
}

/* ---------------------------
   Render completo
----------------------------*/
function displayPosts(posts) {
  postsList.innerHTML = "";
  posts.forEach(p => addPostToDOM(p));
}

/* ---------------------------
   Obtener posts
----------------------------*/
async function fetchPosts(limit = 0) {
  try {
    setStatusLoading("Cargando posts...");

    const url = limit ? `${API_URL}?_limit=${limit}` : API_URL;
    const res = await fetch(url);
    const data = await res.json();

    postsData = data;

    displayPosts(postsData);

    setStatusSuccess("Posts cargados correctamente.");
  } catch (err) {
    setStatusError("Error al cargar posts.");
  }
}

/* ---------------------------
   Formulario → Crear o Editar
----------------------------*/
postForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();

  if (!title || !body) {
    setStatusError("Completá todos los campos.");
    return;
  }

  const payload = { title, body, userId: 1 };

  /* ----- EDITAR ----- */
  if (editingId !== null) {
    try {
      const res = await fetch(`${API_URL}/${editingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const updated = await res.json();

      postsData = postsData.map(p => p.id === editingId ? { ...p, ...updated } : p);

      const li = postsList.querySelector(`li[data-id="${editingId}"]`);
      li.querySelector(".post-title").textContent = updated.title;
      li.querySelector(".post-body").textContent = updated.body;

      setStatusSuccess("Post actualizado correctamente.");

      resetFormState();

    } catch (err) {
      setStatusError("Error al actualizar el post.");
    }

    return;
  }

  /* ----- CREAR NUEVO POST ----- */
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const created = await res.json();

    const maxId = Math.max(...postsData.map(p => p.id));
    created.id = maxId + 1;

    postsData.unshift(created);
    addPostToDOM(created, true);

    setStatusSuccess("Post creado correctamente.");

    postForm.reset();
  } catch (err) {
    setStatusError("Error al crear el post.");
  }
});

/* ---------------------------
   Reset formulario
----------------------------*/
function resetFormState() {
  editingId = null;
  postForm.reset();

  formTitle.textContent = "Crear Nuevo Post";
  submitBtn.textContent = "Crear Post";

  submitBtn.classList.remove("bg-yellow-500");
  submitBtn.classList.add("bg-blue-500");
}

/* ---------------------------
   Búsqueda
----------------------------*/
searchBtn.addEventListener("click", () => {
  const q = searchInput.value.toLowerCase().trim();

  if (!q) {
    displayPosts(postsData);
    return;
  }

  const filtrados = postsData.filter(
    p => p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q)
  );

  displayPosts(filtrados);
});

/* ---------------------------
   Límite 10
----------------------------*/
limitBtn.addEventListener("click", () => {
  fetchPosts(10);
});

/* ---------------------------
   Inicialización
----------------------------*/
fetchPosts(20);
resetFormState();

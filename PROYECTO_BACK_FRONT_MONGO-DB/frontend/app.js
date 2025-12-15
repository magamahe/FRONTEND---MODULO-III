// ================================
// API endpoint configuration
// ================================
const API = (window.API_BASE || 'http://localhost:3000') + '/api/users';

// Helper to get element by ID
const $ = id => document.getElementById(id);

// ================================
// Fetch users with optional search or sort
// ================================
const fetchUsers = async (opts = {}) => {
  const { search, sort } = opts;
  let url = API;

  if (search) url = API + '/search?name=' + encodeURIComponent(search);
  else if (sort) url = API + '/sort?order=' + sort;

  const res = await fetch(url);
  return res.json();
};

// ================================
// Fetch user statistics
// ================================
const fetchStats = async () => {
  const res = await fetch(API + '/stats');
  return res.json();
};

// ================================
// Render statistics
// ================================
const renderStats = (s) => {
  const el = $('stats');

  if (!s || s.count === 0) {
    el.innerText = 'No hay datos';
    return;
  }

  el.innerText = `Usuarios: ${s.count} · Edad mínima: ${s.minAge} · Edad máxima: ${s.maxAge} · Promedio: ${Number(s.avgAge).toFixed(0)}`;
};

// ================================
// Render users
// ================================
const renderUsers = (users) => {
  const list = $('usersList');
  list.innerHTML = '';

  users.forEach(u => {
    const card = document.createElement('div');
    card.className = 'p-3 border rounded flex justify-between items-center';
    card.innerHTML = `
      <div>
        <div class="font-semibold">
          ${u.name}
          <span class="text-sm text-gray-500">(${u.age})</span>
        </div>
        <div class="text-sm text-gray-600">
          ${u.email} · ${u.phone || ''}
        </div>
      </div>
      <div class="flex gap-2">
        <button class="editBtn px-3 py-1 bg-yellow-300 rounded" data-id="${u._id}">
          Editar
        </button>
        <button class="delBtn px-3 py-1 bg-red-500 text-white rounded" data-id="${u._id}">
          Borrar
        </button>
      </div>
    `;
    list.appendChild(card);
  });

  // Edit
  document.querySelectorAll('.editBtn').forEach(b => {
    b.addEventListener('click', async (e) => {
      const id = e.target.dataset.id;
      const res = await fetch(API + '/' + id);
      const u = await res.json();

      $('name').value = u.name;
      $('email').value = u.email;
      $('age').value = u.age;
      $('phone').value = u.phone || '';
      $('userId').value = u._id;
    });
  });

  // Delete
  document.querySelectorAll('.delBtn').forEach(b => {
    b.addEventListener('click', async (e) => {
      if (!confirm('Eliminar usuario?')) return;
      const id = e.target.dataset.id;
      await fetch(API + '/' + id, { method: 'DELETE' });
      loadAll();
    });
  });
};

// ================================
// Load all users and stats
// ================================
const loadAll = async () => {
  const users = await fetchUsers();
  renderUsers(users);

  const s = await fetchStats();
  renderStats(s);
};

// ================================
// DOM Ready
// ================================
document.addEventListener('DOMContentLoaded', () => {

  const ageInput = $('age');
  const form = $('userForm');
  const submitBtn = form.querySelector('button[type="submit"]');

  // Crear mensaje de error de edad
  const ageError = document.createElement('p');
  ageError.id = 'ageError';
  ageError.className = 'text-sm text-red-500 mt-1 hidden';
  ageError.innerText = 'La edad debe estar entre 0 y 100';
  ageInput.after(ageError);

  // ============================
  // Validación en tiempo real
  // ============================
  ageInput.addEventListener('input', () => {
    const age = Number(ageInput.value);

    if (age < 0 || age > 100 || Number.isNaN(age)) {
      ageError.classList.remove('hidden');
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
      ageError.classList.add('hidden');
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
  });

  // ============================
  // Search
  // ============================
  $('btnSearch').addEventListener('click', async () => {
    const q = $('searchName').value.trim();
    const order = $('sortOrder').value;

    if (q) {
      renderUsers(await fetchUsers({ search: q }));
    } else {
      renderUsers(await fetchUsers({ sort: order }));
    }
  });

  // Refresh
  $('btnRefresh').addEventListener('click', loadAll);

  // ============================
  // Submit form
  // ============================
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const age = Number(ageInput.value);
    if (age < 0 || age > 100) {
      alert('La edad debe estar entre 0 y 100');
      return;
    }

    const id = $('userId').value;
    const payload = {
      name: $('name').value,
      email: $('email').value,
      age,
      phone: $('phone').value
    };

    if (id) {
      await fetch(API + '/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } else {
      await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }

    form.reset();
    $('userId').value = '';
    loadAll();
  });

  // Clear form
  $('btnClear').addEventListener('click', () => {
    form.reset();
    $('userId').value = '';
  });

  // Initial load
  loadAll();
});

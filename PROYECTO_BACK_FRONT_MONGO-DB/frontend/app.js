const API = (window.API_BASE || 'http://localhost:3000') + '/api/users';

const $ = id => document.getElementById(id);

const fetchUsers = async (opts = {}) => {
  const { search, sort } = opts;
  let url = API;
  if (search) url = API + '/search?name=' + encodeURIComponent(search);
  else if (sort) url = API + '/sort?order=' + sort;
  const res = await fetch(url);
  return res.json();
};

const fetchStats = async () => {
  const res = await fetch(API + '/stats');
  return res.json();
};

const renderStats = (s) => {
  const el = $('stats');
  if (!s || s.count === 0) {
    el.innerText = 'No hay datos';
    return;
  }
  el.innerText = `Usuarios: ${s.count} · Edad mínima: ${s.minAge} · Edad máxima: ${s.maxAge} · Promedio: ${Number(s.avgAge).toFixed(2)}`;
};

const renderUsers = (users) => {
  const list = $('usersList');
  list.innerHTML = '';
  users.forEach(u => {
    const card = document.createElement('div');
    card.className = 'p-3 border rounded flex justify-between items-center';
    card.innerHTML = `
      <div>
        <div class="font-semibold">${u.name} <span class="text-sm text-gray-500">(${u.age})</span></div>
        <div class="text-sm text-gray-600">${u.email} · ${u.phone || ''}</div>
      </div>
      <div class="flex gap-2">
        <button class="editBtn px-3 py-1 bg-yellow-300 rounded" data-id="${u._id}">Editar</button>
        <button class="delBtn px-3 py-1 bg-red-500 text-white rounded" data-id="${u._id}">Borrar</button>
      </div>
    `;
    list.appendChild(card);
  });

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

  document.querySelectorAll('.delBtn').forEach(b => {
    b.addEventListener('click', async (e) => {
      if (!confirm('Eliminar usuario?')) return;
      const id = e.target.dataset.id;
      await fetch(API + '/' + id, { method: 'DELETE' });
      loadAll();
    });
  });
};

const loadAll = async () => {
  const users = await fetchUsers();
  renderUsers(users);
  const s = await fetchStats();
  renderStats(s);
};

document.addEventListener('DOMContentLoaded', () => {
  $('btnSearch').addEventListener('click', async () => {
    const q = $('searchName').value.trim();
    const order = $('sortOrder').value;
    if (q) {
      const users = await fetchUsers({ search: q });
      renderUsers(users);
    } else {
      const users = await fetchUsers({ sort: order });
      renderUsers(users);
    }
  });

  $('btnRefresh').addEventListener('click', loadAll);

  $('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = $('userId').value;
    const payload = {
      name: $('name').value,
      email: $('email').value,
      age: Number($('age').value),
      phone: $('phone').value
    };
    if (id) {
      await fetch(API + '/' + id, { method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) });
    } else {
      await fetch(API, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) });
    }
    $('userForm').reset();
    $('userId').value = '';
    loadAll();
  });

  $('btnClear').addEventListener('click', () => {
    $('userForm').reset();
    $('userId').value = '';
  });

  loadAll();
});

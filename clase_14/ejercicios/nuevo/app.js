// Simulador REST - app.js
// Datos locales que simulan la base / API
const DB = {
  libros: [
    { id: 57, titulo: 'Viaje a Marte', genero: 'ciencia-ficcion', fecha: '2020-03-12' },
    { id: 58, titulo: 'El universo en tus ojos', genero: 'ciencia-ficcion', fecha: '2022-11-08' },
    { id: 59, titulo: 'Recetas de la abuela', genero: 'cocina', fecha: '2019-06-20' },
  ],
  resenas: {
    58: [
      { id: 1, usuario: 'Lu', texto: 'Excelente libro', fecha: '2022-12-01' }
    ]
  },
  usuarios: [
    { id: 15, nombre: 'Usuario Demo', email: 'demo@example.com' }
  ],
  pedidos: [
    { id: 101, total: 320, fecha: '2025-10-01' },
    { id: 102, total: 120, fecha: '2025-11-10' }
  ],
  posts: [
    { id: 15, titulo: 'Título antiguo' }
  ],
  productos: []
};

// Utilidades de UI
const $ = sel => document.querySelector(sel);
const consoleEl = $('#console');
const vista = $('#vista-datos');
function log(msg){ const p = document.createElement('div'); p.textContent = msg; consoleEl.appendChild(p); consoleEl.scrollTop = consoleEl.scrollHeight; }
function prettyJSON(obj){ return JSON.stringify(obj, null, 2); }
function showCard(title, body){ const card = document.createElement('div'); card.className='card'; card.innerHTML='<strong>'+title+'</strong><pre>'+body+'</pre>'; vista.appendChild(card); }

// Simulador de fetch (promesa con delay)
function fakeFetch(handler){
  log('→ Iniciando petición...');
  return new Promise((resolve) => {
    setTimeout(()=>{
      const res = handler();
      log('← Respuesta recibida: ' + res.status + ' ' + (res.statusText || ''));
      if(res.json) showCard(res.url || 'response', prettyJSON(res.json));
      resolve(res);
    }, 700);
  });
}

// Endpoints simulados
async function getLibros(){
  return fakeFetch(()=>({ status:200, statusText:'OK', url:'/libros', json: DB.libros }));
}

async function getLibro(id){
  const libro = DB.libros.find(l=>l.id===id);
  if(!libro) return { status:404, statusText:'Not Found' };
  return fakeFetch(()=>({ status:200, statusText:'OK', url:`/libros/${id}`, json: libro }));
}

async function getResenas(id){
  const r = DB.resenas[id] || [];
  return fakeFetch(()=>({ status:200, statusText:'OK', url:`/libros/${id}/resenas`, json: r }));
}

async function filterLibrosByGenero(genero){
  const arr = DB.libros.filter(l=>l.genero===genero).sort((a,b)=> new Date(b.fecha)-new Date(a.fecha));
  return fakeFetch(()=>({ status:200, statusText:'OK', url:`/libros?genero=${genero}&orden=fecha_desc`, json: arr }));
}

async function postResena(libroId, nueva){
  DB.resenas[libroId] = DB.resenas[libroId] || [];
  const newId = (DB.resenas[libroId].length||0)+1;
  const item = { id:newId, ...nueva };
  DB.resenas[libroId].push(item);
  return fakeFetch(()=>({ status:201, statusText:'Created', url:`/libros/${libroId}/resenas`, json: item }));
}

// Casos varios
async function postRegistro(data){
  const newId = DB.usuarios.length + 1;
  const user = { id:newId, ...data };
  DB.usuarios.push(user);
  return fakeFetch(()=>({ status:201, statusText:'Created', url:'/usuarios', json: user }));
}

async function deleteProducto(id){
  const prod = DB.productos.find(p=>p.id===id);
  if(!prod) return fakeFetch(()=>({ status:404, statusText:'Not Found', url:`/productos/${id}`, json:{ message:'Producto no encontrado' } }));
  DB.productos = DB.productos.filter(p=>p.id!==id);
  return fakeFetch(()=>({ status:200, statusText:'OK', url:`/productos/${id}`, json:{ message:'Eliminado' } }));
}

async function patchUsuarioEmail(id, email){
  const u = DB.usuarios.find(x=>x.id===id);
  if(!u) return fakeFetch(()=>({ status:404, statusText:'Not Found', url:`/usuarios/${id}` }));
  u.email = email;
  return fakeFetch(()=>({ status:200, statusText:'OK', url:`/usuarios/${id}`, json: u }));
}

async function getPedidosRecientes(){
  return fakeFetch(()=>({ status:200, statusText:'OK', url:'/pedidos?recientes=true', json: DB.pedidos }));
}

async function patchPostTitle(id, titulo){
  const p = DB.posts.find(x=>x.id===id);
  if(!p) return fakeFetch(()=>({ status:404, statusText:'Not Found', url:`/posts/${id}` }));
  p.titulo = titulo;
  return fakeFetch(()=>({ status:200, statusText:'OK', url:`/posts/${id}`, json: p }));
}

// Event bindings
$('#btn-get-libros').addEventListener('click', async ()=>{
  vista.innerHTML=''; await getLibros();
});
$('#btn-get-libro-58').addEventListener('click', async ()=>{ vista.innerHTML=''; await getLibro(58); });
$('#btn-get-reseñas-58').addEventListener('click', async ()=>{ vista.innerHTML=''; await getResenas(58); });
$('#btn-filtrar-genero').addEventListener('click', async ()=>{ vista.innerHTML=''; await filterLibrosByGenero('ciencia-ficcion'); });
$('#btn-post-reseña').addEventListener('click', async ()=>{ vista.innerHTML=''; await postResena(58, { usuario:'Gabi', texto:'Me encantó', fecha: new Date().toISOString().slice(0,10) }); });

$('#btn-registro').addEventListener('click', async ()=>{
  vista.innerHTML=''; await postRegistro({ nombre:'Nuevo Usuario', email:'nuevo@example.com' });
});

$('#btn-eliminar-producto').addEventListener('click', async ()=>{
  vista.innerHTML=''; await deleteProducto(999);
});

$('#btn-actualizar-email').addEventListener('click', async ()=>{
  vista.innerHTML=''; await patchUsuarioEmail(15, 'nuevo-email@example.com');
});

$('#btn-pedidos-recientes').addEventListener('click', async ()=>{ vista.innerHTML=''; await getPedidosRecientes(); });

$('#btn-edit-post').addEventListener('click', async ()=>{
  const titulo = $('#post-title').value.trim();
  vista.innerHTML='';
  if(!titulo){ alert('Escribe un título'); return; }
  await patchPostTitle(15, titulo);
});

// Init: show some cards
document.addEventListener('DOMContentLoaded', ()=>{
  showCard('Instrucciones', 'Usá los botones para simular llamadas REST. Verás código HTTP y JSON en la sección "Salida".');
  showCard('Ejemplo de URI', '/libros?genero=ciencia-ficcion&orden=fecha_desc');
  log('Consola lista. ¡Empezá a probar!');
});

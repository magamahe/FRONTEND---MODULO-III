
const carrito = document.querySelector('#lista-carrito tbody'); // tbody del carrito
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); // botón vaciar carrito
const cursos = document.querySelectorAll('.agregar-carrito'); // botones agregar curso

let articulosCarrito = []; // array donde guardamos los cursos agregados

// Eventos
cursos.forEach(curso => {
    curso.addEventListener('click', agregarCurso);
});

vaciarCarritoBtn.addEventListener('click', () => {
    articulosCarrito = [];
    limpiarHTML();
});

// Función agregar curso
function agregarCurso(e) {
    e.preventDefault();
    const curso = e.target.closest('.card'); // obtener la card del curso
    
    // El precio debe tomar el valor de la oferta (la clase .oferta) para que coincida con el cálculo del total.
    const precioTexto = curso.querySelector('.precio .oferta').textContent; 

    const infoCurso = {
        id: curso.querySelector('.agregar-carrito').dataset.id,
        titulo: curso.querySelector('h4').textContent,
        precio: precioTexto, // Usar el precio de oferta
        imagen: curso.querySelector('img').src,
        cantidad: 1
    };

    // Verificar si ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        articulosCarrito = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
            }
            return curso;
        });
    } else {
        articulosCarrito.push(infoCurso);
    }

    carritoHTML();
}

// Función eliminar curso
function eliminarCurso(id) {
    articulosCarrito = articulosCarrito.filter(curso => curso.id !== id);
    carritoHTML();
}

// Función aumentar cantidad
function aumentarCantidad(id) {
    articulosCarrito = articulosCarrito.map(curso => {
        if (curso.id === id) {
            // Aseguramos que la cantidad no suba infinitamente (si quisieras limitar)
            curso.cantidad++;
        }
        return curso;
    });
    carritoHTML();
}

// Función disminuir cantidad
function disminuirCantidad(id) {
    articulosCarrito = articulosCarrito.map(curso => {
        if (curso.id === id) {
            curso.cantidad--;
        }
        return curso;
    }).filter(curso => curso.cantidad > 0); // eliminar si cantidad llega a 0
    carritoHTML();
}

// Mostrar el carrito en HTML
function carritoHTML() {
    limpiarHTML();
    let total = 0;

    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        
        // El precio debe limpiarse y convertirse a número
        // El precio se almacena como '$15', eliminamos el '$'
        const precioLimpio = curso.precio.replace('$', '').trim();
        const precioNumero = parseFloat(precioLimpio); 
        
        total += precioNumero * curso.cantidad;

        // **AQUÍ ESTÁ LA CORRECCIÓN CRÍTICA DEL HTML**
        // Se genera el div.cantidad-control con botones y un input en medio
        row.innerHTML = `
            <td><img src="${curso.imagen}" width="50"></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td class="cantidad-cell">
                <div class="cantidad-control">
                    <button class="restar-cantidad boton-cantidad" data-id="${curso.id}" data-accion="menos">-</button>
                    <input type="number" class="cantidad-input" value="${curso.cantidad}" min="1" readonly>
                    <button class="sumar-cantidad boton-cantidad" data-id="${curso.id}" data-accion="mas">+</button>
                </div>
            </td>
            <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
        `;
        carrito.appendChild(row);
    });

    // Agregar fila de total
    if (articulosCarrito.length > 0) {
        const rowTotal = document.createElement('tr');
        // Formato: asumimos ARS si el precio no especifica divisa más allá del $
        const totalFormateado = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(total);

        rowTotal.classList.add('total-carrito'); // Clase para estilizar la fila total
        rowTotal.innerHTML = `
            <td colspan="3"></td>
            <td style="text-align:right;">TOTAL:</td>
            <td style="text-align:left;">${totalFormateado}</td>
        `;
        carrito.appendChild(rowTotal);
    }

    // Añadir eventos a los botones dinámicos
    document.querySelectorAll('.borrar-curso').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            // La clase 'borrar-curso' ahora está en el <a>, así que usamos el dataset del <a>
            eliminarCurso(e.target.dataset.id);
        });
    });

    document.querySelectorAll('.boton-cantidad').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = e.target.dataset.id;
            const accion = e.target.dataset.accion;
            if (accion === 'mas') aumentarCantidad(id);
            if (accion === 'menos') disminuirCantidad(id);
        });
    });
}

// Limpiar HTML
function limpiarHTML() {
    carrito.innerHTML = '';
}
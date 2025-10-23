document.addEventListener('DOMContentLoaded', () => {

    /* ======================================================================= */
    /* === LÓGICA DE CARRITO DE COMPRAS ======================================= */
    /* ======================================================================= */

    /*--------------1️⃣ SELECTORES DEL DOM CARRITO ----------------------------------------------------------- */

    const carrito = document.querySelector('#lista-carrito tbody'); 
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    // Colección de botones 'Agregar Al Carrito'
    const cursos = document.querySelectorAll('.agregar-carrito'); 

    /* -------------2️⃣ VARIABLE QUE GUARDA EL ESTADO-------------*/
    let articulosCarrito = []; 


    /* -------------3️⃣ EVENTOS INICIALES (estáticos) ---------------------------------------------------------*/
    // Eventos para el carrito
    cursos.forEach(curso => {
        curso.addEventListener('click', agregarCurso);
    });

    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML();
    });


    /* -------------4️⃣ Flujo cuando el usuario hace click: agregarCurso(e) ------------------------------------*/

    function agregarCurso(e) {
        e.preventDefault();
        const curso = e.target.closest('.card');
        
        // Toma el precio de la oferta, lo limpia y convierte a número
        const precioTexto = curso.querySelector('.precio .oferta').textContent;
        // Asumiendo que el precio es un número con el símbolo '$'
        const precioNumero = parseFloat(precioTexto.replace('$', '').trim()); 

        // Crea el objeto con la información del curso
        const infoCurso = {
            id: curso.querySelector('.agregar-carrito').dataset.id,
            titulo: curso.querySelector('h4').textContent,
            precio: precioNumero,
            imagen: curso.querySelector('img').src,
            cantidad: 1
        };

        // Verificar si ya existe en el carrito
        const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
        if (existe) {
            articulosCarrito = articulosCarrito.map(curso => {
                if (curso.id === infoCurso.id) curso.cantidad++;
                return curso;
            });
        } else {
            articulosCarrito.push(infoCurso);
        }

        carritoHTML();
    }


    /* ------------------5️⃣ Renderizar el carrito: carritoHTML() ---------------------------------------------*/

    function carritoHTML() {
        limpiarHTML();
        let total = 0;

        articulosCarrito.forEach(curso => {
            const row = document.createElement('tr');
            
            total += curso.precio * curso.cantidad;

            row.innerHTML = `
                <td><img src="${curso.imagen}" width="50"></td>
                <td>${curso.titulo}</td>
                <td>$${curso.precio}</td>
                <td class="cantidad-cell">
                    <div class="cantidad-control">
                        <button class="restar-cantidad boton-cantidad" data-id="${curso.id}" data-accion="menos">-</button>
                        <input type="number" class="cantidad-input" value="${curso.cantidad}" min="1"> 
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
            // Formatea el total con el símbolo $
            const totalFormateado = '$' + total.toFixed(2);

            rowTotal.classList.add('total-carrito');
            rowTotal.innerHTML = `
                <td colspan="3"></td>
                <td style="text-align:right;">TOTAL:</td>
                <td style="text-align:left;">${totalFormateado}</td>
            `;
            carrito.appendChild(rowTotal);
        }

        // Eventos dinámicos: eliminar y botones de cantidad
        document.querySelectorAll('.borrar-curso').forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
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

        document.querySelectorAll('.cantidad-input').forEach(input => {
        input.addEventListener('change', e => {
            // El ID se busca en el botón de borrar de la misma fila (tr)
            const id = e.target.closest('tr').querySelector('.borrar-curso').dataset.id; 
            let nuevaCantidad = parseInt(e.target.value);

            // Validar que no sea menor que 1 o NaN
            if (isNaN(nuevaCantidad) || nuevaCantidad < 1) {
                nuevaCantidad = 1;
                e.target.value = 1;
            }

            // Actualizar el array
            articulosCarrito = articulosCarrito.map(curso => {
                if (curso.id === id) {
                    curso.cantidad = nuevaCantidad;
                }
                return curso;
            });

            carritoHTML(); // volver a renderizar el carrito
            });
        });

    }


    /* ------------------6️⃣ Manipulaciones de cantidades y eliminación ----------------------------------------*/

    function eliminarCurso(id) {
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== id);
        carritoHTML();
    }

    function aumentarCantidad(id) {
        articulosCarrito = articulosCarrito.map(curso => {
            if (curso.id === id) curso.cantidad++;
            return curso;
        });
        carritoHTML();
    }

    function disminuirCantidad(id) {
        articulosCarrito = articulosCarrito.map(curso => {
            if (curso.id === id) curso.cantidad--;
            return curso;
        }).filter(curso => curso.cantidad > 0); // Filtra los que tengan 0 cantidad (eliminación)
        carritoHTML();
    }


    /* ---------------------7️⃣ Limpiar HTML ------------------------------------------------------------------*/

    function limpiarHTML() {
        carrito.innerHTML = '';
    }


    /* ======================================================================= */
    /* === LÓGICA DE BÚSQUEDA Y FILTRADO ===================================== */
    /* ======================================================================= */

    // 1. SELECTORES DEL DOM PARA LA BÚSQUEDA
    const formularioBusqueda = document.getElementById('busqueda');
    const inputBuscador = document.getElementById('buscador');
    const btnBorrar = document.getElementById('btn-borrar');
    const contenedorCursos = document.getElementById('lista-cursos');
    // Colección de todas las tarjetas de cursos
    const cards = contenedorCursos.querySelectorAll('.card'); 

    // 2. EVENTOS DE BÚSQUEDA
    
    // Evento al presionar Enter o la lupa
    formularioBusqueda.addEventListener('submit', (e) => {
        e.preventDefault(); 
        filtrarCursos();
    });

    // Evento para mostrar/ocultar el botón de borrado (X) al escribir
    inputBuscador.addEventListener('input', () => {
        if (inputBuscador.value.trim().length > 0) {
            btnBorrar.style.display = 'block'; // Mostrar la X
        } else {
            btnBorrar.style.display = 'none'; // Ocultar la X
            mostrarTodasLasCards(); // Restablece la vista si se borra el texto manualmente
        }
    });

    // Evento para borrar el texto al hacer clic en la "X"
    btnBorrar.addEventListener('click', () => {
        inputBuscador.value = ''; // Borra el contenido del input
        btnBorrar.style.display = 'none'; // Oculta la X
        mostrarTodasLasCards(); // Muestra todos los cursos
    });


    // 3. FUNCIONES DE LÓGICA DE BÚSQUEDA
    
    function filtrarCursos() {
        const textoFiltro = inputBuscador.value.toUpperCase().trim();
        let cursosEncontrados = 0;

        if (textoFiltro === "") {
            mostrarTodasLasCards();
            return;
        }

        cards.forEach(card => {
            const tituloElemento = card.querySelector('.info-card h4');
            
            if (tituloElemento) {
                const tituloCurso = tituloElemento.textContent.toUpperCase();

                // .includes() para buscar subcadenas
                if (tituloCurso.includes(textoFiltro)) { 
                    card.style.display = 'flex'; 
                    cursosEncontrados++;
                } else {
                    card.style.display = 'none'; // Ocultar la card
                }
            }
        });

        // Mostrar alerta si no hay coincidencias
        if (cursosEncontrados === 0) {
            alert('¡Ups! 😔 No se encontró ningún curso que coincida con "' + inputBuscador.value.trim() + '". Intenta con otras palabras.');
        }
    }

    function mostrarTodasLasCards() {
         cards.forEach(card => {
             card.style.display = 'flex';
         });
    }

}); // Fin del evento DOMContentLoaded
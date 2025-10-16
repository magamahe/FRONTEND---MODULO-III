// --- LÓGICA JAVASCRIPT (script.js) ---

// 1. Variables de Estado del Juego
let gameSequence = [];
let playerSequence = [];
let level = 0;
let isPlayerTurn = false;
let gameRunning = false;
const colors = ["green", "red", "yellow", "blue"];
const flashDuration = 400;
const sequenceDelay = 150;

// Elementos del DOM que serán creados y referenciados aquí
let startButton;
let messageDisplay;
let colorElements;

// ==========================================================
// A) FUNCIONES DE CREACIÓN DE ESTRUCTURA (DOM PURO)
// ==========================================================

/** Crea todos los elementos HTML y los inyecta en el body. */
function createGameStructure() {
    const body = document.body;

    // 1. Crear Contenedor Principal (#game-container)
    const container = document.createElement('div');
    container.id = 'game-container';

    // 2. Crear Título (h1#title)
    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Simón Dice 💡';

    // 3. Crear Tablero (#board)
    const board = document.createElement('div');
    board.id = 'board';

    // 4. Crear los 4 Cuadrados de Colores (.color-button)
    // Usamos el array 'colors' para generar los IDs
    colorElements = colors.map(color => {
        const btn = document.createElement('div');
        btn.id = color; // Asigna el ID (green, red, etc.) para el CSS y la lógica
        btn.classList.add('color-button');
        board.appendChild(btn);
        return btn; // Guardamos la referencia
    });

    // 5. Crear Panel Central (#center-panel)
    const centerPanel = document.createElement('div');
    centerPanel.id = 'center-panel';

    // 6. Crear Mensaje de Nivel/Score (p#message)
    messageDisplay = document.createElement('p');
    messageDisplay.id = 'message';
    messageDisplay.textContent = '¡Presiona Empezar!';
    centerPanel.appendChild(messageDisplay);
    
    board.appendChild(centerPanel);

    // 7. Crear Botón de Inicio (#start-btn)
    startButton = document.createElement('button');
    startButton.id = 'start-btn';
    startButton.textContent = 'Empezar';

    // 8. Ensamblar todo
    container.appendChild(title);
    container.appendChild(board);
    
    // El botón va fuera del tablero, debajo del contenedor
    body.appendChild(container);
    body.appendChild(startButton);

    // 9. Asignar el Listener de Evento al botón que acabamos de crear
    startButton.addEventListener("click", startGame);
}

// ==========================================================
// B) FUNCIONES DE LÓGICA DEL JUEGO
// ==========================================================

/** Flashea un cuadrado de color. */
function flashColor(element, colorName) {
    const flashClass = `flash-${colorName}`;
    
    // Añadir clase de flash y quitarla después de la duración
    element.classList.add(flashClass);
    setTimeout(() => {
        element.classList.remove(flashClass);
    }, flashDuration);
}

/** Pasa al siguiente nivel, agrega un color y reproduce la secuencia. */
function nextLevel() {
    level++;
    messageDisplay.textContent = `Nivel ${level}`;
    startButton.disabled = true; 
    isPlayerTurn = false;
    playerSequence = [];

    // Generar nuevo color aleatorio y añadirlo a la secuencia de la máquina
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    gameSequence.push(randomColor);

    // Desactivar clics para evitar interrupción durante la secuencia de la IA
    colorElements.forEach(btn => btn.style.pointerEvents = 'none');

    playSequence(gameSequence);
}

/** Reproduce la secuencia de la máquina paso a paso. */
function playSequence(sequence) {
    let i = 0;
    
    function playNext() {
        if (i < sequence.length) {
            const colorName = sequence[i];
            const element = document.getElementById(colorName);
            
            flashColor(element, colorName);
            i++;
            
            // Llama a la siguiente iteración con un retraso
            setTimeout(playNext, flashDuration + sequenceDelay);
        } else {
            // Secuencia terminada: empieza el turno del jugador
            isPlayerTurn = true;
            messageDisplay.textContent = `¡Tu turno!`;
            // Reactivar clics para el jugador
            colorElements.forEach(btn => btn.style.pointerEvents = 'auto');
        }
    }
    playNext();
}

/** Maneja la interacción del jugador. */
function handlePlayerClick(event) {
    if (!isPlayerTurn || !gameRunning) return;

    const clickedColor = event.target.id;
    playerSequence.push(clickedColor);

    flashColor(event.target, clickedColor);

    const currentMoveIndex = playerSequence.length - 1;
    const correctMove = gameSequence[currentMoveIndex];

    if (clickedColor === correctMove) {
        if (playerSequence.length === gameSequence.length) {
            // Secuencia completa exitosa
            messageDisplay.textContent = `¡Nivel ${level} Completado! 🎉`;
            isPlayerTurn = false;
            setTimeout(nextLevel, 1200);
        }
    } else {
        // Movimiento incorrecto
        gameOver();
    }
}

/** Finaliza el juego y muestra el mensaje GAME OVER. */
function gameOver() {
    isPlayerTurn = false;
    gameRunning = false;
    
    const finalScore = level - 1;
    messageDisplay.textContent = `¡FIN! Score: ${finalScore}`;
    
    // **********************************************
    // REQUISITO: Abre una nueva ventanita (alert)
    // **********************************************
    window.alert(`GAME OVER\nTu puntuación final es: ${finalScore}`);
    
    startButton.textContent = "Volver a Empezar";
    startButton.disabled = false;
    
    // Desactiva clics y hace un flash visual de error
    colorElements.forEach(btn => {
        btn.style.pointerEvents = 'none'; 
        btn.classList.add('flash-red'); 
    });
    setTimeout(() => {
        colorElements.forEach(btn => btn.classList.remove('flash-red'));
    }, 1000); 
}

/** Inicializa y comienza el juego. */
function startGame() {
    if (gameRunning) return;
    
    gameRunning = true;
    gameSequence = [];
    level = 0;
    startButton.textContent = "JUGANDO...";
    
    // Adjuntar los Listeners de clic a los cuadrados creados
    colorElements.forEach(btn => {
        btn.removeEventListener('click', handlePlayerClick); // Previene duplicados
        btn.addEventListener('click', handlePlayerClick);
    });

    nextLevel();
}

// ==========================================================
// C) INICIALIZACIÓN
// ==========================================================

// Llama a la función para crear la estructura tan pronto como el script se cargue.
// Esto construye el DOM a partir de JavaScript.
createGameStructure();



/* Eventos Utilizados en el Juego Simón Dice
El juego requiere que la página web sea "reactiva" , reaccionando a sucesos del usuario y del navegador.

1. onclick (Evento Principal de Interacción)
El evento onclick es fundamental.
Uso en el juego: Se utiliza en los cuatro cuadrados de colores (handlePlayerClick).
Propósito: Detecta cuándo el usuario hace clic en un cuadrado para ingresar su secuencia. Sin este evento, el jugador no podría interactuar con el juego.

2. addEventListener('click', ...)
Aunque el evento en sí es el click, la forma recomendada en JavaScript moderno (y usada en la solución) para asignar la función de respuesta (handlePlayerClick) es con addEventListener.
Uso en el juego: Se aplica tanto al botón "Empezar" (startButton) como a los cuadrados de colores (colorElements).
Concepto relacionado: La función que se pasa a addEventListener (como startGame o handlePlayerClick) es un Event Handler o Callback.

3. El Objeto Event
Aunque no se usa explícitamente event.preventDefault() o event.stopPropagation(), la función que maneja el clic del jugador (handlePlayerClick) recibe el Objeto Event como argumento.
Uso en el juego: Internamente, el juego usa la propiedad event.target del Objeto Event.
event.target.id permite saber qué cuadrado de color específico disparó el evento (por ejemplo, si fue 'red' o 'blue'). Esto es clave para verificar si el movimiento del jugador fue correcto.

4. onload (Implícito o Explícito)
El evento onload se activa cuando la página ha terminado de cargarse.
Uso en el juego: Al usar el código en el archivo script.js enlazado al final del <body>, se asegura de que el código solo se ejecute cuando el DOM está listo.
La función createGameStructure() se llama directamente al final del script, lo que simula la seguridad que ofrece window.onload. Es esencial que el script espere a que el <body> exista para poder crear e inyectar elementos con JavaScript (DOM puro).

Conceptos Avanzados Relacionados
El juego también involucra otros conceptos de manejo de eventos:

Triggers: El clic del usuario en un botón es un "trigger" (desencadenador) que provoca una reacción (el juego verifica el movimiento y avanza de nivel o termina el juego).

Funciones Callback: Las funciones startGame y handlePlayerClick son funciones callback porque se pasan como argumentos a addEventListener para ser ejecutadas cuando ocurre el evento click */


// 1. Variables de Estado del Juego
const SECRET_SEQUENCE = ['A', 'S', 'D', 'W']; // Las teclas que el usuario debe presionar en orden
let playerSequence = [];
let gameRunning = false;

// Elementos del DOM que serán creados y referenciados aquí
let startButton;
let messageDisplay;
let sequenceDisplay;

// ==========================================================
// A) FUNCIONES DE CREACIÓN DE ESTRUCTURA (DOM PURO)
// ==========================================================

/** Crea todos los elementos HTML y los inyecta en el body. */
function createGameStructure() {
    const body = document.body;

    // 1. Crear Contenedor Principal (#game-container)
    const container = document.createElement('div');
    container.id = 'game-container';

    // 2. Crear Título (h1)
    const title = document.createElement('h1');
    title.textContent = '🔓 La Clave Secreta';

    // 3. Crear Instrucciones (p#instructions)
    const instructions = document.createElement('p');
    instructions.id = 'instructions';
    instructions.textContent = `Presiona la secuencia secreta: ${SECRET_SEQUENCE.join(' - ')}`;

    // 4. Crear Mensaje de Estado (p#message)
    messageDisplay = document.createElement('p');
    messageDisplay.id = 'message';
    messageDisplay.textContent = 'Presiona "Empezar" para activar el teclado.';

    // 5. Crear Display de Secuencia del Jugador (#sequence-display)
    sequenceDisplay = document.createElement('div');
    sequenceDisplay.id = 'sequence-display';
    sequenceDisplay.textContent = '...';

    // 6. Crear Botón de Inicio (#start-btn)
    startButton = document.createElement('button');
    startButton.id = 'start-btn';
    startButton.textContent = 'Empezar';

    // 7. Ensamblar todo
    container.appendChild(title);
    container.appendChild(instructions);
    container.appendChild(messageDisplay);
    container.appendChild(sequenceDisplay);
    container.appendChild(startButton);
    
    body.appendChild(container);

    // 8. Asignar el Listener de Evento al botón
    startButton.addEventListener("click", startGame);
}

// ==========================================================
// B) FUNCIONES DE LÓGICA DEL JUEGO
// ==========================================================

/** Maneja la pulsación de teclas del usuario (Evento del Teclado). */
function handleKeypress(event) {
    if (!gameRunning) return;

    // **********************************************
    // USO DE preventDefault()
    // **********************************************
    // Evita que las teclas (ej: Espacio, Flechas) realicen su acción nativa en el navegador
    event.preventDefault(); 

    // Obtener la tecla presionada en mayúsculas (para consistencia) 
    const key = event.key.toUpperCase();

    // Solo procesar teclas que forman parte de la secuencia o son alfanuméricas
    if (!/^[A-Z0-9]$/.test(key)) {
        return;
    }

    const expectedKey = SECRET_SEQUENCE[playerSequence.length];

    if (key === expectedKey) {
        // Movimiento Correcto
        playerSequence.push(key);
        sequenceDisplay.textContent = playerSequence.join(' - ');
        messageDisplay.textContent = `Tecla correcta: ${key}`;

        if (playerSequence.length === SECRET_SEQUENCE.length) {
            // ¡Ganó!
            gameWin();
        }
    } else {
        // Movimiento Incorrecto
        gameOver();
    }
}

/** Inicia el juego. */
function startGame() {
    gameRunning = true;
    playerSequence = [];
    messageDisplay.textContent = '¡Activo! Presiona las teclas...';
    sequenceDisplay.textContent = '...';
    startButton.disabled = true;
    startButton.textContent = 'JUGANDO...';

    // **********************************************
    // USO DE Evento del Teclado (onkeydown) [cite: 69, 138]
    // **********************************************
    // Asignamos el Event Handler (handleKeypress) al evento 'keydown' en todo el documento.
    document.addEventListener('keydown', handleKeypress);
}

/** Termina el juego con victoria. */
function gameWin() {
    gameRunning = false;
    messageDisplay.textContent = '🎉 ¡CÓDIGO DESBLOQUEADO! ¡GANASTE! 🎉';
    startButton.textContent = 'Jugar de Nuevo';
    startButton.disabled = false;
    
    // Desactivar el Listener de Teclado
    document.removeEventListener('keydown', handleKeypress);
}

/** Termina el juego con derrota. */
function gameOver() {
    gameRunning = false;
    messageDisplay.textContent = `❌ ERROR. La tecla era '${SECRET_SEQUENCE[playerSequence.length]}'.`;
    sequenceDisplay.textContent = '...';
    startButton.textContent = 'Intentar de Nuevo';
    startButton.disabled = false;
    
    // Desactivar el Listener de Teclado
    document.removeEventListener('keydown', handleKeypress);
    
    // Muestra la ventana de alerta (GAME OVER)
    window.alert("GAME OVER: Secuencia incorrecta.");
}


// ==========================================================
// C) INICIALIZACIÓN
// ==========================================================

// Llama a la función para construir el DOM
createGameStructure();

// 1. Variables de Estado Globales
let score = 0;
const AVAILABLE_COLORS = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'cyan', 'magenta'];
let currentColorTarget = ''; // El color que el jugador debe buscar
let gameActive = false;

// Elementos del DOM que serán creados y referenciados
let startButton;
let scoreDisplay;
let instructionsDisplay;
let colorBoard;

// ==========================================================
// A) FUNCIONES DE CREACIÓN DE ESTRUCTURA (DOM PURO)
// ==========================================================

function createGameStructure() {
    const body = document.body;
    
    // Contenedor principal
    const container = document.createElement('div');
    container.id = 'game-container';

    // Título
    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'El Cazador de Colores 🎨';
    container.appendChild(title);

    // Score Display (Referencia global para la actualización)
    scoreDisplay = document.createElement('div');
    scoreDisplay.id = 'score-display';
    scoreDisplay.textContent = 'Puntuación: 0';
    container.appendChild(scoreDisplay);

    // Instrucciones/Objetivo
    instructionsDisplay = document.createElement('p');
    instructionsDisplay.id = 'instructions';
    instructionsDisplay.textContent = 'Presiona Empezar';
    container.appendChild(instructionsDisplay);

    // Tablero de Colores (Grid)
    colorBoard = document.createElement('div');
    colorBoard.id = 'color-board';
    container.appendChild(colorBoard);

    // Botón de Inicio
    startButton = document.createElement('button');
    startButton.id = 'start-btn';
    startButton.textContent = 'Empezar';
    container.appendChild(startButton);

    body.appendChild(container);

    // Asignar el Listener de Evento al botón
    startButton.addEventListener("click", startGame);

    // Crear los botones de color UNA SOLA VEZ
    createColorButtons();
}

/** Crea los 4 botones de color y los añade al tablero. */
function createColorButtons() {
    // Usamos solo 4 colores para un tablero simple
    const colorsToUse = AVAILABLE_COLORS.slice(0, 4); 
    
    colorsToUse.forEach(color => {
        const btn = document.createElement('div');
        btn.id = color; // ID es el nombre del color (ej: 'red')
        btn.classList.add('color-choice');
        btn.style.backgroundColor = color; // Asigna el color de fondo
        
        // ******************************************************
        // USO DE Evento de Ratón (onclick) para la interacción
        // ******************************************************
        btn.addEventListener('click', handleChoice);
        
        colorBoard.appendChild(btn);
    });
}

// ==========================================================
// B) FUNCIONES DE LÓGICA DEL JUEGO
// ==========================================================

/** Selecciona un color aleatorio como objetivo del turno. */
function setRandomTarget() {
    const colors = Array.from(colorBoard.children).map(el => el.id);
    const randomIndex = Math.floor(Math.random() * colors.length);
    currentColorTarget = colors[randomIndex];
    
    instructionsDisplay.textContent = `¡Haz CLIC en el color: ${currentColorTarget.toUpperCase()}!`;
    instructionsDisplay.style.color = currentColorTarget; // Pinta el texto con el color objetivo
}

/** Maneja la elección de color del jugador. */
function handleChoice(event) {
    if (!gameActive) return;

    // ******************************************************
    // USO DE event.target.id
    // ******************************************************
    const chosenColor = event.target.id; 

    if (chosenColor === currentColorTarget) {
        // Opción Correcta: Suma el punto y avanza
        score++;
        
        // ******************************************************
        // SOLUCIÓN: Actualización directa y garantizada del score
        // ******************************************************
        scoreDisplay.textContent = `Puntuación: ${score}`; 
        
        // Feedback visual
        instructionsDisplay.textContent = "✅ ¡CORRECTO!";
        event.target.classList.add('correct');
        setTimeout(() => {
            event.target.classList.remove('correct');
            setRandomTarget(); // Inicia el siguiente turno
        }, 500);

    } else {
        // Opción Incorrecta: Game Over
        gameOver(chosenColor);
    }
}

/** Inicializa y comienza el juego. */
function startGame() {
    score = 0; // Reinicia la puntuación
    scoreDisplay.textContent = 'Puntuación: 0';
    gameActive = true;
    startButton.disabled = true;
    startButton.textContent = 'JUGANDO...';
    
    // Establece el primer objetivo
    setRandomTarget();
}

/** Termina el juego. */
function gameOver(incorrectColor) {
    gameActive = false;
    instructionsDisplay.textContent = `❌ ¡FALLASTE! El objetivo era: ${currentColorTarget.toUpperCase()}`;
    instructionsDisplay.style.color = '#e74c3c';
    
    // Muestra el color incorrecto y el correcto brevemente
    document.getElementById(incorrectColor).classList.add('incorrect');
    document.getElementById(currentColorTarget).style.border = '5px solid #2ecc71';
    
    setTimeout(() => {
        // Limpiar el tablero
        document.getElementById(incorrectColor).classList.remove('incorrect');
        document.getElementById(currentColorTarget).style.border = '3px solid #34495e';

        startButton.textContent = 'Jugar de Nuevo';
        startButton.disabled = false;
        window.alert(`GAME OVER. Puntuación final: ${score}`);
    }, 1500);
}

// ==========================================================
// C) INICIALIZACIÓN
// ==========================================================

// Construir el DOM del juego al cargar el script.
createGameStructure();
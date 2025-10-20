/**********************************************************************
    FLUJO DEL PROGRAMA

    1️⃣ El jugador pulsa “Comenzar juego”.
    2️⃣ Se pide el tamaño N y se crea el tablero (cambio()).
    3️⃣ cambio() genera:
        - board → tablero visual (imágenes)
        - tb → tabla con combinaciones ganadoras
    4️⃣ Al hacer clic en una celda se llama a cambiarImagen()
    5️⃣ cambiarImagen():
        - Cambia la imagen al jugador correspondiente.
        - Guarda la jugada.
        - Llama a comprobarGanador() usando tb.
    6️⃣ comprobarGanador():
        - Recorre tb y verifica si el jugador tiene alguna combinación completa.
**********************************************************************/

let n;              // tamaño del tablero (N)
let board;          // tablero visible (matriz con imágenes)
let tb;             // tabla de soluciones posibles
let turno = 1;      // 1 = jugador 1, 2 = jugador 2
let jugadasP1 = []; // posiciones elegidas por el jugador 1
let jugadasP2 = []; // posiciones elegidas por el jugador 2
let juegoTerminado = false;

/**********************************************************************
    FUNCIÓN pregunta()
    - Pide N y genera el tablero con cambio(n)
**********************************************************************/
function pregunta() {
    let preg = prompt("Dime qué N en raya quieres jugar: ", "3");
    n = parseInt(preg);
    cambio(n);
}

/**********************************************************************
    FUNCIÓN cambio(n)
    - Crea la tabla de soluciones tb y el tablero HTML
**********************************************************************/
function cambio(n) {
    // inicializamos tb
    let filas = (n * 2) + 2;  // filas + columnas + 2 diagonales
    tb = new Array(filas);
    for (let i = 0; i < filas; i++) tb[i] = new Array(n);

    let c = 0;
    // Guardamos las soluciones (filas y columnas)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            tb[c][j] = (i * n) + (j + 1);       // filas
            tb[c + n][j] = (j * n) + (i + 1);   // columnas
        }
        c++;
    }

    // Diagonales
    c = (n * 2);
    for (let i = 0; i < n; i++) {
        tb[c][i] = (i * n) + (i + 1);          // diagonal principal
        tb[c + 1][i] = (i * n) + (n - i);      // diagonal inversa
    }

    // Crear el tablero visible
    board = new Array(n);
    for (let i = 0; i < n; i++) board[i] = new Array(n);

    let num = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = num++;
        }
    }

    // Mostrar tablero en HTML
    document.getElementById("marco").innerHTML = pintar(board);

    // Reiniciar estado del juego
    turno = 1;
    jugadasP1 = [];
    jugadasP2 = [];
    juegoTerminado = false;
}

/**********************************************************************
    FUNCIÓN pintar(board)
    - Crea una tabla HTML con imágenes clicables
**********************************************************************/
function pintar(board) {
    let cadena = "<table align='center' border='1'>";
    for (let i = 0; i < board.length; i++) {
        cadena += "<tr>";
        for (let j = 0; j < board[i].length; j++) {
            let id = `chef_${i}_${j}`;
            let num = board[i][j];
            cadena += `<td>
                <img src='img/chef.png' width='150' alt='img' id='${id}' 
                onclick="cambiarImagen('${id}', ${num})">
            </td>`;
        }
        cadena += "</tr>";
    }
    cadena += "</table>";
    return cadena;
}

/**********************************************************************
    FUNCIÓN cambiarImagen(id, num)
    - Cambia imagen según el turno y guarda la jugada
**********************************************************************/
function cambiarImagen(id, num) {
    if (juegoTerminado) return;

    let img = document.getElementById(id);
    if (img.dataset.clicked === "true") return; // evita sobreescribir jugadas
    img.dataset.clicked = "true";

    if (turno === 1) {
        img.src = "img/p1.webp";
        jugadasP1.push(num);
        turno = 2;
    } else {
        img.src = "img/p2.webp";
        jugadasP2.push(num);
        turno = 1;
    }

    // Comprobamos si hay ganador
    if (comprobarGanador()) {
        juegoTerminado = true;
    }
}

/**********************************************************************
    FUNCIÓN comprobarGanador()
    - Usa la tabla tb para verificar si un jugador tiene una combinación ganadora
**********************************************************************/
function comprobarGanador() {
    for (let i = 0; i < tb.length; i++) {
        let linea = tb[i];
        // Verificar jugador 1
        if (linea.every(num => jugadasP1.includes(num))) {
            alert("¡Jugador 1 ha ganado! 🎉");
            return true;
        }
        // Verificar jugador 2
        if (linea.every(num => jugadasP2.includes(num))) {
            alert("¡Jugador 2 ha ganado! 🎉");
            return true;
        }
    }
    // Si no hay ganador pero el tablero está lleno → empate
    if (jugadasP1.length + jugadasP2.length === n * n) {
        alert("¡Empate! 😅");
        return true;
    }
    return false;
}

/**********************************************************************
    FUNCIÓN reiniciarJuego()
    - Reinicia el tablero con el mismo tamaño
**********************************************************************/
function reiniciarJuego() {
    if (!n) {
        alert("Primero debes comenzar una partida.");
        return;
    }
    cambio(n);
}
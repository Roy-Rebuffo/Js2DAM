const colores=['R','A','V','N','M','B'];
const numColoresCombinacion = 4;
const combi = new Array(numColoresCombinacion);
const numeroIntentos = 8;
let filaActual = 0;
let posicionActual = 0;
let intentoUsuario = [];
let juegoActivo = true;
/*****************************************************************************************/
function alea(li,ls){
        return Math.floor(Math.random()*(ls-li + 1) + li)
    }
/*****************************************************************************************/
function pintar(){
    let destino = document.getElementById("marco");
    let cadena = "";
    
    cadena += '<table id=tablaAdivinados>';
    cadena +="<tr>"
    cadena +="<td>"
    for (let i = 0; i < numColoresCombinacion; i++) {
            cadena += '<div id="divAdivinados"><p>?</p></div>';
        }
    cadena +="</td>"
    cadena += "</tr>"
    cadena += "</table>";
    /**********************************************/
    cadena += '<table id="tablaJuego">';
    for (let i = 0; i < numeroIntentos; i++) {
        cadena += "<tr>";
        for (let j = 0; j < numColoresCombinacion; j++) {
            cadena += '<td><div class="casillaJuego"></div></td>';
        }
    // 4 puntos
    cadena += '<td class="resultado">';
    for (let k = 0; k < numColoresCombinacion; k++) {
        cadena += '<div class="puntoResultado"></div>';
    }
    cadena += '</td>';
    cadena += "</tr>";
    }
    cadena += "</table>";

    /*********************************************/
    cadena += "<table>";
    cadena +="<tr>"
    cadena +="<td>"
    for (let i = 0; i < colores.length; i++) {
        switch (colores[i]) {
            case 'R':
                cadena += '<div id="colorR" class="opcion"></div>';
                break;
            case 'A':
                cadena += '<div id="colorA" class="opcion"></div>';
                break;
            case 'V':
                cadena += '<div id="colorV" class="opcion"></div>';
                break;
            case 'N':
                cadena += '<div id="colorN" class="opcion"></div>';
                break;
            case 'M':
                cadena += '<div id="colorM" class="opcion"></div>';
                break;
            case 'B':
                cadena += '<div id="colorB" class="opcion"></div>';
                break;
        }
    }

    cadena +="</td>"
    cadena += "</tr>"
    cadena += "</table>";
    destino.innerHTML = cadena;
}
/*****************************************************************************************/
function cargar(m){
    //Rellenamos la matriz con colores al azar
    for(let i=0;i<m.length;i++){
        m[i] = colores[alea(0, colores.length - 1)];
        console.log(m[i] = colores[alea(0,m.length-1)])
    }
}
/*****************************************************************************************/
function introducirUsuario() {
    let usu = new Array(numColoresCombinacion);

    for (let i = 0; i < numColoresCombinacion; i++) {
        usu[i] = colores[alea(0, colores.length - 1)];
    }
    return usu;
}

/*****************************************************************************************/
function evaluacionCombinacion(cb, fila) {
    let usu = introducirUsuario();
    return comprobar(cb, usu, fila);
}
/*****************************************************************************************/
function comprobar(ori, usu, fila) {
    let pexactas = 0;
    let paproximadas = 0;

    let copia = ori.slice();

    // Exactas
    for (let i = 0; i < usu.length; i++) {
        if (usu[i] === copia[i]) {
            pexactas++;
            usu[i] = '-';
            copia[i] = '-';
        }
    }

    //Comprueba
    if (pexactas === ori.length) {
        mostrarResultado(fila, pexactas, paproximadas);
        mostrarCombinacionFinal();
        //console.log("combinacion acertada");
        return false;
    }

    // Aproximadas
    for (let i = 0; i < usu.length; i++) {
        if (usu[i] === '-') continue;

        for (let j = 0; j < copia.length; j++) {
            if (copia[j] === '-') continue;

            if (copia[j] === usu[i]) {
                paproximadas++;
                usu[i] = '-';
                copia[j] = '-';
                break;
            }
        }
    }

    console.log(`Exactas=${pexactas} Aproximadas=${paproximadas}`);
    mostrarResultado(fila, pexactas, paproximadas);
    return true;
}

/*****************************************************************************************/
function mostrarResultado(fila, exactas, aproximadas) {
    let filas = document.querySelectorAll("#tablaJuego tr");
    let puntos = filas[fila].querySelectorAll(".puntoResultado");

    let idx = 0;

    // Exactas
    for (let i = 0; i < exactas; i++) {
        puntos[idx++].style.backgroundColor = "black";
    }

    // Aproximadas
    for (let i = 0; i < aproximadas; i++) {
        puntos[idx++].style.backgroundColor = "yellow";
    }
}
/*****************************************************************************************/
function activarColores() {
    let opciones = document.querySelectorAll(".opcion");

    opciones.forEach(opcion => {
        opcion.addEventListener("click", () => {
            if (posicionActual >= numColoresCombinacion) return;

            ponerColor(opcion.id);
        });
    });
}
/*****************************************************************************************/
function ponerColor(idColor) {
     if (!juegoActivo) return;
    let filas = document.querySelectorAll("#tablaJuego tr");
    let casillas = filas[filaActual].querySelectorAll(".casillaJuego");

    let color;

    switch (idColor) {
        case "colorR": color = "R"; casillas[posicionActual].style.backgroundColor = "red"; break;
        case "colorA": color = "A"; casillas[posicionActual].style.backgroundColor = "blue"; break;
        case "colorV": color = "V"; casillas[posicionActual].style.backgroundColor = "green"; break;
        case "colorN": color = "N"; casillas[posicionActual].style.backgroundColor = "orange"; break;
        case "colorM": color = "M"; casillas[posicionActual].style.backgroundColor = "purple"; break;
        case "colorB": color = "B"; casillas[posicionActual].style.backgroundColor = "white"; break;
    }

    intentoUsuario.push(color);
    posicionActual++;

    if (posicionActual === numColoresCombinacion) {
        comprobar(combi, intentoUsuario.slice(), filaActual);

        filaActual++;
        posicionActual = 0;
        intentoUsuario = [];
    }
}
/*****************************************************************************************/
function mostrarCombinacionFinal() {
    let adivinados = document.querySelectorAll("#divAdivinados");

    for (let i = 0; i < combi.length; i++) {
        let color;

        switch (combi[i]) {
            case "R": color = "red"; break;
            case "A": color = "blue"; break;
            case "V": color = "green"; break;
            case "N": color = "orange"; break;
            case "M": color = "purple"; break;
            case "B": color = "white"; break;
        }

        adivinados[i].style.backgroundColor = color;
        adivinados[i].innerHTML = "";
    }

    juegoActivo = false;
    alert("🎉 ENHORABUENA, HAS ACERTADO LA COMBINACIÓN 🎉");
}

/*****************************************************************************************/
function reset() {
    document.getElementById("marco").innerHTML = "";

    filaActual = 0;
    posicionActual = 0;
    intentoUsuario = [];
    juegoActivo = true;
    //Volvemos a cargar la nueva combinacion para que no se repita la misma
    cargar(combi);

    pintar();
    activarColores();
}

/*****************************************************************************************/
function jugar() {
    let seguir = true;

    for (let i = 0; i < numeroIntentos && seguir; i++) {
        seguir = evaluacionCombinacion(combi, i);
    }
}

window.onload = () => {
    cargar(combi);
    pintar();
    activarColores();
};



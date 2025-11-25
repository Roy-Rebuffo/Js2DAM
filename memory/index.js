let destino = document.getElementById("marco");
let turno = true;
let primeraCarta = "";
let segundaCarta = "";
let primeraImg = "";
let segundaImg = "";
let camino = "./img/";
let mainImg = "detective";

let cartas = 16;
const tablero = new Array(cartas).fill("X");

// ----------------------
// PINTAR EL TABLERO
// ----------------------
function pintar(){
    let cadena = "";
    cadena += "<table border='1' style='margin:auto'>";
    cadena += "<caption>Juego de memory</caption><tbody>";

    let contador = 0;

    for (let i = 0; i < 4; i++) {
        cadena += "<tr>";
        for (let j = 0; j < 4; j++) {
            let id = "carta_" + contador;
            cadena += `
                <td>
                    <img src="${camino}${mainImg}.png" 
                         width="100" 
                         id="${id}"
                         onclick="darVuelta('${id}')">
                </td>`;
            contador++;
        }
        cadena += "</tr>";
    }

    cadena += "</tbody></table>";
    destino.innerHTML = cadena;
}

// --------------------------
// GENERAR PAREJAS ALEATORIAS
// --------------------------
function generarParejas() {

    for (let i = 1; i <= cartas/2; i++) {

        for (let j = 1; j <= 2; j++) {

            let colocado = false;

            while(!colocado){
                let pos = alea(0, cartas-1);

                if(tablero[pos] === "X"){
                    tablero[pos] = i;  // guardamos número de pareja
                    colocado = true;
                }
            }
        }
    }

    console.log("Parejas generadas:", tablero);
}

// ----------------------
// DAR VUELTA A UNA CARTA
// ----------------------
function darVuelta(id){

    let index = parseInt(id.split("_")[1]);
    let numero = tablero[index];
    let carta = document.getElementById(id);

    // Mostrar número correspondiente
    carta.src = `${camino}numero_${numero}.png`;

    if(turno){
        primeraCarta = numero;
        primeraImg = id;
    } else {
        segundaCarta = numero;
        segundaImg = id;

        comprobarPareja();
    }

    turno = !turno;
}

// ----------------------
// COMPROBAR SI HAY PAREJA
// ----------------------
function comprobarPareja(){

    let img1 = document.getElementById(primeraImg);
    let img2 = document.getElementById(segundaImg);

    if(primeraCarta === segundaCarta){
        // Es pareja — desactivar clics
        img1.onclick = null;
        img2.onclick = null;
    } else {
        // No es pareja — esperar 0.5s y girarlas
        setTimeout(() => {
            img1.src = `${camino}${mainImg}.png`;
            img2.src = `${camino}${mainImg}.png`;
        }, 500);
    }
}

// ----------------------
// ALEATORIO
// ----------------------
function alea(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// ----------------------
// INICIO
// ----------------------
window.onload = () => {
    generarParejas();
    pintar();
};

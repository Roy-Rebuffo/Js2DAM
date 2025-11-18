let destino = document.getElementById("marco");
let turno = 1;
let jugadasP1 = [];
let jugadasP2 = [];
let juegoTerminado = false;
const camino = "./img/";
let mainImg = "detective";

let cartas = 16;
const coincidencias = new Array(16).fill("x");

//PINTAMOS EL TABLERO
function pintar(){
    let cadena = "";
    cadena += "<table border = '1' style = 'margin: auto'>";
    cadena += "<caption>Juego de memory</caption>";
    cadena += "<tbody>"
    for (let i = 0; i < 4; i++) {
        cadena += "<tr>"
        for (let j = 0; j < 4; j++) {
            id = `img_${i}_${j}`;
            const src = camino + mainImg + ".png";
            cadena += `<td>
            <img src = "${src}" width = "100" id= ${id}
            onclick="darVuelta('${id}')">
            </td>`
        }
        cadena += "</tr>"
    }
    cadena += "</tbody>"
    cadena += "</table>"

    destino.innerHTML = cadena;
}

function generarNumeroRandom(){
    for (let i = 0; i <= cartas/2; i++) {
        for (let j = 0; j < cartas/2; j++) {
            
        }
    }
}

function darVuelta(){
    let celda = document.getElementById("")
}

function alea(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.onload = () => { pintar(); darVuelta(); };
const vimagenes = ["cee","ingla","japon","spain","usa"];
const camino = "../gif/";

function cambio(origen){//origen es el this del boton
    let n = parseInt(origen.innerHTML);

    document.getElementById("imagen").src = camino + vimagenes[n]+".gif";
}
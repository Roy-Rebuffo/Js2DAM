const colores=['R','A','V','Z','M','B'];
const numColoresCombinacion = 4;
const combi = [numColoresCombinacion];
const numeroIntentos = 8;
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
            cadena += '<div id="divAdivinados"></div>';
        }
    cadena +="</td>"
    cadena += "</tr>"
    cadena += "</table>";
    /**********************************************/
    cadena += '<table id="tablaJuego">';
    for (let i = 0; i < numeroIntentos; i++) {
        cadena += "<tr>"
        for (let j = 0; j < numColoresCombinacion ; j++) { 
            cadena += '<td><div id="divJuego"></div></td>';
        }
        cadena += "</tr>"
    }
    cadena += "</table>";
    /*********************************************/
    cadena += "<table>";
    cadena +="<tr>"
    cadena +="<td>"
    for (let i = 0; i < colores.length; i++) {
        cadena += '<div id="divOpcionColores"></div>';
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


window.onload = () => { cargar(combi); pintar(); };


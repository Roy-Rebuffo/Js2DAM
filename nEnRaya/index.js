//2*n + 2
var nfc = 4;//numero de filas y numero de columnas
var filas = (nfc * 2) + 2;
var tb = new Array(filas);//creamos un vector en este caso de 10 posiciones => ((nfc * 2) + 2)
for (let i = 0; i < filas; i++)tb[i] = new Array(nfc); // recorremos las filas e insertamos los valores


function cargar() {
    let destino = document.getElementById("opciones"); // coge la etiqueta donde pondremos las opciones

    for (i = 3; i <= 10; i++) {
        let v = document.createElement("option"); // crea la opcion
        v.text = i; // añade el texto
        v.value = i; //añade el value
        destino.appendChild(v); //lo introduce en la etiqueta opciones del html
    }
    destino.addEventListener("change", () => { cambio(); });// en cada cambio de opciones se ejecutara el cambio
    cambio();
}

function cambio() {
    nfc = parseInt(document.getElementById("opciones").value);
    filas = (nfc * 2) + 2;
    tb = new Array(filas);

    for (let i = 0; i < filas; i++) tb[i] = new Array(nfc);

    let c = 0;
    for (let i = 0; i < nfc; i++) { //COLOCAMOS C FILAS (1,2,3,4)\n(5,6,7,8)\n(9,10,11,12)\n(13,14,15,16) =>siendo en un principio nfc = 4;
        for (let j = 0; j < nfc; j++) {
            tb[c][j] = (i * nfc) + (j + 1);// cuando la i es 0; toma los valores de j (1,2,3,4). rellena las soluciones de las filas
            tb[c + nfc][j] = (j * nfc) + (i + 1);//rellena las soluciones de las columnas (1,5,9,13)
        }
        c++;
    }
    c = (nfc * 2);//empieza en la posicion 8 pq en este caso tiene 8 casos diferentes
    for (let i = 0; i < nfc; i++) {
        tb[c][i] = (i * nfc) + (i + 1); // diagonal normal
        tb[c + 1][i] = (i * nfc) + (nfc - i); //diagonal inversa
    }
    document.getElementById("marco").innerHTML = dime();
}

function dime() {
    let cadena = "<table align = 'center' border = 1>";
    for (let i = 0; i < tb.length; i++) {
        cadena += "<tr>";
        for (let j = 0; j < tb[i].length; j++) {
            cadena += "<td>" + tb[i][j] + "</td>"
        }
        cadena += "</tr>";
    }
    cadena += "</table>"
    return cadena;
}

window.addEventListener("load", () => { cargar(); });
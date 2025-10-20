//Cargamos la pregunta con el onload
//pasamos como parámetro el numero que el usuario teclee a cambio
//en cambio() creamos un "board"
//hacemos dos for y pasamos el board a pintar()
//pinta segun lo que el usuario teclee

//2*n + 2
function pregunta(){
    let preg =prompt("Dime que N en raya quieres jugar: ", "4");
    let n = parseInt(preg);
    let filas = (n * 2) + 2;
    var tb = new Array(filas);
    for (let i = 0; i < filas; i++)tb[i] = new Array(n);

    cambio(n);
}

/*function cargar() {
    let destino = document.getElementById("opciones"); // coge la etiqueta donde pondremos las opciones

    for (i = 3; i <= 10; i++) {
        let v = document.createElement("option"); // crea la opcion
        v.text = i; // añade el texto
        v.value = i; //añade el value
        destino.appendChild(v); //lo introduce en la etiqueta opciones del html
    }
    destino.addEventListener("change", () => { cambio(); });// en cada cambio de opcione se ejecutara el cambio
    cambio();
}*/

function cambio(n) {
    //nfc = parseInt(document.getElementById("opciones").value);
    filas = (n * 2) + 2;
    tb = new Array(filas);

    for (let i = 0; i < filas; i++) tb[i] = new Array(n);

    // crear también la matriz "board" para dibujar el tablero n x n
    let board = new Array(n);
    for (let i = 0; i < n; i++) board[i] = new Array(n);

    let c = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            /*****************Guardar las soluciones*********************************/
            tb[c][j] = (i * n) + (j + 1);
            tb[c + n][j] = (j * n) + (i + 1);
            /*****************Pintar el tablero**************************************/
            board[i][j] = (i * n) + (j + 1); // rellenamos el tablero visible
        }
        c++;
    }

    /*****************Guardar las soluciones***************************************/
    c = (n * 2);//empieza en la posicion 8 pq en este caso tiene 8 casos diferentes
    for (let i = 0; i < n; i++) {
        tb[c][i] = (i * n) + (i + 1); // diagonal normal
        tb[c + 1][i] = (i * n) + (n - i); //diagonal inversa
    }
    /*****************************************************************************/
    // pasar 'board' directamente a la función que construye la tabla
    document.getElementById("marco").innerHTML = pintar(board);
}

function pintar(board) {
    let cadena = "<table align='center' border='1'>";
    for (let i = 0; i < board.length; i++) {
        cadena += "<tr>";
        for (let j = 0; j < board[i].length; j++) {
            let id = `chef_${i}_${j}`; // genera id único según posición
            cadena += `<td><img src='img/chef.png' width='150' alt='img' id='${id}' 
            onclick="alert('Has hecho clic en ${id}')"></td>`;
            //hacer un onClick
        }
        cadena += "</tr>";
    }
    cadena += "</table>";
    return cadena;
}

function cambiarImagen(id){
    let $img = document.getElementById(`chef_{id}`);
    
}

window.addEventListener("load", () => { pregunta(); });
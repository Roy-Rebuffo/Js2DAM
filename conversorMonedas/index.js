const vimagenes = ["usa", "cee", "japon", "ingla", "spain"];
const nomPais = ["DOLAR", "EURO", "YEN", "LIBRA"];
const camino = "/gif/";
const tasas = [
    //      DOLAR      EURO       YEN       LIBRA  <-- COLUMNA (j)
    /*DOLAR*/ [1,         0.8,     101.615,  0.596], // FILA 0 (i)
    /*EURO*/  [1.25,      1,       127.0187, 0.745], // FILA 1 (i)
    /*YEN*/   [0.009841,  0.007873, 1,        0.005865], // FILA 2 (i)
    /*LIBRA*/ [1.677852,  1.342282, 170.4949, 1] // FILA 3 (i)
];

function cargar() {
    let cadena = "<thead><tr>"; // 1. INICIO: Cabecera (<thead>) y Fila (<tr>)
    let $tabla = document.getElementById("tabla");
    let id;
    
    // --- Parte 1: Cabeceras de Columna (Títulos y Banderas) ---
    // Tu bucle original crea la primera celda vacía y luego las <th>.
    // Lo ajustamos para que sean celdas de tabla válidas dentro de un <tr>.
    
    // Celda superior izquierda vacía
    cadena += "<th>&nbsp;</th>"; 
    
    for (let i = 0; i < nomPais.length; i++) {
        id = `img_${i}`
        
        // Antes tenías "<td>&nbsp;</td><th>...", lo juntamos en un solo <th> o <td>
        cadena += `<th>${nomPais[i]}`; // Usamos <th> para el título de columna
        cadena += `<img src = "${camino + vimagenes[i] + ".gif"}" width = "100" id = ${id}>`;
        cadena += `</th>`
    }
    cadena += "</tr></thead><tbody>"; // 2. FIN: Cabecera y COMIENZO Cuerpo (<tbody>)
    
    // --- Parte 2: Filas de Datos (Moneda Base + Inputs) ---
    // Cada iteración del bucle externo ahora crea una nueva fila (<tr>).
    for (let i = 0; i < nomPais.length; i++) {
        id = `p_${i}`;
        let iptId = `iptId_${nomPais[i]}`;
        
        cadena += "<tr>"; // INICIO de la fila de datos
        
        // La etiqueta P que tenías la convertimos en una celda de encabezado de fila (<th>)
        cadena += `<th id="${id}">${nomPais[i]}</th>`;

        // El bucle interno ahora crea celdas de datos (<td>)
        for (let j = 0; j < nomPais.length; j++) {
            // condición para deshabilitar según la fila y la posición
            let disabled = "";
            if (
                (i === 0 && j === 0) || // primer input de Dólar
                (i === 1 && j === 1) || // segundo de Euro
                (i === 2 && j === 2) || // tercero de Yen
                (i === 3 && j === 3)   // cuarto de Libra
            ) {
                disabled = "disabled";
            }
            cadena += `<td><input id="${iptId}_${j}" ${disabled} size="12"></td>`;
        }
        
        cadena += "</tr>";
    }
    
    cadena += "</tbody>"; // 3. FIN: Cuerpo de la tabla
    
    $tabla.innerHTML = cadena;

    // --- LÓGICA DE RELLENADO (sin cambios) ---
    for (let i = 0; i < nomPais.length; i++) {
        let monedaBase = nomPais[i];
        for (let j = 0; j < nomPais.length; j++) {
            if (i === j) continue; 
            let inputId = `iptId_${monedaBase}_${j}`;
            let valorTasa = tasas[i][j]; 
            let inputElement = document.getElementById(inputId);
            
            if (inputElement) {
                inputElement.value = valorTasa.toFixed(6); 
            }
        }
    }
} 

window.onload = () => { cargar(); };
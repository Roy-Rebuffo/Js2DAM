function cargar(){
    let destino = document.getElementById("marco");
    destino.innerHTML = "";
    let cadena = '<table align = "center" border= "1"';
    cadena += '<caption>Tabla de multiplicar </caption>';
    cadena +='<thead>';
    cadena +='<tr>';
    cadena +='<th>&nbsp</th>';
    
    for (let i = 0; i <= 10; i++) cadena += '<th>' + i +'</th>';

    cadena +='</tr>';
    cadena +='</thead>';
    cadena +='<tbody>';

    for (let i = 0; i <= 10; i++) {
        cadena +='<tr>';
        cadena +='<th>' + i + '</th>';
        for (let j = 0; j <= 10; j++) {
            cadena +='<td>' + (i*j) + '</td>';
        }
        cadena +='</tr>';
    }

    cadena +='</tbody>';
    cadena += '</table>';
    destino.innerHTML = cadena;
}
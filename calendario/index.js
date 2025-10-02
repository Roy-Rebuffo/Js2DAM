function cargar() {
    let fecha = new Date();
    console.log(fecha)

    const anyo = fecha.getFullYear(); //coge el año completo 2025
    const mes = fecha.getMonth(); //coge el mes (0-11) Enero = 0, Diciembre = 11
    
    const numDiasMes = new Date(anyo, mes + 1, 0).getDate(); //esta funcion cuenta los numeros de dias del mes .coge el numero de dias del mes (28,30,31)
    console.log("Año:", anyo, "Mes:", mes + 1, "Tiene", numDiasMes, "días");
    //Con new Date(anyo, mes + 1, 0).getDate() siempre obtienes el último día del mes actual, que equivale al número total de días de ese mes 
    //new Date(año, mes, día) crea una fecha con esos valores.

    // Ojo: mes va de 0 a 11 (enero=0, febrero=1, ..., diciembre=11).

    // Cuando pones mes + 1, en realidad estás creando la fecha del mes siguiente.

    // Ejemplo: si mes = 9 (octubre), entonces mes + 1 = 10 (noviembre).

    // El día = 0 significa: “el día anterior al 1 del mes que puse”.

    // En otras palabras: “el último día del mes anterior”.

    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    fecha = new Date(anyo, mes, 1).getDay();
    console.log(fecha);
    let inicio = (fecha + 6) % 7; // ajustar para que lunes=0, martes=1...

    const destino = document.getElementById("marco");
    destino.innerHTML = "";
    let cadena = '<table align = "center" border= "1"';
    cadena += '<thead>';
    cadena += '<tr>';
    cadena += '<th>&nbsp</th>';

    for (let i = 0; i <= diasSemana.length - 1; i++) cadena += '<th>' + diasSemana[i] + '</th>';

    cadena += '</tr>';
    cadena += '</thead>';
    cadena += '<tbody>';
    cadena += '<tr>';
    cadena += '<td>Dias</td>';

    // ⬇️ 1) Huecos antes del día 1
    for (let i = 0; i < inicio; i++) {
        cadena += '<td></td>';
    }

    // ⬇️ 2) Días del mes
    for (let i = 1; i <= numDiasMes; i++) {
        cadena += '<td>' + i + '</td>';
        // cuando toca domingo → salto de fila
        if ((i + inicio) % 7 === 0) {
            cadena += '</tr><tr>';
        }
    }

    destino.innerHTML = cadena;
}

window.onload = () => { cargar(); };
function cargar (){
    
    let fecha = new Date(); //dejar global
    console.log(fecha)
    document.getElementById("fecha").valueAsDate = fecha; 

    const anyo = fecha.getFullYear(); //coge el año completo 2025
    const mes = fecha.getMonth(); //coge el mes (0-11) Enero = 0, Diciembre = 11
    
    const numDiasMes = new Date(anyo, mes + 1, 0).getDate(); //esta funcion cuenta los numeros de dias del mes .coge el numero de dias del mes (28,30,31)
    console.log("Año:", anyo, "Mes:", mes + 1, "Tiene", numDiasMes, "días"); 

}

function calc() {
    let cadena = "";
    let $horasDisp = document.getElementById("horasDisponibles");

    // Generar radios con value y pasar el número a pintar()
    for (let i = 1; i <= 8; i++) {
        let id = `ipt_${i}`;
        cadena += `<input type="radio" id="${id}" name="horasDia" value="${i}" onclick="pintar(${i})">
                   <label for="${id}">${i} Hora${i !== 1 ? 's' : ''}</label>`;
    }

    $horasDisp.innerHTML = cadena;
}

function pintar(horasDia){
    const $tabla = document.getElementById("tabla");
    const dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

    // Leer fecha de inicio desde el input #fecha (formato yyyy-mm-dd)
    const fechaVal = document.getElementById("fecha").value;
    let currentDate = fechaVal ? new Date(fechaVal) : new Date();

    const totalHoras = parseFloat(document.getElementById("horas").value) || 0;
    const horasPorDia = Number(horasDia) || 0;

    if (totalHoras <= 0 || horasPorDia <= 0) {
        $tabla.innerHTML = "<tr><td>Introduce las horas del curso y selecciona horas/día</td></tr>";
        return;
    }

    let restante = totalHoras;
    let acumulado = 0;
    let cadena = `<tr>
            <th>Horas/Día</th>
            <th>Σ Horas</th>
            <th>Día</th>
            <th>Fecha</th>
            </tr>`;

    // Iterar día a día hasta consumir todas las horas
    while (restante > 0) {
        const hoyHoras = Math.min(horasPorDia, restante);
        acumulado += hoyHoras;
        restante -= hoyHoras;

        const diaNombre = dias[currentDate.getDay()];
        const fechaStr = currentDate.getFullYear() + '-' +
                         String(currentDate.getMonth() + 1).padStart(2, '0') + '-' +
                         String(currentDate.getDate()).padStart(2, '0');

        cadena += `<tr><td>${hoyHoras}</td><td>${acumulado}</td><td>${diaNombre}</td><td>${fechaStr}</td></tr>`;

        // avanzar al día siguiente
        currentDate.setDate(currentDate.getDate() + 1);
    }

    $tabla.innerHTML = cadena;
}


window.onload = () => {
    cargar();
    calc();
};

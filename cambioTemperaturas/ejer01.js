//llama al objeto this() y lo llama origen y para acceder a el usa el innerHTML y quien es el propio id al que llamamos
//origen = boton ; quien = input;
function cambio(origen, quien, tipo) {
    //alert(origen.innerHTML);
    //alert(origen.innerHTML + " " + quien);
    const vdestino = document.getElementById(quien);
    if (tipo == "B") {
        vdestino.value = parseFloat(vdestino.value) + parseInt(origen.innerHTML);
        // me lee lo que tiene el destino(input), lo parsea a foat + lee lo que tiene el origen y lo parsea a int, lo suma y lo devuelve al input
    } else {
        vdestino.value = parseFloat(vdestino.value) + parseInt(origen.value);
    }
    incremento(vdestino);
}

function redonder(numero, decimales) {
    //ejemplo numero = 13.45678 decimales = 2

    let n = Math.pow(10, decimales); //n=100
    let m = Math.round(n * numero); //m==100*13.45678= 1345.678=>1346
    return m / n; //13.46
}

function incremento(quien) {
    let vid = quien.id;
    let vgc = 0;
    let vgf = 0;
    let vgk = 0;

    switch (vid) {
        case "gc":
            vgc = parseFloat(quien.value);
            vgf = (9 * vgc) / 5 + 32;
            vgk = vgc + 273.15;
            break;
        case "gf":
            vgf = parseFloat(quien.value);
            vgc = (5 * (vgf - 32)) / 9;
            vgk = vgc + 273.15;
            break;
        case "gk":
            vgk = parseFloat(quien.value);
            vgc = vgk - 273.15
            vgkf = (9 * vgc) / 5 + 32;
            break;
    }
    document.getElementById("gc").value = redonder(vgc, 2);
    document.getElementById("gf").value = redonder(vgf, 2);
    document.getElementById("gk").value = redonder(vgk, 2);
}

//hacer caja de texto/hacer boton con  +5
//cada vez que demos click al boton suma ese valor (+5)
//que sea independiente a lo que contenga la label

//-------------------------------------------
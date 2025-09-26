//llama al objeto this() y lo llama origen y para acceder a el usa el innerHTML y quien es el propio id al que llamamos
//origen = boton ; quien = input;
function cambio(origen, quien) {
    //alert(origen.innerHTML);
    //alert(origen.innerHTML + " " + quien);

    const vdestino = document.getElementById(quien);
    vdestino.value = parseFloat(vdestino.value) + parseInt(origen.innerHTML);
    // me lee lo que tiene el destino(input), lo parsea a foat + lee lo que tiene el origen y lo parsea a int, lo suma y lo devuelve al input


    var vgc = 0,
        vgf = 0,
        vgk = 0;

    switch(quien){
        case "GC":

    }
}

//hacer caja de texto/hacer boton con  +5
//cada vez que demos click al boton suma ese valor (+5)
//que sea independiente a lo que contenga la label
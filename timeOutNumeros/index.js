let v;

// diferencia horaria respecto a la zona base (Madrid)
let dH = 0;

function cambiar(diferenciaHoraria = dH){
    const now = new Date();//Hora actual
    if(diferenciaHoraria !== 0){ //Si es 0 estamos en madrid
        now.setHours(now.getHours() + diferenciaHoraria);// seteamos la nueva hora
    }
    let hora = now.toLocaleTimeString();
    //document.getElementById("horaString").innerHTML = total
    //let cadena = total[0] + total [1];
    //console.log(cadena)
    /*
    document.getElementById("d0").src= "/num/"+ hora[0] +".png";
    document.getElementById("d1").src= "/num/"+ hora[1] +".png";
    document.getElementById("d2").src= "/num/dosp.png";
    document.getElementById("d3").src= "/num/"+ hora[3] +".png";
    document.getElementById("d4").src= "/num/"+ hora[4] +".png";
    document.getElementById("d5").src= "/num/dosp.png";
    document.getElementById("d6").src= "/num/"+ hora[6] +".png";
    document.getElementById("d7").src= "/num/"+ hora[7] +".png";
    */

    for(let i = 0; i<hora.length;i++){
        //busca el elemento por el id de la imagen d + i(posicion) y le añade un src.
        //busca en num(carpeta donde estan las imagenes)
        //si la hora[i] es ":" ponemos la imagen dosp.png
        //sino la correspondiente
        document.getElementById("d" + i).src = "/num/" + (hora[i] == ":" ? "dosp" : hora[i]) + ".png";
        
    }

}   

function cambioZona(){
    // obtiene la opción seleccionada y asigna un offset en horas
    let sZonas = document.getElementById("sZonas").value;
    switch(sZonas) {
        case "Madrid":
            dH = 0;
            break;
        case "New_york":
            dH = -6;
            break;
        case "London":
            dH = -1;
            break;
        case "Tokyo" :
            dH = 7;
            break;
        default:
            dH = 0;
    }
    cambiar();
}

function inicio(){
    // el setInterval usa la dH global por defecto
    v=setInterval(()=>{cambiar();},1000)
}

window.onload=() =>{inicio();};
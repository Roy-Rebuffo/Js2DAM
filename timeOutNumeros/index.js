let v;

function cambiar(){
    let hora = (new Date()).toLocaleTimeString();
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

function inicio(){
    v=setInterval(()=>{cambiar();},1000)
}

window.onload=() =>{inicio();};
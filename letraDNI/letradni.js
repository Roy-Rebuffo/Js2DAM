const cadena = "TRWAGMYFPDXBNJZSQVHLCKE";
const vdni = document.getElementById("identificador");
const vletra = document.getElementById("letra");

function cambio(){
    alert(vdni.value)
    let valor = vdni.value;
    let posi;
    let pos = "XYZ".indexOf(valor[0])
    if(pos == -1){
        posi = parseInt(valor) % 23;
    }else{
        let numero = parseInt( pos.toString() + valor.substring(1));
        posi = parseInt(numero) % 23;
    }
    vletra.value = cadena[posi];
}
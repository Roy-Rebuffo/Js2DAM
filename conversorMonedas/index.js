const vimagenes = ["usa","cee","japon","ingla","spain"];
const nomPais = ["DOLAR","EURO","YEN", "LIBRA"];
const camino = "/gif/";

function cargar(){
    //hacer switch? depende del case poner input disabled?
    //document.getElementById("imagen").src = camino + vimagenes[n]+".gif";
    let cadena = "";
    let cont = true;
    let $tabla = document.getElementById("tabla");
    let imagen;
    let id;

    for (let i = 0; i < nomPais.length; i++) {
        id = `img_${i}`
        cadena += "<td>&nbsp;</td>";
        cadena += `<th>${nomPais[i]}`;
        cadena += `<img src = "${camino + vimagenes[i] + ".gif"}" width = "100" id = ${id}>`;
        cadena += `</th>`
        
        cont = false;
        while(cont){
            cont = true;
            break
        }
    }
    for (let i = 0; i < nomPais.length; i++) {
        id=`p_${i}`;
        cadena += `<p id = ${id}>${nomPais[i]}</p>`;}

    $tabla.innerHTML = cadena;
}

window.onload = () =>{cargar();};
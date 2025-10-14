//Destino : srojo
//li : 0
//ls : 255

//3ºPaso
function rellenar(destino,li,ls){
    for(i = li ;i<=ls;i++){
        let a = document.createElement("option");
        a.text = ls ==10 ? i/10 : i; //Hacemos la division porque el rango va de 0 a 1
        a.value = i;
        destino.appendChild(a);
    }
}

//2º Paso
function inicioNew(color){//Ej. Le llega rojo
    let origen = document.getElementById(color); //Ej. Hace referencia al propio color rojo
    let destino = document.getElementById("s"+color);//Ej. Hace referencia al select srojo

    rellenar(destino,origen.min,origen.max); //Llama a la funcion rellenar
    destino.addEventListener('change',() => {scambio(destino); }); 
    //El evento que queremos controlar en el select es el change y ejecutamos scambio 
    //Cuando cambia el selector le pasamos scambio

    origen.addEventListener('input', () => {cambio(origen); });
    //Cuando cambia el input llama a cambio
    cambio(origen);
}

function scambio (quien){ //le llega el select. ej. srojo
    let n = quien.value; // coge el valor del select(ej. 200)
    let destino = (quien.id).substring(1);//Coge el color en si. 
    document.getElementById(destino).value = n; //pone el valor en el color (200)
    cambio(document.getElementById(destino)); // ejecuta la function cambio() y le pasa el color
}

function cambio(quien){//quien es el color perse
    const vrojo = parseInt( document.getElementById("rojo").value);
    const vverde = parseInt( document.getElementById("verde").value);
    const vazul = parseInt( document.getElementById("azul").value);
    const valfa = parseInt( document.getElementById("alfa").value)/10;
    const vancho = parseInt( document.getElementById("ancho").value);
    const destino = document.getElementById("colores");

    destino.style.backgroundColor = 
    'rgba(' + vrojo + ',' + vverde + ',' + vazul + ',' + valfa + ')';
    destino.style.width = vancho + "%";

    let otrodestino = "s" + quien.id; // hacemos referencia al select
    document.getElementById(otrodestino).selectedIndex = quien.value;
    //document.getElementById("colores").style.width = vancho + "%";

    document.getElementById("textoValores").innerHTML = "\tRojo: " + vrojo + "\tVerde: " + vverde +
     "\tAzul: " + vazul + "\tOpacidad: " + valfa + "\tAncho: " + vancho + "%";
    
}

//Paso 1º
//Cargamos los select
//Crea un array, lo recorre
//se va a iniciNew y le pasa el color. Todo esto lo hace iterando por cada uno de los selectores
window.addEventListener('load', ()=>{
    ["rojo","verde","azul","alfa","ancho"].forEach((c)=> {inicioNew(c); });
    //añade un evento que escucha al load. recorre los colores. cada c es un color. luego este se va con 
    //cada color al inicioNew con C como cada color
})
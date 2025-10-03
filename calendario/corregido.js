const dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
const diasL = ["L","M","X","J","V","S","D"];
let año;
function cargar(){
    let destino = document.getElementById("años");
    año= (new Date()).getFullYear();
    for (let i = año - 10; i <= año + 10; i++) {
        let a = document.createElement("option");
        a.text = i;
        a.value = i;
        destino.appendChild(a);
    }
    destino.selectedIndex = 10; // para que se quede en el año del sistema
    todoElAño();
}

function cambio(){
   año = document.getElementById("años").value;
   todoElAño();
}

function todoElAño(){
    let cadena = "";
    for(let i = 0; i<=11;i++){
        cadena += calendario_mes(new Date(año,i,1));
    }
    document.getElementById("marco").innerHTML = cadena;
}

function calendario_mes(f){//fecha es el selector persé
    let cadena = "";
    let mes = f.getMonth();

    let inicio = f.getDay() == 0 ? 6 : f.getDay() - 1; //-1 para que se nos quede en estilo europeo la semana
    
    cadena += "<table border = '1' margin = 'center'>";
    cadena += "<caption>" + f.toLocaleString('default', {month: 'long'}).toUpperCase() + "</caption>";
    cadena += "<thead><tr>"
    diasL.forEach(e => {
            cadena += "<th>" + e + "</th>"; // CABECERA
        });
    cadena += "</tr></thead>"
    for (let i = 1; i <= inicio; i++) {
        cadena += "<td>&nbsp;</td>"
    }

    while(f.getMonth() == mes){
        inicio = f.getDay() == 0 ? 6 : f.getDay() - 1;

        cadena += "<td>" + f.getDate() + "</td>";
        if(inicio ==6) cadena += "</tr>" // si inicio es igual a 6(6===domingo), terminamos la semana 

        f.setDate(f.getDate() + 1); //nos da la fecha del dia siguiente
    }
    if(inicio !=6){
        for(let i = inicio + 1; i<=6 ; i++) cadena += "<td>&nbsp;</td>"
        cadena += "</tr>"
    }
    cadena += "</table>"
    return cadena;
    document.getElementById("marco").innerHTML = cadena;
}

//
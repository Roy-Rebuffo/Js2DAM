let munidades = ["Celsius","Fahrenheit","Kelvin"];

function cargar(){
    document.getElementById("temperatura").addEventListener("change", ()=>{cambio();});
    let target = document.getElementById("unidades");
    munidades.forEach((a)=>{
        munidades.forEach((b)=>{
            if(a!=b) {
                añadir(target,a,b);
            }
        })
    })
    document.getElementsByName("cunidades")[0].checked = true;
}

function añadir(destino, x, y){
    let variable = x.charAt(0) + " a " + y.charAt(0);

    let input = document.createElement("input");
    input.id = variable;
    input.type = "radio";
    input.name = "cunidades";
    input.value = variable;
    input.addEventListener("change", ()=>{cambio();});
    let label = document.createElement("label");
    label.textContent=variable;

    destino.appendChild(input);
    destino.appendChild(label);

}

function cambio(){
    //Obtenemos la etiqueta
    let n = document.querySelector("input[name = cunidades]:checked")?.value;
    //Obetenemos el valor
    let v = parseFloat(document.getElementById("temperatura").value);
    const destino = document.getElementById("resultado");

    let res, text;
    switch(n){
        case "C a F":
            res = (v * 9) / 5 + 32;
            text = `${redondear(v,2)} ºC = ${redondear(res,2)} ºF`;
            break;
        case "C a K":
            res = v + 273.15;
            text = `${redondear(v,2)} ºC = ${redondear(res,2)} ºK`;
            break;
        case "F a C":
            res = (v - 32) * 5 / 9;
            text = `${redondear(v,2)} ºF = ${redondear(res,2)} ºC`;
            break;
        case "F a K":
            res = (v - 32) * 5 / 9 + 273.15;
            text = `${redondear(v,2)} ºF = ${redondear(res,2)} ºK`;
            break;
        case "K a C":
            res = v - 273.15;
            text = `${redondear(v,2)} ºK = ${redondear(res,2)} ºC`;
            break;
        case "K a F":
            res = (v - 273.15) * 9 / 5 + 32;
            text = `${redondear(v,2)} K = ${redondear(res,2)} °F`;
            break;
    }
    destino.textContent = text;
}

function redondear(numero, decimales) {
    //ejemplo numero = 13.45678 decimales = 2

    let n = Math.pow(10, decimales); //n=100
    let m = Math.round(n * numero); //m==100*13.45678= 1345.678=>1346
    return m / n; //13.46
}

window.onload= () => {cargar();};
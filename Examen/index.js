function redondear(numero, decimales) {
    //ejemplo numero = 13.45678 decimales = 2

    let n = Math.pow(10, decimales); //n=100
    let m = Math.round(n * numero); //m==100*13.45678= 1345.678=>1346
    return m / n; //13.46
}

function addClass(el,className){
    if(el.classList)
        el.classList.add(className)
    else if (!hasClass(el,className)) el.className += " " + className
}

function removeClass(el, className){
    if(el.classList)
        el.classList.remove(className)
    else if(hasClass(el, className)){
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
        el.className = el.className.replace(reg, ' ')
    }
}

function cargar(){
    const origen = document.getElementById("origen");
    const btn = document.getElementById("convertir");
    const destino = document.getElementById("resultado");

    btn.addEventListener("click", function() {
        convertir(origen, destino);
    });
}

function cambioInput(){
    let todas = document.querySelectorAll("#marco input");
    
    // Quitar la clase activa de TODAS
    todas.forEach(i => removeClass(i, "activa"));

    // Activar el input seleccionado
    todas.forEach(i => addClass(i, "activa"));
    
    convertir();
}

function convertir(origen, destino){
    const valor = origen.value.trim();
    const v = parseFloat(valor);

    const radios = ["fac", "caf", "cak", "kac", "fak", "kaf"];
    const selectedRadios = radios.find(id => {
        const r = document.getElementById(id);
        return r && r.checked;
    });

    if(!selectedRadios){
        destino.textContent = "Selecciona una conversión primero";
        return;
    }

    let res, text;
    switch(selectedRadios){
        case "fac":
            res = (v - 32) * 5 / 9;
            text = `${redondear(v,2)} ºF = ${redondear(res,2)} ºC`;
            break;
        case "caf":
            res = (v * 9) / 5 + 32;
            text = `${redondear(v,2)} ºC = ${redondear(res,2)} ºF`;
            break;
        case "cak":
            res = v + 273.15;
            text = `${redondear(v,2)} ºC = ${redondear(res,2)} ºK`;
            break;
        case "kac":
            res = v - 273.15;
            text = `${redondear(v,2)} ºK = ${redondear(res,2)} ºC`;
            break;
        case "fak":
            res = (v - 32) * 5 / 9 + 273.15;
            text = `${redondear(v,2)} ºF = ${redondear(res,2)} ºK`;
            break;
        case "kaf":
            res = (v - 273.15) * 9 / 5 + 32;
            text = `${redondear(v,2)} K = ${redondear(res,2)} °F`;
            break;
    }
    destino.textContent = text;
}



window.onload = () => { cargar(); };

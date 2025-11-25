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

const provincias = {
    "Andalucía": ["Almería","Cádiz","Córdoba","Granada","Huelva","Jaén","Málaga","Sevilla"],
    "Aragón": ["Huesca","Teruel","Zaragoza"],
    "Canarias": ["El Hierro","Fuerteventura","Gran Canaria","La Gomera","La Palma","Lanzarote","Tenerife"],
    "Cantabria": ["Cantabria/Santander"],
    "Castilla y León": ["Ávila","Burgos","León","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"],
    "Castilla-La Mancha": ["Albacete","Ciudad Real","Cuenca","Guadalajara","Toledo"],
    "Cataluña": ["Barcelona","Girona","Lleida","Tarragona"],
    "Ceuta y Melilla": ["Ceuta y Melilla"],
    "Comunidad de Madrid": ["Madrid"],
    "Navarra": ["Navarra/Pamplona"],
    "Comunidad Valenciana": ["Alicante","Castellón","Valencia"],
    "Extremadura": ["Badajoz","Cáceres"],
    "Galicia": ["La Coruña","Lugo","Orense","Pontevedra"],
    "Islas Baleares": ["Formentera","Ibiza","Mallorca","Menorca"],
    "La Rioja": ["La Rioja/Logroño"],
    "País Vasco": ["Álava","Guipúzcoa","Vizcaya"],
    "Asturias": ["Asturias/Oviedo"],
    "Región de Murcia": ["Murcia"]
};

let cautonomas=["Andalucía",
"Aragón",
"Canarias",
"Cantabria",
"Castilla y León",
"Castilla la Mancha",
"Cataluña",
"Ceuta",
"Comunidad de Madrid",
"Comunidad de Navarra",
"Comunidad Valenciana",
"Extremadura",
"Galicia",
"Islas Baleares",
"La Rioja",
"Pais Vasco",
"Principado de Asturias",
"Region de Murcia"];

function cargar(cA){
    let destino = document.getElementById("marco");
    let imagen = document.createElement("img");

    imagen.setAttribute("src", "banderas/" + cA + ".gif")
    destino.appendChild(imagen);

    let select = document.getElementById("sprovincias");
    

    // provincias[select].forEach(c => {
    //     let opt = document.createElement("option");

    //     opt.value = c;
    //     opt.text = c;

    //     select.appendChild(opt);
    // });
}

window.addEventListener("load", () => {
    cautonomas.forEach((cA) => cargar(cA));
});
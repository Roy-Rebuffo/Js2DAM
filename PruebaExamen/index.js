const medidas = ["masa","longitud","capacidad","superficie","volumen"];
const unidades = {
    masa: ["centigramo", "decigramo", "gramo", "decagramo", "hectogramo", "kilogramo"],
    longitud: ["milímetro", "centímetro", "decímetro", "metro", "decámetro", "hectómetro", "kilómetro"],
    capacidad: ["mililitro", "centilitro", "decilitro", "litro"],
    superficie: ["mm2", "cm2", "dm2", "m2", "dam2", "hm2", "km2"],
    volumen: ["mm3", "cm3", "dm3", "m3"]
};

alert("SELECCIONE LA MEDIDA PARA EMPEZAR A CALCULAR")

function inicioNew(medida) {
    let destino = document.getElementById("sMedidas");

    let opcion = document.createElement("option");
    opcion.value = medida;
    opcion.text = medida;

    destino.appendChild(opcion);

    destino.addEventListener("change", cambio)
}

function cambio(){
    const categoria = document.getElementById("sMedidas").value;
    const s1 = document.getElementById("sUnidades1");
    const s2 = document.getElementById("sUnidades2");

    s1.innerHTML = "";
    s2.innerHTML = "";

    unidades[categoria].forEach(c => {
        let op1 = document.createElement("option");
        let op2 = document.createElement("option");

        op1.value = c;
        op1.text = c;
        
        op2.value = c;
        op2.text = c;

        s1.appendChild(op1);
        s2.appendChild(op2);
    });

    s1.addEventListener("change", calculo)
    s2.addEventListener("change", calculo)
    document.getElementById("primero").addEventListener("input", calculo);
}

function calculo() {
    let valor = parseFloat(document.getElementById("primero").value);

    let u1 = document.getElementById("sUnidades1").selectedIndex;
    let u2 = document.getElementById("sUnidades2").selectedIndex;

    let resultado = valor * Math.pow(10, u1 - u2);

    document.getElementById("segundo").value = resultado;
}

window.addEventListener("load", () => {
    medidas.forEach((m) => inicioNew(m));
});

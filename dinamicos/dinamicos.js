const meses = ["Enero", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Ag", "Sep", "Oc", "Nov", "Dic"];
function bisiesto(n) {
    return n % 4 == 0 && n % 100 != 0 || n % 400 == 0;
}

function fdias(año, mes) {
    let ndias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    ndias[1] = bisiesto(año) ? 29 : 28;
    return ndias[mes];
}

function cargar() {
    const vaños = document.getElementById("saños");
    const vmeses = document.getElementById("smeses");

    for (let a = 2000; a <= 2025; a++) {
        let nuevo = document.createElement("option");
        nuevo.text = a;
        nuevo.value = a;
        vaños.appendChild(nuevo);
    }

    for (let i = 0; i < meses.length; i++) {
        let nuevo = document.createElement("option");

        nuevo.text = meses[i];
        nuevo.value = i;
        vmeses.appendChild(nuevo);
    }
    cambio()
}

function cambio() {
    let a = document.getElementById("saños").value;
    let m = document.getElementById("smeses").value;
    document.getElementById("ndias").value = fdias(a,m);

}

window.onload = () => { cargar(); }
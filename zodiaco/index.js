//nombre de las imagenes
const signos = [
    "ico-aries", "ico-tauro", "ico-geminis", "ico-cancer", "ico-leo", "ico-virgo",
    "ico-libra", "ico-escorpio", "ico-sagitario", "ico-capricornio", "ico-acuario", "ico-piscis"
];

const camino = "../horoscopoImages/";

function cargar(){
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = hoy.getMonth();
    const dia = hoy.getDate();
    let cadena = año + "-" + (mes<10 ? '0' + mes: mes) + "-" + (dia<10 ? '0' + dia : dia);
    document.getElementById("fecha").value = cadena
    cambio();
}

function cambio() {
    const vfecha = document.getElementById("fecha");
    const cadena = vfecha.value; // formato esperado: "YYYY-MM-DD"
    
    const separacion = cadena.split("-");
    const mes = parseInt(separacion[1]);
    const dia = parseInt(separacion[2]);
    const f = mes * 100 + dia;

    let posicion = -1;

    if (f >= 321 && f <= 420) {
        posicion = 0; // Aries
    } else if (f >= 421 && f <= 521) {
        posicion = 1; // Tauro
    } else if (f >= 522 && f <= 621) {
        posicion = 2; // Géminis
    } else if (f >= 622 && f <= 722) {
        posicion = 3; // Cáncer
    } else if (f >= 723 && f <= 823) {
        posicion = 4; // Leo
    } else if (f >= 824 && f <= 923) {
        posicion = 5; // Virgo
    } else if (f >= 924 && f <= 1023) {
        posicion = 6; // Libra
    } else if (f >= 1024 && f <= 1122) {
        posicion = 7; // Escorpio
    } else if (f >= 1123 && f <= 1221) {
        posicion = 8; // Sagitario
    } else if ((f >= 1222 && f <= 1231) || (f >= 101 && f <= 120)) {
        posicion = 9; // Capricornio
    } else if (f >= 121 && f <= 218) {
        posicion = 10; // Acuario
    } else if (f >= 219 && f <= 320) {
        posicion = 11; // Piscis
    }

    if (posicion !== -1) {
        const rutaImagen = camino + signos[posicion] + ".png";
        document.getElementById("imagen").src = rutaImagen;
        document.getElementById("nombre").value = signos[posicion];
    } else {
        alert("Fecha inválida o fuera de rango");
    }
}

window.onload=()=>{cargar();};
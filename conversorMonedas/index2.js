let monedas = ["Dolar", "Euro", "Yen", "Libra"];
let VDE = 0.719;
let VDY = 101.615;
let VDL = 0.596;
let VED = 1 / VDE;
let VYD = 1 / VDY;
let VLD = 1 / VDL;
let VEY = VDY / VDE;
let VEL = VDL / VDE;
let VYL = VDL / VDY;
let VYE = 1 / VEY;
let VLE = 1 / VEL;
let VLY = 1 / VYL;

function redondear(numero, decimales) {
  let n = Math.pow(10, decimales);
  return Math.round(n * numero) / n;
}
/**************************************************************************/
function inicio() {
  ["VDE", "VDY", "VDL"].forEach((e) => {
    let destino = document.getElementById(e);
    destino.addEventListener("change", () => {
      cambio(destino);
    });
  });
  cambio2();
}
/**************************************************************************/
function cambio2() {
  monedas.forEach((e) => {
    monedas.forEach((f) => {
      if (e[0] != f[0]) {
        let z = `V${e[0]}${f[0]}`;
        document.getElementById(z).value = redondear(eval(z), 6);
      }
    });
  });
}
/**************************************************************************/
function cambio(q) {
  eval(`${q.id}=parseFloat(${q.value})`);

  VED = 1 / VDE;
  VYD = 1 / VDY;
  VLD = 1 / VDL;
  VEY = VDY / VDE;
  VEL = VDL / VDE;
  VYL = VDL / VDY;
  VYE = 1 / VEY;
  VLE = 1 / VEL;
  VLY = 1 / VYL;

  cambio2();
}
/**************************************************************************/
function cambioInput() {
  let $dolar = parseFloat(document.getElementById("Dolar").value) || 0;
  let $euro = parseFloat(document.getElementById("Euro").value) || 0;
  let $yen = parseFloat(document.getElementById("Yen").value) || 0;
  let $libra = parseFloat(document.getElementById("Libra").value) || 0;
  if ($dolar != 0) {
    document.getElementById("Euro").value = redondear($dolar * VDE, 4);
    document.getElementById("Yen").value = redondear($dolar * VDY, 4);
    document.getElementById("Libra").value = redondear($dolar * VDL, 4);
  } else if ($euro != 0) {
    document.getElementById("Dolar").value = redondear($euro * VED, 4);
    document.getElementById("Yen").value = redondear($euro * VEY, 4);
    document.getElementById("Libra").value = redondear($euro * VEL, 4);
  } else if ($yen != 0) {
    document.getElementById("Dolar").value = redondear($yen * VYD, 4);
    document.getElementById("Euro").value = redondear($yen * VYE, 4);
    document.getElementById("Libra").value = redondear($yen * VYL, 4);
  } else if ($libra != 0) {
    document.getElementById("Dolar").value = redondear($libra * VLD, 4);
    document.getElementById("Euro").value = redondear($libra * VLE, 4);
    document.getElementById("Yen").value = redondear($libra * VLY, 4);
  }
  
}
/**************************************************************************/

function sumarYrestar() {
  let $btnSuma = document.getElementById("suma");
  let $btnResta = document.getElementById("resta");
  let $op = document.getElementById("select").innerHTML;

  console.log($op);

  // Añadir evento para el botón de suma
  $btnSuma.addEventListener("click", () => {
    let $dolar = parseFloat(document.getElementById("Dolar").value) || 0;
    let $euro = parseFloat(document.getElementById("Euro").value) || 0;
    let $yen = parseFloat(document.getElementById("Yen").value) || 0;
    let $libra = parseFloat(document.getElementById("Libra").value) || 0;

    // Sumar 1 a cada valor
    document.getElementById("Dolar").value = redondear($dolar + 1, 4);
    document.getElementById("Euro").value = redondear($euro + 1, 4);
    document.getElementById("Yen").value = redondear($yen + 1, 4);
    document.getElementById("Libra").value = redondear($libra + 1, 4);
  });

  // Añadir evento para el botón de resta
  $btnResta.addEventListener("click", () => {
    let $dolar = parseFloat(document.getElementById("Dolar").value) || 0;
    let $euro = parseFloat(document.getElementById("Euro").value) || 0;
    let $yen = parseFloat(document.getElementById("Yen").value) || 0;
    let $libra = parseFloat(document.getElementById("Libra").value) || 0;

    // Restar 1 a cada valor, asegurando que no sea menor que 0
    document.getElementById("Dolar").value = redondear(Math.max($dolar - 1, 0), 4);
    document.getElementById("Euro").value = redondear(Math.max($euro - 1, 0), 4);
    document.getElementById("Yen").value = redondear(Math.max($yen - 1, 0), 4);
    document.getElementById("Libra").value = redondear(Math.max($libra - 1, 0), 4);
  });
}

window.onload = () => {
  inicio();
  sumarYrestar(); // Añadir esta línea
};
/**************************************************************************/

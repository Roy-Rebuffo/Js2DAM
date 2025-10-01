let vdecimal, vbase, vresultado;

function cargar() {
    //vdecimal = document.getElementById("decimal");
    vbase = document.getElementById("base");
    vresultado = document.getElementById("resultado");
    vbinario = document.getElementById("binario");
}

function dec_a_bin() {
    let n = parseInt(vdecimal.value);
    let res = "";
    while (n != 0) {
        res = (n % 2) + res;
        n = parseInt(n / 2);
    }
    vresultado.value = res;
}

function dec_a_hex() {
    let cadena = "0123456789ABCDEF";
    let n = parseInt(vdecimal.value);
    let res = "";
    while (n != 0) {
        res = cadena[n % 16] + res;
        n = parseInt(n / 16);

    }
    vresultado.value = res;
}

function dec_a_oct() {
    let cadena = "012345678";
    let n = parseInt(vdecimal.value);
    let res = "";
    while (n != 0) {
        let c = n % 8
        if (c >= 8) c += 2;
        res = c + res;
        n = parseInt(n / 8);
    }
    vresultado.value = res;
}

function bin_a_dec() {
    let cadena = vbinario.value;
    let n = 0, c = 0;

    for (let i = cadena.length - 1; i >= 0; i--) {
        n += parseInt(cadena[i]) * Math.pow(2, c++);
    }
    vresultado.value = n.toString();
}

function bin_a_oct(){
    let cadena = vbinario.value;
    let n = 0, c = 0;
    
    for (let i = cadena.length - 1; i >= 0; i--) {
        n += parseInt(cadena[i]) * Math.pow(2, c++);
    }
     let dec = n;
     let caracteres = "012345678";
     dec = parseInt(vbinario.value);
     let res = "";
      while (n != 0) {
        let c = n % 8
        if (c >= 8) c += 2;
        res = c + res;
        n = parseInt(n / 8);
    }
    vresultado.value = res;
}

function bin_a_hex(){
    let cadena = vbinario.value;
    let n = 0, c = 0;
    
    for (let i = cadena.length - 1; i >= 0; i--) {
        n += parseInt(cadena[i]) * Math.pow(2, c++);
    }
    let dec = n;
    let caracteres = "0123456789ABCDEF";
    dec = parseInt(vbinario.value);
    let res = "";
    while (n != 0) {
        res = caracteres[n % 16] + res;
        n = parseInt(n / 16);
    }
    vresultado.value = res;
}

function cambio() {
    switch (vbase.value) {
        case "Decimal":
            //dec_a_bin();
            bin_a_dec();
            break;
        case "Octal":
            //dec_a_oct();
            bin_a_oct();
            break;
        case "Hexadecimal":
            //dec_a_hex();
            bin_a_hex();
            break;
    }
}
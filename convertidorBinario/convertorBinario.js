let vdecimal, vbase, vresultado;

function cargar(){
    vdecimal = document.getElementById("decimal");
    vbase = document.getElementById("base");
    vresultado = document.getElementById("resultado");
}

function dec_a_bin(){
    let n = parseInt(vdecimal.value);
    let res = "";
    while(n!=0){
        res = (n%2) + res;
        n=parseInt(n/2);
    }
    vresultado.value = res;
}

function dec_a_hex(){
    let cadena="0123456789ABCDEF";
    let n = parseInt(vdecimal.value);
    let res = "";
    while(n!=0){
        res = cadena[n%16] + res;
        n=parseInt(n/16);
        
    }
    vresultado.value = res;
}

function dec_a_oct(){
    let cadena="0123456789ABCDEF";
    let n = parseInt(vdecimal.value);
    let res = "";
    while(n!=0){
        let c = n%8
        if(c>=8) c +=2;
        res = c + res;
        n=parseInt(n/8);
    }
    vresultado.value = res;
}

function cambio(){
    switch(vbase.value){
        case "Binario" : 
        dec_a_bin();
        break;
        case "Octal" : 
        dec_a_oct();
        break;
        case "Hexadecimal" : 
        dec_a_hex();
        break;
    }
}
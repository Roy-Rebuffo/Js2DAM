function cambio(origen, tipo) {
    // lo que hacemos es concatenar la cadena de strings. en los lenguajes interpretados se puede evaluar el texto con metodos, en este caso el eval
    let cadena = document.getElementById("pv").value;
                cadena += document.getElementById("operacion").value;
                cadena += document.getElementById("sv").value; 

    // para sustituir el valor ponemos el .value despues de coger el resultado
    document.getElementById("RESULTADO").value = eval(cadena);
}
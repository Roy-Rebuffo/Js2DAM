function cargar(){
    const fecha = new Date();
    //fecha.setDate(fecha.getDate() + 1); //suma 10 dias

    console.log(fecha)

    const dia = fecha.getDate();//coge el dia literal 02/10/2025
    //const dia = fecha.getDay(); // coge el numero del dia de la semana (Lunes = 1; Martes = 2,...)

    console.log(dia)


    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const destino = document.getElementById("marco");
    destino.innerHTML = "";
    

   

    let cadena = '<table align = "center" border= "1"';
    cadena += '<caption>Dias de la semana</caption>';
    cadena +='<thead>';
    cadena +='<tr>';
    cadena +='<th>&nbsp</th>';
    
    for (let i = 0; i <= diasSemana.length - 1; i++) cadena += '<th>' + diasSemana[i] +'</th>';

    cadena +='</tr>';
    cadena +='</thead>';
    //cadena +='<tbody>';


    destino.innerHTML = cadena;

}

window.onload=()=>{cargar();};
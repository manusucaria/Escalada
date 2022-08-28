console.log("Ejemplo Tabla del 3: ");
for(let i = 1 ; i <= 30 ; i++){
    if(i % 3 == 0){
        console.log(i + " Es multiplo de 3");
    }
}
console.log("Ejemplo Cuestionario de Internet:");
let bienvenida = prompt("Bienvenido al Cuestionario de Usuario de Fibertel, desea responder unas preguntas a modo de encuesta?");
while(bienvenida != "si"){
    alert("Gracias igual, que tenga un bien dia")
    break;
}
while(bienvenida == "si"){
    let pregunta1 = prompt("Cuan conforme esta ud con el servicio de Internet del 1 al 5?");
    switch(pregunta1){
        case "1":
            pregunta2 = prompt("Indique en que aspecto le gustaria que mejoremos:");
            alert("Pruebe Claro Hogar que es mejor (nosotros no se lo dijimos)!");
            console.log("Puntuación del Cliente: " + pregunta1 + " Area a mejorar: " + pregunta2);
            break;
        case "2":
            pregunta2 = prompt("Indique en que aspecto le gustaria que mejoremos:");
            alert("Gracias por su respuesta, intentaremos mejorar el servicio");
            console.log("Puntuación del Cliente: " + pregunta1 + " Area a mejorar: " + pregunta2);
            break;
        case "3":
            pregunta2 = prompt("Indique en que aspecto le gustaria que mejoremos:");
            alert("Gracias por su respuesta mediocre, podria ser peor!");
            console.log("Puntuación del Cliente: " + pregunta1 + " Area a mejorar: " + pregunta2);
            break;
        case "4":
            pregunta2 = prompt("Indique en que aspecto le gustaria que mejoremos:");
            alert("Nos alegra saber que esta bastante conforme con el servicio, gracias!");
            console.log("Puntuación del Cliente: " + pregunta1 + " Area a mejorar: " + pregunta2);
            break;
        case "5":
            alert("Nos alegra saber que esta tan conforme con el servicio, gracias por elegirnos!");
            console.log("Puntuación del Cliente: " + pregunta1);
            break;
        default:
            alert("Aprenda bien los numeros, ud no merece nuestro servicio, gracias!");
            break;
    }
    break;
}
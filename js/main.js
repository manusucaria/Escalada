// let ejemploUno = 3 < 0;
// console.log("Ejemplo Uno: ")
// console.log(ejemploUno, typeof ejemploUno);

// let ejemploDos = (54 == 54);
// console.log("Ejemplo Dos: ")
// console.log(ejemploUno, typeof ejemploDos);


// let ejemploTres = (54 === "54");
// console.log("Ejemplo Tres: ")
// console.log(ejemploUno, typeof ejemploTres);

// let clima = "soleado";
// let temperatura = 30;
// let ejemploOcho = (temperatura >=40) || (clima == "soleado");
// console.log("!Ejemplo Ocho: ");
// console.log(ejemploOcho);

// let edad = parseInt(prompt("Ingrese su Edad: "));
// if(edad < 12){
//     alert("sos un niño!");
// } else if(edad >= 12 && edad <= 16) {
//     alert("Eres Puber");
// } else if(edad > 16 && edad <= 19) {
//     alert("Eres Adolescente");
// }   else{
//     alert("Eres Adulto");
// }

// let usuarioAutorizado = "stocaimaza";
// let passwordAutorizado = "pepelepu";

// let usuarioIngresado = prompt("Ingrese su Nombre de Usuario: ");
// let passwordIngresado = prompt("Ingrese su Constraseña");

// if(usuarioIngresado === usuarioAutorizado && passwordIngresado === passwordAutorizado){
//     alert("los Datos son correctos, Puede Ingresar")
// }else{
//     alert("Los Datos son Incorrectos")
// }
let notaUno = parseInt(prompt("ingrese la nota del Primer Parcial: "));
let notaDos = parseInt(prompt("ingrese la nota del Segundo Parcial: "));

let promedio = ((notaUno + notaDos) / 2);
alert("El Promedio del Alumno es: " + promedio);

if(promedio == 10){
    alert("Excelente");
}else if (promedio >= 7 && promedio < 10){
    alert("Aprobado");
}else if (promedio >= 1 && promedio < 7){
    alert("Reprobado");
}else{
    alert("Datos Incorrectos");
}




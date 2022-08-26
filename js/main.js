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
// let notaUno = parseInt(prompt("ingrese la nota del Primer Parcial: "));
// let notaDos = parseInt(prompt("ingrese la nota del Segundo Parcial: "));

// let promedio = ((notaUno + notaDos) / 2);
// alert("El Promedio del Alumno es: " + promedio);

// if(promedio == 10){
//     alert("Excelente");
// }else if (promedio >= 7 && promedio < 10){
//     alert("Aprobado");
// }else if (promedio >= 1 && promedio < 7){
//     alert("Reprobado");
// }else{
//     alert("Datos Incorrectos");
// }
// console.log("Ejemplo A: ");
// for(let i = 0 ; i < 10 ; i = i + 1){
//     console.log("Hola Mundo", i);
// };

// console.log("Ejemplo B: ");
// for(let i = 1 ; i <= 10 ; i++ ){
//     console.log(i);
// };

// console.log("Ejemplo C: ")
// for(let i = 10 ; i >= 0 ; i - 1){
//     console.log(i);
// }
// console.log("EJemplo D: ")
// for(let i = 0; i <=10; i= i +2){
//     console.log(i);
// }
// console.log("Ejemplo E: ")
// for(let i = 0 ; i <=10 ; i++){
//     if(i % 2 == 0){
//         console.log(i, "Es par")
//     }
// }
// console.log("Ejemplo Break: ")
// let passwordUsuario = prompt("Ingrese su contraseña: ");
// const passwordAutorizado = 1234;

// for(let i = 0; i < 2; i++){
//     if(passwordUsuario == passwordAutorizado){
//         console.log("Contraseña Correcta");
//         break;
//     }else {
//         passwordUsuario = prompt("Contraseña Incorrecta, Vuelva a Intentarlo");
//     }
// }
// console.log("Ejemplo F: ");
// for(let i = 0; i <=6; i++){
//     if(i % 2 == 0){
//         continue;
//     }
//     console.log(i)
// }
// alert("Ejemplo G: ");
// let nombre = prompt("Ingrese un nombre: (Para salir ingrese salir)");
// while(nombre != "salir"){
//     console.log(nombre);
//     prompt("Ingrese un nombre: (Para salir ingrese salir)");
// }
// alert("Ejemplo H: ");
// const passAutorizado = 1234;
// let passwordUsuario;
// do{
//     passwordUsuario = prompt("Ingrese su contraseña");
// }while(passwordUsuario != passAutorizado);
// let clima = prompt("Ingrese el clima de su ciudad: ");
// switch(clima){
//     case "lluvioso":
//         console.log("Mire Netflix");
//         break;
//     case "soleado":
//         console.log("Salga gil");
//         break;
//     case "nublado":
//         console.log("Saque fotos");
//         break;
//     case "frio":
//         console.log("Abriguese");
//         break;
//     default:
//         console.log("Que quiso poner?")
// }
// let valorUno = parseInt(prompt("Ingrese el primer valor"));
// let operacion = (prompt("Ingrese la Operacion a realizar (+,-,*,/)"));
// while(operacion != "+" && operacion != "-" && operacion != "*" && operacion != "/"){
//     operacion = (prompt("Ingrese la Operacion a realizar (+,-,*,/)"));
// }
// let valorDos = parseInt(prompt("Ingrese el segundo valor"));
// switch(operacion){
//     case "+":
//         console.log(valorUno + valorDos);
//         break;
//     case "-":
//         console.log(valorUno - valorDos);
//         break;
//     case "*":
//         console.log(valorUno * valorDos);
//         break;
//     case "/":
//         console.log(valorUno / valorDos);
//         break;
//     default:
//         console.log("Escriba Bien");
//         break;
// }
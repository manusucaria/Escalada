/*CARRITO*/
const Carrito = [];
/*STOCK*/
const Stock = [];
/*PRODUCTOS*/
class Producto{
    constructor(tipo, variedad, cantidad, precio){
        this.tipo = tipo;
        this.variedad = variedad;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    sixpack(){
        return ((this.precio * 0.95) * 6).toFixed(0);
    }
    twelvepack(){
        return ((this.precio * 0.93) * 12).toFixed(0);
    }
    twentyfourpack(){
        return ((this.precio * 0.91) * 24).toFixed(0);
    }
    mayorista(){
        return (this.precio * 0.85).toFixed(0);
    }
}
class Pedido{
    constructor(tipo, variedad, cantidad, precio){
        this.tipo = tipo;
        this.variedad = variedad;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}
/*LATAS*/
const lataHoney = new Producto("Lata", "Honey", 1000, 380);
const lataBlonde = new Producto("Lata", "Blonde", 1000, 380);
const lataPaleAle = new Producto("Lata", "Pale Ale", 1000, 380);
const lataDoblePale = new Producto("Lata", "Doble Pale", 1000, 390);
const lataHibiscus = new Producto("Lata", "Hibiscus", 1000, 400);
const lataFaramir = new Producto("Lata", "Faramir", 1000, 400);
/*GROWLERS*/
const growlerTradicional = new Producto("Growler", "Tradicional", 100, 580);
const growlerEstacion = new Producto("Growler", "de Estación", 100, 590);
const growlerAutor = new Producto("Growler", "de Autor", 100, 630);
const growlerEnvase = new Producto("Growler", "Solo Envase", 100, 200);
/*OTROS*/
const gorraAzul = new Producto("Gorra", "Azul", 10, 580);
const gorraGris = new Producto("Gorra", "Gris", 10, 580);
const copa = new Producto("Copa", "250ml", 10, 1290);
/*PACKS*/
/*SIX*/
const sixPackHoney = new Producto("Six Pack", "Honey", 200, lataHoney.sixpack());
const sixPackBlonde = new Producto("Six Pack", "Blonde", 200, lataBlonde.sixpack());
const sixPackPaleAle = new Producto("Six Pack", "Pale Ale", 200, lataPaleAle.sixpack());
const sixPackDoblePale = new Producto("Six Pack", "Doble Pale", 200, lataDoblePale.sixpack());
const sixPackHibiscus = new Producto("Six Pack", "Hibiscus", 200, lataHibiscus.sixpack());
const sixPackFaramir = new Producto("Six Pack", "Faramir", 200, lataFaramir.sixpack());
/*TWELVE*/
const twelvePackHoney = new Producto("Twelve Pack", "Honey", 200, lataHoney.twelvepack());
const twelvePackBlonde = new Producto("Twelve Pack", "Blonde", 200, lataBlonde.twelvepack());
const twelvePackPaleAle = new Producto("Twelve Pack", "Pale Ale", 200, lataPaleAle.twelvepack());
const twelvePackDoblePale = new Producto("Twelve Pack", "Doble Pale", 200, lataDoblePale.twelvepack());
const twelvePackHibiscus = new Producto("Twelve Pack", "Hibiscus", 200, lataHibiscus.twelvepack());
const twelvePackFaramir = new Producto("Twelve Pack", "Faramir", 200, lataFaramir.twelvepack());
/*TWENTYFOUR*/
const twentyfourPackHoney = new Producto("Twentyfour Pack", "Honey", 200, lataHoney.twentyfourpack());
const twentyfourPackBlonde = new Producto("Twentyfour Pack", "Blonde", 200, lataBlonde.twentyfourpack());
const twentyfourPackPaleAle = new Producto("Twentyfour Pack", "Pale Ale", 200, lataPaleAle.twentyfourpack());
const twentyfourPackDoblePale = new Producto("Twentyfour Pack", "Doble Pale", 200, lataDoblePale.twentyfourpack());
const twentyfourPackHibiscus = new Producto("Twentyfour Pack", "Hibiscus", 200, lataHibiscus.twentyfourpack());
const twentyfourPackFaramir = new Producto("Twentyfour Pack", "Faramir", 200, lataFaramir.twentyfourpack());

/*PUSH AL STOCK*/
Stock.push(lataHoney);
Stock.push(lataBlonde);
Stock.push(lataPaleAle);
Stock.push(lataDoblePale);
Stock.push(lataHibiscus);
Stock.push(lataFaramir);
Stock.push(growlerTradicional);
Stock.push(growlerEstacion);
Stock.push(growlerAutor);
Stock.push(growlerEnvase);
Stock.push(gorraAzul);
Stock.push(gorraGris);
Stock.push(copa);
Stock.push(sixPackHoney);
Stock.push(sixPackBlonde);
Stock.push(sixPackPaleAle);
Stock.push(sixPackDoblePale);
Stock.push(sixPackHibiscus);
Stock.push(sixPackFaramir);
Stock.push(twelvePackHoney);
Stock.push(twelvePackBlonde);
Stock.push(twelvePackPaleAle);
Stock.push(twelvePackDoblePale);
Stock.push(twelvePackHibiscus);
Stock.push(twelvePackFaramir);
Stock.push(twentyfourPackHoney);
Stock.push(twentyfourPackBlonde);
Stock.push(twentyfourPackPaleAle);
Stock.push(twentyfourPackDoblePale);
Stock.push(twentyfourPackHibiscus);
Stock.push(twentyfourPackFaramir);
/*DOM*/
/*TIENDA*/
/*LATA BLONDE*/
const nombreBlonde = document.getElementById("nombreBlonde");
nombreBlonde.innerText = `${lataBlonde.tipo} ${lataBlonde.variedad}`;
const precioBlonde = document.getElementById("precioBlonde");
precioBlonde.innerText = `$${lataBlonde.precio}`;
/*LATA HONEY*/
const nombreHoney = document.getElementById("nombreHoney");
nombreHoney.innerText = `${lataHoney.tipo} ${lataHoney.variedad}`;
const precioHoney = document.getElementById("precioHoney");
precioHoney.innerText = `$${lataHoney.precio}`;
/*LATA PALE ALE*/
const nombreAle = document.getElementById("nombreAle");
nombreAle.innerText = `${lataPaleAle.tipo} ${lataPaleAle.variedad}`;
const precioAle = document.getElementById("precioAle");
precioAle.innerText = `$${lataPaleAle.precio}`;
/*LATA Dole Pale*/
const nombreDoble = document.getElementById("nombreDoble");
nombreDoble.innerText = `${lataDoblePale.tipo} ${lataDoblePale.variedad}`;
const precioDoble = document.getElementById("precioDoble");
precioDoble.innerText = `$${lataDoblePale.precio}`;
/*LATA HIBISCUS*/
const nombreHibiscus = document.getElementById("nombreHibiscus");
nombreHibiscus.innerText = `${lataHibiscus.tipo} ${lataHibiscus.variedad}`;
const precioHibiscus = document.getElementById("precioHibiscus");
precioHibiscus.innerText = `$${lataHibiscus.precio}`;
/*LATA FARAMIR*/
const nombreFaramir = document.getElementById("nombreFaramir");
nombreFaramir.innerText = `${lataFaramir.tipo} ${lataFaramir.variedad}`;
const precioFaramir = document.getElementById("precioFaramir");
precioFaramir.innerText = `$${lataFaramir.precio}`;
/*GROWLER TRADICIONAL*/
const nombreGrowlerTradicional = document.getElementById("nombreGrowlerTradicional");
nombreGrowlerTradicional.innerText = `${growlerTradicional.tipo} ${growlerTradicional.variedad}`;
const precioGrowlerTradicional = document.getElementById("precioGrowlerTradicional");
precioGrowlerTradicional.innerText = `$${growlerTradicional.precio}`;
/*GROWLER ESTACION*/
const nombreGrowlerEstacion = document.getElementById("nombreGrowlerEstacion");
nombreGrowlerEstacion.innerText = `${growlerEstacion.tipo} ${growlerEstacion.variedad}`;
const precioGrowlerEstacion = document.getElementById("precioGrowlerEstacion");
precioGrowlerEstacion.innerText = `$${growlerEstacion.precio}`;
/*GROWLER AUTOR*/
const nombreGrowlerAutor = document.getElementById("nombreGrowlerAutor");
nombreGrowlerAutor.innerText = `${growlerAutor.tipo} ${growlerAutor.variedad}`;
const precioGrowlerAutor = document.getElementById("precioGrowlerAutor");
precioGrowlerAutor.innerText = `$${growlerAutor.precio}`;
/*GROWLER ENVASE*/
const nombreGrowlerEnvase = document.getElementById("nombreGrowlerEnvase");
nombreGrowlerEnvase.innerText = `${growlerEnvase.tipo} ${growlerEnvase.variedad}`;
const precioGrowlerEnvase = document.getElementById("precioGrowlerEnvase");
precioGrowlerEnvase.innerText = `$${growlerEnvase.precio}`;
/*SIX PACK HONEY*/
const nombreSixTrad = document.getElementById("nombreSixTrad");
nombreSixTrad.innerText = `${sixPackHoney.tipo} ${sixPackHoney.variedad}`;
const precioSixTrad = document.getElementById("precioSixTrad");
precioSixTrad.innerText = `$${sixPackHoney.precio}`;
/*SIX PACK FARAMIR*/
const nombreSixAutor = document.getElementById("nombreSixAutor");
nombreSixAutor.innerText = `${sixPackHibiscus.tipo} ${sixPackHibiscus.variedad}`;
const precioSixAutor = document.getElementById("precioSixAutor");
precioSixAutor.innerText = `$${sixPackHibiscus.precio}`;
/*12 PACK HONEY*/
const nombre12Trad = document.getElementById("nombre12Trad");
nombre12Trad.innerText = `${twelvePackHoney.tipo} ${twelvePackHoney.variedad}`;
const precio12Trad = document.getElementById("precio12Trad");
precio12Trad.innerText = `$${twelvePackHoney.precio}`;
/*12 PACK FARAMIR*/
const nombre12Autor = document.getElementById("nombre12Autor");
nombre12Autor.innerText = `${twelvePackHibiscus.tipo} ${twelvePackHibiscus.variedad}`;
const precio12Autor = document.getElementById("precio12Autor");
precio12Autor.innerText = `$${twelvePackHibiscus.precio}`;
/*24 PACK HONEY*/
const nombre24Trad = document.getElementById("nombre24Trad");
nombre24Trad.innerText = `${twentyfourPackHoney.tipo} ${twentyfourPackHoney.variedad}`;
const precio24Trad = document.getElementById("precio24Trad");
precio24Trad.innerText = `$${twentyfourPackHoney.precio}`;
/*24 PACK FARAMIR*/
const nombre24Autor = document.getElementById("nombre24Autor");
nombre24Autor.innerText = `${twentyfourPackHibiscus.tipo} ${twentyfourPackHibiscus.variedad}`;
const precio24Autor = document.getElementById("precio24Autor");
precio24Autor.innerText = `$${twentyfourPackHibiscus.precio}`;
/*GORRA AZUL*/
const nombreGorraAzul = document.getElementById("nombreGorraAzul");
nombreGorraAzul.innerText = `${gorraAzul.tipo} ${gorraAzul.variedad}`;
const precioGorraAzul = document.getElementById("precioGorraAzul");
precioGorraAzul.innerText = `$${gorraAzul.precio}`;
/*GORRA GRIS*/
const nombreGorraGris = document.getElementById("nombreGorraGris");
nombreGorraGris.innerText = `${gorraGris.tipo} ${gorraGris.variedad}`;
const precioGorraGris = document.getElementById("precioGorraGris");
precioGorraGris.innerText = `$${gorraGris.precio}`;
/*COPA*/
const nombreCopa = document.getElementById("nombreCopa");
nombreCopa.innerText = `${copa.tipo} ${copa.variedad}`;
const precioCopa = document.getElementById("precioCopa");
precioCopa.innerText = `$${copa.precio}`;

// /*MENU*/
// function menu(){
//     alert("Bienvenido a Escalada Pedidos Online");
//     let opcion = parseInt(prompt("Ingrese en que producto está interesado: \n 1) LATAS DE CERVEZA \n 2) GROWLERS \n 3) GORRAS \n 4) COPAS \n 5) SALIR"));
//     return opcion;
// }
// function latas(){
//     let variedad = parseInt(prompt("Indique la variedad de lata a elegir entre: \n 1) Honey \n 2) Blonde \n 3) Pale Ale \n 4) Doble Pale \n 5) Hibiscus \n 6) Faramir:"));
//     return variedad;
// }
// function growlers(){
//     let variedad = parseInt(prompt("Indique la variedad de Cerveza en Growler a elegir entre: \n 1) Tradicional \n 2) Estacion \n 3) Autor \n 4) Envase"));
//     return variedad;
// }
// function gorras(){
//     let variedad = parseInt(prompt("Elija color entre: \n 1) Azul \n 2) Gris"));
//     return variedad;
// }
// function salir(){
//     alert("Gracias por Elegirnos!")
// }
// let opciones = menu();
// switch (opciones) {
//     case 1:
//         let variedad1 = latas();
//         switch (variedad1){
//             case 1:
//                 let cantidad1;
//                 do{cantidad1 = parseInt(prompt("Indique cuantas Unidades quiere entre 0 y " + lataHoney.cantidad));
//                 }while (cantidad1 >= lataHoney.cantidad + 1);
//                 let pedidolata1 = new Pedido(lataHoney.tipo, "Honey", cantidad1, lataHoney.precio * cantidad1);
//                 Carrito.push(pedidolata1);
//                 const buscarHoney = Carrito.find(producto => producto.variedad === "Honey");
//                 lataHoney.cantidad = lataHoney.cantidad - buscarHoney.cantidad;
//                 alert("Ud ha seleccionado " + pedidolata1.cantidad + " " + pedidolata1.tipo + "/s de " + pedidolata1.variedad + " por Un Valor Total de $" + pedidolata1.precio);
//                 break;
//             case 2:
//                 let cantidad2;
//                 do{cantidad2 = parseInt(prompt("Indique cuantas Unidades quiere entre 0 y " + lataBlonde.cantidad));
//                 }while (cantidad2 >= lataBlonde.cantidad + 1);
//                 let pedidolata2 = new Pedido(lataBlonde.tipo, "Blonde", cantidad2, lataBlonde.precio * cantidad2);
//                 Carrito.push(pedidolata2);
//                 const buscarBlonde = Carrito.find(producto => producto.variedad === "Blonde");
//                 lataBlonde.cantidad = lataBlonde.cantidad - buscarBlonde.cantidad;
//                 alert("Ud ha seleccionado " + pedidolata2.cantidad + " " + pedidolata2.tipo + "/s de " + pedidolata2.variedad + " por Un Valor Total de $" + pedidolata2.precio);
//                 break;
//             case 3:
//                 let cantidad3;
//                 do{cantidad3 = parseInt(prompt("Indique cuantas Unidades quiere entre 0 y " + lataPaleAle.cantidad));
//                 }while (cantidad3 >= lataPaleAle.cantidad + 1);
//                 let pedidolata3 = new Pedido(lataPaleAle.tipo, "Pale Ale", cantidad3, lataPaleAle.precio * cantidad3);
//                 Carrito.push(pedidolata3);
//                 const buscarPaleAle = Carrito.find(producto => producto.variedad === "Pale Ale");
//                 lataPaleAle.cantidad = lataPaleAle.cantidad - buscarPaleAle.cantidad;
//                 alert("Ud ha seleccionado " + pedidolata3.cantidad + " " + pedidolata3.tipo + "/s de " + pedidolata3.variedad + " por Un Valor Total de $" + pedidolata3.precio);
//                 break;
//             case 4:
//                 let cantidad4;
//                 do{cantidad4 = parseInt(prompt("Indique cuantas Unidades quiere entre 0 y " + lataDoblePale.cantidad));
//                 }while (cantidad4 >= lataDoblePale.cantidad + 1);
//                 let pedidolata4 = new Pedido(lataDoblePale.tipo, "Doble Pale", cantidad4, lataDoblePale.precio * cantidad4);
//                 Carrito.push(pedidolata4);
//                 const buscarDoblePale = Carrito.find(producto => producto.variedad === "Doble Pale");
//                 lataDoblePale.cantidad = lataDoblePale.cantidad - buscarDoblePale.cantidad;
//                 alert("Ud ha seleccionado " + pedidolata4.cantidad + " " + pedidolata4.tipo + "/s de " + pedidolata4.variedad + " por Un Valor Total de $" + pedidolata4.precio);
//                 break;
//             case 5:
//                 let cantidad5;
//                 do{cantidad5 = parseInt(prompt("Indique cuantas Unidades quiere entre 0 y " + lataHibiscus.cantidad));
//                 }while (cantidad5 >= lataHibiscus.cantidad + 1);
//                 let pedidolata5 = new Pedido(lataHibiscus.tipo, "Hibiscus", cantidad5, lataHibiscus.precio * cantidad5);
//                 Carrito.push(pedidolata5);
//                 const buscarHibiscus = Carrito.find(producto => producto.variedad === "Hibiscus");
//                 lataHibiscus.cantidad = lataHibiscus.cantidad - buscarHibiscus.cantidad;
//                 alert("Ud ha seleccionado " + pedidolata5.cantidad + " " + pedidolata5.tipo + "/s de " + pedidolata5.variedad + " por Un Valor Total de $" + pedidolata5.precio);
//                 break;
//             case 6:
//                 let cantidad6;
//                 do{cantidad6 = parseInt(prompt("Indique cuantas Unidades quiere entre 0 y " + lataFaramir.cantidad));
//                 }while (cantidad6 >= lataFaramir.cantidad + 1);
//                 let pedidolata6 = new Pedido(lataFaramir.tipo, "Faramir", cantidad6, lataFaramir.precio * cantidad6);
//                 Carrito.push(pedidolata6);
//                 const buscarFaramir = Carrito.find(producto => producto.variedad === "Faramir");
//                 lataFaramir.cantidad = lataFaramir.cantidad - buscarFaramir.cantidad;
//                 alert("Ud ha seleccionado " + pedidolata6.cantidad + " " + pedidolata6.tipo + "/s de " + pedidolata6.variedad + " por Un Valor Total de $" + pedidolata6.precio);
//                 break;
//         }
//         break;
//     case 2:
//         let variedad2 = growlers();
//         switch (variedad2){
//             case 1:
//                 let variedad1 = prompt("Indique que variedad quiere entre Honey, Blonde:")
//                 let cantidadGrowler1;
//                 do{cantidadGrowler1 = parseInt(prompt("Indique cuantas Unidades quiere entre 0 y " + growlerTradicional.cantidad));
//                 }while (cantidadGrowler1 >= growlerTradicional.cantidad + 1);
//                 let pedidogrowler1 = new Pedido(growlerTradicional.tipo, variedad1, cantidadGrowler1, growlerTradicional.precio * cantidadGrowler1);
//                 Carrito.push(pedidogrowler1);
//                 alert("Ud ha seleccionado " + pedidogrowler1.cantidad + " " + pedidogrowler1.tipo + "/s de tipo " + pedidogrowler1.variedad + " por Un Valor Total de $" + pedidogrowler1.precio);
//                 break;
//             case 2:
//                 let variedad2 = prompt("Indique que variedad quiere entre Pale y Doble Pale:")
//                 let cantidadGrowler2;
//                 do{cantidadGrowler2 = parseInt(prompt("Indique cuantas Unidades quiere entre 0 y " + growlerEstacion.cantidad));
//                 }while (cantidadGrowler2 >= growlerEstacion.cantidad + 1);
//                 let pedidogrowler2 = new Pedido(growlerEstacion.tipo, variedad2, cantidadGrowler2, growlerEstacion.precio * cantidadGrowler2);
//                 Carrito.push(pedidogrowler2);
//                 alert("Ud ha seleccionado " + pedidogrowler2.cantidad + " " + pedidogrowler2.tipo + "/s de tipo " + pedidogrowler2.variedad + " por Un Valor Total de $" + pedidogrowler2.precio);
//                 break;
//             case 3:
//                 let variedad3 = prompt("Indique que variedad quiere entre Hibiscus y Faramir:")
//                 let cantidadGrowler3;
//                 do{cantidadGrowler3 = parseInt(prompt("Indique cuantas Unidades quiere entre 0 y " + growlerAutor.cantidad));
//                 }while (cantidadGrowler3 >= growlerAutor.cantidad + 1);
//                 let pedidogrowler3 = new Pedido(growlerAutor.tipo, variedad3, cantidadGrowler3, growlerAutor.precio * cantidadGrowler3);
//                 Carrito.push(pedidogrowler3);
//                 alert("Ud ha seleccionado " + pedidogrowler3.cantidad + " " + pedidogrowler3.tipo + "/s de tipo " + pedidogrowler3.variedad + " por Un Valor Total de $" + pedidogrowler3.precio);
//                 break;
//             case 4:
//                 let cantidadGrowler4;
//                 do{cantidadGrowler4 = parseInt(prompt("Indique cuantas Unidades quiere entre 0 y " + growlerEnvase.cantidad));
//                 }while (cantidadGrowler4 >= growlerEnvase.cantidad + 1);
//                 let pedidogrowler4 = new Pedido(growlerEnvase.tipo, growlerEnvase.variedad, cantidadGrowler4, growlerEnvase.precio * cantidadGrowler4);
//                 Carrito.push(pedidogrowler4);
//                 alert("Ud ha seleccionado " + pedidogrowler4.cantidad + " Envase/s de " + pedidogrowler4.tipo + "/s por Un Valor Total de $" + pedidogrowler4.precio);
//                 break;
//         }
//         break;
//     case 3:
//         let variedad3 = gorras();
//         switch (variedad3){
//             case 1:
//                 let cantidad1;
//                 do{cantidad1 = parseInt(prompt("Indique cuantas Unidades quiere entre 0 y " + gorraAzul.cantidad));
//                 }while (cantidad1 >= gorraAzul.cantidad + 1);
//                 let pedidogorra1 = new Pedido(gorraAzul.tipo, "Azul", cantidad1, gorraAzul.precio * cantidad1);
//                 Carrito.push(pedidogorra1);
//                 const buscarAzul = Carrito.find(producto => producto.variedad === "Azul");
//                 gorraAzul.cantidad = gorraAzul.cantidad - buscarAzul.cantidad;
//                 alert("Ud ha seleccionado " + pedidogorra1.cantidad + " " + pedidogorra1.tipo + "/s " + pedidogorra1.variedad + "/es por Un Valor Total de $" + pedidogorra1.precio);
//                 break;
//             case 2:
//                 let cantidad2;
//                 do{cantidad2 = parseInt(prompt("Indique cuantas Unidades quiere entre 0 y " + gorraGris.cantidad));
//                 }while (cantidad2 >= gorraGris.cantidad + 1);
//                 let pedidogorra2 = new Pedido(gorraGris.tipo, "Gris", cantidad2, gorraGris.precio * cantidad2);
//                 Carrito.push(pedidogorra2);
//                 const buscarGris = Carrito.find(producto => producto.variedad === "Gris");
//                 gorraGris.cantidad = gorraGris.cantidad - buscarGris.cantidad;
//                 alert("Ud ha seleccionado " + pedidogorra2.cantidad + " " + pedidogorra2.tipo + "/s " + pedidogorra2.variedad + "/es por Un Valor Total de $" + pedidogorra2.precio);
//                 break;
//             }
//         break;
//     case 4:
//         let cantidad;
//         do{cantidad = parseInt(prompt("Indique cuantas Unidades quiere entre 0 y " + copa.cantidad));
//         }while (cantidad >= copa.cantidad + 1);
//         let pedidocopa = new Pedido(copa.tipo, copa.variedad, cantidad, copa.precio * cantidad);
//         Carrito.push(pedidocopa);
//         const buscarCopa = Carrito.find(producto => producto.tipo === "Copa");
//         copa.cantidad = copa.cantidad - buscarCopa.cantidad;
//         alert("Ud ha seleccionado " + pedidocopa.cantidad + " " + pedidocopa.tipo + "/s de " + pedidocopa.variedad + " por Un Valor Total de $" + pedidocopa.precio);
//         break;
//     case 5:
//         salir();
//         break;
// }
// /*MENU PARTE 2*/
// function compra(){
//     let opciones = parseInt(prompt("Elija una de las Siguientes Opciones: \n 1) FINALIZAR LA COMPRA \n 2) ELIMINAR ITEMS \n 3) VACIAR CARRITO \n 4) SALIR"));
//     return opciones;
// }
// function finalizar(){
//     alert("Gracias en Breve le Estará llegando su Pedido");
// }
// function eliminar(){
//     let eliminar = prompt("Ingrese La Variedad del producto:");
//     let cancelacion = Carrito.find(Pedido => Pedido.variedad === eliminar);
//     let indice = Carrito.indexOf(cancelacion);
//     Carrito.splice(indice, 1);
//     alert("Su pedido ha sido eliminado")
// }
// function vaciarCarrito(){
//     Carrito.splice(0,100);
//     return Carrito;
// }
// function salir(){
//     alert("Vuelva Pronto!")
// }
// let final = compra();
// switch (final){
//     case 1:
//         finalizar();
//         break;
//     case 2:
//         eliminar();
//         break;
//     case 3:
//         vaciarCarrito();
//         break;
//     case 4:
//         salir();
//         break;
// }
// /*CIERRE MENU*/
// Carrito.forEach(pedido => console.log(pedido))
// Stock.forEach(pedido => console.log(pedido))
// /*CALCULAR TOTAL CARRITO*/
// let totalCarrito = Carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
// console.log("El Total de su compra es de: $" + totalCarrito);


// //DOM
// const tituloPrincipal = document.getElementById("tituloPrincipal");
// const nombres = document.getElementsByClassName("nombres");
// const meses = document.getElementsByTagName("li");
// const queryNombres = document.querySelector(".nombres");

// tituloPrincipal.innerText = "Modificamos el texto desde JS";
// tituloPrincipal.innerHTML = `<p>Parrafo</p>`;
// tituloPrincipal.className = "titulo";

// const contenedor = document.getElementById("contenedor");
// const parrafo = document.createElement("p");
// parrafo.innerText = "Pepito";
// parrafo.className = "titulo";
// contenedor.appendChild(parrafo);
// parrafo.remove();

// const arrayPersonas = ["Juan", "Maria", "Pedro", "Ana", "Pepelepu"];
// const listaPersonas = document.getElementById("listaPersonas");
// for(let persona of arrayPersonas){
//     let itemLista = document.createElement("li");
//     itemLista.innerText = persona;
//     listaPersonas.appendChild(itemLista);
// }

// class Producto{
//     constructor(nombre, precio){
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// const yerba = new Producto("Yerba", 360);
// const harina = new Producto("Harina", 180);
// const pan = new Producto("Pan", 200);
// const leche = new Producto("Leche", 150);

// const arrayProductos = [yerba, harina, pan, leche];

// const contenedorProductos = document.getElementById("contenedorProductos");

// arrayProductos.forEach(producto => {
//     let div = document.createElement("div");
//     div.innerHTML = `<p> ${producto.nombre} </p>
//                     <p> Precio: ${producto.precio} </p>
//                     <button> Agregar al Carrito </button>`;
//     contenedorProductos.appendChild(div);
// })


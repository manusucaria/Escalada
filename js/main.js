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
/*SUMADOR DE CANTIDAD*/
let total1 = document.getElementById('cantidad1');
function sumar1 () {
    let valorTotal1 = parseInt(total1.innerHTML);
    total1.innerHTML = valorTotal1 + 1;
}
function restar1 () {
    let valorTotal1 = parseInt(total1.innerHTML);
    if (valorTotal1 == 1) return;
    total1.innerHTML = valorTotal1 - 1;
}
document.getElementById('sumar1').addEventListener('click', sumar1);
document.getElementById('restar1').addEventListener('click', restar1);
function agregarAlCarrito1 () {
    let pedidoLata1 = new Pedido(lataBlonde.tipo, lataBlonde.variedad, total1.innerHTML, lataBlonde.precio * total1.innerHTML);
    Carrito.push(pedidoLata1);
    const buscarBlonde = Carrito.find(producto => producto.variedad === "Blonde");
    lataBlonde.cantidad = lataBlonde.cantidad - buscarBlonde.cantidad;
}
document.getElementById('botonBlonde').addEventListener('click', agregarAlCarrito1);
console.log(Carrito);

/*LATA HONEY*/
const nombreHoney = document.getElementById("nombreHoney");
nombreHoney.innerText = `${lataHoney.tipo} ${lataHoney.variedad}`;
const precioHoney = document.getElementById("precioHoney");
precioHoney.innerText = `$${lataHoney.precio}`;
const botonHoney = document.getElementById("botonHoney");
/*SUMADOR DE CANTIDAD*/
let total2 = document.getElementById('cantidad2');
function sumar2 () {
    let valorTotal2 = parseInt(total2.innerHTML);
    total2.innerHTML = valorTotal2 + 1;
}
function restar2 () {
    let valorTotal2 = parseInt(total2.innerHTML);
    if (valorTotal2 == 1) return;
    total2.innerHTML = valorTotal2 - 1;
}
document.getElementById('sumar2').addEventListener('click', sumar2);
document.getElementById('restar2').addEventListener('click', restar2);

/*LATA PALE ALE*/
const nombreAle = document.getElementById("nombreAle");
nombreAle.innerText = `${lataPaleAle.tipo} ${lataPaleAle.variedad}`;
const precioAle = document.getElementById("precioAle");
precioAle.innerText = `$${lataPaleAle.precio}`;
const botonPaleAle = document.getElementById("botonPaleAle");
/*SUMADOR DE CANTIDAD*/
let total3 = document.getElementById('cantidad3');
function sumar3 () {
    let valorTotal3 = parseInt(total3.innerHTML);
    total3.innerHTML = valorTotal3 + 1;
}
function restar3 () {
    let valorTotal3 = parseInt(total3.innerHTML);
    if (valorTotal3 == 1) return;
    total3.innerHTML = valorTotal3 - 1;
}
document.getElementById('sumar3').addEventListener('click', sumar3);
document.getElementById('restar3').addEventListener('click', restar3);

/*LATA Dole Pale*/
const nombreDoble = document.getElementById("nombreDoble");
nombreDoble.innerText = `${lataDoblePale.tipo} ${lataDoblePale.variedad}`;
const precioDoble = document.getElementById("precioDoble");
precioDoble.innerText = `$${lataDoblePale.precio}`;
const botonDoblePale = document.getElementById("botonDoblePale");
/*SUMADOR DE CANTIDAD*/
let total4 = document.getElementById('cantidad4');
function sumar4 () {
    let valorTotal4 = parseInt(total4.innerHTML);
    total4.innerHTML = valorTotal4 + 1;
}
function restar4 () {
    let valorTotal4 = parseInt(total4.innerHTML);
    if (valorTotal4 == 1) return;
    total4.innerHTML = valorTotal4 - 1;
}
document.getElementById('sumar4').addEventListener('click', sumar4);
document.getElementById('restar4').addEventListener('click', restar4);

/*LATA HIBISCUS*/
const nombreHibiscus = document.getElementById("nombreHibiscus");
nombreHibiscus.innerText = `${lataHibiscus.tipo} ${lataHibiscus.variedad}`;
const precioHibiscus = document.getElementById("precioHibiscus");
precioHibiscus.innerText = `$${lataHibiscus.precio}`;
const botonHibiscus = document.getElementById("botonHibiscus");
/*SUMADOR DE CANTIDAD*/
let total5 = document.getElementById('cantidad5');
function sumar5 () {
    let valorTotal5 = parseInt(total5.innerHTML);
    total5.innerHTML = valorTotal5 + 1;
}
function restar5 () {
    let valorTotal5 = parseInt(total5.innerHTML);
    if (valorTotal5 == 1) return;
    total5.innerHTML = valorTotal5 - 1;
}
document.getElementById('sumar5').addEventListener('click', sumar5);
document.getElementById('restar5').addEventListener('click', restar5);

/*LATA FARAMIR*/
const nombreFaramir = document.getElementById("nombreFaramir");
nombreFaramir.innerText = `${lataFaramir.tipo} ${lataFaramir.variedad}`;
const precioFaramir = document.getElementById("precioFaramir");
precioFaramir.innerText = `$${lataFaramir.precio}`;
const botonFaramir = document.getElementById("botonFaramir");
/*SUMADOR DE CANTIDAD*/
let total6 = document.getElementById('cantidad6');
function sumar6 () {
    let valorTotal6 = parseInt(total6.innerHTML);
    total6.innerHTML = valorTotal6 + 1;
}
function restar6 () {
    let valorTotal6 = parseInt(total6.innerHTML);
    if (valorTotal6 == 1) return;
    total6.innerHTML = valorTotal6 - 1;
}
document.getElementById('sumar6').addEventListener('click', sumar6);
document.getElementById('restar6').addEventListener('click', restar6);

/*GROWLER TRADICIONAL*/
const nombreGrowlerTradicional = document.getElementById("nombreGrowlerTradicional");
nombreGrowlerTradicional.innerText = `${growlerTradicional.tipo} ${growlerTradicional.variedad}`;
const precioGrowlerTradicional = document.getElementById("precioGrowlerTradicional");
precioGrowlerTradicional.innerText = `$${growlerTradicional.precio}`;
const botonGrowlerTrad = document.getElementById("botonGrowlerTrad");
/*SUMADOR DE CANTIDAD*/
let total7 = document.getElementById('cantidad7');
function sumar7 () {
    let valorTotal7 = parseInt(total7.innerHTML);
    total7.innerHTML = valorTotal7 + 1;
}
function restar7 () {
    let valorTotal7 = parseInt(total7.innerHTML);
    if (valorTotal7 == 1) return;
    total7.innerHTML = valorTotal7 - 1;
}
document.getElementById('sumar7').addEventListener('click', sumar7);
document.getElementById('restar7').addEventListener('click', restar7);

/*GROWLER ESTACION*/
const nombreGrowlerEstacion = document.getElementById("nombreGrowlerEstacion");
nombreGrowlerEstacion.innerText = `${growlerEstacion.tipo} ${growlerEstacion.variedad}`;
const precioGrowlerEstacion = document.getElementById("precioGrowlerEstacion");
precioGrowlerEstacion.innerText = `$${growlerEstacion.precio}`;
const botonGrowlerEst = document.getElementById("botonGrowlerEst");
/*SUMADOR DE CANTIDAD*/
let total8 = document.getElementById('cantidad8');
function sumar8 () {
    let valorTotal8 = parseInt(total8.innerHTML);
    total8.innerHTML = valorTotal8 + 1;
}
function restar8 () {
    let valorTotal8 = parseInt(total8.innerHTML);
    if (valorTotal8 == 1) return;
    total8.innerHTML = valorTotal8 - 1;
}
document.getElementById('sumar8').addEventListener('click', sumar8);
document.getElementById('restar8').addEventListener('click', restar8);

/*GROWLER AUTOR*/
const nombreGrowlerAutor = document.getElementById("nombreGrowlerAutor");
nombreGrowlerAutor.innerText = `${growlerAutor.tipo} ${growlerAutor.variedad}`;
const precioGrowlerAutor = document.getElementById("precioGrowlerAutor");
precioGrowlerAutor.innerText = `$${growlerAutor.precio}`;
const botonGrowlerAut = document.getElementById("botonGrowlerAut");
/*SUMADOR DE CANTIDAD*/
let total9 = document.getElementById('cantidad9');
function sumar9 () {
    let valorTotal9 = parseInt(total9.innerHTML);
    total9.innerHTML = valorTotal9 + 1;
}
function restar9 () {
    let valorTotal9 = parseInt(total9.innerHTML);
    if (valorTotal9 == 1) return;
    total9.innerHTML = valorTotal9 - 1;
}
document.getElementById('sumar9').addEventListener('click', sumar9);
document.getElementById('restar9').addEventListener('click', restar9);

/*GROWLER ENVASE*/
const nombreGrowlerEnvase = document.getElementById("nombreGrowlerEnvase");
nombreGrowlerEnvase.innerText = `${growlerEnvase.tipo} ${growlerEnvase.variedad}`;
const precioGrowlerEnvase = document.getElementById("precioGrowlerEnvase");
precioGrowlerEnvase.innerText = `$${growlerEnvase.precio}`;
const botonGrowlerEnvase = document.getElementById("botonGrowlerEnvase");
/*SUMADOR DE CANTIDAD*/
let total10 = document.getElementById('cantidad10');
function sumar10 () {
    let valorTotal10 = parseInt(total10.innerHTML);
    total10.innerHTML = valorTotal10 + 1;
}
function restar10 () {
    let valorTotal10 = parseInt(total10.innerHTML);
    if (valorTotal10 == 1) return;
    total10.innerHTML = valorTotal10 - 1;
}
document.getElementById('sumar10').addEventListener('click', sumar10);
document.getElementById('restar10').addEventListener('click', restar10);

/*SIX PACK HONEY*/
const nombreSixTrad = document.getElementById("nombreSixTrad");
nombreSixTrad.innerText = `${sixPackHoney.tipo} ${sixPackHoney.variedad}`;
const precioSixTrad = document.getElementById("precioSixTrad");
precioSixTrad.innerText = `$${sixPackHoney.precio}`;
const botonSixPackTrad = document.getElementById("botonSixPackTrad");
/*SUMADOR DE CANTIDAD*/
let total11 = document.getElementById('cantidad11');
function sumar11 () {
    let valorTotal11 = parseInt(total11.innerHTML);
    total11.innerHTML = valorTotal11 + 1;
}
function restar11 () {
    let valorTotal11 = parseInt(total11.innerHTML);
    if (valorTotal11 == 1) return;
    total11.innerHTML = valorTotal11 - 1;
}
document.getElementById('sumar11').addEventListener('click', sumar11);
document.getElementById('restar11').addEventListener('click', restar11);

/*SIX PACK FARAMIR*/
const nombreSixAutor = document.getElementById("nombreSixAutor");
nombreSixAutor.innerText = `${sixPackHibiscus.tipo} ${sixPackHibiscus.variedad}`;
const precioSixAutor = document.getElementById("precioSixAutor");
precioSixAutor.innerText = `$${sixPackHibiscus.precio}`;
const botonSixPackAut = document.getElementById("botonSixPackAut");
/*SUMADOR DE CANTIDAD*/
let total12 = document.getElementById('cantidad12');
function sumar12 () {
    let valorTotal12 = parseInt(total12.innerHTML);
    total12.innerHTML = valorTotal12 + 1;
}
function restar12 () {
    let valorTotal12 = parseInt(total12.innerHTML);
    if (valorTotal12 == 1) return;
    total12.innerHTML = valorTotal12 - 1;
}
document.getElementById('sumar12').addEventListener('click', sumar12);
document.getElementById('restar12').addEventListener('click', restar12);

/*12 PACK HONEY*/
const nombre12Trad = document.getElementById("nombre12Trad");
nombre12Trad.innerText = `${twelvePackHoney.tipo} ${twelvePackHoney.variedad}`;
const precio12Trad = document.getElementById("precio12Trad");
precio12Trad.innerText = `$${twelvePackHoney.precio}`;
const boton12PackTrad = document.getElementById("boton12PackTrad");
/*SUMADOR DE CANTIDAD*/
let total13 = document.getElementById('cantidad13');
function sumar13 () {
    let valorTotal13 = parseInt(total13.innerHTML);
    total13.innerHTML = valorTotal13 + 1;
}
function restar13 () {
    let valorTotal13 = parseInt(total13.innerHTML);
    if (valorTotal13 == 1) return;
    total13.innerHTML = valorTotal13 - 1;
}
document.getElementById('sumar13').addEventListener('click', sumar13);
document.getElementById('restar13').addEventListener('click', restar13);

/*12 PACK FARAMIR*/
const nombre12Autor = document.getElementById("nombre12Autor");
nombre12Autor.innerText = `${twelvePackHibiscus.tipo} ${twelvePackHibiscus.variedad}`;
const precio12Autor = document.getElementById("precio12Autor");
precio12Autor.innerText = `$${twelvePackHibiscus.precio}`;
const boton12PackAut = document.getElementById("boton12PackAut");
/*SUMADOR DE CANTIDAD*/
let total14 = document.getElementById('cantidad14');
function sumar14 () {
    let valorTotal14 = parseInt(total14.innerHTML);
    total14.innerHTML = valorTotal14 + 1;
}
function restar14 () {
    let valorTotal14 = parseInt(total14.innerHTML);
    if (valorTotal14 == 1) return;
    total14.innerHTML = valorTotal14 - 1;
}
document.getElementById('sumar14').addEventListener('click', sumar14);
document.getElementById('restar14').addEventListener('click', restar14);

/*24 PACK HONEY*/
const nombre24Trad = document.getElementById("nombre24Trad");
nombre24Trad.innerText = `${twentyfourPackHoney.tipo} ${twentyfourPackHoney.variedad}`;
const precio24Trad = document.getElementById("precio24Trad");
precio24Trad.innerText = `$${twentyfourPackHoney.precio}`;
const boton24PackTrad = document.getElementById("boton24PackTrad");
/*SUMADOR DE CANTIDAD*/
let total15 = document.getElementById('cantidad15');
function sumar15 () {
    let valorTotal15 = parseInt(total15.innerHTML);
    total15.innerHTML = valorTotal15 + 1;
}
function restar15 () {
    let valorTotal15 = parseInt(total15.innerHTML);
    if (valorTotal15 == 1) return;
    total15.innerHTML = valorTotal15 - 1;
}
document.getElementById('sumar15').addEventListener('click', sumar15);
document.getElementById('restar15').addEventListener('click', restar15);

/*24 PACK FARAMIR*/
const nombre24Autor = document.getElementById("nombre24Autor");
nombre24Autor.innerText = `${twentyfourPackHibiscus.tipo} ${twentyfourPackHibiscus.variedad}`;
const precio24Autor = document.getElementById("precio24Autor");
precio24Autor.innerText = `$${twentyfourPackHibiscus.precio}`;
const boton24PackAut = document.getElementById("boton24PackAut");
/*SUMADOR DE CANTIDAD*/
let total16 = document.getElementById('cantidad16');
function sumar16 () {
    let valorTotal16 = parseInt(total16.innerHTML);
    total16.innerHTML = valorTotal16 + 1;
}
function restar16 () {
    let valorTotal16 = parseInt(total16.innerHTML);
    if (valorTotal16 == 1) return;
    total16.innerHTML = valorTotal16 - 1;
}
document.getElementById('sumar16').addEventListener('click', sumar16);
document.getElementById('restar16').addEventListener('click', restar16);

/*GORRA AZUL*/
const nombreGorraAzul = document.getElementById("nombreGorraAzul");
nombreGorraAzul.innerText = `${gorraAzul.tipo} ${gorraAzul.variedad}`;
const precioGorraAzul = document.getElementById("precioGorraAzul");
precioGorraAzul.innerText = `$${gorraAzul.precio}`;
const botonGorraAzul = document.getElementById("botonGorraAzul");
/*SUMADOR DE CANTIDAD*/
let total17 = document.getElementById('cantidad17');
function sumar17 () {
    let valorTotal17 = parseInt(total17.innerHTML);
    total17.innerHTML = valorTotal17 + 1;
}
function restar17 () {
    let valorTotal17 = parseInt(total17.innerHTML);
    if (valorTotal17 == 1) return;
    total17.innerHTML = valorTotal17 - 1;
}
document.getElementById('sumar17').addEventListener('click', sumar17);
document.getElementById('restar17').addEventListener('click', restar17);

/*GORRA GRIS*/
const nombreGorraGris = document.getElementById("nombreGorraGris");
nombreGorraGris.innerText = `${gorraGris.tipo} ${gorraGris.variedad}`;
const precioGorraGris = document.getElementById("precioGorraGris");
precioGorraGris.innerText = `$${gorraGris.precio}`;
const botonGorraGris = document.getElementById("botonGorraGris");
/*SUMADOR DE CANTIDAD*/
let total18 = document.getElementById('cantidad18');
function sumar18 () {
    let valorTotal18 = parseInt(total18.innerHTML);
    total18.innerHTML = valorTotal18 + 1;
}
function restar18 () {
    let valorTotal18 = parseInt(total18.innerHTML);
    if (valorTotal18 == 1) return;
    total18.innerHTML = valorTotal18 - 1;
}
document.getElementById('sumar18').addEventListener('click', sumar18);
document.getElementById('restar18').addEventListener('click', restar18);

/*COPA*/
const nombreCopa = document.getElementById("nombreCopa");
nombreCopa.innerText = `${copa.tipo} ${copa.variedad}`;
const precioCopa = document.getElementById("precioCopa");
precioCopa.innerText = `$${copa.precio}`;
const botonCopa = document.getElementById("botonCopa");
/*SUMADOR DE CANTIDAD*/
let total19 = document.getElementById('cantidad19');
function sumar19 () {
    let valorTotal19 = parseInt(total19.innerHTML);
    total19.innerHTML = valorTotal19 + 1;
}
function restar19 () {
    let valorTotal19 = parseInt(total19.innerHTML);
    if (valorTotal19 == 1) return;
    total19.innerHTML = valorTotal19 - 1;
}
document.getElementById('sumar19').addEventListener('click', sumar19);
document.getElementById('restar19').addEventListener('click', restar19);


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

// //EVENTOS
// //Son la manera que tenemos en JS de contraolara las acciones de los usuarios
// //Se puede hacer que un mismo click haga dos comportamentos diferentes

// //1) MEDIANTE ADD EVENT LISTENER
// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     console.log ("hola, me hiciste click")
// });
// //El EVENTO CLICK DISPARA AL CLICKEAR CON EL MOUSE
// //Usamos en este caso una funcion flecha para asosiar un comportamiento a este evento

// //2) UTILIZANDO PROPIEDADES DEL NODO
// btn.onclick = () => {
//     alert("Segunda FOrma")
// };

// //3) FUNCION EN EL HTML
// //Por ej 
// onclick="JSenHTML()"; //en la etiqueta HTML
// function JSenHTML() { //Esto linkea con js
//     console.log("HOla")
// };

// //EVENTOS MAS COMUNES
// //RELACIONADOS CON EL MOUSE
// //Se producen con la ineraccion del usuario con el mouse
// //MOUS UP O DOWN cuando se oprime o suelta el boton del raton
// btn.onmousedown = () => {
//     console.log("Oprimiste el boton")
// };
// //MOUEOVER MOUSEOUT El puntero sale o se mueve sobre el elemento
// btn.onmouseover = () => { //cuando entrea al elemento el mouse
//     console.log("INgreso el puntero")
// };
// //MOUSEMOVE
// btn.onmousemove = () => { //mover el mouse sobre el elemento
//     console.log("Pasaste el Mouse or a caja")
// }


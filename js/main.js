/*CARRITO*/
const carrito = [];
/*STOCK*/
const stock = [];
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
stock.push(lataHoney);
stock.push(lataBlonde);
stock.push(lataPaleAle);
stock.push(lataDoblePale);
stock.push(lataHibiscus);
stock.push(lataFaramir);
stock.push(growlerTradicional);
stock.push(growlerEstacion);
stock.push(growlerAutor);
stock.push(growlerEnvase);
stock.push(gorraAzul);
stock.push(gorraGris);
stock.push(copa);
stock.push(sixPackHoney);
stock.push(sixPackBlonde);
stock.push(sixPackPaleAle);
stock.push(sixPackDoblePale);
stock.push(sixPackHibiscus);
stock.push(sixPackFaramir);
stock.push(twelvePackHoney);
stock.push(twelvePackBlonde);
stock.push(twelvePackPaleAle);
stock.push(twelvePackDoblePale);
stock.push(twelvePackHibiscus);
stock.push(twelvePackFaramir);
stock.push(twentyfourPackHoney);
stock.push(twentyfourPackBlonde);
stock.push(twentyfourPackPaleAle);
stock.push(twentyfourPackDoblePale);
stock.push(twentyfourPackHibiscus);
stock.push(twentyfourPackFaramir);

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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito1 () {
    let pedidoLata = new Pedido(lataBlonde.tipo, lataBlonde.variedad, total1.innerHTML, lataBlonde.precio * total1.innerHTML);
    carrito.push(pedidoLata);
    const buscarBlonde = carrito.find(producto => producto.variedad === "Blonde");
    const buscarStockBlonde = stock.find(producto => producto.variedad === "Blonde");
    lataBlonde.cantidad = buscarStockBlonde.cantidad - buscarBlonde.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('botonBlonde').addEventListener('click', agregarAlCarrito1);

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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito2 () {
    let pedidoLata = new Pedido(lataHoney.tipo, lataHoney.variedad, total2.innerHTML, lataHoney.precio * total2.innerHTML);
    carrito.push(pedidoLata);
    const buscarHoney = carrito.find(producto => producto.variedad === "Honey");
    const buscarStockHoney = stock.find(producto => producto.variedad === "Honey");
    lataHoney.cantidad = buscarStockHoney.cantidad - buscarHoney.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('botonHoney').addEventListener('click', agregarAlCarrito2);

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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito3 () {
    let pedidoLata = new Pedido(lataPaleAle.tipo, lataPaleAle.variedad, total3.innerHTML, lataPaleAle.precio * total3.innerHTML);
    carrito.push(pedidoLata);
    const buscarPaleAle = carrito.find(producto => producto.variedad === "Pale Ale");
    const buscarStockPaleAle = stock.find(producto => producto.variedad === "Pale Ale");
    lataPaleAle.cantidad = buscarStockPaleAle.cantidad - buscarPaleAle.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('botonPaleAle').addEventListener('click', agregarAlCarrito3);

/*LATA Doble Pale*/
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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito4 () {
    let pedidoLata = new Pedido(lataDoblePale.tipo, lataDoblePale.variedad, total4.innerHTML, lataDoblePale.precio * total4.innerHTML);
    carrito.push(pedidoLata);
    const buscarDoblePale = carrito.find(producto => producto.variedad === "Doble Pale");
    const buscarStockDoblePale = stock.find(producto => producto.variedad === "Doble Pale");
    lataDoblePale.cantidad = buscarStockDoblePale.cantidad - buscarDoblePale.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('botonDoblePale').addEventListener('click', agregarAlCarrito4);

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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito5 () {
    let pedidoLata = new Pedido(lataHibiscus.tipo, lataHibiscus.variedad, total5.innerHTML, lataHibiscus.precio * total5.innerHTML);
    carrito.push(pedidoLata);
    const buscarHibiscus = carrito.find(producto => producto.variedad === "Hibiscus");
    const buscarStockHibiscus = stock.find(producto => producto.variedad === "Hibiscus");
    lataHibiscus.cantidad = buscarStockHibiscus.cantidad - buscarHibiscus.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('botonHibiscus').addEventListener('click', agregarAlCarrito5);

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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito6 () {
    let pedidoLata = new Pedido(lataFaramir.tipo, lataFaramir.variedad, total6.innerHTML, lataFaramir.precio * total6.innerHTML);
    carrito.push(pedidoLata);
    const buscarFaramir = carrito.find(producto => producto.variedad === "Faramir");
    const buscarStockFaramir = stock.find(producto => producto.variedad === "Faramir");
    lataFaramir.cantidad = buscarStockFaramir.cantidad - buscarFaramir.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('botonFaramir').addEventListener('click', agregarAlCarrito6);

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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito7 () {
    let pedidoGrowler = new Pedido(growlerTradicional.tipo, growlerTradicional.variedad, total7.innerHTML, growlerTradicional.precio * total7.innerHTML);
    carrito.push(pedidoGrowler);
    const buscarGrowlerTradicional = carrito.find(producto => producto.variedad === "Tradicional");
    const buscarStockGrowlerTradicional = stock.find(producto => producto.variedad === "Tradicional");
    growlerTradicional.cantidad = buscarStockGrowlerTradicional.cantidad - buscarGrowlerTradicional.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('botonGrowlerTrad').addEventListener('click', agregarAlCarrito7);

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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito8 () {
    let pedidoGrowler = new Pedido(growlerEstacion.tipo, growlerEstacion.variedad, total8.innerHTML, growlerEstacion.precio * total8.innerHTML);
    carrito.push(pedidoGrowler);
    const buscarGrowlerEstacion = carrito.find(producto => producto.variedad === "de Estación");
    const buscarStockGrowlerEstacion = stock.find(producto => producto.variedad === "de Estación");
    growlerEstacion.cantidad = buscarStockGrowlerEstacion.cantidad - buscarGrowlerEstacion.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('botonGrowlerEst').addEventListener('click', agregarAlCarrito8);

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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito9 () {
    let pedidoGrowler = new Pedido(growlerAutor.tipo, growlerAutor.variedad, total9.innerHTML, growlerAutor.precio * total9.innerHTML);
    carrito.push(pedidoGrowler);
    const buscarGrowlerAutor = carrito.find(producto => producto.variedad === "de Autor");
    const buscarStockGrowlerAutor = stock.find(producto => producto.variedad === "de Autor");
    growlerAutor.cantidad = buscarStockGrowlerAutor.cantidad - buscarGrowlerAutor.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('botonGrowlerAutor').addEventListener('click', agregarAlCarrito9);

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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito10 () {
    let pedidoGrowler = new Pedido(growlerEnvase.tipo, growlerEnvase.variedad, total10.innerHTML, growlerEnvase.precio * total10.innerHTML);
    carrito.push(pedidoGrowler);
    const buscarGrowlerEnvase = carrito.find(producto => producto.variedad === "Solo Envase");
    const buscarStockGrowlerEnvase = stock.find(producto => producto.variedad === "Solo Envase");
    growlerEnvase.cantidad = buscarStockGrowlerEnvase.cantidad - buscarGrowlerEnvase.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('botonGrowlerEnvase').addEventListener('click', agregarAlCarrito10);

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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito11 () {
    let pedidoPack = new Pedido(sixPackHoney.tipo, sixPackHoney.variedad, total11.innerHTML, sixPackHoney.precio * total11.innerHTML);
    carrito.push(pedidoPack);
    const buscarSixPackHoney = carrito.find(producto => producto.variedad === "Honey");
    const buscarStockSixPackHoney = stock.find(producto => producto.variedad === "Honey");
    sixPackHoney.cantidad = buscarStockSixPackHoney.cantidad - buscarSixPackHoney.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('botonSixPackTrad').addEventListener('click', agregarAlCarrito11);

/*SIX PACK HIBISCUS*/
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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito12 () {
    let pedidoPack = new Pedido(sixPackHibiscus.tipo, sixPackHibiscus.variedad, total12.innerHTML, sixPackHibiscus.precio * total12.innerHTML);
    carrito.push(pedidoPack);
    const buscarSixPackHibiscus = carrito.find(producto => producto.variedad === "Hibiscus");
    const buscarStockSixPackHibiscus = stock.find(producto => producto.variedad === "Hibiscus");
    sixPackHibiscus.cantidad = buscarStockSixPackHibiscus.cantidad - buscarSixPackHibiscus.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('botonSixPackAut').addEventListener('click', agregarAlCarrito12);

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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito13 () {
    let pedidoPack = new Pedido(twelvePackHoney.tipo, twelvePackHoney.variedad, total13.innerHTML, twelvePackHoney.precio * total13.innerHTML);
    carrito.push(pedidoPack);
    const buscarTwelvePackHoney = carrito.find(producto => producto.variedad === "Honey");
    const buscarStockTwelvePackHoney = stock.find(producto => producto.variedad === "Honey");
    twelvePackHoney.cantidad = buscarStockTwelvePackHoney.cantidad - buscarTwelvePackHoney.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('boton12PackTrad').addEventListener('click', agregarAlCarrito13);

/*12 PACK HIBISCUS*/
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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito14 () {
    let pedidoPack = new Pedido(twelvePackHibiscus.tipo, twelvePackHibiscus.variedad, total14.innerHTML, twelvePackHibiscus.precio * total14.innerHTML);
    carrito.push(pedidoPack);
    const buscarTwelvePackHibiscus = carrito.find(producto => producto.variedad === "Hibiscus");
    const buscarStockTwelvePackHibiscus = stock.find(producto => producto.variedad === "Hibiscus");
    twelvePackHibiscus.cantidad = buscarStockTwelvePackHibiscus.cantidad - buscarTwelvePackHibiscus.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('boton12PackAut').addEventListener('click', agregarAlCarrito14);

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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito15 () {
    let pedidoPack = new Pedido(twentyfourPackHoney.tipo, twentyfourPackHoney.variedad, total15.innerHTML, twentyfourPackHoney.precio * total15.innerHTML);
    carrito.push(pedidoPack);
    const buscarTwentyfourPackHoney = carrito.find(producto => producto.variedad === "Honey");
    const buscarStockTwentyfourPackHoney = stock.find(producto => producto.variedad === "Honey");
    twentyfourPackHoney.cantidad = buscarStockTwentyfourPackHoney.cantidad - buscarTwentyfourPackHoney.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('boton24PackTrad').addEventListener('click', agregarAlCarrito15);

/*24 PACK HIBISCUS*/
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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito16 () {
    let pedidoPack = new Pedido(twentyfourPackHibiscus.tipo, twentyfourPackHibiscus.variedad, total16.innerHTML, twentyfourPackHibiscus.precio * total16.innerHTML);
    carrito.push(pedidoPack);
    const buscarTwentyfourPackHibiscus = carrito.find(producto => producto.variedad === "Hibiscus");
    const buscarStockTwentyfourPackHibiscus = stock.find(producto => producto.variedad === "Hibiscus");
    twentyfourPackHibiscus.cantidad = buscarStockTwentyfourPackHibiscus.cantidad - buscarTwentyfourPackHibiscus.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('boton24PackAut').addEventListener('click', agregarAlCarrito16);

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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito17 () {
    let pedidoGorra = new Pedido(gorraAzul.tipo, gorraAzul.variedad, total17.innerHTML, gorraAzul.precio * total17.innerHTML);
    carrito.push(pedidoGorra);
    const buscarGorraAzul = carrito.find(producto => producto.variedad === "Azul");
    const buscarStockGorraAzul = stock.find(producto => producto.variedad === "Azul");
    gorraAzul.cantidad = buscarStockGorraAzul.cantidad - buscarGorraAzul.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('botonGorraAzul').addEventListener('click', agregarAlCarrito17);

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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito18 () {
    let pedidoGorra = new Pedido(gorraGris.tipo, gorraGris.variedad, total17.innerHTML, gorraGris.precio * total18.innerHTML);
    carrito.push(pedidoGorra);
    const buscarGorraGris = carrito.find(producto => producto.variedad === "Gris");
    const buscarStockGorraGris = stock.find(producto => producto.variedad === "Gris");
    gorraGris.cantidad = buscarStockGorraGris.cantidad - buscarGorraGris.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('botonGorraGris').addEventListener('click', agregarAlCarrito18);

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
/*AGREGAR ACL CARRITO*/
function agregarAlCarrito19 () {
    let pedidoCopa = new Pedido(copa.tipo, copa.variedad, total19.innerHTML, copa.precio * total19.innerHTML);
    carrito.push(pedidoCopa);
    const buscarCopa = carrito.find(producto => producto.variedad === "250ml");
    const buscarStockCopa = stock.find(producto => producto.variedad === "250ml");
    copa.cantidad = buscarStockCopa.cantidad - buscarCopa.cantidad;
    localStorage.setItem("pedido", JSON.stringify(carrito));
}
document.getElementById('botonCopa').addEventListener('click', agregarAlCarrito19);

/*MOSTRAR CARRITO*/
// if(localStorage.getItem("carrito")){
//     let pedido = JSON.parse(localStorage.getItem("carrito"));
//     for(let i = 0; i < pedido.length; i++){
//         carrito.push(carrito[i]);
//     }
// }
const contenedorCarrito = document.getElementById("contenedorCarrito");
carrito.forEach(producto => {
    const productoCarrito = document.createElement("tr");
    productoCarrito.innerHTML = `<tr>
                                    <th scope="row">1</th>
                                    <td class="d-flex">
                                        <p class="me-auto mb-auto">${producto.tipo} ${producto.variedad}</p>
                                        <img class="d-flex img-carrito mx-auto mb-auto" src="../assets/img/feria/blonde.jpg" alt="Cerveza Blonde">
                                    </td>
                                    <td class="my-auto">${producto.precio}</td>
                                    <td class="my-auto">
                                        <p class="my-auto boton-sumar2-carrito text-center">${producto.cantidad}</p>
                                    </td>
                                </tr>`;
    contenedorCarrito.appendChild(productoCarrito);
})

// const vaciarCarrito = document.getElementById("vaciarCarrito");
// document.getElementById('vaciarCarrito').addEventListener('click', vaciar);
// function vaciar(){
//     carrito.splice(0,100);
//     return carrito;
// }

// let contenedorCarrito = document.getElementById("contenedorCarrito");
// function mostrarCarrito() {
//     let pedido = JSON.parse(localStorage.getItem("pedido"));
//     let aux = "";
//     pedido.forEach(item => {
//         aux += `<tr>
//                     <th scope="row">1</th>
//                     <td class="d-flex">
//                         <p class="me-auto mb-auto">${item.tipo} ${item.variedad}</p>
//                         <img class="d-flex img-carrito mx-auto mb-auto" src="../assets/img/feria/blonde.jpg" alt="Cerveza Blonde">
//                     </td>
//                     <td class="my-auto">${item.precio}</td>
//                     <td class="my-auto">
//                         <p class="my-auto boton-sumar2-carrito text-center">${item.cantidad}</p>
//                     </td>
//                 </tr>`;
//     })
//     contenedorCarrito = aux;
// }
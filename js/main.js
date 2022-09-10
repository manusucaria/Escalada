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
        this.vendido = false;
    }
    sixpack(){
        return ((this.precio * 0.95) * 6).toFixed(0);
    }
    twelvepack(){
        return ((this.precio * 0.93) * 6).toFixed(0);
    }
    twentyfourpack(){
        return ((this.precio * 0.91) * 6).toFixed(0);
    }
    mayorista(){
        return (this.precio * 0.85).toFixed(0);
    }
    vender(){
        this.vendido = true;
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
const lataDoblePale = new Producto("Lata", "Doble Pale", 1000, 380);
const lataHibiscus = new Producto("Lata", "Hibiscus", 1000, 380);
const lataFaramir = new Producto("Lata", "Faramir", 1000, 380);
/*GROWLERS*/
const growlerTradicional = new Producto("Growler", "Tradicional", 100, 580);
const growlerEstacion = new Producto("Growler", "de Estación", 100, 590);
const growlerAutor = new Producto("Growler", "de Autor", 100, 630);
const growlerEnvase = new Producto("Growler", "Solo Envase", 100, 200);
/*OTROS*/
const gorraAzul = new Producto("Gorra", "Azul", 10, 580);
const gorraGris = new Producto("Gorra", "Gris", 10, 580);
const copa = new Producto("Copa", "250ml", 10, 1290);
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

/*MENU*/
function menu(){
    alert("Bienvenido a Escalada Pedidos Online");
    let opcion = parseInt(prompt("Ingrese en que producto está interesado: \n 1) LATAS DE CERVEZA \n 2) GROWLERS \n 3) GORRAS \n 4) COPAS \n 5) SALIR"));
    return opcion;
}
function latas(){
    let variedad = parseInt(prompt("Indique la variedad de lata a elegir entre: \n 1) Honey \n 2) Blonde \n 3) Pale Ale \n 4) Doble Pale \n 5) Hibiscus \n 6) Faramir:"));
    return variedad;
}
function growlers(){
    let variedad = parseInt(prompt("Indique la variedad de Cerveza en Growler a elegir entre: \n 1) Tradicional \n 2) Estacion \n 3) Autor \n 4) Envase"));
    return variedad;
}
function gorras(){
    let variedad = parseInt(prompt("Elija color entre: \n 1) Azul \n 2) Gris"));
    return variedad;
}
function copas(){
    let cantidad = parseInt(prompt("Indique cuantas Unidades quiere:"));
    let pedidocopa = new Pedido(copa.tipo, copa.variedad, cantidad, copa.precio * cantidad);
    Carrito.push(pedidocopa);
    alert("Ud ha seleccionado " + pedidocopa.cantidad + " " + pedidocopa.tipo + "/s de " + pedidocopa.variedad + " por Un Valor Total de $" + pedidocopa.precio);
}
function salir(){
    alert("Gracias por Elegirnos!")
}
let opciones = menu();
switch (opciones) {
    case 1:
        let variedad1 = latas();
        switch (variedad1){
            case 1:
                let cantidad1 = parseInt(prompt("Indique cuantas latas quiere:"));
                let pedidolata1 = new Pedido(lataHoney.tipo, "Honey", cantidad1, lataHoney.precio * cantidad1);
                Carrito.push(pedidolata1);
                alert("Ud ha seleccionado " + pedidolata1.cantidad + " " + pedidolata1.tipo + "/s de " + pedidolata1.variedad + " por Un Valor Total de $" + pedidolata1.precio);
                break;
            case 2:
                let cantidad2 = parseInt(prompt("Indique cuantas latas quiere:"));
                let pedidolata2 = new Pedido(lataBlonde.tipo, "Blonde", cantidad2, lataBlonde.precio * cantidad2);
                Carrito.push(pedidolata2);
                alert("Ud ha seleccionado " + pedidolata2.cantidad + " " + pedidolata2.tipo + "/s de " + pedidolata2.variedad + " por Un Valor Total de $" + pedidolata2.precio);
                break;
            case 3:
                let cantidad3 = parseInt(prompt("Indique cuantas latas quiere:"));
                let pedidolata3 = new Pedido(lataPaleAle.tipo, "Pale Ale", cantidad3, lataPaleAle.precio * cantidad3);
                Carrito.push(pedidolata3);
                alert("Ud ha seleccionado " + pedidolata3.cantidad + " " + pedidolata3.tipo + "/s de " + pedidolata3.variedad + " por Un Valor Total de $" + pedidolata3.precio);
                break;
            case 4:
                let cantidad4 = parseInt(prompt("Indique cuantas latas quiere:"));
                let pedidolata4 = new Pedido(lataDoblePale.tipo, "Doble Pale", cantidad4, lataDoblePale.precio * cantidad4);
                Carrito.push(pedidolata4);
                alert("Ud ha seleccionado " + pedidolata4.cantidad + " " + pedidolata4.tipo + "/s de " + pedidolata4.variedad + " por Un Valor Total de $" + pedidolata4.precio);
                break;
            case 5:
                let cantidad5 = parseInt(prompt("Indique cuantas latas quiere:"));
                let pedidolata5 = new Pedido(lataHibiscus.tipo, "Hibiscus", cantidad5, lataHibiscus.precio * cantidad5);
                Carrito.push(pedidolata5);
                alert("Ud ha seleccionado " + pedidolata5.cantidad + " " + pedidolata5.tipo + "/s de " + pedidolata5.variedad + " por Un Valor Total de $" + pedidolata5.precio);
                break;
            case 6:
                let cantidad6 = parseInt(prompt("Indique cuantas latas quiere:"));
                let pedidolata6 = new Pedido(lataFaramir.tipo, "Faramir", cantidad6, lataFaramir.precio * cantidad6);
                Carrito.push(pedidolata6);
                alert("Ud ha seleccionado " + pedidolata6.cantidad + " " + pedidolata6.tipo + "/s de " + pedidolata6.variedad + " por Un Valor Total de $" + pedidolata6.precio);
                break;
        }
        break;
    case 2:
        let variedad2 = growlers();
        switch (variedad2){
            case 1:
                let variedad1 = prompt("Indique que variedad quiere entre Honey, Blonde:")
                let cantidadGrowler1 = parseInt(prompt("Indique cuantas Unidades quiere:"));
                let pedidogrowler1 = new Pedido(growlerTradicional.tipo, variedad1, cantidadGrowler1, growlerTradicional.precio * cantidadGrowler1);
                Carrito.push(pedidogrowler1);
                alert("Ud ha seleccionado " + pedidogrowler1.cantidad + " " + pedidogrowler1.tipo + "/s de tipo " + pedidogrowler1.variedad + " por Un Valor Total de $" + pedidogrowler1.precio);
                break;
            case 2:
                let variedad2 = prompt("Indique que variedad quiere entre Pale y Doble Pale:")
                let cantidadGrowler2 = parseInt(prompt("Indique cuantas Unidades quiere:"));
                let pedidogrowler2 = new Pedido(growlerEstacion.tipo, variedad2, cantidadGrowler2, growlerEstacion.precio * cantidadGrowler2);
                Carrito.push(pedidogrowler2);
                alert("Ud ha seleccionado " + pedidogrowler2.cantidad + " " + pedidogrowler2.tipo + "/s de tipo " + pedidogrowler2.variedad + " por Un Valor Total de $" + pedidogrowler2.precio);
                break;
            case 3:
                let variedad3 = prompt("Indique que variedad quiere entre Hibiscus y Faramir:")
                let cantidadGrowler3 = parseInt(prompt("Indique cuantas Unidades quiere:"));
                let pedidogrowler3 = new Pedido(growlerAutor.tipo, variedad3, cantidadGrowler3, growlerAutor.precio * cantidadGrowler3);
                Carrito.push(pedidogrowler3);
                alert("Ud ha seleccionado " + pedidogrowler3.cantidad + " " + pedidogrowler3.tipo + "/s de tipo " + pedidogrowler3.variedad + " por Un Valor Total de $" + pedidogrowler3.precio);
                break;
            case 4:
                let cantidadGrowler4 = parseInt(prompt("Indique cuantas Unidades quiere:"));
                let pedidogrowler4 = new Pedido(growlerEnvase.tipo, growlerEnvase.variedad, cantidadGrowler4, growlerEnvase.precio * cantidadGrowler4);
                Carrito.push(pedidogrowler4);
                alert("Ud ha seleccionado " + pedidogrowler4.cantidad + " Envase/s de " + pedidogrowler4.tipo + "/s por Un Valor Total de $" + pedidogrowler4.precio);
                break;
        }
        break;
    case 3:
        let variedad3 = gorras();
        switch (variedad3){
            case 1:
                let cantidad1 = parseInt(prompt("Indique cuantas Unidades quiere:"));
                let pedidogorra1 = new Pedido(gorraAzul.tipo, "Azul", cantidad1, gorraAzul.precio * cantidad1);
                Carrito.push(pedidogorra1);
                alert("Ud ha seleccionado " + pedidogorra1.cantidad + " " + pedidogorra1.tipo + "/s " + pedidogorra1.variedad + "/es por Un Valor Total de $" + pedidogorra1.precio);
                break;
            case 2:
                let cantidad2 = parseInt(prompt("Indique cuantas Unidades quiere:"));
                let pedidogorra2 = new Pedido(gorraGris.tipo, "Gris", cantidad2, gorraGris.precio * cantidad2);
                Carrito.push(pedidogorra2);
                alert("Ud ha seleccionado " + pedidogorra2.cantidad + " " + pedidogorra2.tipo + "/s " + pedidogorra2.variedad + "/es por Un Valor Total de $" + pedidogorra2.precio);
                break;
        }
        break;
    case 4:
        copas();
        break;
    case 5:
        salir();
        break;
}
function compra(){
    let opciones = parseInt(prompt("Elija una de las Siguientes Opciones: \n 1) FINALIZAR LA COMPRA \n 2) ELIMINAR ITEMS \n 3) SALIR"));
    return opciones;
}
function finalizar(){
    alert("Gracias en Breve le Estará llegando su Pedido");
}
function eliminar(){
    let eliminar = prompt("Ingrese La Variedad del producto:");
    let cancelacion = Carrito.find(Pedido => Pedido.variedad === eliminar);
    let indice = Carrito.indexOf(cancelacion);
    Carrito.splice(indice, 1);
    alert("Su pedido ha sido eliminado")
}
function salir(){
    alert("Vuelva Pronto!")
}
let final = compra();
switch (final){
    case 1:
        finalizar();
        break;
    case 2:
        eliminar();
        break;
    case 3:
        salir();
        break;
}
Carrito.forEach(pedido => console.log(pedido))


// console.log("El 6 Pack de latas de " + lataBlonde.variedad + " tiene un costo final de $" + lataBlonde.sixpack());
// console.log("La " + lataHoney.tipo + " de " + lataHoney.variedad + " tiene un costo mayorista de $ " + lataHoney.mayorista());


// let array = [1, 2, 3]; // Inicializando un array con valores number
// let arrayVacio = []; //Array Vacio
// arrayVacio = [25, 36, 99]; //Puedo ir agregando valores a un Array vacio despues de haberlo declarado
// let arrayCombinado = ["Hola", 99, true]; //Array combinado
// console.log(arrayCombinado[2])
// arrayCombinado[2] = 100;
// // for(let i = 0; i < arrayCombinado.length; i++){
// //     alert(arrayCombinado[i]);
// // } // Me muestra y recorre los elementos del array
// let number = [1,2,3];
// console.log("Propiedad Length: " + number.length)
// /*PUSH*/
// let familia = ["Sonia", "Dani", "Santiago", "victoria"];
// console.log("Array mi familia: ")
// console.log(familia);
// familia.push("Pulga"); //Agrega un elemento al final
// console.log(familia)
// /*UNSHIFT*/
// familia.unshift("firulais");
// /*POP*/
// let eliminado = familia.pop();
// let eliminadoShift = familia.shift();
// /*SPLICE*/
// let integrantesEliminados = familia.splice(2, 2);
// /*JOIN*/
// let stringFamilia = familia.join(" * ");
// console.log(stringFamilia);
// /*CONCAT*/
// let familiaUnidaOtraVez = familia.concat(integrantesEliminados);
// console.log(familiaUnidaOtraVez);
// /*SLICE*/
// let slice = familiaUnidaotraVez.slice(0,2);
// /*INDEXOF*/
// let indiceSamuel = familiaUnidaOtraVez.indexOf("Samuel");
// /*INCLUDES*/
// let booleanoSamuel = familiaUnidaOtraVez.includes("Samuel");
// /*REVERSE*/
// familiaUnidaOtraVez.reverse();


// /*ARRAY OBJETOS*/
// class Producto {
//     constructor(nombre, precio){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = 10;
//     }
//     sumarStock(cantidad){
//         this.cantidad = this.cantidad + cantidad;
//     }
// }
// const yerba = new Producto("Yerba", 360);
// const harina = new Producto("Harina", 100);
// const fideos = new Producto("Fideos", 90);

// // const stockProductos  = [yerba, harina, fideos]
// // console.log(stockProductos)
// const stockProductos = [];
// stockProductos.push(yerba),
// stockProductos.push(harina),
// stockProductos.push(fideos);

// console.log(stockProductos)
// /*recorrer array de objetos*/
// for(let producto of stockProductos){
//     console.log(producto);
// }
// /*funcion que aumente solo un elemento*/
// function aumentarStockHarina (arrayProductos){
//     for(let producto of arrayProductos){
//         if(producto.nombre === "Harina"){
//             producto.sumarStock(100);
//         }
//     }
// }
// aumentarStockHarina(stockProductos);
// console.log(stockProductos)

// //FUNCION QUE SALUDA
// function crearSaludo(finalDeFrase){
//     return function(nombre){
//         console.log("Hola " + nombre + " " + finalDeFrase)
//     }
// }
// const saludoArgentino = crearSaludo("che");
// saludoArgentino("Juan");

// //EJEMPLO DE FUNCION QUE RETORNA OTRA FUNCION
// function crearProducto(nombre){
//     return function(precio){
//         console.log("El producto " + nombre + " tiene un precio de $" + precio)
//     }
// }
// const productoFideo = crearProducto("Fideos");
// productoFideo(100);

// // //EJEMPLO DE FUNCION DE ORDEN SUPERIOR QUE RECIBE UNA FUNCION POR PARAMETRO
// // function saludoPorConsola(funcion){
// //     console.log("Hola " + funcion)
// // }
// // saludoPorConsola(prompt("Ingrese su nombre: "));

// //OTRO EJEMPLO
// let arrayPersonas = ["Carlos", "Lucas", "Federico", "Natalia", "Maria"];
// function muestroNombresEnMayuscula(array, funcion){
//     for(let nombre of array) {
//         funcion(nombre);
//     }
// }
// function pasarMayuscula(nombre){
//     return console.log(nombre.toUpperCase());
// }
// muestroNombresEnMayuscula(arrayPersonas, pasarMayuscula)

// //EJEMPLO CON ARRAY DE OBJETOS
// class Producto {
//     constructor(nombre, precio){
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// const fideos = new Producto("Fideos", 100);
// const harina = new Producto("Harina", 250)
// const gaseosa = new Producto("Coca Cola", 180);
// const pan = new Producto("Pan", 120);

// const arrayProductos = [fideos, harina, gaseosa, pan];

// //forEach
// arrayProductos.forEach((producto) => {
//     console.log(producto);
// })
// //O MAS SIMPLE
// arrayProductos.forEach(producto => console.log(producto))

// //FIND
// const buscado = arrayProductos.find(producto => producto.nombre === "Coca Cola");
// console.log("Find: ");
// console.log(buscado);

// //FILTER
// const arrayProductosMenos200 = arrayProductos.filter(producto => producto.precio < 200);
// console.log(arrayProductosMenos200)

// //SOME
// const hayFideos = arrayProductos.some(producto => producto.nombre ==="Fideos");
// console.log(hayFideos);

// //MAP
// //ARRAY DE PRODUCTOS CON IVA
// const arrayProductosConIva = arrayProductos.map( (producto) => {
//     return {
//         nombre: producto.nombre,
//         precio: producto.precio * 1.21
//     }
// });

// //REDUCE
// //EJEMPLO TOTAL DE CARRITO DE COMPRAS
// //EJEMPLO DE DOS PARAMETROS: UN ACUMULADOR Y EL ELEMENTO QUE QUEREMOS QUE VAYA ITERANDO
// //TAMBIEN DEBEMOS COLOCAR EL VALOR INICIAL DEL ACUMULADOR
// let totalPrecio = arrayProductos.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
// console.log(totalPrecio);

// //SORT
// //EJEMPLO DE NUMEROS DE MENOR A MAYOR
// const numeros = [99, 58, 74, 8, 23];

// numeros.sort((a,b) => a - b)
// console.log(numeros);

// //DE MAYOR A MENOR
// numeros.sort((a,b) => b - a)
// console.log(numeros);

// //ORDENO PRECIOS EN UN ARRAY DE OBJETOS
// arrayProductos.sort((a,b) => a.precio - b.precio);
// console.log(arrayProductos)


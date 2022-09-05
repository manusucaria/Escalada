let carrito = 0;
let numeroDeItems = 0;
let aumentar = () => numeroDeItems = numeroDeItems + 1;
let sacar = () => numeroDeItems = numeroDeItems - 1;
let agregarCarrito = () => carrito = carrito + numeroDeItems;
let sumar = prompt("Quiere sumar un item mas?");
while(sumar != "si"){
    break;
}
while(sumar == "si"){
    console.log("Su Numero total de Items es de: " + aumentar());
    break;
}
let restar = prompt("Quiere restar un item?");
while(restar != "si"){
    break;
}
while(restar == "si"){
    console.log("Su Numero total de Items es de: " + sacar());
    break;
}
let agregar = prompt("Desea agregar los items al carrito?");
while(agregar != "si"){
    console.log(carrito);
    break;
}
while(agregar == "si"){
    console.log("Total de items agregados al carrito: " + agregarCarrito());
    break;
}

class Producto{
    constructor(tipo, variedad, precio){
        this.tipo = tipo;
        this.variedad = variedad;
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

/*LATAS*/
const lataHoney = new Producto("Lata", "Honey", 380);
const lataBlonde = new Producto("Lata", "Blonde", 380);
const lataPaleAle = new Producto("Lata", "Pale Ale", 380);
const lataDoblePale = new Producto("Lata", "Doble Pale", 380);
const lataHibiscus = new Producto("Lata", "Hibiscus", 380);
const lataFaramir = new Producto("Lata", "Faramir", 380);
/*GROWLERS*/
const growlerTradicional = new Producto("Growler", "Tradicional", 580);
const growlerEstacion = new Producto("Growler", "de Estación", 590);
const growlerAutor = new Producto("Growler", "de Autor", 630);
const growlerEnvase = new Producto("Growler", "Solo Envase", 200);
/*OTROS*/
const Gorra = new Producto("Gorra", "Escalada", 580);
const Copa = new Producto("Copa", "Escalada", 1290);

console.log("El 6 Pack de latas de " + lataBlonde.variedad + " tiene un costo final de $" + lataBlonde.sixpack())
console.log("La " + lataHoney.tipo + " de " + lataHoney.variedad + " tiene un costo mayorista de $ " + lataHoney.mayorista())


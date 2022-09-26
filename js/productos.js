const carrito = [];
const stock = [];
class Producto{
    constructor(id, tipo, variedad, cantidad, precio){
        this.id = id;
        this.tipo = tipo;
        this.variedad = variedad,
        this.cantidad = cantidad;
        this.precio = precio;
    }
    growler(){
        return (this.precio * 1.5).toFixed(0);
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
}
/*LATAS*/
const lataHoney = new Producto(1,"Lata", "Honey", 1000, 380);
const lataBlonde = new Producto(2, "Lata", "Blonde", 1000, 380);
const lataPaleAle = new Producto(3, "Lata", "Pale Ale", 1000, 380);
const lataDoblePale = new Producto(4, "Lata", "Doble Pale", 1000, 390);
const lataHibiscus = new Producto(5, "Lata", "Hibiscus", 1000, 400);
const lataFaramir = new Producto(6, "Lata", "Faramir", 1000, 400);
/*GROWLERS*/
const growlerHoney = new Producto(7, "Growler", "Honey", 100, lataHoney.growler());
const growlerBlonde = new Producto(8, "Growler", "Blonde", 100, lataBlonde.growler());
const growlerPaleAle = new Producto(9, "Growler", "Pale Ale", 100, lataPaleAle.growler());
const growlerDoblePale = new Producto(10, "Growler", "Doble Pale", 100, lataDoblePale.growler());
const growlerHibiscus = new Producto(11, "Growler", "Hibiscus", 100, lataHibiscus.growler());
const growlerFaramir = new Producto(12, "Growler", "Faramir", 100, lataFaramir.growler());
const growlerEnvase = new Producto(13, "Growler", "Solo Envase", 100, 250);
/*OTROS*/
const gorraAzul = new Producto(14, "Gorra", "Azul", 10, 580);
const gorraGris = new Producto(15, "Gorra", "Gris", 10, 580);
const copa = new Producto(16, "Copa", "250ml", 10, 1290);
/*PACKS*/
/*SIX*/
const sixPackHoney = new Producto(17, "Six Pack", "Honey", 200, lataHoney.sixpack());
const sixPackBlonde = new Producto(18, "Six Pack", "Blonde", 200, lataBlonde.sixpack());
const sixPackPaleAle = new Producto(19, "Six Pack", "Pale Ale", 200, lataPaleAle.sixpack());
const sixPackDoblePale = new Producto(20, "Six Pack", "Doble Pale", 200, lataDoblePale.sixpack());
const sixPackHibiscus = new Producto(21, "Six Pack", "Hibiscus", 200, lataHibiscus.sixpack());
const sixPackFaramir = new Producto(22, "Six Pack", "Faramir", 200, lataFaramir.sixpack());
/*TWELVE*/
const twelvePackHoney = new Producto(23, "Twelve Pack", "Honey", 200, lataHoney.twelvepack());
const twelvePackBlonde = new Producto(24, "Twelve Pack", "Blonde", 200, lataBlonde.twelvepack());
const twelvePackPaleAle = new Producto(25, "Twelve Pack", "Pale Ale", 200, lataPaleAle.twelvepack());
const twelvePackDoblePale = new Producto(26, "Twelve Pack", "Doble Pale", 200, lataDoblePale.twelvepack());
const twelvePackHibiscus = new Producto(27, "Twelve Pack", "Hibiscus", 200, lataHibiscus.twelvepack());
const twelvePackFaramir = new Producto(28, "Twelve Pack", "Faramir", 200, lataFaramir.twelvepack());
/*TWENTYFOUR*/
const twentyfourPackHoney = new Producto(29, "Twentyfour Pack", "Honey", 200, lataHoney.twentyfourpack());
const twentyfourPackBlonde = new Producto(30, "Twentyfour Pack", "Blonde", 200, lataBlonde.twentyfourpack());
const twentyfourPackPaleAle = new Producto(31, "Twentyfour Pack", "Pale Ale", 200, lataPaleAle.twentyfourpack());
const twentyfourPackDoblePale = new Producto(32, "Twentyfour Pack", "Doble Pale", 200, lataDoblePale.twentyfourpack());
const twentyfourPackHibiscus = new Producto(33, "Twentyfour Pack", "Hibiscus", 200, lataHibiscus.twentyfourpack());
const twentyfourPackFaramir = new Producto(34, "Twentyfour Pack", "Faramir", 200, lataFaramir.twentyfourpack());

/*PUSH AL STOCK*/
stock.push(lataHoney);
stock.push(lataBlonde);
stock.push(lataPaleAle);
stock.push(lataDoblePale);
stock.push(lataHibiscus);
stock.push(lataFaramir);
stock.push(growlerHoney);
stock.push(growlerBlonde);
stock.push(growlerPaleAle);
stock.push(growlerDoblePale);
stock.push(growlerHibiscus);
stock.push(growlerFaramir);
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

console.log(stock)
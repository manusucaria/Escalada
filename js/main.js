const carrito = [];
const latas = [];
const growlers = [];
const packs = [];
const varios = [];
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
class Pedido{
    constructor(id, tipo, variedad, cantidad, precio){
        this.id = id;
        this.tipo = tipo;
        this.variedad = variedad,
        this.cantidad = cantidad;
        this.precio = precio;
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
/*VARIOS*/
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
latas.push(lataHoney);
latas.push(lataBlonde);
latas.push(lataPaleAle);
latas.push(lataDoblePale);
latas.push(lataHibiscus);
latas.push(lataFaramir);
growlers.push(growlerHoney);
growlers.push(growlerBlonde);
growlers.push(growlerPaleAle);
growlers.push(growlerDoblePale);
growlers.push(growlerHibiscus);
growlers.push(growlerFaramir);
growlers.push(growlerEnvase);
varios.push(gorraAzul);
varios.push(gorraGris);
varios.push(copa);
packs.push(sixPackHoney);
packs.push(sixPackBlonde);
packs.push(sixPackPaleAle);
packs.push(sixPackDoblePale);
packs.push(sixPackHibiscus);
packs.push(sixPackFaramir);
packs.push(twelvePackHoney);
packs.push(twelvePackBlonde);
packs.push(twelvePackPaleAle);
packs.push(twelvePackDoblePale);
packs.push(twelvePackHibiscus);
packs.push(twelvePackFaramir);
packs.push(twentyfourPackHoney);
packs.push(twentyfourPackBlonde);
packs.push(twentyfourPackPaleAle);
packs.push(twentyfourPackDoblePale);
packs.push(twentyfourPackHibiscus);
packs.push(twentyfourPackFaramir);


/*LATAS*/
const contenedorLatas = document.getElementById("contenedorLatas");
latas.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add(`feria-${producto.id}`, "grid-botonera");
    divProducto.innerHTML =`<img class="botonera1 my-auto mx-auto img-feria mb-2 mt-2" src="../assets/img/feria/blonde.jpg" alt="Lata Blonde">
                            <div class="botonera2 my-auto me-auto d-flex flex-column botonera-sumar">
                                <button id="sumar${producto.id}" class="boton-sumar1 my-auto mx-auto"><p class="my-auto mx-auto">▲</p></button>
                                <div class="boton-sumar2"><p id="cantidad${producto.id}" class="my-auto text-center"></p></div>
                                <button id="restar${producto.id}" class="boton-sumar3 my-auto mx-auto"><p class="my-auto mx-auto">▼</p></button>
                            </div>
                            <div class="botonera3 mx-auto my-auto d-flex flex-column">
                                <p class="titulos-feria text-center my-auto">${producto.tipo} ${producto.variedad}</p>
                                <p class="precios mx-auto my-auto">$${producto.precio}</p>
                                <button id="boton${producto.id}" class="boton-carrito mx-auto my-auto mt-1"><p class="texto-boton">Agregar al Carrito</p></button>
                            </div>`;
    contenedorLatas.appendChild(divProducto);
    let total = document.getElementById(`cantidad${producto.id}`);
    total.innerText = 1;
    function sumar () {
        let valorTotal = parseInt(total.innerHTML);
        total.innerHTML = valorTotal + 1;
    }
    function restar () {
        let valorTotal = parseInt(total.innerHTML);
        if (valorTotal == 1) return;
        total.innerHTML = valorTotal - 1;
    }
    document.getElementById(`sumar${producto.id}`).addEventListener('click', sumar);
    document.getElementById(`restar${producto.id}`).addEventListener('click', restar);
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
        agregarLata(producto.id)
    })
    const agregarLata= (id) => {
        const producto = latas.find(producto => producto.id ===id);
        const pedido = new Pedido(producto.id, producto.tipo, producto.variedad, total.innerHTML, producto.precio * total.innerHTML)
        carrito.push(pedido);
        localStorage.setItem("pedido", JSON.stringify(carrito));
    }
});

/*GROWLERS*/
const contenedorGrowlers = document.getElementById("contenedorGrowlers");
growlers.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add(`feria-${producto.id}`, "grid-botonera");
    divProducto.innerHTML =`<img class="botonera1 my-auto mx-auto img-feria mb-2 mt-2" src="../assets/img/feria/blonde.jpg" alt="Lata Blonde">
                            <div class="botonera2 my-auto me-auto d-flex flex-column botonera-sumar">
                                <button id="sumar${producto.id}" class="boton-sumar1 my-auto mx-auto"><p class="my-auto mx-auto">▲</p></button>
                                <div class="boton-sumar2"><p id="cantidad${producto.id}" class="my-auto text-center"></p></div>
                                <button id="restar${producto.id}" class="boton-sumar3 my-auto mx-auto"><p class="my-auto mx-auto">▼</p></button>
                            </div>
                            <div class="botonera3 mx-auto my-auto d-flex flex-column">
                                <p class="titulos-feria text-center my-auto">${producto.tipo} ${producto.variedad}</p>
                                <p class="precios mx-auto my-auto">$${producto.precio}</p>
                                <button id="boton${producto.id}" class="boton-carrito mx-auto my-auto mt-1"><p class="texto-boton">Agregar al Carrito</p></button>
                            </div>`;
    contenedorGrowlers.appendChild(divProducto);
    let total = document.getElementById(`cantidad${producto.id}`);
    total.innerText = 1;
    function sumar () {
        let valorTotal = parseInt(total.innerHTML);
        total.innerHTML = valorTotal + 1;
    }
    function restar () {
        let valorTotal = parseInt(total.innerHTML);
        if (valorTotal == 1) return;
        total.innerHTML = valorTotal - 1;
    }
    document.getElementById(`sumar${producto.id}`).addEventListener('click', sumar);
    document.getElementById(`restar${producto.id}`).addEventListener('click', restar);
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
        agregarGrowler(producto.id)
    })
    const agregarGrowler= (id) => {
        const producto = growlers.find(producto => producto.id ===id);
        const pedido = new Pedido(producto.id, producto.tipo, producto.variedad, total.innerHTML, producto.precio * total.innerHTML)
        carrito.push(pedido);
        localStorage.setItem("pedido", JSON.stringify(carrito));
    }
});

/*PACKS*/
const contenedorPacks = document.getElementById("contenedorPacks");
packs.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add(`feria-${producto.id}`, "grid-botonera");
    divProducto.innerHTML =`<img class="botonera1 my-auto mx-auto img-feria mb-2 mt-2" src="../assets/img/feria/blonde.jpg" alt="Lata Blonde">
                            <div class="botonera2 my-auto me-auto d-flex flex-column botonera-sumar">
                                <button id="sumar${producto.id}" class="boton-sumar1 my-auto mx-auto"><p class="my-auto mx-auto">▲</p></button>
                                <div class="boton-sumar2"><p id="cantidad${producto.id}" class="my-auto text-center"></p></div>
                                <button id="restar${producto.id}" class="boton-sumar3 my-auto mx-auto"><p class="my-auto mx-auto">▼</p></button>
                            </div>
                            <div class="botonera3 mx-auto my-auto d-flex flex-column">
                                <p class="titulos-feria text-center my-auto">${producto.tipo} ${producto.variedad}</p>
                                <p class="precios mx-auto my-auto">$${producto.precio}</p>
                                <button id="boton${producto.id}" class="boton-carrito mx-auto my-auto mt-1"><p class="texto-boton">Agregar al Carrito</p></button>
                            </div>`;
    contenedorPacks.appendChild(divProducto);
    let total = document.getElementById(`cantidad${producto.id}`);
    total.innerText = 1;
    function sumar () {
        let valorTotal = parseInt(total.innerHTML);
        total.innerHTML = valorTotal + 1;
    }
    function restar () {
        let valorTotal = parseInt(total.innerHTML);
        if (valorTotal == 1) return;
        total.innerHTML = valorTotal - 1;
    }
    document.getElementById(`sumar${producto.id}`).addEventListener('click', sumar);
    document.getElementById(`restar${producto.id}`).addEventListener('click', restar);
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
        agregarPack(producto.id)
    })
    const agregarPack= (id) => {
        const producto = packs.find(producto => producto.id ===id);
        const pedido = new Pedido(producto.id, producto.tipo, producto.variedad, total.innerHTML, producto.precio * total.innerHTML)
        carrito.push(pedido);
        localStorage.setItem("pedido", JSON.stringify(carrito));
    }
});

/*VARIOS*/
const contenedorVarios = document.getElementById("contenedorVarios");
varios.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add(`feria-${producto.id}`, "grid-botonera");
    divProducto.innerHTML =`<img class="botonera1 my-auto mx-auto img-feria mb-2 mt-2" src="../assets/img/feria/blonde.jpg" alt="Lata Blonde">
                            <div class="botonera2 my-auto me-auto d-flex flex-column botonera-sumar">
                                <button id="sumar${producto.id}" class="boton-sumar1 my-auto mx-auto"><p class="my-auto mx-auto">▲</p></button>
                                <div class="boton-sumar2"><p id="cantidad${producto.id}" class="my-auto text-center"></p></div>
                                <button id="restar${producto.id}" class="boton-sumar3 my-auto mx-auto"><p class="my-auto mx-auto">▼</p></button>
                            </div>
                            <div class="botonera3 mx-auto my-auto d-flex flex-column">
                                <p class="titulos-feria text-center my-auto">${producto.tipo} ${producto.variedad}</p>
                                <p class="precios mx-auto my-auto">$${producto.precio}</p>
                                <button id="boton${producto.id}" class="boton-carrito mx-auto my-auto mt-1"><p class="texto-boton">Agregar al Carrito</p></button>
                            </div>`;
    contenedorVarios.appendChild(divProducto);
    let total = document.getElementById(`cantidad${producto.id}`);
    total.innerText = 1;
    function sumar () {
        let valorTotal = parseInt(total.innerHTML);
        total.innerHTML = valorTotal + 1;
    }
    function restar () {
        let valorTotal = parseInt(total.innerHTML);
        if (valorTotal == 1) return;
        total.innerHTML = valorTotal - 1;
    }
    document.getElementById(`sumar${producto.id}`).addEventListener('click', sumar);
    document.getElementById(`restar${producto.id}`).addEventListener('click', restar);
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
        agregarLata(producto.id)
    })
    const agregarLata= (id) => {
        const producto = varios.find(producto => producto.id ===id);
        const pedido = new Pedido(producto.id, producto.tipo, producto.variedad, total.innerHTML, producto.precio * total.innerHTML)
        carrito.push(pedido);
        localStorage.setItem("pedido", JSON.stringify(carrito));
    }
});

let contenedorCarrito = document.getElementById("contenedorCarrito");
let pedido = JSON.parse(localStorage.getItem("pedido"));
let aux = "";
pedido.forEach(item => {
    aux += `<tr>
                <th scope="row">1</th>
                <td class="d-flex">
                    <p class="me-auto mb-auto">${item.tipo} ${item.variedad}</p>
                    <img class="d-flex img-carrito mx-auto mb-auto" src="../assets/img/feria/blonde.jpg" alt="Cerveza Blonde">
                </td>
                <td class="my-auto">$${item.precio}</td>
                <td class="my-auto">
                    <p class="my-auto boton-sumar2-carrito text-center">${item.cantidad}</p>
                </td>
            </tr>`;
})
contenedorCarrito = aux;

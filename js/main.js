let carrito = [];
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
};
class Pedido{
    constructor(id, tipo, variedad, cantidad, precio){
        this.id = id;
        this.tipo = tipo;
        this.variedad = variedad,
        this.cantidad = cantidad;
        this.precio = precio;
    }
};
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
const sixPackHoney = new Producto(17, "6 Pack", "Honey", 200, lataHoney.sixpack());
const sixPackBlonde = new Producto(18, "6 Pack", "Blonde", 200, lataBlonde.sixpack());
const sixPackPaleAle = new Producto(19, "6 Pack", "Pale Ale", 200, lataPaleAle.sixpack());
const sixPackDoblePale = new Producto(20, "6 Pack", "Doble Pale", 200, lataDoblePale.sixpack());
const sixPackHibiscus = new Producto(21, "6 Pack", "Hibiscus", 200, lataHibiscus.sixpack());
const sixPackFaramir = new Producto(22, "6 Pack", "Faramir", 200, lataFaramir.sixpack());
/*TWELVE*/
const twelvePackHoney = new Producto(23, "12 Pack", "Honey", 200, lataHoney.twelvepack());
const twelvePackBlonde = new Producto(24, "12 Pack", "Blonde", 200, lataBlonde.twelvepack());
const twelvePackPaleAle = new Producto(25, "12 Pack", "Pale Ale", 200, lataPaleAle.twelvepack());
const twelvePackDoblePale = new Producto(26, "12 Pack", "Doble Pale", 200, lataDoblePale.twelvepack());
const twelvePackHibiscus = new Producto(27, "12 Pack", "Hibiscus", 200, lataHibiscus.twelvepack());
const twelvePackFaramir = new Producto(28, "12 Pack", "Faramir", 200, lataFaramir.twelvepack());
/*TWENTYFOUR*/
const twentyfourPackHoney = new Producto(29, "24 Pack", "Honey", 200, lataHoney.twentyfourpack());
const twentyfourPackBlonde = new Producto(30, "24 Pack", "Blonde", 200, lataBlonde.twentyfourpack());
const twentyfourPackPaleAle = new Producto(31, "24 Pack", "Pale Ale", 200, lataPaleAle.twentyfourpack());
const twentyfourPackDoblePale = new Producto(32, "24 Pack", "Doble Pale", 200, lataDoblePale.twentyfourpack());
const twentyfourPackHibiscus = new Producto(33, "24 Pack", "Hibiscus", 200, lataHibiscus.twentyfourpack());
const twentyfourPackFaramir = new Producto(34, "24 Pack", "Faramir", 200, lataFaramir.twentyfourpack());


/*PUSH AL STOCK*/
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
/*AGREGAR AL DOM*/
const contenedorLatas = document.querySelector("#contenedorLatas");
fetch("../json/productos.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((producto) => {
            const productoNuevo = new Producto(producto.id, producto.tipo, producto.variedad, producto.cantidad, producto.precio);
            latas.push(productoNuevo)
            const divProducto = document.createElement("div");
            divProducto.classList.add(`feria-${producto.id}`, "grid-botonera");
            divProducto.innerHTML =`<img class="botonera1 my-auto mx-auto img-feria mb-2 mt-2" src="../assets/img/feria/${producto.id}.jpg" alt="Lata Blonde">
                                    <div class="botonera2 my-auto me-auto d-flex flex-column botonera-sumar">
                                        <button id="sumar${producto.id}" class="boton-sumar1 my-auto mx-auto"><p class="my-auto mx-auto">???</p></button>
                                        <div class="boton-sumar2"><p id="cantidad${producto.id}" class="my-auto text-center"></p></div>
                                        <button id="restar${producto.id}" class="boton-sumar3 my-auto mx-auto"><p class="my-auto mx-auto">???</p></button>
                                    </div>
                                    <div class="botonera3 mx-auto my-auto d-flex flex-column">
                                        <p class="titulos-feria text-center my-auto">${producto.tipo} ${producto.variedad}</p>
                                        <p class="precios mx-auto my-auto">$${producto.precio}</p>
                                        <button id="boton${producto.id}" class="boton-carrito mx-auto my-auto mt-1"><p class="texto-boton">Agregar al Carrito</p></button>
                                    </div>`;
            contenedorLatas.appendChild(divProducto);
            cantidades(producto)
            botonera(producto)
            const boton = document.querySelector(`#boton${producto.id}`);
            boton.addEventListener("click", () => {
                botonera(producto)
            })
        })
    });
/*AGREGAR AL CARRITO*/
function botonera (producto) {
    const boton = document.querySelector(`#boton${producto.id}`);
    boton.addEventListener("click", ()=>{
        Swal.fire({
            width: "80rem",
            title: "??Agregar Item al Carrito?",
            icon: "warning",
            iconColor: "#FE5D1C",
            confirmButtonText: "Confirmar",
            confirmButtonColor: "#FE5D1C",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#FE5D1C",
        }).then((result) => {
            if(result.isConfirmed){
                agregarLata(producto.id)
                Toastify({
                    text: "Producto Agregado",
                    duration: 2000,
                    position: "center",
                    gravity: "bottom",
                    close: true,
                    style: {
                        background: "#000000",
                        color: "#E8FF94",
                    }
                }).showToast();
            }
        })
    })
};

agregarLata = (id) => {
    const producto = latas.find(producto => producto.id === id);
    let total = document.querySelector(`#cantidad${producto.id}`);
    const pedido = new Pedido(producto.id, producto.tipo, producto.variedad, total.innerHTML, producto.precio * total.innerHTML);
    carrito = localStorage.getItem("pedido") ? JSON.parse(localStorage.getItem("pedido")) : [];
    carrito = carrito.find(producto => producto.id === id) ? duplicar (id, producto, pedido) : agregarNuevo(pedido);
}
function duplicar(id, producto, pedido){
    const duplicado = carrito.find(producto => producto.id === id);
    if(duplicado.id === id){
        const pedidoDuplicado = new Pedido(producto.id, producto.tipo, producto.variedad, parseInt(pedido.cantidad) + parseInt(duplicado.cantidad), pedido.precio + duplicado.precio);
        const previo = carrito.find(item => item.id === id);
        carrito.splice(carrito.indexOf(previo), 1);
        carrito.push(pedidoDuplicado);
        localStorage.setItem("pedido", JSON.stringify(carrito));
        pintarcarrito()
    }
}
function agregarNuevo (pedido) {
    carrito.push(pedido);
    localStorage.setItem("pedido", JSON.stringify(carrito));
    pintarcarrito()
}


/*GROWLERS*/
const contenedorGrowlers = document.querySelector("#contenedorGrowlers");
growlers.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add(`feria-${producto.id}-gr`, "grid-botonera");
    divProducto.innerHTML =`<img class="botonera1 my-auto mx-auto img-feria-gr mb-2 mt-2" src="../assets/img/feria/${producto.id}.jpg" alt="Lata Blonde">
                            <div class="botonera2 my-auto me-auto d-flex flex-column botonera-sumar">
                                <button id="sumar${producto.id}" class="boton-sumar1 my-auto mx-auto"><p class="my-auto mx-auto">???</p></button>
                                <div class="boton-sumar2"><p id="cantidad${producto.id}" class="my-auto text-center"></p></div>
                                <button id="restar${producto.id}" class="boton-sumar3 my-auto mx-auto"><p class="my-auto mx-auto">???</p></button>
                            </div>
                            <div class="botonera3 mx-auto my-auto d-flex flex-column">
                                <p class="titulos-feria text-center my-auto">${producto.tipo} ${producto.variedad}</p>
                                <p class="precios mx-auto my-auto">$${producto.precio}</p>
                                <button id="boton${producto.id}" class="boton-carrito mx-auto my-auto mt-1"><p class="texto-boton">Agregar al Carrito</p></button>
                            </div>`;
    contenedorGrowlers.appendChild(divProducto);
    cantidades(producto)
    botoneraGr(producto)
    const boton = document.querySelector(`#boton${producto.id}`);
    boton.addEventListener("click", () => {
        botoneraGr(producto)
    })
});
/*AGREGAR AL CARRITO*/
function botoneraGr (producto) {
    const boton = document.querySelector(`#boton${producto.id}`);
    boton.addEventListener("click", ()=>{
        Swal.fire({
            width: "80rem",
            title: "??Agregar Item al Carrito?",
            icon: "warning",
            iconColor: "#FE5D1C",
            confirmButtonText: "Confirmar",
            confirmButtonColor: "#FE5D1C",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#FE5D1C",
        }).then((result) => {
            if(result.isConfirmed){
                agregarGrowler(producto.id)
                Toastify({
                    text: "Producto Agregado",
                    duration: 2000,
                    position: "center",
                    gravity: "bottom",
                    close: true,
                    style: {
                        background: "#000000",
                        color: "#E8FF94",
                    }
                }).showToast();
            }
        })
    })
};

agregarGrowler = (id) => {
    const producto = growlers.find(producto => producto.id === id);
    let total = document.querySelector(`#cantidad${producto.id}`);
    const pedido = new Pedido(producto.id, producto.tipo, producto.variedad, total.innerHTML, producto.precio * total.innerHTML);
    carrito = localStorage.getItem("pedido") ? JSON.parse(localStorage.getItem("pedido")) : [];
    carrito = carrito.find(producto => producto.id === id) ? duplicarGr (id, producto, pedido) : agregarNuevoGr(pedido);
}
function duplicarGr(id, producto, pedido){
    const duplicado = carrito.find(producto => producto.id === id);
    if(duplicado.id === id){
        const pedidoDuplicado = new Pedido(producto.id, producto.tipo, producto.variedad, parseInt(pedido.cantidad) + parseInt(duplicado.cantidad), pedido.precio + duplicado.precio);
        const previo = carrito.find(item => item.id === id);
        carrito.splice(carrito.indexOf(previo), 1);
        carrito.push(pedidoDuplicado);
        localStorage.setItem("pedido", JSON.stringify(carrito));
        pintarcarrito()
    }
}
function agregarNuevoGr (pedido) {
    carrito.push(pedido);
    localStorage.setItem("pedido", JSON.stringify(carrito));
    pintarcarrito()
}

/*PACKS*/
const contenedorPacks = document.querySelector("#contenedorPacks");
packs.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add(`feria-${producto.id}-p`, "grid-botonera");
    divProducto.innerHTML =`<img class="botonera1 my-auto mx-auto img-feria mb-2 mt-2" src="../assets/img/feria/${producto.id}.jpg" alt="Lata Blonde">
                            <div class="botonera2 my-auto me-auto d-flex flex-column botonera-sumar">
                                <button id="sumar${producto.id}" class="boton-sumar1 my-auto mx-auto"><p class="my-auto mx-auto">???</p></button>
                                <div class="boton-sumar2"><p id="cantidad${producto.id}" class="my-auto text-center"></p></div>
                                <button id="restar${producto.id}" class="boton-sumar3 my-auto mx-auto"><p class="my-auto mx-auto">???</p></button>
                            </div>
                            <div class="botonera3 mx-auto my-auto d-flex flex-column">
                                <p class="titulos-feria text-center my-auto">${producto.tipo} ${producto.variedad}</p>
                                <p class="precios mx-auto my-auto">$${producto.precio}</p>
                                <button id="boton${producto.id}" class="boton-carrito mx-auto my-auto mt-1"><p class="texto-boton">Agregar al Carrito</p></button>
                            </div>`;
    contenedorPacks.appendChild(divProducto);
    cantidades(producto)
    botoneraPk(producto)
    const boton = document.querySelector(`#boton${producto.id}`);
    boton.addEventListener("click", () => {
        botoneraPk(producto)
    })
});
/*AGREGAR AL CARRITO*/
function botoneraPk (producto) {
    const boton = document.querySelector(`#boton${producto.id}`);
    boton.addEventListener("click", ()=>{
        Swal.fire({
            width: "80rem",
            title: "??Agregar Item al Carrito?",
            icon: "warning",
            iconColor: "#FE5D1C",
            confirmButtonText: "Confirmar",
            confirmButtonColor: "#FE5D1C",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#FE5D1C",
        }).then((result) => {
            if(result.isConfirmed){
                agregarPk(producto.id)
                Toastify({
                    text: "Producto Agregado",
                    duration: 2000,
                    position: "center",
                    gravity: "bottom",
                    close: true,
                    style: {
                        background: "#000000",
                        color: "#E8FF94",
                    }
                }).showToast();
            }
        })
    })
};

agregarPk = (id) => {
    const producto = packs.find(producto => producto.id === id);
    let total = document.querySelector(`#cantidad${producto.id}`);
    const pedido = new Pedido(producto.id, producto.tipo, producto.variedad, total.innerHTML, producto.precio * total.innerHTML);
    carrito = localStorage.getItem("pedido") ? JSON.parse(localStorage.getItem("pedido")) : [];
    carrito = carrito.find(producto => producto.id === id) ? duplicarPk (id, producto, pedido) : agregarNuevoPk(pedido);
}
function duplicarPk(id, producto, pedido){
    const duplicado = carrito.find(producto => producto.id === id);
    if(duplicado.id === id){
        const pedidoDuplicado = new Pedido(producto.id, producto.tipo, producto.variedad, parseInt(pedido.cantidad) + parseInt(duplicado.cantidad), pedido.precio + duplicado.precio);
        const previo = carrito.find(item => item.id === id);
        carrito.splice(carrito.indexOf(previo), 1);
        carrito.push(pedidoDuplicado);
        localStorage.setItem("pedido", JSON.stringify(carrito));
        pintarcarrito()
    }
}
function agregarNuevoPk (pedido) {
    carrito.push(pedido);
    localStorage.setItem("pedido", JSON.stringify(carrito));
    pintarcarrito()
}

/*VARIOS*/
const contenedorVarios = document.querySelector("#contenedorVarios");
varios.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add(`feria-${producto.id}-v`, "grid-botonera");
    divProducto.innerHTML =`<img class="botonera1 my-auto mx-auto img-feria mb-2 mt-2" src="../assets/img/feria/${producto.id}.jpg" alt="Lata Blonde">
                            <div class="botonera2 my-auto me-auto d-flex flex-column botonera-sumar">
                                <button id="sumar${producto.id}" class="boton-sumar1 my-auto mx-auto"><p class="my-auto mx-auto">???</p></button>
                                <div class="boton-sumar2"><p id="cantidad${producto.id}" class="my-auto text-center"></p></div>
                                <button id="restar${producto.id}" class="boton-sumar3 my-auto mx-auto"><p class="my-auto mx-auto">???</p></button>
                            </div>
                            <div class="botonera3 mx-auto my-auto d-flex flex-column">
                                <p class="titulos-feria text-center my-auto">${producto.tipo} ${producto.variedad}</p>
                                <p class="precios mx-auto my-auto">$${producto.precio}</p>
                                <button id="boton${producto.id}" class="boton-carrito mx-auto my-auto mt-1"><p class="texto-boton">Agregar al Carrito</p></button>
                            </div>`;
    contenedorVarios.appendChild(divProducto);
    cantidades(producto)
    botoneraVr(producto)
    const boton = document.querySelector(`#boton${producto.id}`);
    boton.addEventListener("click", () => {
        botoneraVr(producto)
    })
});
/*AGREGAR AL CARRITO*/
function botoneraVr (producto) {
    const boton = document.querySelector(`#boton${producto.id}`);
    boton.addEventListener("click", ()=>{
        Swal.fire({
            width: "80rem",
            title: "??Agregar Item al Carrito?",
            icon: "warning",
            iconColor: "#FE5D1C",
            confirmButtonText: "Confirmar",
            confirmButtonColor: "#FE5D1C",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#FE5D1C",
        }).then((result) => {
            if(result.isConfirmed){
                agregarVr(producto.id)
                Toastify({
                    text: "Producto Agregado",
                    duration: 2000,
                    position: "center",
                    gravity: "bottom",
                    close: true,
                    style: {
                        background: "#000000",
                        color: "#E8FF94",
                    }
                }).showToast();
            }
        })
    })
};

agregarVr = (id) => {
    const producto = varios.find(producto => producto.id === id);
    let total = document.querySelector(`#cantidad${producto.id}`);
    const pedido = new Pedido(producto.id, producto.tipo, producto.variedad, total.innerHTML, producto.precio * total.innerHTML);
    carrito = localStorage.getItem("pedido") ? JSON.parse(localStorage.getItem("pedido")) : [];
    carrito = carrito.find(producto => producto.id === id) ? duplicarVr (id, producto, pedido) : agregarNuevoVr(pedido);
}
function duplicarVr(id, producto, pedido){
    const duplicado = carrito.find(producto => producto.id === id);
    if(duplicado.id === id){
        const pedidoDuplicado = new Pedido(producto.id, producto.tipo, producto.variedad, parseInt(pedido.cantidad) + parseInt(duplicado.cantidad), pedido.precio + duplicado.precio);
        const previo = carrito.find(item => item.id === id);
        carrito.splice(carrito.indexOf(previo), 1);
        carrito.push(pedidoDuplicado);
        localStorage.setItem("pedido", JSON.stringify(carrito));
        pintarcarrito()
    }
}
function agregarNuevoVr (pedido) {
    carrito.push(pedido);
    localStorage.setItem("pedido", JSON.stringify(carrito));
    pintarcarrito()
}

/*SUMAR Y RESTAR CANTIDADES*/
function cantidades (producto) {
    let total = document.querySelector(`#cantidad${producto.id}`);
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
    document.querySelector(`#sumar${producto.id}`).addEventListener('click', sumar);
    document.querySelector(`#restar${producto.id}`).addEventListener('click', restar);
};

/*CARRITO STYLE*/
function pintarcarrito () {
    /*NUMERO DE ITEMS CARRITO*/
    let numeroSvg = document.querySelectorAll(".numero-svg");
    let numeroItems = carrito.length;
    for(let numeroSvgs of numeroSvg){
        if (pedidos = localStorage.getItem("pedido")){
            numeroSvgs.innerHTML = numeroItems;
        }
    }
    /*PINTAR CARRITO*/
    let svg = document.querySelectorAll(".svg-carrito");
    for(let svgs of svg){
        if (pedidos = localStorage.getItem("pedido")){
            svgs.style.fill = "#FE5D1C";
        }
    }
};



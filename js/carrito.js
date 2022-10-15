class Pedido{
    constructor(id, tipo, variedad, cantidad, precio){
        this.id = id;
        this.tipo = tipo;
        this.variedad = variedad,
        this.cantidad = cantidad;
        this.precio = precio;
    }
};

/*CREAR ITEM DOM*/
let contenedorCarrito = document.querySelector("#contenedorCarrito");
let pedido = localStorage.getItem("pedido") ? JSON.parse(localStorage.getItem("pedido")) : [];
pedido.forEach((item) => {
    let pedidoNuevo = new Pedido(item.id, item.tipo, item.variedad, item.cantidad, item.precio);
    pedidoNuevo = document.createElement("tr");
    pedidoNuevo.innerHTML =`
                            <th scope="row">●</th>
                            <td class="me-auto">
                                <p class="texto-items me-auto mb-auto">${item.tipo} ${item.variedad}</p>
                            </td>
                            <td class="my-auto">
                                <img class="d-flex img-carrito me-auto mb-auto" src="../assets/img/feria/${item.id}.jpg" alt="Cerveza Blonde">
                            </td>
                            <td class="texto-items my-auto">$${item.precio}</td>
                            <td class="my-auto">
                                <p class="texto-items my-auto boton-sumar2-carrito text-center">${item.cantidad}</p>
                            </td>
                            <td scope="col"><button class="boton-eliminar" id="eliminarItem${item.id}"><p class="texto-eliminar my-auto mx-auto">Eliminar</p></button></td>
                            `;
    contenedorCarrito.appendChild(pedidoNuevo);
    eliminarItem(item)
});

/*ELIMINAR ITEM*/
function eliminarItem (item) {
    const boton = document.querySelector(`#eliminarItem${item.id}`);
    boton.addEventListener("click", ()=>{
        Swal.fire({
            width: "50rem",
            title: "¿Eliminar Item?",
            icon: "warning",
            iconColor: "#FE5D1C",
            confirmButtonText: "Si",
            confirmButtonColor: "#FE5D1C",
            showCancelButton: true,
            cancelButtonText: "No",
            cancelButtonColor: "#FE5D1C",
        }).then((result) => {
            if(result.isConfirmed){
                eliminarProducto(item.id)
            }
        })
    })
};
function eliminarProducto (id) {
    const producto = pedido.find(item => item.id === id);
    pedido.splice(pedido.indexOf(producto), 1);
    localStorage.setItem("pedido", JSON.stringify(pedido));
    if(pedido.length == 0){
        localStorage.clear();
    }
    actualizarCarrito()
};

/*TOTAL COMPRA*/
let totalCompra = document.querySelector("#totalCompra");
const suma = pedido.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);
totalCompra.innerText = ` $${suma}`;

/*ACTUALIZAR CARRITO*/
document.getElementById("actualizarCarrito").addEventListener('click', actualizarCarrito);
function actualizarCarrito () {
    pedido = localStorage.getItem("pedido") ? JSON.parse(localStorage.getItem("pedido")) : [];
    if(pedido.length == 0){
        localStorage.clear();
    }
    location.reload()
};

/*VACIAR CARRITO*/
const vaciarCarrito = document.querySelector("#vaciarCarrito")
vaciarCarrito.addEventListener("click", () => {
    Swal.fire({
        width: "80rem",
        title: "¿Está Seguro de Que Desea Vaciar el Carrito?",
        icon: "warning",
        iconColor: "#FE5D1C",
        confirmButtonText: "Confirmar",
        confirmButtonColor: "#FE5D1C",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonColor: "#FE5D1C",
    }).then((result) => {
        if(result.isConfirmed){
            vaciar()
        }
    })
});
function vaciar () {
    localStorage.clear();
    actualizarCarrito()
};

/*FINALIZAR COMPRA*/
const finalizarCompra = document.querySelector("#finalizarCompra");
finalizarCompra.addEventListener("click", () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra Finalizada!',
        text: 'Gracias por Elegirnos!',
        showConfirmButton: false,
        timer: 1500
    }).then( () => {
        vaciar()
    })
})

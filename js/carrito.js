class Pedido{
    constructor(id, tipo, variedad, cantidad, precio){
        this.id = id;
        this.tipo = tipo;
        this.variedad = variedad,
        this.cantidad = cantidad;
        this.precio = precio;
    }
}
/*CREAR ITEM*/
let contenedorCarrito = document.getElementById("contenedorCarrito");
let pedido = JSON.parse(localStorage.getItem("pedido"));
pedido.forEach(item => {
    let pedidoNuevo = new Pedido(item.id, item.tipo, item.variedad, item.cantidad, item.precio);
    pedidoNuevo = document.createElement("tr");
    pedidoNuevo.innerHTML =`
                            <th scope="row">●</th>
                            <td class="me-auto">
                                <p class="me-auto mb-auto">${item.tipo} ${item.variedad}</p>
                            </td>
                            <td class="my-auto">
                                <img class="d-flex img-carrito me-auto mb-auto" src="../assets/img/feria/${item.id}.jpg" alt="Cerveza Blonde">
                            </td>
                            <td class="my-auto">$${item.precio}</td>
                            <td class="my-auto">
                                <p class="my-auto boton-sumar2-carrito text-center">${item.cantidad}</p>
                            </td>
                            <td scope="col"><button onClick = "eliminarItem(${item.id})"><p class="my-auto mx-auto">Eliminar Item</p></button></td>
                            `;
    contenedorCarrito.appendChild(pedidoNuevo);
    // const botonEliminar = document.getElementById(`botonEliminar${item.id}`);
    // botonEliminar.addEventListener("click", () => {
    //     eliminarProducto(item.id)
    // })
})
/*ELIMINAR ITEM*/
const eliminarItem = (id) => {
    const producto = pedido.find(item => item.id === id);
    pedido.splice(pedido.indexOf(producto), 1);
    actualizarCarrito();
}
/*TOTAL COMPRA*/
let totalCompra = document.getElementById("totalCompra");
const suma = pedido.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);
totalCompra.innerText = `$${suma}`;
/*ACTUALIZAR CARRITO*/
document.getElementById("actualizarCarrito").addEventListener('click', actualizarCarrito);
function actualizarCarrito () {
    location.reload()
}
/*VACIAR CARRITO*/
document.getElementById("vaciarCarrito").addEventListener('click', vaciar);
function vaciar () {
    localStorage.clear();
    location.reload()
};

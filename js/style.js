let pedidos = localStorage.getItem("pedido") ? JSON.parse(localStorage.getItem("pedido")) : [];
/*COLOR CARRITO*/
let svg = document.querySelectorAll(".svg-carrito");
for(let svgs of svg){
    if (pedidos = localStorage.getItem("pedido")){
        svgs.style.fill = "#FE5D1C";
    }
}

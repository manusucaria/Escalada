let pedidos = localStorage.getItem("pedido") ? JSON.parse(localStorage.getItem("pedido")) : [];
/*COLOR CARRITO*/
let svg = document.querySelectorAll(".svg-carrito");
for(let svgs of svg){
    if (pedidos = localStorage.getItem("pedido")){
        svgs.classList.add = "svg-cargado";
        console.log(svg)
    }
}
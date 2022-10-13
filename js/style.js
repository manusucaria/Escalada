let pedidos = localStorage.getItem("pedido") ? JSON.parse(localStorage.getItem("pedido")) : [];
let carritoStyle = [];
class Pedidos{
    constructor(id, tipo, variedad, cantidad, precio){
        this.id = id;
        this.tipo = tipo;
        this.variedad = variedad,
        this.cantidad = cantidad;
        this.precio = precio;
    }
};
pedidos.forEach(item => {
    let pedidoNuevo = new Pedidos(item.id, item.tipo, item.variedad, item.cantidad, item.precio);
    carritoStyle.push(pedidoNuevo)
});
/*COLOR CARRITO*/
let svg = document.querySelectorAll(".svg-carrito");
for(let svgs of svg){
    if (pedidos = localStorage.getItem("pedido")){
        svgs.style.fill = "#FE5D1C";
    }
};
/*NUMERO DE ITEMS CARRITO*/
let numeroSvg = document.querySelectorAll(".numero-svg");
let numeroItems = carritoStyle.length;
for(let numeroSvgs of numeroSvg){
    if (pedidos = localStorage.getItem("pedido")){
        numeroSvgs.innerHTML = numeroItems;
    }
};
/*VIDEO INICIO*/
let videoInicio = document.querySelector("#video-inicio");
videoInicio.onwheel = () =>{
    let video = videoInicio;
    video.classList.add("video-mouse")
    setInterval(()=>{
        video.style.transform = "traslate(1000px)"
    },100)
    setInterval(()=>{
        video.style.display = "none"
    },200)
};

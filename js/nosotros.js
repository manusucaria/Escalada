/*TEXTO NOSOTROS*/
let textoNos = document.querySelector("#textoNos");
let contenidoNos = document.querySelector("#contenidoNos");
let texto = str => {
    let arrTexto = str.split("");
    let i = 0;
    let imprimirStr = setInterval(function() {
        if(arrTexto[i] === ""){
            textoNos.innerHTML += arrTexto[i + 1];
            i += 2;
        }else{
            textoNos.innerHTML += arrTexto[i];
            i++;
        }
        if(i === arrTexto.length){
            clearInterval(imprimirStr);
        }
    },100);
};
texto(`Somos una Fábrica de Cervezas finas de elaboración artesanal de la más alta calidad y estandar de producción.`);
console.log(textoNos.innerHTML)
let texto2 = str => {
    let arrTexto = str.split("");
    let i = 0;
    let imprimirStr = setInterval(function() {
        if(arrTexto[i] === ""){
            contenidoNos.innerHTML += arrTexto[i + 1];
            i += 2;
        }else{
            contenidoNos.innerHTML += arrTexto[i];
            i++;
        }
        if(i === arrTexto.length){
            clearInterval(imprimirStr);
        }
    },100)
};
texto2(`El sabor es nuestro diseño.`);



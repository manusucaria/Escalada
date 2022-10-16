const lupaBuscador = document.querySelector("#lupaBuscador");
const inputBuscador = document.querySelector("#inputBuscador");
const contenidoBuscador = document.querySelector("#contenidoBuscador");
const opcionesBuscador = document.querySelector("#opcionesBuscador");
const fondoBuscador = document.querySelector("#fondoBuscador");
let buscadorActivo = false;

function mostrarBuscador () {
    if(buscadorActivo == false){
        inputBuscador.style.display = "flex";
        contenidoBuscador.focus();
        fondoBuscador.style.opacity = ".4";
        buscadorActivo = true;
    }else{
        inputBuscador.style.display = "none";
        fondoBuscador.style.opacity = "1";
        buscadorActivo = false;
    }
};
function ocultarBuscador () {
    inputBuscador.style.display = "none";
    opcionesBuscador.style.display = "none";
    fondoBuscador.style.opacity = "1";
    buscadorActivo = false;
};

lupaBuscador.addEventListener("click", mostrarBuscador);
fondoBuscador.addEventListener("click", ocultarBuscador);

/*FILTRO DE BUSQUEDA*/
document.getElementById("inputBuscador").addEventListener("keyup", buscadorInterno);
function buscadorInterno () {
    filtro = contenidoBuscador.value.toUpperCase();
    li = opcionesBuscador.getElementsByTagName("li");
    for (i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;
        if(textValue.toUpperCase().indexOf(filtro) > -1){
            li[i].style.display = "flex";
            opcionesBuscador.style.display = "flex";
            if(contenidoBuscador.value === ""){
                opcionesBuscador.style.display = "none";
            }
        }else{
            li[i].style.display = "none";
        }
    }
};


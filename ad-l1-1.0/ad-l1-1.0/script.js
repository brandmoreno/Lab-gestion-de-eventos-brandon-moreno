const titulo = document.getElementById("rojo");
titulo.textContent = "Adiós";

const tituloClick = document.getElementById("click-naranja");

tituloClick.addEventListener("click", function(){
    tituloClick.style.color = "orange";
});
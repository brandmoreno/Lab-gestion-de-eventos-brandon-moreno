const botonEstilo = document.getElementById('botonEstilo')
const parrafo = document.getElementById('parrafo')


function cambiarEstilo(){
    parrafo.style.fontFamily = "'Times New Roman', Times, serif";
    parrafo.style.fontSize = "larger";
    parrafo.style.color = "red";
    
}

botonEstilo.addEventListener('click', cambiarEstilo);


const formulario = document.getElementById('form1');

function obtenerValores(event) {
    event.preventDefault(); 
    const nombre = document.querySelector('input[name="fname"]').value;
    const apellido = document.querySelector('input[name="lname"]').value;

    console.log(nombre + " " + apellido);
    
}

formulario.addEventListener('submit', obtenerValores);


const alerta = document.getElementById('botonEnlaces');

function alertFunction(){
    const enlaces = document.querySelectorAll('a');
    const totalEnlances = enlaces.length;
    const primerEnlace = enlaces[0].href;
    const ultimoEnlace = enlaces[totalEnlances -1].href;
    alert(`numero total de enlaces ${totalEnlances} primer enlace: ${primerEnlace} ultimo enlace: ${ultimoEnlace}`);
}

alerta.addEventListener('click', alertFunction);    
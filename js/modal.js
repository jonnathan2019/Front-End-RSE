
const logo = document.getElementById('logo-modal-2');
const mensage = document.querySelector('.mensage-2');
const boton = document.querySelector('.botones-modal');


const modal_cargando_contenido = document.querySelector('.modal-carga');
const contenedor_modal_cargando = document.getElementById('cotendor-modal-id');

function ocultar_modal_cargando(){
    modal_cargando_contenido.style.visibility = "hidden";
    modal_cargando_contenido.style.opacity = "0";
    contenedor_modal_cargando.style.transform = "translateY(-30%)"
}

function go_everywhere(){
    ocultar_modal_cargando();
    // aqui es donde acemos la funcion
}

function mostrar_modal_cargando() {
    // swal("Hello world!");
    modal_cargando_contenido.style.visibility = "visible";
    modal_cargando_contenido.style.opacity = "1";
    contenedor_modal_cargando.style.transform = "translateY(0%)"
    registrando_informacion();
}


function registrando_informacion(){
    logo.style.display = "none";
    logo.style.transition = "1.5s";
    logo.style.opacity = "1";

    mensage.style.display = "none";
    mensage.style.transition = "1.5s";
    mensage.style.opacity = "1";

    boton.style.display = "none";
    boton.style.transition = "1.5s";
    boton.style.opacity = "1";

    document.getElementById('logo-modal-1').style.display = "block";
    document.querySelector('.mensage-1').style.display = "block";
}

function registrado_completo() {
    logo.classList.remove("fa-check-circle");
    logo.classList.add("fa-times-circle");
    logo.style.display = "block";
    logo.style.transition = "1.5s";
    logo.style.opacity = "1";

    mensage.style.display = "block";
    mensage.style.transition = "1.5s";
    mensage.style.opacity = "1";

    boton.style.display = "block";
    boton.style.transition = "1.5s";
    boton.style.opacity = "1";

    
    logo.classList.add("fa-check-circle");
    logo.classList.remove("fa-times-circle");
    mensage.innerHTML = "Preguntas Registradas exitosamente."
    logo.style.color = "rgb(125, 240, 125)"

    document.getElementById('logo-modal-1').style.display = "none";
    document.querySelector('.mensage-1').style.display = "none";
}

function completado() {
    logo.style.display = "block";
    logo.style.transition = "1.5s";
    logo.style.opacity = "1";

    mensage.style.display = "block";
    mensage.style.transition = "1.5s";
    mensage.style.opacity = "1";

    boton.style.display = "block";
    boton.style.transition = "1.5s";
    boton.style.opacity = "1";

    document.getElementById('logo-modal-1').style.display = "none";
    document.querySelector('.mensage-1').style.display = "none";
}

function registrado_incompleto() {
    // <i class="far fa-times-circle"></i>
    logo.style.display = "block";
    //cabiarmos el icono
    logo.classList.remove("fa-check-circle");
    logo.classList.add("fa-times-circle");
    logo.style.color = "grey"

    mensage.style.display = "block";
    // cambiamos el texto 
    mensage.innerHTML = "Seleccione al menos una pregunta."

    boton.style.display = "block";
    boton.style.transition = "1.5s";
    boton.style.opacity = "1";

    document.getElementById('logo-modal-1').style.display = "none";
    document.querySelector('.mensage-1').style.display = "none";
}


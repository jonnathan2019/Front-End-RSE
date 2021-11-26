const info_retroalimenatcion_general = document.querySelector(".info-total")
console.log(info_retroalimenatcion_general)
function descargarPDF() {
    //const doc = new jsPDF();

    //doc.text("Hello world!", 10, 10);
    //doc.save("a4.pdf");
    //alert(2)
    
    //window.location.href = `${url_global_pagina}informe${extencion}`;

    //alert("hola mundo")
    window.open(
        `${url_global_pagina}informe${extencion}`,
        `_blank` // <- This is what makes it open in a new window.
    );
    
}

//PDF modal
const abri_pdf =document.getElementById("abrir_pdf");
const modal_pdf = document.getElementById("modal-pdf-id");
const contenedor_modal_pdf = document.getElementById("cotendor-modal-pdf-id");
// const cerrar_pdf_2 = document.getElementById("cerrar_pdf_2");
const cerrar_pdf = document.getElementById("cerrar_pdf");
//document.getElementById('table-temas').style.display = 'block'
abri_pdf.addEventListener('click',()=>{
    modal_pdf.style.visibility = "visible";
    modal_pdf.style.opacity = "1";
    contenedor_modal_pdf.style.transform = "translateY(0%)"
})

cerrar_pdf.addEventListener('click',()=>{
    modal_pdf.style.visibility = "hidden";
    modal_pdf.style.opacity = "0";
    contenedor_modal_pdf.style.transform = "translateY(-30%)"
})


//obtenemos la info del Usuario
async function getDataUsuarioPDF(usuario_ID) {
    const respuesta = await fetch(`${link_service}consultas/usuarioId/${usuario_ID}`)
    const json = await respuesta.json()

    return json;
}

function cargar_info_PDF(){
    var nombre_usuario = document.querySelector('.nombre-user').textContent;
    var correo_usuario = document.querySelector('.correo-user').textContent;

    document.querySelector('.nombre-usuario').innerHTML = nombre_usuario;
    document.querySelector('.correo-usuario').innerHTML = correo_usuario;
    
    console.log(usuario_ID);

    (async function (){
        const datos_empresa = await getDataUsuarioPDF(usuario_ID);
        document.querySelector('.nombre-empresa').innerHTML = `<label>Nombre:</label><span>${datos_empresa.encuestado.empresa.nombre}</span>`;
        document.querySelector('.sector-empresa').innerHTML = `<label>Sector:</label><span>${datos_empresa.encuestado.empresa.sector_tipo}</span>`;
        document.querySelector('.num-empleados-empresa').innerHTML = `<label>Numero de Empleados:</label><span>${datos_empresa.encuestado.empresa.numero_empleados}</span>`;
        document.querySelector('.ruc-empresa').innerHTML = `<label>RUC:</label><span>${datos_empresa.encuestado.empresa.ruc_empresa}</span>`;
        
    })()
    

    //obtenemos la retroalimentacion
    var retroalimentacion_general = document.querySelector('.retroalimentacion-general').textContent;
    var retroalimentacion_social = document.querySelector('.retroalimentacion-social').textContent;
    var retroalimentacion_ambiental = document.querySelector('.retroalimentacion-ambiental').textContent;

    document.querySelector('.retroalimentacion-general-pdf').innerHTML = retroalimentacion_general;
    document.querySelector('.retroalimentacion-social-pdf').innerHTML = retroalimentacion_social;
    document.querySelector('.retroalimentacion-ambiental-pdf').innerHTML = retroalimentacion_ambiental;
}
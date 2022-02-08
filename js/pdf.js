const info_retroalimenatcion_general = document.querySelector(".info-total")
// console.log(info_retroalimenatcion_general)
function ocultar_elementos() {
    var informacion = document.querySelector('.content-tabs')
    informacion.style.background = "#fff"
    informacion.style.border = "1px solid #fff"
    informacion.style.padding = "0px"

    var reporte_general = document.getElementById('reporte-general');
    var reporte_dimensiones = document.getElementById('reporte-dimenciones');
    var reporte_graficas = document.getElementById('reporte-graficas');
    var barra_principal = document.querySelector('.tabs');
    var barra_graficas = document.querySelector('.tabs-1');
    var graficas_temas = document.getElementById('reporte_graficas_temas');
    var graficas_dimensiones = document.getElementById('reporte_graficas_dimensiones');
    var selecionador_graficas_dim = document.getElementById('selector');
    var selecionador_graficas_temas = document.getElementById('selector_dim_bar');

    var grafica_radar_temas = document.getElementById('grafica-radar')
    var grafica_bar_horizontal_temas = document.getElementById('grafica-bar-vertical');

    var imagen_temas = document.querySelectorAll('.imagen');

    reporte_general.style.display = "block"
    reporte_dimensiones.style.display = "block"
    reporte_graficas.style.display = "block"

    reporte_dimensiones.style.marginTop = "40px"
    // reporte_dimensiones.style.background = "green"

    reporte_graficas.style.marginTop = "350px"
    // reporte_graficas.style.background = 'yellow'

    barra_principal.style.display = "none";
    barra_graficas.style.display = "none";
    grafica_radar_temas.style.display = "block";
    grafica_bar_horizontal_temas.style.display = "none";
    graficas_temas.style.display = "block";
    graficas_dimensiones.style.display = "block";
    selecionador_graficas_dim.style.display = "none";
    selecionador_graficas_temas.style.display = "none";

    // imagen_temas.style.display = "none"
    // imagen_temas.forEach(function(imagen) {
    //     imagen.style.display = "none"
    //   });
}

function mostrar_elementos() {
    var informacion = document.querySelector('.content-tabs')

    var reporte_general = document.getElementById('reporte-general');
    var reporte_dimensiones = document.getElementById('reporte-dimenciones');
    var reporte_graficas = document.getElementById('reporte-graficas');
    var barra_principal = document.querySelector('.tabs');
    var barra_graficas = document.querySelector('.tabs-1');
    var graficas_temas = document.getElementById('reporte_graficas_temas');
    var graficas_dimensiones = document.getElementById('reporte_graficas_dimensiones');
    var selecionador_graficas_dim = document.getElementById('selector');
    var selecionador_graficas_temas = document.getElementById('selector_dim_bar');

    var grafica_radar_temas = document.getElementById('grafica-radar')
    var grafica_bar_horizontal_temas = document.getElementById('grafica-bar-vertical');

    var imagen_temas = document.querySelectorAll('.imagen');


    // var dowloand = document.querySelector('.content-tabs')
    reporte_general.style.display = "block"
    reporte_dimensiones.style.display = "none"
    reporte_graficas.style.display = "none"

    reporte_dimensiones.style.marginTop = "0px"
    reporte_dimensiones.style.background = "none"

    reporte_graficas.style.marginTop = "0px"
    reporte_graficas.style.background = 'none'

    barra_principal.style.display = "block";
    barra_graficas.style.display = "block"
    grafica_radar_temas.style.display = "none"
    grafica_bar_horizontal_temas.style.display = "none"
    graficas_temas.style.display = "block";
    graficas_dimensiones.style.display = "none";
    selecionador_graficas_dim.style.display = "block";
    selecionador_graficas_temas.style.display = "block";

    // imagen_temas.forEach(function(imagen) {
    //     imagen.style.display = "block"
    //   });

    informacion.style.background = "#fbfbfb"
    informacion.style.border = "1px solid #dddddd"
    informacion.style.padding = "20px"
}

function enviarPDF() {
    // para mostrar el modal cargando 
    mostrar_modal_cargando();
    var informacion = document.querySelector('.content-tabs')
    informacion.style.background = "#fff"
    informacion.style.border = "1px solid #fff"
    informacion.style.padding = "0px"

    var reporte_general = document.getElementById('reporte-general');
    var reporte_dimensiones = document.getElementById('reporte-dimenciones');
    var reporte_graficas = document.getElementById('reporte-graficas');
    var barra_principal = document.querySelector('.tabs');
    var barra_graficas = document.querySelector('.tabs-1');
    var graficas_temas = document.getElementById('reporte_graficas_temas');
    var graficas_dimensiones = document.getElementById('reporte_graficas_dimensiones');
    var selecionador_graficas_dim = document.getElementById('selector');
    var selecionador_graficas_temas = document.getElementById('selector_dim_bar');

    var grafica_radar_temas = document.getElementById('grafica-radar')
    var grafica_bar_horizontal_temas = document.getElementById('grafica-bar-vertical');

    var imagen_temas = document.querySelectorAll('.imagen');

    reporte_general.style.display = "block"
    reporte_dimensiones.style.display = "block"
    reporte_graficas.style.display = "block"

    reporte_dimensiones.style.marginTop = "40px"
    // reporte_dimensiones.style.background = "green"

    reporte_graficas.style.marginTop = "350px"
    // reporte_graficas.style.background = 'yellow'

    barra_principal.style.display = "none";
    barra_graficas.style.display = "none";
    grafica_radar_temas.style.display = "block";
    grafica_bar_horizontal_temas.style.display = "none";
    graficas_temas.style.display = "block";
    graficas_dimensiones.style.display = "block";
    selecionador_graficas_dim.style.display = "none";
    selecionador_graficas_temas.style.display = "none";

    // imagen_temas.style.display = "none"
    // imagen_temas.forEach(function(imagen) {
    //     imagen.style.display = "none"
    //   });


    setTimeout(() => {
        // const html = document.querySelector('.content-tabs');
        const html = document.getElementById('contenido-resultados')
        console.log(html)


        // console.log("_____________________________")
        html2pdf()
            .set({
                margin: [0, 1],
                filenama: 'documento.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 2,
                    letterRedering: true
                },
                jsPDF: {
                    unit: "in",
                    format: "a2",
                    orientation: 'portrait' // landscape o portrait
                }
            })
            .from(html)
            .toPdf().output('datauristring').then(function (pdfAsString) {
                let data = {
                    'fileDataURI': pdfAsString,
                };
                console.log(data);
                $.post("../php/main.php", data);
                console.log(data);
                // alert("Enviado... ")
            });

        setTimeout(() => {

            // var dowloand = document.querySelector('.content-tabs')
            reporte_general.style.display = "block"
            reporte_dimensiones.style.display = "none"
            reporte_graficas.style.display = "none"

            reporte_dimensiones.style.marginTop = "0px"
            reporte_dimensiones.style.background = "none"

            reporte_graficas.style.marginTop = "0px"
            reporte_graficas.style.background = 'none'

            barra_principal.style.display = "block";
            barra_graficas.style.display = "block"
            grafica_radar_temas.style.display = "none"
            grafica_bar_horizontal_temas.style.display = "none"
            graficas_temas.style.display = "block";
            graficas_dimensiones.style.display = "none";
            selecionador_graficas_dim.style.display = "block";
            selecionador_graficas_temas.style.display = "block";

            // imagen_temas.forEach(function(imagen) {
            //     imagen.style.display = "block"
            //   });

            informacion.style.background = "#fbfbfb"
            informacion.style.border = "1px solid #dddddd"
            informacion.style.padding = "20px"
            // para mostrar el modal 
            completado();
        }, 10000)
    }, 3000)
    console.log('datso enciados')
}


function descargarPDF() {
    // para mostrar el modal cargando 
    mostrar_modal_cargando();
    // para ocultar los elemteos
    ocultar_elementos();

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const html = document.getElementById('generar-pdf')
            console.log(html);
            console.log("1. -> Paso");
            resolve(html)
        }, 2000)


    })

    promesa
        .then(res => {
            const promesa_2 = new Promise((resolve_2, reject) => {
                html2pdf()
                    .set({
                        margin: [0, 1],
                        filenama: 'documento.pdf',
                        image: {
                            type: 'jpeg',
                            quality: 0.98
                        },
                        html2canvas: {
                            scale: 2,
                            letterRedering: true
                        },
                        jsPDF: {
                            unit: "in",
                            format: "a2",
                            orientation: 'portrait' // landscape o portrait
                        }
                    })
                    .from(res)
                    .save()
                    .then(() => {
                        console.log("2. -> Paso");
                        resolve_2("Descargado.");
                    }
                    )
                    .catch(err => console.log(err))
            })

            promesa_2
                .then(res_2 => {
                    console.log(res_2)
                    console.log("3. -> Paso");
                    //para mostrar los elemenots 
                    mostrar_elementos();
                    // para mostrar el modal 
                    completado();
                })


        })
}

function imprimirPDF() {
    // para mostrar el modal cargando 
    mostrar_modal_cargando();
    // para ocultar los elemteos
    ocultar_elementos();

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const html = document.getElementById('generar-pdf')
            console.log(html);
            console.log("1. -> Paso");
            resolve(html)
        }, 2000)


    })

    promesa
        .then(res => {
            const promesa_2 = new Promise((resolve_2, reject) => {
                html2pdf()
                    .set({
                        margin: [0, 1],
                        filenama: 'documento.pdf',
                        image: {
                            type: 'jpeg',
                            quality: 0.98
                        },
                        html2canvas: {
                            scale: 2,
                            letterRedering: true
                        },
                        jsPDF: {
                            unit: "in",
                            format: "a2",
                            orientation: 'portrait' // landscape o portrait
                        }
                    })
                    .from(res)
                    // this code we can open PDF in a new page and print
                    .toPdf().get('pdf').then(function (pdfObj) {
                        // pdfObj has your jsPDF object in it, use it as you please!
                        // For instance (untested):
                        completado();
                        mostrar_elementos();
                        pdfObj.autoPrint();
                        window.open(pdfObj.output('bloburl'), '_blank');
                    });

                // this code is just to open de PDF in another page
                // .toPdf().get('pdf').then(function (pdf) {
                //     window.open(pdf.output('bloburl'), '_blank');
                // });
            })

            promesa_2
                .then(res_2 => {
                    console.log(res_2)
                    console.log("3. -> Paso");
                    //para mostrar los elemenots 
                    // para mostrar el modal 

                })


        })

}

//PDF modal
const abri_pdf = document.getElementById("abrir_pdf");
const modal_pdf = document.getElementById("modal-pdf-id");
const contenedor_modal_pdf = document.getElementById("cotendor-modal-pdf-id");
// const cerrar_pdf_2 = document.getElementById("cerrar_pdf_2");
const cerrar_pdf = document.getElementById("cerrar_pdf");
//document.getElementById('table-temas').style.display = 'block'
abri_pdf.addEventListener('click', () => {
    modal_pdf.style.visibility = "visible";
    modal_pdf.style.opacity = "1";
    contenedor_modal_pdf.style.transform = "translateY(0%)"
})

cerrar_pdf.addEventListener('click', () => {
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

function copiar_pdf() {
    var nombre_usuario = document.querySelector('.nombre-user').textContent;
    var correo_usuario = document.querySelector('.correo-user').textContent;

    document.querySelector('.nombre-usuario').innerHTML = nombre_usuario;
    document.querySelector('.correo-usuario').innerHTML = correo_usuario;

    // console.log(usuario_ID);

    (async function () {
        const datos_empresa = await getDataUsuarioPDF(usuario_ID);
        document.querySelector('.nombre-empresa').innerHTML = `<label>Nombre:</label><span>${datos_empresa.encuestado.empresa.nombre}</span>`;
        document.querySelector('.sector-empresa').innerHTML = `<label>Sector:</label><span>${datos_empresa.encuestado.empresa.sector_tipo}</span>`;
        document.querySelector('.num-empleados-empresa').innerHTML = `<label>Numero de Empleados:</label><span>${datos_empresa.encuestado.empresa.numero_empleados}</span>`;
        document.querySelector('.ruc-empresa').innerHTML = `<label>RUC:</label><span>${datos_empresa.encuestado.empresa.ruc_empresa}</span>`;

    })()

    setTimeout(() => {
        //we charge info general 
        const info_general = document.querySelector('.info-especifico').parentElement.innerHTML;
        // console.log(info_general)
        document.querySelector('.informacion-general').innerHTML = `${info_general}`;

        //we charge dimentions info 
        const info_dimensiones = document.querySelector('.puntaje-dimensiones').parentElement.innerHTML;
        document.querySelector('.info-desmepeno-dimensiones').innerHTML = `${info_dimensiones}`;

        //cargmos graficas dimensiones
        const grafica_dim_1 = document.querySelector('.grafica-bar-horizontal').parentElement.innerHTML;
        document.querySelector('.grafica-bar-dim-ver-pdf').innerHTML = `${grafica_dim_1}`;

        // const grafica_dim_2 = document.getElementById('grafica-bar-vertical').parentElement.innerHTML;
        // document.querySelector('.grafica-bar-dim-hor-pdf').innerHTML = `${grafica_dim_2}`;

        //graficas temas 
        const grafica_temas_1 = document.querySelector('.grafica-zoomable-sunburst').parentElement.innerHTML;
        document.getElementById('grafica_circular-pdf').innerHTML = `${grafica_temas_1}`;

        // const grafica_temas_2 = document.getElementById('grafica-radar').parentElement.innerHTML;
        // console.log(grafica_temas_2)
        // document.getElementById('grafica_radar-pdf').innerHTML = `${grafica_temas_2}`;
        //grafica-bar-vertical
        //grafica-bar-horizontal

    }, 2000)
}

function cargar_info_PDF() {
    // var nombre_usuario = document.querySelector('.nombre-user').textContent;
    // var correo_usuario = document.querySelector('.correo-user').textContent;

    // document.querySelector('.nombre-usuario').innerHTML = nombre_usuario;
    // document.querySelector('.correo-usuario').innerHTML = correo_usuario;

    // console.log(usuario_ID);

    // (async function (){
    //     const datos_empresa = await getDataUsuarioPDF(usuario_ID);
    //     document.querySelector('.nombre-empresa').innerHTML = `<label>Nombre:</label><span>${datos_empresa.encuestado.empresa.nombre}</span>`;
    //     document.querySelector('.sector-empresa').innerHTML = `<label>Sector:</label><span>${datos_empresa.encuestado.empresa.sector_tipo}</span>`;
    //     document.querySelector('.num-empleados-empresa').innerHTML = `<label>Numero de Empleados:</label><span>${datos_empresa.encuestado.empresa.numero_empleados}</span>`;
    //     document.querySelector('.ruc-empresa').innerHTML = `<label>RUC:</label><span>${datos_empresa.encuestado.empresa.ruc_empresa}</span>`;

    // })()


    //obtenemos la retroalimentacion
    // var retroalimentacion_general = document.querySelector('.retroalimentacion-general').textContent;
    // var retroalimentacion_social = document.querySelector('.retroalimentacion-social').textContent;
    // var retroalimentacion_ambiental = document.querySelector('.retroalimentacion-ambiental').textContent;

    // document.querySelector('.retroalimentacion-general-pdf').innerHTML = retroalimentacion_general;
    // document.querySelector('.retroalimentacion-social-pdf').innerHTML = retroalimentacion_social;
    // document.querySelector('.retroalimentacion-ambiental-pdf').innerHTML = retroalimentacion_ambiental;
}
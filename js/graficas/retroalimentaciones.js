function obtener_retroalimenatcion() {
    // console.log(resutaldo_final)//resulatdo final
    // console.log(objeto_resp)//resulatdo dimensiones y otros

    //Retroalimenatcion General
    // fetch(`${link_service}consultas/listarEstandares`)//obtenemos que indicadores son respondidos
    //     .then(respuesta => respuesta.json())
    //     .then(data => {
    //         data.forEach(element => {
    //             if (resutaldo_final > 0.66) {
    //                 document.querySelector('.retroalimentacion-general').innerHTML = element.retroalimentacion_puntaje_genaral.retroalimentacion_bueno;
    //             } else if (resutaldo_final < 0.33) {
    //                 document.querySelector('.retroalimentacion-general').innerHTML = element.retroalimentacion_puntaje_genaral.retroalimentacion_malo;
    //             } else {
    //                 document.querySelector('.retroalimentacion-general').innerHTML = element.retroalimentacion_puntaje_genaral.retroalimentacion_regular;
    //             }
    //             // //retroalimentacion_bueno
    //             // //retroalimentacion_regular
    //             // //retroalimentacion_malo
    //             // console.log(element.retroalimentacion_puntaje_genaral)
    //             // document.querySelector('.retroalimentacion-general').innerHTML = "out_info_user";
    //         })

    //     })

    //Retroalimentacion Temas
    fetch(`${link_service}consultas/listarDimensiones`)//obtenemos que indicadores son respondidos
        .then(respuesta => respuesta.json())
        .then(data => {
            data.forEach(element => {
                //console.log(element.nombre)
                objeto_resp.forEach(element_1 => {
                    if (element.nombre == element_1.dimension) {
                        if (element.nombre == 'Social') {
                            // console.log(element.nombre)
                            // console.log(element_1.nivel_2)
                            if (element_1.nivel_2 > 0.66) {
                                document.querySelector('.retroalimentacion-social').innerHTML = `Esta dimensión se aplica en gran parte de su empresa por lo que su empresa ya es considerada como una empresa sustentable y responsable.`;
                            } else if (element_1.nivel_2 > 0.33 && element_1.nivel_2 < 0.66 ) {
                                document.querySelector('.retroalimentacion-social').innerHTML = `Esta dimensión se aplica de forma media por lo que se sugiere mejorar en ciertos aspectos respecto a esta dimensión, para alcanzar un nivel óptimo de RSE.`;
                            } else {
                                document.querySelector('.retroalimentacion-social').innerHTML = 'Esta dimensión no se aplica en su empresa por lo que se sugiere empezar a trabar en esta dimensión.';
                            }
                        } else {
                            // console.log('-' + element.nombre)
                            // console.log(element_1.nivel_2)
                            if (element_1.nivel_2 > 0.66) {
                                document.querySelector('.retroalimentacion-ambiental').innerHTML = 'Esta dimensión se aplica en gran parte de su empresa por lo que su empresa ya es considerada como una empresa sustentable y responsable.';
                            } 
                            if (  element_1.nivel_2 > 0.33 && element_1.nivel_2 < 0.66 ) {
                                document.querySelector('.retroalimentacion-ambiental').innerHTML = `Esta dimensión se aplica de forma media por lo que se sugiere mejorar en ciertos aspectos respecto a esta dimensión, para alcanzar un nivel óptimo de RSE.`;
                            } 
    
                            if(element_1.nivel_2 < 0.33) {
                                document.querySelector('.retroalimentacion-ambiental').innerHTML = 'Esta dimensión no se aplica en su empresa por lo que se sugiere empezar a trabar en esta dimensión.';
                            }
                        }

                    }
                })

                // if (element.nombre == "Social") {

                // } else if (element.nombre == "Ambiental") {

                // }
            })
        })
}
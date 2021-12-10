(async function () {
    //llamamos a la funcion para que aplique el algoritmo
    await getAlgoritmo()

    setTimeout(() => {
        // console.log(resutaldo_final)//resulatdo final
        console.log(objeto_resp)//resulatdo dimensiones y otros

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
                                console.log(element.nombre)
                                if (element_1.nivel_2 > 0.66) {
                                    document.querySelector('.retroalimentacion-social').innerHTML = element.retroalimentacion_dimensiones.retroalimentacion_bueno;
                                } else if (element_1.nivel_2 < 0.33) {
                                    document.querySelector('.retroalimentacion-social').innerHTML = element.retroalimentacion_dimensiones.retroalimentacion_malo;
                                } else {
                                    document.querySelector('.retroalimentacion-social').innerHTML = element.retroalimentacion_dimensiones.retroalimentacion_regular;
                                }
                            } else {
                                console.log('-' + element.nombre)
                                if (element_1.nivel_2 > 0.66) {
                                    document.querySelector('.retroalimentacion-ambiental').innerHTML = element.retroalimentacion_dimensiones.retroalimentacion_bueno;
                                } else if (element_1.nivel_2 < 0.33) {
                                    document.querySelector('.retroalimentacion-ambiental').innerHTML = element.retroalimentacion_dimensiones.retroalimentacion_malo;
                                } else {
                                    document.querySelector('.retroalimentacion-ambiental').innerHTML = element.retroalimentacion_dimensiones.retroalimentacion_regular;
                                }
                            }

                        }
                    })

                    // if (element.nombre == "Social") {

                    // } else if (element.nombre == "Ambiental") {

                    // }
                })
            })
    }, 8000)

})()
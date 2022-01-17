let resutaldo_final;//tiene el resultado final del algoritmo
let objeto_resp;//objeto para guardar los resulatados de las dimensiones, temas e indicadores 
let respuesta_final_2;
let objeto_resp_2;
//Obtenemos el USUARIO de la URL
function obtener_valor(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}



var usuario_ID = obtener_valor("usuario");//OBtenemos el ID de la URLs
// console.log(usuario_ID)
//cargamos al informacion del USUARIO 
const info_user = document.querySelector('.datos-usuario');
let out_info_user = '';
var encuestado_ID;
fetch(`${link_service}consultas/usuarioId/${usuario_ID}`)
    .then(response => response.json())
    .then(data => {
        out_info_user += `
                            <div class="nombre-user">
                                <span>${data.usuario}</span>
                            </div>
                            <div class="correo-user">
                                <span>${data.encuestado.correo}</span>
                            </div>
                                `;
        info_user.innerHTML = out_info_user;
        encuestado_ID = data.encuestado.encuestado_ID;//guardamos el ID del encuestado

    })

var valor_minimo = [];
var valor_maximo = [];
var valor_real = [];
var indicadores_tema = [];//cantidad de indicadores por tema 
let tema_dimension = [4, 1];//***********************NUMERO DE TEMAS POR DIMENSION */
//______________OBTENER INFORMACION (creamos un objeto con toda la informaicion respecto a las respuestas del Usuaio)______________________
const objeto_respuestas = [];
const objeto_respuestas_new = [];
let auxiliar = 0;
//________________________________________--
async function getRespuetasIndicadores() {
    const respuesta = await fetch(`${link_service}consultas/respuestasIndicadores`)
    const json = await respuesta.json()

    return json;
}

async function getRespuetasIndicadoresPreguntas() {
    const respuesta = await fetch(`${link_service}consultas/respuestasIndicadoresPreguntas`)
    const json = await respuesta.json()

    return json;
}

async function getTotalDimensiones() {
    const respuesta = await fetch(`${link_service}consultas/listarDimensiones`)
    const json = await respuesta.json()

    return json;
}

async function getTotalTemas() {
    const respuesta = await fetch(`${link_service}consultas/listarTemas`)
    const json = await respuesta.json()

    return json;
}


async function getTotalIndicadores() {
    const respuesta = await fetch(`${link_service}consultas/listarIndicadores`)
    const json = await respuesta.json()

    return json;
}

function algoritmo_todo_aspecpectos(objeto_respuestas_new) {
    objeto_resp_2 = objeto_respuestas_new;
    objeto_resp_2.forEach(datos_preguntas => {
        //console.log(datos_preguntas)
        datos_preguntas.temas.forEach(element => {
            //console.log(element.indicadores)
            element.indicadores.forEach(element_2 => {//recorremos cada indicador
                //console.log(element_2.indicador)
                //console.log(element_2.respuestas)
                let sum = 0;
                let cont = 0;
                for (let i = 0; i < element_2.respuestas.length; i++) {
                    sum += element_2.respuestas[i];
                    cont = cont + 1;
                }
                element_2.valor_real = sum//guardamos la suma
                element_2.valor_maximo = cont * 2//el valor maximo (multiplicamos por dos por que es el valor maximo de cada pregunta)
                //normalizamos el valor real y guardamos en OBJETO
                element_2.valor_real_normalizado = (element_2.valor_real - element_2.valor_minimo) / (element_2.valor_maximo - element_2.valor_minimo)
            })
            element.uno_cantida_indiacadores = 1 / element.indicadores.length;//1 sobre cantidad de  INIDCADORES (1/cant_indicadores) 

        })

    })

    //--------------------- FORMULA -------------------------
    //--------------------- NIVEL 1 ------------------------
    let peso = 2;
    objeto_resp_2.forEach(datos_preguntas => {//recorremos DIMENSIONES
        datos_preguntas.temas.forEach(element => {//recorresmos TEMAS
            let cantidad_indadores_normalizado = element.uno_cantida_indiacadores;
            let suma_niveles = 0;
            element.indicadores.forEach(element_2 => {//recorremos cada indicador
                let total = Math.pow(element_2.valor_real_normalizado, peso) * cantidad_indadores_normalizado;
                element_2.valor_1_formula = total;//guardamos los resultados de los indicadores
                suma_niveles = suma_niveles + total;
            })
            element.nivel_1 = Math.pow(suma_niveles, 1 / peso).toFixed(3)//guardamos los resultados de los temas

        })
        datos_preguntas.uno_cantidad_temas = 1 / datos_preguntas.temas.length;//1 sobre la cantidad de TEMAS (1/cant_TEMAS)

    })
    //--------------------- NIVEL 2 -------------------------
    objeto_resp_2.forEach(datos_preguntas => {//recorremos DIMENSIONES
        let cantidad_temas_normalizados = datos_preguntas.uno_cantidad_temas;
        let suma_niveles = 0;
        datos_preguntas.temas.forEach(element => {//recorremos TEMAS
            //console.log(element)
            let total = Math.pow(element.nivel_1, peso) * cantidad_temas_normalizados;
            suma_niveles = suma_niveles + total;
        })
        //Math.pow(suma_niveles, 1 / peso).toFixed(3)
        datos_preguntas.nivel_2 = Math.pow(suma_niveles, 1 / peso).toFixed(3) //guardamos los resultados de las Dimenisones
    })
    //--------------------- NIVEL 3 -------------------------
    let suma_niveles = 0;
    objeto_resp_2.forEach(datos_preguntas => {//recorremos DIMENSIONES
        let total = Math.pow(datos_preguntas.nivel_2, peso) * datos_preguntas.uno_cantidad_temas;
        suma_niveles = suma_niveles + total;
    })
    respuesta_final_2 = Math.pow(suma_niveles, 1 / peso).toFixed(2);//FINAL DEL ALGORITMO-----------
    //---------------- FORMULA Fin ---------------------------
    // console.log(respuesta_final_2)

    // document.querySelector('.resultado-integracion-todo').innerHTML = `${(respuesta_final_2 * 100).toFixed(2)}%`

}

//Creamos el Objeto
(async function () {
    const total_dimensiones = await getTotalDimensiones();
    const total_temas = await getTotalTemas();
    const total_indicadores = await getTotalIndicadores();
    const respuestasIndicadores = await getRespuetasIndicadores()
    const respuestasIndicadoresPreguntas = await getRespuetasIndicadoresPreguntas()

    // console.log('Total de Dimensiones: '+total_dimensiones.length)
    // console.log('Total de Temas: '+total_temas.length)
    // console.log('Total de Indicadores: '+total_indicadores.length)
    // document.querySelector('.num-total-valor-dim').innerHTML = total_dimensiones.length;
    // document.querySelector('.num-total-valor-temas').innerHTML = total_temas.length;
    // document.querySelector('.num-total-valor-indi').innerHTML = total_indicadores.length;
    // ________________________
    //creamos el objeto con toda la info
    total_dimensiones.forEach(dimensiones_new => {//recoremos las dimensiones
        const object_dim_new = {
            dimension: dimensiones_new.nombre,
            temas: [],
            uno_cantidad_temas: 0,
            nivel_2: 0
        }
        objeto_respuestas_new.push(object_dim_new)
        total_temas.forEach(temas_new => {//recorremos los temas
            objeto_respuestas_new.find((dimen_new, index) => {
                if (dimen_new.dimension === temas_new.dimension.nombre) {
                    const object_tema = {
                        nombre: temas_new.nombre,
                        indicadores: [],
                        uno_cantida_indiacadores: 0,
                        nivel_1: 0
                    }
                    const tema_existe = objeto_respuestas_new[index].temas.find(t => t.nombre === temas_new.nombre)
                    if (!tema_existe) {
                        objeto_respuestas_new[index].temas.push(object_tema)
                    }
                    total_indicadores.forEach(indicador_new => {//recorremos los idnicadores
                        objeto_respuestas_new[index].temas.find((tema_new, index_1_new) => {
                            if (tema_new.nombre === indicador_new.tema.nombre) {
                                let array = [];
                                array.push('0' * indicador_new.preguntas_cualitativas.length);
                                // console.log(indicador_new.preguntas_cualitativas)
                                // console.log(indicador_new.preguntas_cualitativas.length)
                                for (i = 1; i < indicador_new.preguntas_cualitativas.length; i++) {
                                    array.push(0)
                                }
                                const object_inidcadores = {
                                    indicador: indicador_new.nombre,
                                    respuestas: array,
                                    valor_real: 0,
                                    valor_maximo: 0,
                                    valor_minimo: 0,
                                    valor_real_normalizado: 0,
                                    valor_1_formula: 0
                                }
                                const indicador_existe = objeto_respuestas_new[index].temas[index_1_new].indicadores.find(i => i.indicador === indicador_new.nombre)
                                if (!indicador_existe) {
                                    objeto_respuestas_new[index].temas[index_1_new].indicadores.push(object_inidcadores)
                                }

                            }
                        })
                    })

                }
            })
        })

    })

    // console.log(objeto_respuestas_new)
    objeto_respuestas_new.forEach(element_dim => {
        element_dim.temas.forEach(element_temas => {
            element_temas.indicadores.forEach(elem_indicador => {
                // console.log(elem_indicador.indicador)
                respuestasIndicadores.forEach(element => {
                    if (element.encuestado.encuestado_ID == encuestado_ID) {
                        respuestasIndicadoresPreguntas.forEach(respuestas_valores => {
                            if (element.respuestas_Indicadores_ID == respuestas_valores.respuestasaIndicadores.respuestas_Indicadores_ID && respuestas_valores.respuesta != -1) {
                                // console.log("-- " + element.indicador.tema.dimension.nombre)//nombre la dimension respondido
                                // console.log("----- " + element.indicador.tema.nombre)//nombre del tema respondido
                                // console.log("- " + element.indicador.nombre)//nombre del indicador respondido
                                // console.log("- " + respuestas_valores.preguntasCualitativas.pregunta_cualitativa)//pregunta
                                // console.log(respuestas_valores.respuesta)
                                if (element.indicador.nombre == elem_indicador.indicador) {
                                    elem_indicador.respuestas.shift();//eliminamos un elemento
                                    elem_indicador.respuestas.push(respuestas_valores.respuesta)
                                }

                            }
                        })
                    }

                })


                // console.log(elem_indicador.respuestas)
            })

        })
    })
    // console.log(objeto_respuestas_new)
    algoritmo_todo_aspecpectos(objeto_respuestas_new)
    // ________________________
    // respuestasIndicadores.forEach(element => {
    //     if (element.encuestado.encuestado_ID == encuestado_ID) {
    //         respuestasIndicadoresPreguntas.forEach(respuestas_valores => {
    //             if (element.respuestas_Indicadores_ID == respuestas_valores.respuestasaIndicadores.respuestas_Indicadores_ID  && respuestas_valores.respuesta != -1) {
    //                 console.log("-- " + element.indicador.tema.dimension.nombre)//nombre la dimension respondido
    //                 console.log("----- " + element.indicador.tema.nombre)//nombre del tema respondido
    //                 console.log("- " + element.indicador.nombre)//nombre del indicador respondido
    //                 console.log("- " + respuestas_valores.preguntasCualitativas.pregunta_cualitativa)//pregunta
    //                 console.log(respuestas_valores.respuesta)
    //             }
    //         })
    //     }

    // })

    //console.log(data)
    // console.log(encuestado_ID)
    respuestasIndicadores.forEach(element => {
        //console.log("- " + element.indicador.indicador_ID) //ID del indicador respondido
        //console.log("- "+element.respuestas_Indicadores_ID)
        //para o tener las respuesats solo del encuestado
        if (element.encuestado.encuestado_ID == encuestado_ID) {
            auxiliar = 1;
            // console.log(element.encuestado.encuestado_ID)
            let datos = []
            respuestasIndicadoresPreguntas.forEach(respuestas_valores => {
                if (element.respuestas_Indicadores_ID == respuestas_valores.respuestasaIndicadores.respuestas_Indicadores_ID && respuestas_valores.respuesta != -1) {//obtenemos las respuetas del indicador para realizar la suma
                    //console.log("-- " + element.indicador.tema.dimension.nombre)//nombre la dimensionrespondido
                    //console.log("----- " + element.indicador.tema.nombre)//nombre del tema respondido
                    //console.log("- " + element.indicador.nombre)//nombre del indicador respondido
                    //console.log(respuestas_valores.respuesta)
                    //guardamos desde DIMENIONES
                    const dimension_existe = objeto_respuestas.find(t => t.dimension === element.indicador.tema.dimension.nombre);
                    if (!dimension_existe) {
                        const object_dim = {
                            dimension: element.indicador.tema.dimension.nombre,
                            temas: [],
                            uno_cantidad_temas: 0,
                            nivel_2: 0
                        }
                        objeto_respuestas.push(object_dim)
                    }
                    objeto_respuestas.find((dimen, index) => {
                        if (dimen.dimension === element.indicador.tema.dimension.nombre) {
                            const object_tema = {
                                nombre: element.indicador.tema.nombre,
                                indicadores: [],
                                uno_cantida_indiacadores: 0,
                                nivel_1: 0
                            }

                            const tema_existe = objeto_respuestas[index].temas.find(t => t.nombre === element.indicador.tema.nombre)
                            if (!tema_existe) {
                                objeto_respuestas[index].temas.push(object_tema)
                            }
                            objeto_respuestas[index].temas.find((tema, index_1) => {
                                if (tema.nombre === element.indicador.tema.nombre) {
                                    const object_inidcadores = {
                                        indicador: element.indicador.nombre,
                                        respuestas: [],
                                        valor_real: 0,
                                        valor_maximo: 0,
                                        valor_minimo: 0,
                                        valor_real_normalizado: 0,
                                        valor_1_formula: 0
                                    }
                                    const indicador_existe = objeto_respuestas[index].temas[index_1].indicadores.find(i => i.indicador === element.indicador.nombre)
                                    if (!indicador_existe) {
                                        objeto_respuestas[index].temas[index_1].indicadores.push(object_inidcadores)
                                    }
                                    //00000
                                    objeto_respuestas[index].temas[index_1].indicadores.find((indica, inidex_2) => {
                                        if (indica.indicador === element.indicador.nombre) {
                                            objeto_respuestas[index].temas[index_1].indicadores[inidex_2].respuestas.push(respuestas_valores.respuesta)
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })

        }
    })
    if (auxiliar == 1) {
        //llamamos a la funcion para aplicar el algoritmo
        algoritmo_graficar();
    }


})()

//______Algoritmo Inicio_____
async function getAlgoritmo() {

    //---------------- FORMULA Inicio ---------------------------
    //console.log(objeto_respuestas)
    objeto_resp = objeto_respuestas;
    objeto_resp.forEach(datos_preguntas => {
        //console.log(datos_preguntas)
        datos_preguntas.temas.forEach(element => {
            //console.log(element.indicadores)
            element.indicadores.forEach(element_2 => {//recorremos cada indicador
                //console.log(element_2.indicador)
                //console.log(element_2.respuestas)
                let sum = 0;
                let cont = 0;
                for (let i = 0; i < element_2.respuestas.length; i++) {
                    sum += element_2.respuestas[i];
                    cont = cont + 1;
                }
                element_2.valor_real = sum//guardamos la suma
                element_2.valor_maximo = cont * 2//el valor maximo (multiplicamos por dos por que es el valor maximo de cada pregunta)
                //normalizamos el valor real y guardamos en OBJETO
                element_2.valor_real_normalizado = (element_2.valor_real - element_2.valor_minimo) / (element_2.valor_maximo - element_2.valor_minimo)
            })
            element.uno_cantida_indiacadores = 1 / element.indicadores.length;//1 sobre cantidad de  INIDCADORES (1/cant_indicadores) 

        })

    })

    //--------------------- FORMULA -------------------------
    //--------------------- NIVEL 1 ------------------------
    let peso = 2;
    objeto_resp.forEach(datos_preguntas => {//recorremos DIMENSIONES
        datos_preguntas.temas.forEach(element => {//recorresmos TEMAS
            let cantidad_indadores_normalizado = element.uno_cantida_indiacadores;
            let suma_niveles = 0;
            element.indicadores.forEach(element_2 => {//recorremos cada indicador
                let total = Math.pow(element_2.valor_real_normalizado, peso) * cantidad_indadores_normalizado;
                element_2.valor_1_formula = total;//guardamos los resultados de los indicadores
                suma_niveles = suma_niveles + total;
            })
            element.nivel_1 = Math.pow(suma_niveles, 1 / peso).toFixed(3)//guardamos los resultados de los temas

        })
        datos_preguntas.uno_cantidad_temas = 1 / datos_preguntas.temas.length;//1 sobre la cantidad de TEMAS (1/cant_TEMAS)

    })
    //--------------------- NIVEL 2 -------------------------
    objeto_resp.forEach(datos_preguntas => {//recorremos DIMENSIONES
        let cantidad_temas_normalizados = datos_preguntas.uno_cantidad_temas;
        let suma_niveles = 0;
        datos_preguntas.temas.forEach(element => {//recorremos TEMAS
            //console.log(element)
            let total = Math.pow(element.nivel_1, peso) * cantidad_temas_normalizados;
            suma_niveles = suma_niveles + total;
        })
        //Math.pow(suma_niveles, 1 / peso).toFixed(3)
        datos_preguntas.nivel_2 = Math.pow(suma_niveles, 1 / peso).toFixed(3) //guardamos los resultados de las Dimenisones
    })
    //--------------------- NIVEL 3 -------------------------
    let suma_niveles = 0;
    objeto_resp.forEach(datos_preguntas => {//recorremos DIMENSIONES
        let total = Math.pow(datos_preguntas.nivel_2, peso) * datos_preguntas.uno_cantidad_temas;
        suma_niveles = suma_niveles + total;
    })
    resutaldo_final = Math.pow(suma_niveles, 1 / peso).toFixed(2);//FINAL DEL ALGORITMO-----------
    //---------------- FORMULA Fin ---------------------------
}
//______Algoritmo FIn_____

function mostrar_resultados() {
    // document.querySelector('.totales-aspectos').style.display = "block";
    document.querySelector('.graficas').style.display = "block";
    document.getElementById('loader-resultados').style.display = "none";
}

function algoritmo_graficar() {

    (async function () {
        //llamamos a la funcion para que aplique el algoritmo
        await getAlgoritmo()

        console.log(objeto_resp)
        console.log(resutaldo_final)

        // llamos a las graficas
        setTimeout(() => {
            // colocamos las graficas
            // grafica barra circular
            grafica_circular_dashboard()
            // grafica circular zoomable
            grafica_zoomable_dashboard()
            // grafica radar
            grafica_radar_dashboard()
            // barra vertical
            grafica_bar_vertical_dashboard();
            // barra horizontal
            grafica_barra_horixzontal_dashboard();
            //mostrar panel
            mostrar_resultados();
        }, 2000)

    })()
    //-------------- MODAL Fin -------------------
}


////-----------------MENU-----------------------------
function menuToggle() {
    const toggleMenu = document.querySelector('.menu-salir');
    toggleMenu.classList.toggle('active')
}





function ir_evaluacion() {
    window.location.href = `${url_global_pagina}evaluacion_principal${extencion}?usuario=${usuario_ID}`;
}

function ir_dashboard() {
    window.location.href = `${url_global_pagina}dashboard${extencion}?usuario=${usuario_ID}`;
}

function ir_reporte() {
    window.location.href = `${url_global_pagina}resultados${extencion}?usuario=${usuario_ID}`;
}
function ir_perfil() {
    window.location.href = `${url_global_pagina}perfil_usuario${extencion}?usuario=${usuario_ID}`;
}

function ir_about() {
    window.location.href = `${url_global_pagina}about${extencion}?usuario=${usuario_ID}`;
}

function salir() {
    window.location.href = `${url_global_pagina}login_encuestado${extencion}`;
}
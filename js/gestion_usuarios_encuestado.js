var info_usuario;
//obtenemos los datos del usuario para verificar si se encuentran registrado
async function getDatosUsuarios() {
    const respuesta = await fetch(`${link_service}consultas/usuarios`)
    const json = await respuesta.json()

    return json;
}

//ingresamos el usuario 
async function setUsuarioEncuestado(usuario, contrasena, nombre, apellido, email) {
    await fetch(`${link_service}consultas/insertarUsuario`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            usuario: usuario,
            contrasena: contrasena,
            encuestado: {
                nombre: nombre,
                apellido: apellido,
                correo: email,
                empresa_ID: "2"
            }
        })
    })
}
var validar_email = 0;
function validar_correo(correo) {
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(correo)
    if (esValido == true) {
        validar_email = 1;
    } else {
        validar_email = 0;
    }
}

//Registrar Encuestado
function crearUsuario_Encuestado() {
    var nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let usuario = document.getElementById("nombre-usuario").value;
    let email = document.getElementById("email").value;
    let contrasena = document.getElementById("contrasena-id").value;
    let contrasenaConfir = document.getElementById("contrasena-confir").value;
    //validamos el correo
    validar_correo(email);

    if (nombre == "" || apellido == "" || usuario == "" || email == ""
        || contrasena == "" || contrasenaConfir == "") {
        swal("Porfavor ingrese todos los datos.")
    } else {
        if (contrasena != contrasenaConfir) {
            swal("La contrasena no conicide!")
        } else {
            if (validar_email != 0) {
                //Ingresamos el usuario
                (async function () {
                    await setUsuarioEncuestado(usuario, contrasena, nombre, apellido, email)
                    swal("", "Usuario Resgistrado Corectamente!", "success");
                    //vamos a crear la empresa
                    setTimeout(() => {
                        (async function () {
                            const datos_usuario = await getDatosUsuarios();
                            //Ordenamos los los Usuario/Encuestados
                            datos_usuario.sort(function (a, b) {
                                return a.usuario_ID - b.usuario_ID;
                            });
                            var ultimo_usario_ingresado = '';
                            datos_usuario.forEach(element => {
                                ultimo_usario_ingresado = element.usuario_ID
                            })
                            window.location.href = `${url_global_pagina}registrar_empresa${extencion}?usuario=${ultimo_usario_ingresado}`
                        })()
                    }, 3000)

                })()
            } else {
                swal("Correo Invalido!")
            }


            //vamos a crear la empresa
            // setTimeout(() => {
            //     fetch(`${link_service}consultas/usuarios`)
            //         .then(response => response.json())
            //         .then(data => {
            //             //Ordenamos los los Usuario/Encuestados
            //             data.sort(function (a, b) {
            //                 return a.usuario_ID - b.usuario_ID;
            //             });
            //             console.log(data)
            //             var ultimo_usario_ingresado = '';
            //             data.forEach(element => {
            //                 ultimo_usario_ingresado = element.usuario_ID
            //             })
            //             window.location.href = `${url_global_pagina}registrar_empresa${extencion}?usuario=${ultimo_usario_ingresado}`
            //         })

            // }, 3000)
        }
    }
}
//retraso
function syncDelay(milliseconds) {
    var start = new Date().getTime();
    var end = 0;
    while ((end - start) < milliseconds) {
        end = new Date().getTime();
    }
}

//Autentificar Encuestado
function autentificar_encuestado() {
    var usuario = document.getElementById("email").value;
    var contrasena = document.getElementById("password").value;

    if (usuario == "" || contrasena == "") {
        swal("Porfavor ingrese todos los campos.")
    } else {
        var valor = 0;
        (async function () {
            const datos_usuario = await getDatosUsuarios();
            await datos_usuario.forEach(element => {
                if (element.encuestado != null) {//para comparar solo el Encuestado
                    if (usuario == element.encuestado.correo) {
                        if (contrasena == element.contrasena) {
                            valor = 1;
                            swal("", "Se identifo correctamente!", "success");
                            setTimeout(() => {
                                window.location.href = `${url_global_pagina}evaluacion_principal${extencion}?usuario=${element.usuario_ID}`;
                            }, 2000)
                        }

                    }
                }
            })
            if (valor == 0) {
                swal("Datos incorrectos, por favor ingrese de nuevo.");
            }
        })()


    }
}



//para el ADMINISTRADOR
function registrar_administrador() {
    window.location.href = `${url_global_pagina}registrar_administrador${extencion}`
}

function ingresar_administrador() {
    window.location.href = `${url_global_pagina}registrar_normas/registrar_norma${extencion}`
}


function registrarse() {
    window.location.href = `${url_global_pagina}registrar_encuestado${extencion}`
}
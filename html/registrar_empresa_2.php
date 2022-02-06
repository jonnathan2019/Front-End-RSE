<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrar Empresa.</title>
    <link rel="icon" type="image/png" href="../imagenes/logo_3.png" />
    <link rel="stylesheet" href="../css/resgitrar_empresa_2.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">


    <link href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">

    <!--LETRA-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;1,400&display=swap"
        rel="stylesheet">

    <!--Libreria alerts-->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

</head>

<body class="cuerpo">
    <input type="checkbox" id="check">
    <!--NAV-->
    <div class="nav">
        <label class="logo">
            <img src="../imagenes/logo_3.png" alt="">
            <span>Responsabilidad Empresarial.</span>
        </label>
        <ul>
            <li class="salir" onclick="menuToggle();"><a class="far fa-user" href="#"></a></li>
            <div class="menu-salir">
                <div class="info-user">
                    <div class="logo-user">
                        <a class="far fa-user"></a>
                    </div>
                    <div class="datos-usuario">
                        <div class="nombre-user">
                            <span>Jonnthan</span>
                        </div>
                        <div class="correo-user">
                            <span>jonthancuvi@gameil.com</span>
                        </div>
                    </div>
                </div>
                <ul>
                    <!-- <li onclick="ir_perfil();"><i class="far fa-user-circle"></i></i>
                        <a>Mi Perfil</a>
                    </li> -->
                    <!--<li><i class="fas fa-edit"></i><a href="#">Editar Perfil</a></li>-->
                    <!-- <li><i class="fas fa-sign-out-alt"></i><a onclick="ir_registrar_encuestado()">Salir</a>
                    </li> -->
                </ul>
            </div>
        </ul>
    </div>
    <!--contenido-->
    <div class="content">
        <div class="empresas-titulo">
            <span>Registrar Empresa.</span>
        </div>
        <div class="ingresar-empresa">
            <!-- <div class="button-ingresar">
                <button onclick="mostrar_ingresarEmpresa()"><i class="fas fa-plus-square"></i>Ingresar Empresa</button>
            </div> -->
            <div class="button-continuar">
                <button onclick="continuar_encuesta()"><i class="fas fa-arrow-circle-right"></i>Continuar a
                    Encuesta</button>
            </div>
        </div>
        <!--Ingresar Empresa-->
        <div id="contenido-ingresar-empresa" class="contenido-ingresar-empresa">
            <div class="titulo">
                <span>Datos Empresa</span>
            </div>
            <div class="contenedor-inputs" id="formulario">
                <div class="empresa-datos">
                    <div class="datos" id="grupo_nombre-empresa">
                        <label for="">Nombre de la Empresa:</label>
                        <div class="grupo_input">
                            <input type="text" id="nombre-empresa" name="nombre-empresa" class="formulario__input" placeholder="Nombre Empresa">
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="formulario__input-error">El nombre no puede tener caracteres especiales.</p>
                    </div>
                    <div class="datos" id="grupo_pagina-web">
                        <label for="">Sito Web:</label>
                        <div class="grupo_input">
                            <input type="text" id="pagina-web" name="pagina-web" class="formulario__input" placeholder="Pagina Web">
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="formulario__input-error">La página web es invalida.</p>
                    </div>

                </div>
                <div class="empresa-datos">
                    <div class="datos">
                        <label for="">Ciudad Operación:</label>
                        <!-- <input type="text" id="ciudad-operacion" placeholder="Ciudad de Operacion"> -->
                        <div class="seleccionador">
                            <!-- <i class="fas fa-caret-down"></i> -->
                            <select id="selector" class="selector-ciudad-operacion" onchange="">
                                <option value="" id="norma">Selecionar</option>
                                <option value="Ambato" id="norma">Ambato</option>
                                <option value="Azogues" id="norma">Azogues</option>
                                <option value="Arajuno" id="norma">Arajuno</option>
                                <option value="Babahoyo" id="norma">Babahoyo</option>
                                <option value="Bahía de Caráquez" id="norma">Bahía de Caráquez</option>
                                <option value="Baños de Agua Santa" id="norma">Baños de Agua Santa</option>
                                <option value="Cuenca" id="norma">Cuenca</option>
                                <option value="Durán" id="norma">Durán</option>
                                <option value="Esmeraldas" id="norma">Esmeraldas</option>
                                <option value="Guaranda" id="norma">Guaranda</option>
                                <option value="Guayaquil" id="norma">Guayaquil</option>
                                <option value="Ibarra" id="norma">Ibarra</option>
                                <option value="La Libertad" id="norma">La Libertad</option>
                                <option value="Latacunga" id="norma">Latacunga</option>
                                <option value="Loja" id="norma">Loja</option>
                                <option value="Macas" id="norma">Macas</option>
                                <option value="Machala" id="norma">Machala</option>
                                <option value="Manta" id="norma">Manta</option>
                                <option value="Milagro" id="norma">Milagro</option>
                                <option value="Nueva Loja" id="norma">Nueva Loja</option>
                                <option value="Portoviejo" id="norma">Portoviejo</option>
                                <option value="Piñas" id="norma">Piñas</option>
                                <option value="Pintag" id="norma">Pintag</option>
                                <option value="Quevedo" id="norma">Quevedo</option>
                                <option value="Quito" id="norma">Quito</option>
                                <option value="Riobamba" id="norma">Riobamba</option>
                                <option value="Santo Domingo de los Colorados" id="norma">Santo Domingo de los Colorados
                                </option>
                                <option value="Salinas" id="norma">Salinas</option>
                                <option value="Shell Mera" id="norma">Shell Mera</option>
                                <option value="Tulcán" id="norma">Tulcán</option>
                                <option value="Otro" id="norma">Otro</option>
                            </select>
                        </div>
                    </div>
                    <div class="datos" id="grupo_direccion-operacion">
                        <label for="">Direccion de Operacion:</label>
                        <div class="grupo_input">
                            <input type="text" id="direccion-operacion" name="direccion-operacion"
                                placeholder="Direccion de Operacion" class="formulario__input">
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="formulario__input-error">La dirección solo puede contener letras y números.</p>
                    </div>
                </div>
                <div class="empresa-datos">
                    <div class="datos">
                        <label for="">Sector en el que Opera:</label>
                        <!-- <input type="text" id="sector-opera-empresa" placeholder="Sector"> -->
                        <div class="seleccionador">
                            <!-- <i class="fas fa-caret-down"></i> -->
                            <select id="selector" class="selector-sector" onchange="">
                                <option value="" id="norma">Selecionar</option>
                                <option value="Agricultura/Cutivadores" id="norma">Agricultura/Cutivadores</option>
                                <option value="Fabricacion" id="norma">Fabricacion</option>
                                <option value="Servicio con impacto ambietal significativo" id="norma">Servicio con
                                    impacto ambietal significativo</option>
                                <option value="Servicio leve impacto ambiental" id="norma">Servicio leve impacto
                                    ambiental</option>
                                <option value="Otro" id="norma">Otro</option>
                            </select>
                        </div>
                    </div>
                    <div class="datos" id="grupo_numero-sedes">
                        <label for="">Numero de Sedes:</label>
                        <div class="grupo_input">
                            <input type="number" id="numero-sedes" class="formulario__input" name="numero-sedes" min="0" onChange=""
                                placeholder="Total de Sedes">
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="formulario__input-error">Solo Numeros.</p>
                    </div>
                </div>

                <div class="empresa-datos">
                    <div class="datos" id="grupo_numero-empleados-empresa">
                        <label for="">Numero de Empleados:</label>
                        <div class="grupo_input">
                            <input type="number" id="numero-empleados-empresa" class="formulario__input" name="numero-empleados-empresa" min="0"
                                onChange="" placeholder="Numero Empleados">
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="formulario__input-error">Solo Numeros.</p>
                    </div>
                    <div class="datos" id="grupo_ruc-empresa">
                        <label for="">RUC:</label>
                        <div class="grupo_input">
                            <input type="text" id="ruc-empresa" class="formulario__input" name="ruc-empresa" placeholder="ruc">
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="formulario__input-error">No puede contener caracteres especiales.</p>
                    </div>
                </div>
                <div class="empresa-datos">
                    <div class="datos">
                        <label for="">Fecha de Inicio de Operaciones:</label>
                        <input type="date" id="inicio-operacion" placeholder="Inicio de Operaciones">
                    </div>
                    <div class="datos" id="grupo_estimado-ingresos">
                        <label for="">Estimado Ingresos Anuales:</label>
                        <div class="grupo_input">
                            <input type="text" id="estimado-ingresos" class="formulario__input" name="estimado-ingresos"
                                placeholder="Ingresos Anuales">
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="formulario__input-error">Solo Numeros.</p>
                    </div>
                </div>
                <!--Botones-->
                <div class="contenedor-botones">
                    <!-- <div class="boton" onclick="regresar_ver_info_empresa()">
                        <span>Regresar</span>
                    </div> -->
                    <div class="boton" onclick="guardar_empresa();">
                        <span>Guardar</span>
                    </div>
                </div>
            </div>

        </div>
        <!--Datos empresa-->
        <div id="informacion-empresa" class="contenido">
            <!-- <div class="titulo-empresa">
                <span>Información Empresa</span>
            </div>
            <div class="info-empresa">
                <div class="nom-empresa">
                    <div class="titulo">Empresa:</div>
                    <div class="nom-empresa">Etapa</div>
                </div>
                <div class="sector-empresa">
                    <div class="titulo">Sector:</div>
                    <div class="sector-empresa">Consumo</div>
                </div>
                <div class="cantidad-empleados-empresa">
                    <div class="titulo">Total Empleados:</div>
                    <div class="sector-empresa">12</div>
                </div>
                <div class="ruc-empresa">
                    <div class="titulo">RUC:</div>
                    <div class="ruc">12345</div>
                </div>
            </div> -->
        </div>

    </div>
    </div>


</body>
<script src="../js/urls.js"></script>
<script src="../js/registrar_empresa_2.js"></script>
<script src="../js/validadciones.js"></script>

</html>
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
            <div class="contenedor-inputs">
                <div class="empresa-datos">
                    <div class="datos">
                        <label for="">Nombre de la Empresa:</label>
                        <input type="text" id="nombre-empresa" placeholder="Nombre Empresa">
                    </div>
                    <div class="datos">
                        <label for="">Sito Web:</label>
                        <input type="text" id="pagina-web" placeholder="Pagina Web">
                    </div>
                    
                </div>
                <div class="empresa-datos">
                    <div class="datos">
                        <label for="">Ciudad:</label>
                        <input type="text" id="ciudad-operacion" placeholder="Ciudad de Operacion">
                    </div>
                    <div class="datos">
                        <label for="">Direccion de Operacion:</label>
                        <input type="text" id="direccion-operacion" placeholder="Direccion de Operacion">
                    </div>
                </div>
                <div class="empresa-datos">
                    <div class="datos">
                        <label for="">Sector en el que Opera:</label>
                        <!-- <input type="text" id="sector-opera-empresa" placeholder="Sector"> -->
                        <div class="seleccionador">
                            <!-- <i class="fas fa-caret-down"></i> -->
                            <select id="selector" class="selector-sector" onchange="">
                                <option value="0" id="norma">Selecionar</option>
                                <option value="Agricultura/Cutivadores" id="norma">Agricultura/Cutivadores</option>
                                <option value="Fabricacion" id="norma">Fabricacion</option>
                                <option value="Servicio con impacto ambietal significativo" id="norma">Servicio con impacto ambietal significativo</option>
                                <option value="Servicio leve impacto ambiental" id="norma">Servicio leve impacto ambiental</option>
                                <option value="Otro" id="norma">Otro</option>
                            </select>
                        </div>
                    </div>
                    <div class="datos">
                        <label for="">Numero de Sedes:</label>
                        <input type="number" id="numero-sedes"  min="0"
                        onChange="" placeholder="Total de Sedes">
                    </div>
                </div>
                
                <div class="empresa-datos">
                    <div class="datos">
                        <label for="">Numero de Empleados:</label>
                        <!-- <input type="text" id="numero-empleados-empresa" placeholder="Numero Empleados"> -->
                        <div class="seleccionador">
                            <!-- <i class="fas fa-caret-down"></i> -->
                            <select id="selector" class="selector-numero-empleados" onchange="">
                                <option value="" id="norma">Selecionar</option>
                                <option value="0" id="norma">0</option>
                                <option value="1-9" id="norma">1-9</option>
                                <option value="10-49" id="norma">10-49</option>
                                <option value="50-249" id="norma">50-249</option>
                                <option value="250-999" id="norma">250-999</option>
                                <option value="Mas de 1000" id="norma">Mas de 1000</option>
                            </select>
                        </div>
                    </div>
                    <div class="datos">
                        <label for="">RUC:</label>
                        <input type="text" id="ruc-empresa" placeholder="ruc">
                    </div>
                </div>
                <div class="empresa-datos">
                    <div class="datos">
                        <label for="">Fecha de Inicio de Operaciones:</label>
                        <input type="date" id="inicio-operacion" placeholder="Inicio de Operaciones">
                    </div>
                    <div class="datos">
                        <label for="">Estimado Ingresos Anuales:</label>
                        <input type="text" id="estimado-ingresos" placeholder="Ingresos Anuales">
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

</html>
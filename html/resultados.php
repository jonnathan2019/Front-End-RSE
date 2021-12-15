<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados.</title>
    <link rel="icon" type="image/png" href="../imagenes/logo_3.png" />
    <link rel="stylesheet" href="../css/style_resultados.css">
    <link rel="stylesheet" href="../css/modal.css">
    <link rel="stylesheet" href="../css/pdf.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">


    <link href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">

    <!--LETRA-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;1,400&display=swap"
        rel="stylesheet">

    <!--LIbrerias para graficar-->
    <!--Libreria D3.js: https://d3js.org/-->
    <script src="../librerias/chart.js"></script>
    <!--PDF-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.min.js"></script>

    <!-- Libreria grafica POLAR AREA-->
    <link rel="stylesheet" href="../librerias/polar_3.css">

    <style>
        path.arc {
            opacity: 0.9;
            transition: opacity 0.5s;
        }

        path.arc:hover {
            opacity: 0.7;
        }

        .axis line,
        .axis circle {
            stroke: #cccccc;
            stroke-width: 1px
        }

        .axis circle {
            fill: none;
        }

        .r.axis text {
            text-anchor: end
        }

        .tooltip {
            position: absolute;
            display: none;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 3px;
            box-shadow: -3px 3px 15px #888;
            color: white;
            padding: 6px;
        }

        /* POLAR AREA temas*/
        /* #chartholder {
            width: 970px;
            height: 500px; 
        } */

        /*BARRA CIRCULAR*/
        .char-barra-cirular {
            width: 100%;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            /* border: 1px solid #ccc; */
        }

        .barra_progreso_social,
        .barra_progreso_ambiental {
            /*para las barras de progreso DIMENCIONES*/
            width: 95%;
            height: 70px;
            margin: 10px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px auto;
        }

        .progress-bar {
            /* fill: #4d79e8; */
            fill: rgb(28, 85, 230);
        }

        .progress-bar-bg {
            /* fill: rgb(204, 204, 204); */
            fill: #ccc;
            fill-opacity: .5;
        }

        .progress-label {
            fill: #000;
            font-family: 'Open Sans', sans-serif;
            font-size: 40px;
            text-anchor: middle;
            /* dominant-baseline: central; */
        }

        .progress-label-dim {
            /*para las barras de las DIMENIONES*/
            fill: #000;
            font-family: 'Open Sans', sans-serif;
            font-size: 23px;
            text-anchor: middle;
            /* dominant-baseline: central; */
        }

        /*GRAFICA RADAR*/
        #grafica_radar {
            width: 800px;
            height: 500px;
            /* border: 1px solid #ccc; */
        }

        .anychart-credits {
            display: none;
            color: black;
        }

        #ac_layer_6 text {
            font-weight: bold;
            font-size: 17px;
        }
    </style>
    <!-- Loader -->
    <link rel="stylesheet" href="../css/loader.css">

</head>

<body class="cuerpo hidden_resultados">
    <div class="loader-centrado" id="onload_resultados">
        <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
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
                    <li onclick="ir_perfil();"><i class="far fa-user-circle"></i></i>
                        <a>Mi Perfil</a>
                    </li>
                    <!--<li><i class="fas fa-edit"></i><a href="#">Editar Perfil</a></li>-->
                    <li><i class="fas fa-sign-out-alt"></i><a onclick="salir()">Salir</a>
                    </li>
                </ul>
            </div>
        </ul>
    </div>
    <!--sidebar start-->
    <div class="sidebar">
        <label for="check" class="check1">
            <i class="fas fa-bars" id="sidebar_btn"></i>
            <!--<span>RSE Epresarial</span>-->
        </label>
        <div class="slider-encabesado">
            R S E
        </div>
        <!-- <a class="slider-opcion" href="#"><i class="fas fa-home"></i>
            <span>Home</span>
            <div class="texto-emergente">
                Home
            </div>
        </a> -->
        <a class="slider-opcion" onclick="ir_evaluacion();">
            <i class="fas fa-poll-h"></i>
            <span>Evaluación</span>
            <div class="texto-emergente">
                Evaluación
            </div>
        </a>
        <a class="slider-opcion" onclick="ir_reporte();">
            <i class="far fa-file-alt"></i>
            <span>Reporte</span>
            <div class="texto-emergente">
                Reporte
            </div>
        </a>
        <!-- <a class="slider-opcion" href="#"><i class="fas fa-table"></i>
            <span>Estándar</span>
            <div class="texto-emergente">
                Estándar
            </div>
        </a> -->
        <!-- <a class="slider-opcion" href="#"><i class="fas fa-cogs"></i>
            <span>Configuracion</span>
            <div class="texto-emergente">
                Configuracion
            </div>
        </a> -->
        <a class="slider-opcion" onclick="ir_about();">
            <i class="fas fa-info-circle"></i>
            <span>About</span>
            <div class="texto-emergente">
                About
            </div>
        </a>
    </div>

    <!--sidebar end-->

    <!--contenido-->
    <div class="content">

        <!--opciones de imprimir, descrgar, etc-->
        <div class="resultados">
            <div class="titulo-resultado">
                <span>Resultados</span>
            </div>
            <div class="opciones">
                <ul>
                    <!-- <li><a href="#" onclick="descargarPDF();"><i class="fas fa-print"></i>Imprimir</a></li>
                    <li><a href="#" onclick="imprimirPDF();"><i class="fas fa-download"></i></i>Descargar</a></li>
                    <li><a href="#" onclick="enviarPDF();"><i class="fas fa-paper-plane"></i>Enviar</a></li> -->
                    <li><a href="#" onclick="cargar_info_PDF();" id="abrir_pdf"><i class="fas fa-poll"></i>Ver
                            Informe</a></li>
                </ul>
            </div>
        </div>

        <div class="contenido">

            <div class="wrapper">
                <div class="tabs">
                    <ul>
                        <li class="active">
                            <span class="icon">
                                <i class="fas fa-poll-h"></i>
                            </span>
                            <span class="text">General</span>
                        </li>
                        <li>
                            <span class="icon">
                                <i class="fas fa-th-list"></i>
                            </span>
                            <span class="text">Dimensiones</span>
                        </li>
                        <li>
                            <span class="icon">
                                <i class="fas fa-chart-bar"></i>
                            </span>
                            <span class="text">Graficos</span>
                        </li>

                    </ul>
                </div>

                <div class="content-tabs">
                    <div class="tab_wrap" style="display: block;">
                        <div class="title title-main">Puntaje General</div>
                        <div class="tab_content">
                            <div class="puntaje">

                                <!-- infocarion global y especifica  -->
                                <div class="info-global-especifica">

                                    <div class="info-puntaje-gloabal-especifico">
                                        <!-- <div class="titulo-especifico">
                                            <span>Integración Especifica.</span>
                                        </div> -->
                                        <div class="info-especifico">
                                            <div class="info-espe">
                                                <div class="title-especifico">
                                                    Nivel de Integración Especifico.
                                                </div>
                                                <span class="retroalimentacion-especifico">
                                                    Su nivel de Integración respecto al total de prácticas evaluadas
                                                    hasta el momento es de <span class="resultado-integracion"></span>,
                                                    referente a las dimensiones <span
                                                        class="dim-evaluadas-integracion"></span> y
                                                    a los
                                                    temas <span class="tem-evaluados-integracion"></span> para este
                                                    resultado
                                                    se
                                                    tomaron en cuentas solo las dimensiones y temas que usted haya
                                                    previamente
                                                    registrados.
                                                </span>
                                            </div>
                                            <div class="graficas-especifico">
                                                <div class="puntaje-especifico">
                                                    <div class="title-especifico">
                                                        Puntaje.
                                                    </div>
                                                    <div class='char-barra-cirular-especifico'></div>
                                                </div>
                                                <div class="grafica-especifico">
                                                    <!-- <div class="title-especifico">
                                                        Integración.
                                                    </div> -->
                                                    <div class="chart-container-espcifico"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="titulo-global">
                                            <!-- <span>Integración Global.</span> -->
                                        </div>
                                        <div class="info-global">
                                            <div class="info-glob">
                                                <div class="title-global">
                                                    Nivel de Integración Global.
                                                </div>
                                                <span class="retroalimentacion-global">
                                                    Su nivel de Integración respecto al total de prácticas evaluadas
                                                    es <span class="resultado-integracion-todo"></span> referente a
                                                    todas las
                                                    dimensiones y a todos temas ya sea que haya o no registrado
                                                    previamente.
                                                </span>
                                            </div>
                                            <div class="graficas-globales">
                                                <div class="puntaje-global">
                                                    <div class="title-global">
                                                        Puntaje.
                                                    </div>
                                                    <div class='char-barra-cirular-global'></div>
                                                </div>
                                                <div class="grafica-global">
                                                    <!-- <div class="title-global">
                                                        Integración.
                                                    </div> -->
                                                    <div class="chart-container-global"></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <!-- Numero Dimesniones y Temas Evaluados -->
                                <div class="info-puntage-eva">
                                    <div class="info-puntaje-evaluado-titulo">
                                        <div class="titulo">
                                            <span>Información Aspectos Evaluados</span>
                                        </div>
                                    </div>
                                    <div class="info-puntage-evaluado">
                                        <div class="num-dim-evaluados">
                                            <div class="titulo-dim">
                                                <span>Dimensiones.</span>
                                            </div>
                                            <div class="num-total-dim">
                                                <span>Total de Dimensiones: </span>
                                                <span class="num-total-valor-dim">0</span>
                                            </div>
                                            <div class="num-total-dim-evaluadas">
                                                <span>Total de Dimensiones Evaluadas: </span>
                                                <span class="num-total-valor-dim-eva">0</span>
                                            </div>
                                        </div>
                                        <div class="num-temas-evaluados">
                                            <div class="titulo-tem">
                                                <span>Temas.</span>
                                            </div>
                                            <div class="num-total-temas">
                                                <span>Total de Temas: </span>
                                                <span class="num-total-valor-temas">0</span>
                                            </div>
                                            <div class="num-total-temas-evaluadas">
                                                <span>Total de Temas Evaluadas: </span>
                                                <span class="num-total-valor-temas-eva">0</span>
                                            </div>
                                        </div>
                                        <div class="num-indi-evaluados">
                                            <div class="titulo-sub-temas">
                                                <span>Sub Temas.</span>
                                            </div>
                                            <div class="num-total-indi">
                                                <span>Total de Sub Temas: </span>
                                                <span class="num-total-valor-indi">0</span>
                                            </div>
                                            <div class="num-total-indi-evaluadas">
                                                <span>Total de Sub Temas Evaluadas: </span>
                                                <span class="num-total-valor-indi-eva">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="info-general">
                                    <div class="info-total">
                                        <div class="title">
                                            Nivel de Integración.
                                        </div>
                                        <span class="retroalimentacion-general"></span>
                                    </div>
                                    <div class="puntaje-total">
                                        <div class="title">
                                            Puntaje.
                                        </div>
                                        <div class='char-barra-cirular'></div>
                                    </div>
                                    <div class="grafica-general">
                                        <div class="title">
                                            Integración.
                                        </div>
                                        <div class="chart-container"></div>
                                    </div>
                                </div> -->
                                <div class="info-temas-indicadores">
                                    <div class="titulo-temas-inidcadores">
                                        <span>Temas Evaluados.</span>
                                    </div>
                                    <div class="tabla-temas-indicadores">
                                        <!--MINI INFOMRE-->
                                        <div id="table-temas">
                                            <div class="tabla-info-temas">
                                                <div class="tabla-cabecera-temas">
                                                    <div class="cabecera-titutlo">
                                                        <div class="titulo titulo-nombre">Nombre</div>
                                                        <div class="titulo titulo-valor">Valor</div>
                                                        <div class="titulo titulo-impacto">Integración</div>
                                                    </div>
                                                </div>

                                                <div class="cuerpo-tabla-temas">
                                                    <!-- <div class="contenido-indicador fila">
                                                        <div class="info-tema">
                                                            <div class="nom-img-temas fila-contenct">
                                                                <img class="imagen"
                                                                    src="../imagenes/Derechos_Humanos.jpg">Derechos
                                                                Humanos
                                                            </div>
                                                            <div class="impacto-tema fila-contenct">0.9</div>
                                                            <div class="barra-tema fila-contenct">
                                                                <div class="grafica-barra-temas">
                                                                    <div
                                                                        class="linea-vertical linea-vertical-izquierda">
                                                                        <div class="vertical-line"
                                                                            style="height: 30px;"></div>
                                                                        <span>0</span>
                                                                    </div>
                                                                    <div class="contorno">
                                                                        <div class="valor">

                                                                        </div>
                                                                    </div>
                                                                    <div class="linea-vertical linea-vertica-deracha">
                                                                        <div class="vertical-line"
                                                                            style="height: 30px;"></div>
                                                                        <span>100</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="tabla-info-indicadores">
                                                            <div class="tabla-indicadores-titulo">
                                                                <div class="cabecera-tabla">
                                                                    <span class="titulo-1">Nombre</span>
                                                                    <span class="titulo-2">Integración</span>
                                                                </div>
                                                                <div class="cuerpo-tabla">
                                                                    <div class="cuerpo-fila">
                                                                        <span class="contendio-1">a</span>
                                                                        <span class="contenido-2">1</span>
                                                                    </div>
                                                                    <div class="cuerpo-fila">
                                                                        <span class="contendio-1">b</span>
                                                                        <span class="contenido-2">2</span>
                                                                    </div>
                                                                    <div class="cuerpo-fila">
                                                                        <span class="contendio-1">b</span>
                                                                        <span class="contenido-2">2</span>
                                                                    </div>
                                                                    <div class="cuerpo-fila">
                                                                        <span class="contendio-1">b</span>
                                                                        <span class="contenido-2">2</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="contenido-indicador fila">
                                                        <div class="info-tema">
                                                            <div class="nom-img-temas fila-contenct">
                                                                <img class="imagen"
                                                                    src="../imagenes/practicas_trabajo.png">Practicas
                                                                de
                                                                Trabajo
                                                            </div>
                                                            <div class="impacto-tema fila-contenct">0.9</div>
                                                            <div class="barra-tema fila-contenct">
                                                                <div class="grafica-barra-temas">
                                                                    <div
                                                                        class="linea-vertical linea-vertical-izquierda">
                                                                        <div class="vertical-line"
                                                                            style="height: 30px;"></div>
                                                                        <span>0</span>
                                                                    </div>
                                                                    <div class="contorno">
                                                                        <div class="valor">

                                                                        </div>
                                                                    </div>
                                                                    <div class="linea-vertical linea-vertica-deracha">
                                                                        <div class="vertical-line"
                                                                            style="height: 30px;"></div>
                                                                        <span>100</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="contenido-indicador fila">
                                                        <div class="info-tema">
                                                            <div class="nom-img-temas fila-contenct">
                                                                <img class="imagen"
                                                                    src="../imagenes/cuestiones_relacionadas_consumidor.jpg">Cuestiones
                                                                Relacionadas al Consumidor
                                                            </div>
                                                            <div class="impacto-tema fila-contenct">0.9</div>
                                                            <div class="barra-tema fila-contenct">
                                                                <div class="grafica-barra-temas">
                                                                    <div
                                                                        class="linea-vertical linea-vertical-izquierda">
                                                                        <div class="vertical-line"
                                                                            style="height: 30px;"></div>
                                                                        <span>0</span>
                                                                    </div>
                                                                    <div class="contorno">
                                                                        <div class="valor">

                                                                        </div>
                                                                    </div>
                                                                    <div class="linea-vertical linea-vertica-deracha">
                                                                        <div class="vertical-line"
                                                                            style="height: 30px;"></div>
                                                                        <span>100</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="contenido-indicador fila">
                                                        <div class="info-tema">
                                                            <div class="nom-img-temas fila-contenct">
                                                                <img class="imagen"
                                                                    src="../imagenes/ambiental.jpg">Ambiental
                                                            </div>
                                                            <div class="impacto-tema fila-contenct">0.9</div>
                                                            <div class="barra-tema fila-contenct">
                                                                <div class="grafica-barra-temas">
                                                                    <div
                                                                        class="linea-vertical linea-vertical-izquierda">
                                                                        <div class="vertical-line"
                                                                            style="height: 30px;"></div>
                                                                        <span>0</span>
                                                                    </div>
                                                                    <div class="contorno">
                                                                        <div class="valor">

                                                                        </div>
                                                                    </div>
                                                                    <div class="linea-vertical linea-vertica-deracha">
                                                                        <div class="vertical-line"
                                                                            style="height: 30px;"></div>
                                                                        <span>100</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="contenido-indicador fila">
                                                        <div class="info-tema">
                                                            <div class="nom-img-temas fila-contenct">
                                                                <img class="imagen"
                                                                    src="../imagenes/participacion_comunidad_desarrollo.jpg">Participacion
                                                                EN la comunidad y desarrollo
                                                            </div>
                                                            <div class="impacto-tema fila-contenct">0.9</div>
                                                            <div class="barra-tema fila-contenct">
                                                                <div class="grafica-barra-temas">
                                                                    <div
                                                                        class="linea-vertical linea-vertical-izquierda">
                                                                        <div class="vertical-line"
                                                                            style="height: 30px;"></div>
                                                                        <span>0</span>
                                                                    </div>
                                                                    <div class="contorno">
                                                                        <div class="valor">

                                                                        </div>
                                                                    </div>
                                                                    <div class="linea-vertical linea-vertica-deracha">
                                                                        <div class="vertical-line"
                                                                            style="height: 30px;"></div>
                                                                        <span>100</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> -->
                                                </div>
                                            </div>
                                        </div>
                                        <!--_____________-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab_wrap" style="display: none;">
                        <div class="title title-main">Análisis Dimensiones</div>
                        <div class="tab_content">
                            <div class="puntaje-dimensiones">
                                <div class="info-total-dimension-social">
                                    <div class="title">
                                        Social.
                                    </div>
                                    <div class="retroalimentacion-puntaje">
                                        <div class="retroalimentacio-puntaje-dim">
                                            <div class="titulo-retroalimentacion-puntaje">
                                                <span>Retroalimentación.</span>
                                            </div>
                                            <div class="retroalimentacion-social"></div>
                                        </div>
                                        <div class="puntaje-dimension">
                                            <div class="puntaje-dimension-social">
                                                <div class="titulo-retroalimentacion-puntaje">
                                                    <span>Puntaje.</span>
                                                </div>
                                                <!-- <span class="puntaje-numerico">34</span> -->
                                                <div class="barra_progreso_social" id="barra_progreso_social">
                                                </div>
                                            </div>
                                            <!-- <div class="barra_progres_social">
                                                <progress value="0.4"></progress>
                                            </div> -->
                                        </div>
                                    </div>
                                    <div class="tablas-puntajes-totales-dimensiones">
                                        <div class="temas-clasficacion">
                                            <p>Clasificación Temas Sociales</p>
                                        </div>
                                        <!--_____________________________________________________________-->
                                        <div class="opciones-mejora">
                                            <!--mejora SOCIAL-->
                                            <div class="container-info">
                                                <div class="titulo-info" id="no-estable">
                                                    <span>Malo.</span>
                                                </div>
                                                <div class="contenido-info-mejora-social">
                                                    <div class="tema-puntaje">
                                                        <div class="tema-info">
                                                            <p>Derechos</p>
                                                        </div>
                                                        <div class="puntaje-info">
                                                            <p>4</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--Posiblidad de mejora SOCIAL-->
                                            <div class=" container-info">
                                                <div class="titulo-info" id="poco-estable">
                                                    <span>Regular.</span>
                                                </div>
                                                <div class="contenido-info-posibilidad-mejora-social">
                                                    <div class="tema-puntaje">
                                                        <div class="tema-info">
                                                            <p>Derechos</p>
                                                        </div>
                                                        <div class="puntaje-info">
                                                            <p>4</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--estable SOCIAL-->
                                            <div class=" container-info">
                                                <div class="titulo-info" id="estable">
                                                    <span>Bueno.</span>
                                                </div>
                                                <div class="contenido-info-estable-social">
                                                    <div class="tema-puntaje">
                                                        <div class="tema-info">
                                                            <p>Derechos</p>
                                                        </div>
                                                        <div class="puntaje-info">
                                                            <p>4</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!--________________________________________________-->
                                <div class="info-total-dimension-ambiental">
                                    <div class="title">
                                        Ambiental.
                                    </div>
                                    <div class="retroalimentacion-puntaje">
                                        <div class="retroalimentacio-puntaje-dim">
                                            <div class="titulo-retroalimentacion-puntaje">
                                                <span>Retroalimentación.</span>
                                            </div>
                                            <div class="retroalimentacion-ambiental"></div>
                                        </div>
                                        <div class="puntaje-dimension">
                                            <div class="puntaje-dimension-ambiental">
                                                <div class="titulo-retroalimentacion-puntaje">
                                                    <span>Puntaje.</span>
                                                </div>
                                                <!-- <span class="puntaje-numerico">34</span> -->
                                                <div class="barra_progreso_ambiental" id="barra_progreso_ambiental">
                                                </div>
                                            </div>
                                            <!-- <div class="barra_progreso_ambiental">
                                                <progress value="0.4"></progress>
                                            </div> -->
                                        </div>
                                    </div>
                                    <div class="tablas-puntajes-totales-dimensiones">
                                        <div class="temas-clasficacion">
                                            <p>Clasificación Temas Ambientales.</p>
                                        </div>
                                        <!--_____________________________________________________________-->
                                        <div class="opciones-mejora">
                                            <!--mejora AMMBIENTAL-->
                                            <div class="container-info">
                                                <div class="titulo-info" id="no-estable">
                                                    <span>Malo.</span>
                                                </div>
                                                <div class="contenido-info-mejora-ambiental">
                                                    <div class="tema-puntaje">
                                                        <div class="tema-info">
                                                            <p>Derechos</p>
                                                        </div>
                                                        <div class="puntaje-info">
                                                            <p>4</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--posivilidad de mejora AMBIENTAL-->
                                            <div class=" container-info">
                                                <div class="titulo-info" id="poco-estable">
                                                    <span>Regular.</span>
                                                </div>
                                                <div class="contenido-info-posibilidad-mejora-ambiental">
                                                    <div class="tema-puntaje">
                                                        <div class="tema-info">
                                                            <p>Derechos</p>
                                                        </div>
                                                        <div class="puntaje-info">
                                                            <p>4</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--estable AMBIENTAL-->
                                            <div class=" container-info">
                                                <div class="titulo-info" id="estable">
                                                    <span>Bueno.</span>
                                                </div>
                                                <div class="contenido-info-estable-ambiental">
                                                    <div class="tema-puntaje">
                                                        <div class="tema-info">
                                                            <p>Derechos</p>
                                                        </div>
                                                        <div class="puntaje-info">
                                                            <p>4</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="tab_wrap" style="display: none;">
                        <div class="title">
                            <div class="titulo-graficas">
                                Graficas Comparativas
                            </div>
                            <div class="divisor-titulo-graficas"></div>
                        </div>
                        <div class="tabs-1">
                            <ul class="tabs-ul">
                                <li class="active">
                                    <span class="text">Temas</span>
                                </li>
                                <li>
                                    <span class="text">Dimensiones</span>
                                </li>
                            </ul>
                        </div>

                        <div class="content-tabs-1">
                            <div class="tab_wrap_1" style="display: block;">
                                <div class="grafica-temas" id="grafica-temas">
                                    <div class="info-temas-titulo">
                                        <span>Analisis Temas.</span>
                                    </div>
                                    <div class="elegir-vista-graficas-temas">
                                        <div class="seleccionador">
                                            <select id="selector" class="selector-estandares"
                                                onchange="cargar_graficas_temas();">
                                                <option value="3" id="norma">Circular</option>
                                                <option value="2" id="norma">Radar</option>
                                                <option value="1" id="norma">Todo</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="contenedor-graficas-temas">
                                        <!--MINI INFOMRE-->
                                        <div id="grafica-radar">
                                            <!-- <canvas id="marksChart_1"></canvas> -->
                                            <div id="grafica_radar"></div>
                                        </div>
                                        <div id="grafica-polar">
                                            <!-- <div id="chart"></div> -->
                                            <div class="grafica-zoomable-sunburst"></div>
                                            <!-- <div id="chartholder"></div> esta es la que estaba antes  -->
                                            <!-- <div class="dona_nueva"></div> -->
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="tab_wrap_1" style="display: none;">
                                <div class="grafica-dimension" id="grafica-dimension">
                                    <div class="info-dim-titulo">
                                        <span>Analisis Dimensiones.</span>
                                    </div>
                                    <div class="elegir-vista-graficas-temas">
                                        <div class="seleccionador">
                                            <select id="selector_dim_bar" class="selector-estandares"
                                                onchange="cargar_graficas_dimensiones();">
                                                <option value="1" id="norma">Bar-Horizontal</option>
                                                <option value="2" id="norma">Bar-Vertical</option>
                                                <!-- <option value="3" id="norma">Barras</option> -->
                                            </select>
                                        </div>
                                    </div>
                                    <div class="contenedor-graficas-dimensiones">
                                        <div id="bar-dimesniones">
                                            <!-- <div class="graficaDimensiones"></div> -->
                                            <div class="grafica-bar-horizontal" id="grafica-bar-horizontal">
                                                <div id="grafica-horizontal"></div>
                                            </div>
                                            <div id="grafica-bar-vertical">
                                                <!-- <h2>Bar chart example</h2> -->
                                                <div id="grafica-bar-dim">
                                                    <svg id="svg-bar" viewBox='0 0 750 500'></svg>
                                                </div>
                                            </div>
                                            <!--<canvas id="bar-chart"></canvas>-->
                                        </div>

                                    </div>
                                </div>

                            </div>
                            
                        </div>


                    </div>

                </div>
            </div>

        </div>
    </div>

    <!--MODAL-->
    <div class="modal-info" id="modal-info-id">
        <div class="cotendor-modal-info" id="cotendor-modal-info-id">
            <div class="titulo-modal-info">
                <span>Retroalimentación.</span>
                <label for="btn-modal-info" id="cerrar-modal">X</label>
            </div>
            <div class="info-modal-info">
                <div class="modal-retroalimentacion">
                    <div class="titulo">
                        <span class="titulo-modal-info-span"></span>
                    </div>
                    <div class="info-contenido">
                        <span class="retoalimentacion-tema"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--MODAL fin-->
    <!-- Informe Inicio -->
    <div class="modal-pdf" id="modal-pdf-id">
        <div class="cotendor-modal-pdf" id="cotendor-modal-pdf-id">
            <div class="titulo-modal-pdf">
                <span>Informe.</span>
                <label for="btn-modal-pdf" id="cerrar_pdf">X</label>
            </div>
            <div class="info-modal-pdf">
                <div class="opciones-informe">
                    <div class="imprimir boton-informe">
                        <i class="fas fa-print"></i><span>Imprimir</span>
                    </div>
                    <div class="descargar boton-informe">
                        <i class="fas fa-download"></i><span>Descargar </span>
                    </div>
                    <div class="enviar boton-informe">
                        <i class="fas fa-paper-plane"></i><span>Enviar</span>
                    </div>
                </div>
                <div class="informe-info">

                    <div class="cabecera-informe">
                        <div class="cabezera-user">
                            <div class="imagen">
                                <img src="../imagenes/logo_3.png" alt="">
                            </div>
                            <div class="info-user">
                                <div class="titulo-info-user">Usuario:</div>
                                <div class="nombre-usuario"><span>Jonnathan Cuvi</span></div>
                                <div class="correo-usuario"><span>jonnthancuvi@gmai.com</span></div>
                            </div>
                        </div>

                        <div class="cabezera-empresa">
                            <div class="info-empresa">
                                <div class="titulo-info-empresa">Empresa:</div>
                                <div class="nombre-empresa"><label>Nombre:</label><span>Blin</span></div>
                                <div class="sector-empresa"><label>Sector:</label><span>Alimentos</span></div>
                                <div class="num-empleados-empresa"><label>Numero de Empleados:</label><span>14</span>
                                </div>
                                <div class="ruc-empresa"><label>RUC:</label><span>1234</span></div>
                            </div>
                        </div>
                    </div>



                    <!-- Desempeno general de RSE -->
                    <div class="desempeno-general">
                        <div class="titulo-deseenpeno-general">
                            <span>Desempeño General de RSE.</span>
                        </div>
                        <div class="informacion-general">
                            <div class="desempeno-retroalimentacion info-desempeno">
                                <div class="titulo-desempeno">
                                    <span>Retroalimentación.</span>
                                </div>
                                <span class="retroalimentacion-general-pdf"></span>
                            </div>
                            <div class="desempeno-puntage-general info-desempeno">
                                <div class="titulo-desempeno">
                                    <span>Puntaje.</span>
                                </div>
                                <div class='char-barra-cirular-pdf'></div>
                            </div>
                            <div class="desmpeno-impacto info-desempeno">
                                <div class="titulo-desempeno">
                                    <span>Integración.</span>
                                </div>
                                <div class="chart-container-pdf"></div>
                            </div>
                        </div>
                    </div>
                    <!-- Desempeno por Dimensiones -->
                    <div class="desempeno-dimensiones">
                        <div class="titulo-deseenpeno-dimensiones">
                            <span>Desempeño por Dimensiones.</span>
                        </div>
                        <div class="informacion-dimensiones">
                            <div class="info-desmepeno-dimensiones">
                                <div class="desempeno-social desempeno-dimensional">
                                    <div class="titulo-demsempeno-dim">
                                        <span>Social.</span>
                                    </div>
                                    <div class="contenedor-info-dim">
                                        <div class="retroalimentacon-social retroalimentacion-dimensional">
                                            <div class="titulo-retroalimentacio-dimesnion">
                                                <span>Retroalimentación.</span>
                                            </div>
                                            <div class="retroalimentacion-social-pdf"></div>
                                        </div>
                                        <div class="desempeno-dimesnion-puntaje puntaje-dimensional">
                                            <div class="titulo-desempeno">
                                                <span>Puntaje.</span>
                                            </div>
                                            <div class="barra-circular-social-pdf"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="desempeno-ambiental desempeno-dimensional">
                                    <div class="titulo-demsempeno-dim">
                                        <span>Ambiental.</span>
                                    </div>
                                    <div class="contenedor-info-dim">
                                        <div class="retroalimentacon-ambiental retroalimentacion-dimensional">
                                            <div class="titulo-retroalimentacio-dimesnion">
                                                <span>Retroalimentación.</span>
                                            </div>
                                            <div class="retroalimentacion-ambiental-pdf"></div>
                                        </div>
                                        <div class="desempeno-dimesnion-puntaje puntaje-dimensional">
                                            <div class="titulo-desempeno">
                                                <span>Puntaje.</span>
                                            </div>
                                            <div class="barra-circular-ambiental-pdf"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grafica-desempeno-dimesniones">
                                <div class="grafica-dim-dempeno">
                                    <div class="titulo-desmepeno-grafica">
                                        <span>Grafica de Desempeño por Dimensiones.</span>
                                    </div>
                                    <div class="grafica-dimensional">
                                        <div id="grafica-bar-dim-pdf">
                                            <svg id="svg-bar-pdf" viewBox='0 0 750 500'></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- deempeno por temas -->
                    <div class="desempeno-temas">
                        <div class="titulo-deseenpeno-temas">
                            <span>Desempeño por Temas.</span>
                        </div>
                        <div class="informacion-temas">
                            <div class="informacion-temas-tabla">
                                <div class="titulo-imformarmacion-temas titulo-desempeno-temas">
                                    <span>Tabla de Desempeño Temas.</span>
                                </div>
                                <div class="tabla-desmepeno-temas">
                                    <!-- Informe Desempeno TEMAS -->
                                    <div class="tabla-temas-indicadores-pdf">
                                        <!--MINI INFOMRE-->
                                        <div id="table-temas">
                                            <div class="tabla-info-temas-pdf">
                                                <div class="tabla-cabecera-temas">
                                                    <div class="cabecera-titutlo">
                                                        <div class="titulo titulo-nombre">Nombre</div>
                                                        <div class="titulo titulo-valor">Valor</div>
                                                        <div class="titulo titulo-impacto">Integración</div>
                                                    </div>
                                                </div>

                                                <div class="cuerpo-tabla-temas-pdf">
                                                    <div class="contenido-indicador fila">
                                                        <div class="info-tema">
                                                            <div class="nom-img-temas fila-contenct">
                                                                <img class="imagen"
                                                                    src="../imagenes/Derechos_Humanos.jpg">Derechos
                                                                Humanos
                                                            </div>
                                                            <div class="impacto-tema fila-contenct">0.9</div>
                                                            <div class="barra-tema fila-contenct">
                                                                <div class="grafica-barra-temas-pdf">
                                                                    <div
                                                                        class="linea-vertical-pdf linea-vertical-pdf-izquierda">
                                                                        <div class="vertical-line-pdf"
                                                                            style="height: 30px;"></div>
                                                                        <span>0</span>
                                                                    </div>
                                                                    <div class="contorno">
                                                                        <div class="valor">

                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="linea-vertical-pdf linea-vertica-deracha">
                                                                        <div class="vertical-line-pdf"
                                                                            style="height: 30px;"></div>
                                                                        <span>100</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="contenido-indicador fila">
                                                        <div class="info-tema">
                                                            <div class="nom-img-temas fila-contenct">
                                                                <img class="imagen"
                                                                    src="../imagenes/practicas_trabajo.png">Practicas
                                                                de
                                                                Trabajo
                                                            </div>
                                                            <div class="impacto-tema fila-contenct">0.9</div>
                                                            <div class="barra-tema fila-contenct">
                                                                <div class="grafica-barra-temas-pdf">
                                                                    <div
                                                                        class="linea-vertical-pdf linea-vertical-pdf-izquierda">
                                                                        <div class="vertical-line-pdf"
                                                                            style="height: 30px;"></div>
                                                                        <span>0</span>
                                                                    </div>
                                                                    <div class="contorno">
                                                                        <div class="valor">

                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="linea-vertical-pdf linea-vertica-deracha">
                                                                        <div class="vertical-line-pdf"
                                                                            style="height: 30px;"></div>
                                                                        <span>100</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="contenido-indicador fila">
                                                        <div class="info-tema">
                                                            <div class="nom-img-temas fila-contenct">
                                                                <img class="imagen"
                                                                    src="../imagenes/cuestiones_relacionadas_consumidor.jpg">Cuestiones
                                                                Relacionadas al Consumidor
                                                            </div>
                                                            <div class="impacto-tema fila-contenct">0.9</div>
                                                            <div class="barra-tema fila-contenct">
                                                                <div class="grafica-barra-temas-pdf">
                                                                    <div
                                                                        class="linea-vertical-pdf linea-vertical-pdf-izquierda">
                                                                        <div class="vertical-line-pdf"
                                                                            style="height: 30px;"></div>
                                                                        <span>0</span>
                                                                    </div>
                                                                    <div class="contorno">
                                                                        <div class="valor">

                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="linea-vertical-pdf linea-vertica-deracha">
                                                                        <div class="vertical-line-pdf"
                                                                            style="height: 30px;"></div>
                                                                        <span>100</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="contenido-indicador fila">
                                                        <div class="info-tema">
                                                            <div class="nom-img-temas fila-contenct">
                                                                <img class="imagen"
                                                                    src="../imagenes/ambiental.jpg">Ambiental
                                                            </div>
                                                            <div class="impacto-tema fila-contenct">0.9</div>
                                                            <div class="barra-tema fila-contenct">
                                                                <div class="grafica-barra-temas-pdf">
                                                                    <div
                                                                        class="linea-vertical-pdf linea-vertical-pdf-izquierda">
                                                                        <div class="vertical-line-pdf"
                                                                            style="height: 30px;"></div>
                                                                        <span>0</span>
                                                                    </div>
                                                                    <div class="contorno">
                                                                        <div class="valor">

                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="linea-vertical-pdf linea-vertica-deracha">
                                                                        <div class="vertical-line-pdf"
                                                                            style="height: 30px;"></div>
                                                                        <span>100</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="contenido-indicador fila">
                                                        <div class="info-tema">
                                                            <div class="nom-img-temas fila-contenct">
                                                                <img class="imagen"
                                                                    src="../imagenes/participacion_comunidad_desarrollo.jpg">Participacion
                                                                EN la comunidad y desarrollo
                                                            </div>
                                                            <div class="impacto-tema fila-contenct">0.9</div>
                                                            <div class="barra-tema fila-contenct">
                                                                <div class="grafica-barra-temas-pdf">
                                                                    <div
                                                                        class="linea-vertical-pdf linea-vertical-pdf-izquierda">
                                                                        <div class="vertical-line-pdf"
                                                                            style="height: 30px;"></div>
                                                                        <span>0</span>
                                                                    </div>
                                                                    <div class="contorno">
                                                                        <div class="valor">

                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="linea-vertical-pdf linea-vertica-deracha">
                                                                        <div class="vertical-line-pdf"
                                                                            style="height: 30px;"></div>
                                                                        <span>100</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--_____________-->
                                    </div>
                                    <!-- Informe Desempeno TEMAS FIN -->
                                </div>
                            </div>
                            <div class="informacion-temas-grafica">
                                <div class="titulo-desmepeno-grafica-temas titulo-desempeno-temas">
                                    <span>Grafica de Desempeño por Temas.</span>
                                </div>
                                <div class="grafica-desempeno-temas">
                                    <div id="grafica_radar-pdf"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- Informe Fin -->
</body>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../librerias/loader.js"></script>
<script src="../js/urls.js"></script>
<script src="../js/resultados.js"></script>

<!-- GRAFICA Puntaje TOTAL-->
<script src="https://d3js.org/d3.v6.js"></script>
<script src="../js/graficas/grafica_bar_horizontal_total.js"></script>

<!-- GRAFICA Polar TEMAS-->
<!-- <script src="../librerias/d3.v3.min.js"></script>
<script src="../js/graficas/polar_temas.js"></script>  -->

<!-- -- GRAFICA Barras DIMENSIONES -- -->
<script src="https://d3js.org/d3.v5.min.js"></script>
<script src="../js/graficas/grafica_barras_dim.js"></script>

<!-- GRAFICA Polar Area Temas-->
<script src="https://raw.githack.com/jamesleesaunders/d3-ez/master/dist/d3-ez.js"></script>
<!-- Utiliza la libreria: <script src="https://d3js.org/d3.v5.min.js"></script>  -->
<script src="../js/graficas/polar_area.js"></script>

<!-- GARFICA DONA Dimensiones-->
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="../js/graficas/grafica_dona_dim.js"></script>

<!-- GRAFICA DONA Dimenisones 2-->
<script src="../js/graficas/grafica_dona_dim_2.js"></script>

<!-- GRAFICA BARRA Circular Puntate Total-->
<!-- Utiliza la libreria: <script src="https://d3js.org/d3.v5.min.js"></script>  -->
<script src="../js/graficas/barra_circular.js"></script>

<!-- GRAFICAS CHAR-->
<script src="../librerias/anychart-core.js"></script>
<script src="../librerias/anychart-radar.js"></script>
<script src="../js/graficas/graficas_char.js"></script>

<!-- GRAFICA zoomable sunburst -->
<script src="../js/graficas/zoomable_sunburst.js"></script>

<!-- GRAFICA Barra Horizontal -->
<script src="../js/graficas/grafica_barras_dim_hor.js"></script>

<!-- Para cargar RETROALIMENTACIONES -->
<script src="../js/graficas/retroalimentaciones.js"></script>

<!--<script src="../js/modal_info.js"></script>-->
<script src="../js/pdf.js"></script>

</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard.</title>
    <link rel="icon" type="image/png" href="../imagenes/logo_3.png" />
    <link rel="stylesheet" href="../css/style_dashboard.css">
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
    <!-- <div class="loader-centrado" id="onload_resultados">
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
    </div> -->
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
        <a class="slider-opcion" onclick="ir_evaluacion();">
            <div class="slider-text">
                <i class="fas fa-poll-h"></i>
                <span>Evaluación</span>
                <div class="texto-emergente">
                    Evaluación
                </div>
            </div>
        </a>
        <a class="slider-opcion active" onclick="ir_dashboard();">
            <div class="slider-text">
                <i class="fas fa-chart-line"></i>
                <span>Dashboard</span>
                <div class="texto-emergente">
                    Dashboard
                </div>
            </div>
        </a>
        <a class="slider-opcion" onclick="ir_reporte();">
            <div class="slider-text">
                <i class="far fa-file-alt"></i>
                <span>Reporte</span>
                <div class="texto-emergente">
                    Reporte
                </div>
            </div>
        </a>
        <a class="slider-opcion" onclick="ir_about();">
            <div class="slider-text">
                <i class="fas fa-info-circle"></i>
                <span>About</span>
                <div class="texto-emergente">
                    About
                </div>
            </div>
        </a>
        <a class="slider-opcion sallir-option" onclick="salir();">
            <div class="slider-text">
                <i class="fas fa-sign-out-alt"></i>
                <span>Salir</span>
                <div class="texto-emergente">
                    Salir
                </div>
            </div>
        </a>
    </div>

    <!--sidebar end-->

    <!--contenido-->
    <div class="content">
        <!-- loader resultados -->
        <div class="loader-resultados" id="loader-resultados">
            <div class="border-loader">
                <div class="space-loader">
                    <div class="loading">
                    </div>
                </div>
            </div>
            <div class="texto-resulatados">
                <span>Calculando ...</span>
            </div>
        </div>

        <div class="totales-aspectos">
            <!-- Dimensiones  -->
            <div class="card-1 dimensiones">
                <div class="titulo">
                    <span>Dimesnion</span>
                </div>
                <div class="cont">
                    <span>30</span>/<span>40</span>
                </div>
            </div>
            <!-- temas  -->
            <div class="card-1 temas">
                <div class="titulo">
                    <span>Temas</span>
                </div>
                <div class="cont">
                    <span>20</span>/<span>40</span>
                </div>
            </div>
            <!-- sub-temas -->
            <div class="card-1 temas">
                <div class="titulo">
                    <span>Sub Temas</span>
                </div>
                <div class="cont">
                    <span>30</span>/<span>40</span>
                </div>
            </div>
        </div>

        <div class="graficas">
            <!-- graficas circulares -->
            <div class="grafica-circulares">
                <!-- valor total  -->
                <div class="card-bar-circular valor-total">
                    <div class="titulo">
                        <div class="icono icono-global">
                            <i class="fas fa-globe"></i>
                        </div>
                        <span>Integración Global.</span>
                    </div>
                    <div class="cont grafica-valor-total">
                    </div>
                </div>
                <!-- valor especifico  -->
                <div class="card-bar-circular valor-total">
                    <div class="titulo">
                        <div class="icono icono-especifico">
                            <i class="far fa-file-alt"></i>
                        </div>
                        <span>Integración Especifica.</span>
                    </div>
                    <div class="cont grafica-valor-especifico">
                    </div>
                </div>
                <!-- dimension 1 -->
                <div class="card-bar-circular valor-dim">
                    <div class="titulo">
                        <div class="icono icono-dim-1">
                            <i class="fas fa-hands"></i>
                        </div>
                        <span>Integración Social.</span>
                    </div>
                    <div class="cont grafica-valor-dim-1">
                    </div>
                </div>
                <!-- dimension 2 -->
                <div class="card-bar-circular valor-dim">
                    <div class="titulo">
                        <div class="icono icono-dim-2">
                            <i class="fas fa-leaf"></i>
                        </div>
                        <span>Integración Ambiental.</span>
                    </div>
                    <div class="cont grafica-valor-dim-2">
                    </div>
                </div>
            </div>

            <!-- graficas dimenssiones -->
            <div class="graficas-dimesniones">
                <!-- grafica circular zoom  -->
                <div class="grafica-dim">
                    <div class="titulo">
                        <span>Temas – Grafica Circular.</span>

                    </div>
                    <div class="cont grafica-circular-zoom">
                    </div>
                </div>
                <!-- grafica radar -->
                <div class="grafica-dim">
                    <div class="titulo">
                        <span>Temas – Grafica Radar.</span>
                    </div>
                    <div class="cont" id="grafica-radar-dashboard">
                    </div>
                </div>
            </div>

            <!-- graficas temas -->
            <div class="graficas-temas">
                <!-- grafica circular zoom  -->
                <div class="grafica-tema">
                    <div class="titulo">
                        <span>Dimensiones – Barra Horizontal.</span>

                    </div>
                    <div class="cont" id="grafica-var-horizontal-dashboard">.
                    </div>
                </div>
                <!-- grafica radar -->
                <div class="grafica-tema">
                    <div class="titulo">
                        <span>Dimensiones – Barra Vertical.</span>
                    </div>
                    <div class="cont grafica-bar-vertical" id="grafica-bar-dim-dashobaord">
                        <svg id="svg-bar-dashobaord" viewBox='0 0 750 500'></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>



</body>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../librerias/loader.js"></script>
<script src="../js/urls.js"></script>
<script src="../js/dashboard.js"></script>

<!-- GRAFICA Puntaje TOTAL-->
<!-- <script src="https://d3js.org/d3.v6.js"></script> -->
<!-- <script src="../js/graficas/grafica_bar_horizontal_total.js"></script> -->

<!-- GRAFICA Polar TEMAS-->
<!-- <script src="../librerias/d3.v3.min.js"></script>
<script src="../js/graficas/polar_temas.js"></script>  -->

<!-- -- GRAFICA Barras DIMENSIONES -- -->
<script src="https://d3js.org/d3.v5.min.js"></script>
<script src="../js/graficas/grafica_barras_dim.js"></script>

<!-- GRAFICA Polar Area Temas-->
<!-- <script src="https://raw.githack.com/jamesleesaunders/d3-ez/master/dist/d3-ez.js"></script> -->
<!-- Utiliza la libreria: <script src="https://d3js.org/d3.v5.min.js"></script>  -->
<!-- <script src="../js/graficas/polar_area.js"></script> -->

<!-- GARFICA DONA Dimensiones-->
<script src="https://d3js.org/d3.v4.min.js"></script>
<!-- <script src="../js/graficas/grafica_dona_dim.js"></script> -->

<!-- GRAFICA DONA Dimenisones 2-->
<!-- <script src="../js/graficas/grafica_dona_dim_2.js"></script> -->

<!-- GRAFICA BARRA Circular Puntate Total-->
<!-- Utiliza la libreria: <script src="https://d3js.org/d3.v5.min.js"></script>  -->
<script src="../js/graficas/barra_circular.js"></script>

<!-- GRAFICAS Radar-->
<script src="../librerias/anychart-core.js"></script>
<script src="../librerias/anychart-radar.js"></script>
<script src="../js/graficas/graficas_char.js"></script>

<!-- GRAFICA zoomable sunburst -->
<script src="../js/graficas/zoomable_sunburst.js"></script>

<!-- GRAFICA Barra Horizontal -->
<script src="../js/graficas/grafica_barras_dim_hor.js"></script>

<!-- Para cargar RETROALIMENTACIONES -->
<!-- <script src="../js/graficas/retroalimentaciones.js"></script> -->

<!--<script src="../js/modal_info.js"></script>-->
<!-- <script src="../js/pdf.js"></script> -->

</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About.</title>
    <link rel="icon" type="image/png" href="../imagenes/logo_3.png" />
    <link rel="stylesheet" href="../css/about.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">


    <link href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">

    <!--LETRA-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;1,400&display=swap"
        rel="stylesheet">

    <!-- Loader -->
    <link rel="stylesheet" href="../css/loader.css">

</head>

<body class="cuerpo hidden">
    <!-- <div class="loader-centrado" id="onload">
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
        <a class="slider-opcion" onclick="ir_dashboard();">
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
        <a class="slider-opcion active" onclick="ir_about();">
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
        <div class="contendor-info-general" style="display: block;">
            <div class="contendor-info">
                <div class="caja-texto">
                    <h1>Evalué su nivel de Integración.</h1>
                    <p>Evalué el desempeño de su empresa frente
                        a practicas de RSE. Realizar esta evaluación
                        será un enriquecedor para su empresa.
                    </p>
                </div>
            </div>
        </div>
        <div class="contendor-info-general" style="display: none;">
            <div class="contendor-info_2">
                <div class="caja-texto">
                    <h1>Consulte su nivel de Integración.</h1>
                    <p>Revise su informe sobre el nivel de integración de practicas de RSE y
                        vea como se comporta su empresa frente a conceptos de RSE.
                    </p>
                </div>
            </div>
        </div>
        <div class="nav-abaut-info">
            <div class="about-evaluacion about-repoter-info active">
                <span>Evaluación.</span>
            </div>
            <div class="about-reporte about-repoter-info">
                <span>Informe.</span>
            </div>
        </div>
        <div class="contenido-about" style="display: block;">
            <div class="contenido-abput-evaluacion">
                <div class="about-evaluacion-info">
                    <div class="titulo">
                        Obtenga un nivel de integración de practicas de RSE.
                    </div>
                    <div class="about-info">
                        <div class="info-1">
                            La mejor forma de mejorar en aspectos de RSE es conocer el
                            nivel de integración en el que se encuentra su empresa respecto
                            a conceptos de RSE.
                        </div>
                        <div class="info-2">
                            El nivel de integración es un índice que tiene un rango de 0 a 100,
                            siendo 100 y valores mas cercanos a 100 los resultados mas óptimos
                            en cuanto a la ampliación de conceptos de RSE.
                        </div>
                    </div>
                </div>
                <div class="about-evaluacion-img">
                    <img src="../imagenes/nivel_integracion.png" alt="">
                </div>
            </div>

            <!-- Ejemplo de Preguntas -->
            <div class="contenido-ejemplo-preguntas">
                <div class="titulo">
                    Ejemplo de preguntas.
                </div>
                <div class="info">
                    Todas las preguntas están clasificadas por temas,
                    y tendrán tres tipos de opciones, si, no y
                    parcialmente, siendo ‘si’ la opción más optima,
                    ‘parcialmente’ la opción media y ‘no’
                    la opción mas baja o menos optima.
                </div>
                <div class="ejemplo-preguntas">
                    <div class="tema-1">
                        <div class="tema-1-ejemplo">
                            <img class="imagenes-temas" src="../imagenes/Derechos_Humanos.jpg" alt="">
                        </div>
                        <div class="titulo-imagen">
                            Derechos Humanos
                        </div>
                        <div class="ver-preguntas active" id="boton-ver-pregunta">
                            Ver preguntas
                        </div>
                    </div>
                    <div class="tema-1">
                        <div class="tema-1-ejemplo">
                            <img class="imagenes-temas" src="../imagenes/cuestiones_relacionadas_consumidor.jpg" alt="">
                        </div>
                        <div class="titulo-imagen">
                            Cuestiones Relativas al Consumidor
                        </div>
                        <div class="ver-preguntas" id="boton-ver-pregunta">
                            Ver preguntas
                        </div>
                    </div>
                    <div class="tema-1">
                        <div class="tema-1-ejemplo">
                            <img class="imagenes-temas" src="../imagenes/practicas_trabajo.png" alt="">
                        </div>
                        <div class="titulo-imagen">
                            Prácticas de Trabajo
                        </div>
                        <div class="ver-preguntas" id="boton-ver-pregunta">
                            Ver preguntas
                        </div>
                    </div>
                    <div class="tema-1">
                        <div class="tema-1-ejemplo">
                            <img class="imagenes-temas" src="../imagenes/participacion_comunidad_desarrollo.jpg" alt="">
                        </div>
                        <div class="titulo-imagen">
                            Relaciones con la Comunidad y su Participación en su Desarrollo
                        </div>
                        <div class="ver-preguntas" id="boton-ver-pregunta">
                            Ver preguntas
                        </div>
                    </div>
                    <div class="tema-1">
                        <div class="tema-1-ejemplo">
                            <img class="imagenes-temas" src="../imagenes/medio_ambiente.jpg" alt="">
                        </div>
                        <div class="titulo-imagen">
                            Medio Ambiente
                        </div>
                        <div class="ver-preguntas" id="boton-ver-pregunta">
                            Ver preguntas
                        </div>
                    </div>
                </div>`
                <div class="ejemplo-preguntas-imagen">
                    <div class="imagen-preguntas" style="display: block;">
                        <img src="../imagenes/preguntas-DH.png" alt="">
                    </div>
                    <div class="imagen-preguntas" style="display: none;">
                        <img src="../imagenes/preguntas-CRC.png" alt="">
                    </div>
                    <div class="imagen-preguntas" style="display: none;">
                        <img src="../imagenes/preguntas-PT.png" alt="">
                    </div>
                    <div class="imagen-preguntas" style="display: none;">
                        <img src="../imagenes/preguntas-PCD.png" alt="">
                    </div>
                    <div class="imagen-preguntas" style="display: none;">
                        <img src="../imagenes/preguntas-MA.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="contenido-about" style="display: none;">
            <div class="contenido-about-reporte">
                <div class="titulo">
                    Informe de Integración.
                </div>
                <div class="info">
                    El informe de Integración mostrara un análisis
                    general de Responsabilidad Social Empresarial,
                    así como un análisis por cada una de las dimensiones,
                    temas y subtemas. Este análisis constara en índice que
                    tiene un rango de 0 a 100 siendo cien el valor mas optimo
                    y cero el menos optimo.
                </div>
                <div class="about-nivel-integracion">
                    <div class="informacion_1">
                        <div class="informacion_1-titulo">
                            Puntaje General.
                        </div>
                        <div class="info">
                            El puntaje general consta de dos niveles de integración.
                            “Nivel de Integración Especifico” se refiere al total
                            de prácticas evaluadas, teniendo en cuenta solo
                            practicas previamente registradas. “Nivel de Integración Global”
                            se refiera a todas las practicas evaluadas ya sea que se hayan o
                            no registrado previamente.
                        </div>
                    </div>
                    <div class="informacion_2">
                        <img src="../imagenes/puntaje_general.png" alt="">
                    </div>
                </div>
                <div class="about-aspectos-evaluados">
                    <div class="informacion-aspectos-evaluados">
                        <div class="titulo">
                            Informe de Integración, aspectos evaluados.
                        </div>
                        <div class="info">
                            El informe de integración estará conformado
                            por un análisis de dimensiones, temas y subtemas,
                            que están clasificados de acuerdo a su nivel de
                            integración. Este nivel de interacción tiene tres
                            rangos, Nivel de Integración Alto, Nivel de
                            Integración Medio y Nivel de Integración Bajo,
                            siendo el nivel de integración alto el más optimo y
                            el nivel de integración bajo el menos optimo.
                        </div>
                    </div>
                    <div class="informacion-integracion">
                        <div class="aspectos">
                            <div class="aspecto active">
                                Análisis de Temas Evaluados
                            </div>
                            <div class="aspecto-info" style="display: block;">
                                <div class="contenido-aspecto">
                                    Este análisis permite conocer el nivel de
                                    integración de cada uno de los temas, el
                                    nivel de integración esta entre un rango
                                    de 0 a 100, siendo 100 y los valores cercanos
                                    a 100 los valores más óptimos.
                                </div>
                            </div>
                            <div class="aspecto">
                                Análisis de Subtemas Evaluados
                            </div>
                            <div class="aspecto-info" style="display: none;">
                                <div class="contenido-aspecto">
                                    En este apartado se podrá visualizar
                                    el nivel de integración de cada uno
                                    de los subtemas de cada tema.
                                </div>
                            </div>
                            <div class="aspecto">
                                Análisis Dimensiones Evaluadas
                            </div>
                            <div class="aspecto-info" style="display: none;">
                                <div class="contenido-aspecto">
                                    Este análisis permite conocer el nivel
                                    de integración de cada una de las
                                    dimensiones que hacen parte de RSE,
                                    así como una clasificación de los temas
                                    de cada dimensión, los temas se clasifican
                                    en tres rangos, Bueno, Malo y Regular de
                                    acuerdo a su nivel de integración.
                                </div>
                            </div>
                            <div class="aspecto">
                                Graficas
                            </div>
                            <div class="aspecto-info" style="display: none;">
                                <div class="contenido-aspecto">
                                    En este apartado se podrá visualizar
                                    graficas de los diferentes temas
                                    y dimensiones evaluados. En estas
                                    graficas se observa cuáles de los
                                    diferentes aspectos de RSE predomina
                                    en su empresa.
                                </div>
                            </div>
                        </div>
                        <div class="aspectos-img">
                            <div class="info-aspecto info-aspecto-1" style="display: block;">
                                <!-- esta imagen esta en el css en "info-aspecto-1" -->
                            </div>
                            <div class="info-aspecto info-aspecto-2" style="display: none;">
                                <img src="../imagenes/subtema_inetgracion.png" alt="">
                                <img src="../imagenes/subtema_inetgracion_2.png" alt="">
                                <img src="../imagenes/subtema_inetgracion_3.png" alt="">
                            </div>
                            <div class="info-aspecto info-aspecto-3" style="display: none;">
                                <img src="../imagenes/dim_social_inetegracion.png" alt="">
                                <!-- <img src="../imagenes/dim_ambiental_inetegracion.png" alt=""> -->
                            </div>
                            <div class="info-aspecto info-aspecto-4" style="display: none;">
                                <div class="garficas_temas">
                                    <img src="../imagenes/grafica_circular.png" alt="">
                                    <img src="../imagenes/grafica_radar_2.png" alt="">
                                </div>
                                <div class="grafica-dim">
                                    <img src="../imagenes//grafica_bar_dim.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>
<script>
    function menuToggle() {
        const toggleMenu = document.querySelector('.menu-salir');
        toggleMenu.classList.toggle('active')
    }
</script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../librerias/loader.js"></script>
<script src="../js/urls.js"></script>
<script src="../js/about.js"></script>

</html>
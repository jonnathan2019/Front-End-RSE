<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil Usuario.</title>
    <link rel="icon" type="image/png" href="../imagenes/logo_3.png" />
    <link rel="stylesheet" href="../css/perfil_usuario.css">
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
                    <li onclick="ir_perfil();"><i class="far fa-user-circle"></i></i>
                        <a>Mi Perfil</a>
                    </li>
                    <!--<li><i class="fas fa-edit"></i><a href="#">Editar Perfil</a></li>-->
                    <li><i class="fas fa-sign-out-alt"></i><a onclick="salir()">Salir</a></li>
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
        <a class="slider-opcion" href="#"><i class="fas fa-table"></i>
            <span>Estándar</span>
            <div class="texto-emergente">
                Estándar
            </div>
        </a>
        <!-- <a class="slider-opcion" href="#"><i class="fas fa-cogs"></i>
            <span>Configuracion</span>
            <div class="texto-emergente">
                Configuracion
            </div>
        </a> -->
        <a class="slider-opcion" href="#"><i class="fas fa-info-circle"></i>
            <span>About</span>
            <div class="texto-emergente">
                About
            </div>
        </a>
    </div>

    <!--sidebar end-->

    <!--contenido-->
    <div class="content">

        <!--Informacion Usuario-->
        <div class="contenido">
            <div class="titulo">
                <span>Configuración Perfil.</span>
            </div>
            <div class="info-usuario">
                <div class="nombre-usuario">
                    <div class="datos">
                        <label>Nombre:</label>
                        <input type="text" id="nombre">
                    </div>
                    <div class="datos">
                        <label>Apellido:</label>
                        <input type="text" id="apellido">
                    </div>
                </div>
                <div class="usuario-email">
                    <div class="datos">
                        <label>Usuario:</label>
                        <input type="text" id="usuario">
                    </div>
                    <div class="datos">
                        <label>Email:</label>
                        <input type="text" id="email">
                    </div>
                </div>
                <div class="contrasenas">
                    <div class="datos">
                        <label>Contraseña:</label>
                        <input type="text" id="contrasena">
                    </div>
                    <div class="datos">
                        <label>Confirmar Contraseña:</label>
                        <input type="text" id="confirmar-contrasena">
                    </div>
                </div>
            </div>
            <div class="guardar-info">
                <button onclick="regresar();">Regresar</button>
                <button onclick="actualizar_usaurio();">Guardar</button>
            </div>
        </div>

        <!--Informacion Empresa-->
        <div class="contenido">
            <div class="titulo">
                <span>Configuración Empresa</span>
            </div>
            <div class="info-usuario">
                <div class="nombre-usuario">
                    <div class="datos">
                        <label>Nombre Empresa:</label>
                        <input type="text" id="nombre-empresa">
                    </div>
                    <div class="datos">
                        <label>Sector Opera:</label>
                        <input type="text" id="secto-opera">
                    </div>
                </div>
                <div class="usuario-email">
                    <div class="datos">
                        <label>Numero Empleados:</label>
                        <input type="text" id="numero-empleados">
                    </div>
                    <div class="datos">
                        <label>RUC:</label>
                        <input type="text" id="ruc-empresa">
                    </div>
                </div>
            </div>
            <div class="guardar-info">
                <button onclick="regresar();">Regresar</button>
                <button onclick="actualizar_empresa();">Guardar</button>
            </div>
        </div>





    </div>

    <script>

        function menuToggle() {
            const toggleMenu = document.querySelector('.menu-salir');
            toggleMenu.classList.toggle('active')
        }

        var tabs = document.querySelectorAll(".tabs ul li");
        var tab_wraps = document.querySelectorAll(".tab_wrap");

        tabs.forEach(function (tab, tab_index) {
            tab.addEventListener("click", function () {
                tabs.forEach(function (tab) {
                    tab.classList.remove("active");
                })
                tab.classList.add("active");

                tab_wraps.forEach(function (content, content_index) {
                    if (content_index == tab_index) {
                        content.style.display = "block";
                    }
                    else {
                        content.style.display = "none";
                    }
                })

            })
        })
    </script>

</body>
<script src="../js/urls.js"></script>
<script src="../js/perfil_usuario.js"></script>

</html>
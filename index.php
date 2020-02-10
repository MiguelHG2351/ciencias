<!DOCTYPE html>
<html lang="es" >
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
  <meta name="author" content="Miguel Hernández" />
  <meta name="keywords" content="Cursos, Matemáticas, biología, historia, Que es?" />
  <meta name="description" content="Tenemos más de 3 cursos disponibles y gratuitos con temas para estudiantes de secundaria y preparatoria para formar al futuro de Nicaragua y América Latína." />
  <meta property="og:type" content="Ciencias" />
  <meta property="og:title" content="Bienvenidos a la plataforma online." />
  <meta property="og:image" content="image/imageFacebook.png" />
  <meta property="og:description" content="En esta plataforma tenemos disponibles 3 cursos entre ellos: Matemáticas, Biología, Historia y proximamente Física entra ya para aprender con nosotros." />
  <meta name="theme-color" content="blue" />
  <title>Inicio-InstitutoEsquipulas</title>
  <link rel="stylesheet" href="css/materialize.min.css">
  <link rel="stylesheet" href="css/inicio.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/icon.css">
  <link rel="icon" href="image/80.webp" />
</head>
<body class="bg-light" >
 <div class="robot-container" >
   <p id="textoRobot" class="hiddenRobot" style="background:blue; border-radius:15%" >Haz click</p>
   <img id="robotitus" class="robot" width="60" src="image/robot.png" >
 </div> 
   <header class="navbar-fixed" > 
    <nav class="blue darken-4" >
      <div class="nav-wrapper">
        <a data-target="slide-out" href="#" class="cursores brand-logo left sidenav-trigger" ><i class="material-icons" >menu</i></a>
        <ul class="right" >
          <li><a href="#" ></a>About</li>
          <li><a href="#" >Help</a></li>
          <li>
          <a data-target="id_hola" class="dropdown-trigger" href="#" >Ir a<i class="material-icons right" ></i></a>      
          </li>      
        </ul>
      </div>
    </nav>
  </header>
  <aside>
  <ul id="id_hola" class="dropdown-content" >
    <li><a href="" >Menu</a></li>
    <li><a href="" >Recomendaciones</a></li>
    <li><a href="" >Informe de bugs</a></li>   
  </ul>
  <div class="parallax-container" >
  	<div class="parallax" >
  	  <img class="" src="image/matemáticas-álgebra-geometría-trigonometría-43517626.jpg" >
  	</div>
  </div>
  <div class="black white-text center" >
    <div class="container" >
      <div class="section" >
  		<h2>Matemáticas</h2>
  		<p>Aprendiendo Matemáticas tendras la capacidad de realizar operaciones y problemas más rápido, llegar a crear muchas cosas asombrosas sin tener muchos conociemtos previos ¡Entra ya y aprende!, todos los trabajos del mundo lo necesitan.</p>
  		<a class="btn red" href="matematicas.html" >Entrar al curso</a>
 	  </div>
    </div>
  </div>  
  <div class="parallax-container" >
    <div class="parallax">
      <img class="" src="image/marruecos.jpg" >
    </div>
  </div>
  <div class="black white-text center" >
    <div class="container" >
      <div class="section" >
        <h2>Biología</h2>
        <p id="interceptado" >
        Entiende como es que todo en la tierra funciona y se une para formar la vida que hoy conocemos, comprende la genética, astros y sobre la Ecología para que logres ver de otra forma 
        el mundo y veas por que ciertas reacciones dan un resultado ¡Entra ya!.
        </p>
        <a class="btn green" href="biologia.html" >Entrar al Curso</a>
      </div>
    </div>
  </div>
  <div class="parallax-container" >
    <div class="parallax" >
      <img src="image/marruecos.jpg" >
    </div>
  </div>
  <div class="black white-text center" >
    <div class="container" >
      <div class="section" >
        <h2>Química</h2>
        <p>Si quieres saber como es que pasan las reacciones químicas en el ambiente busca tu cuaderno y aprende las historias de los descubrimientos químicos y que paso en ese proceso, La tetravalencia del carbono, propiedades del carbono, compuestos del Benceno y mucho más.</p>
        <a class="btn orange" href="quimica.html" >Entrar ya al curso</a>
      </div>
    </div>
  </div>
  </aside>
<!--  <nav class="" > <!-- navbar content here  -->
<ul id="slide-out" class="sidenav">
  <!-- Estructura de cuenta de usuario -->
  <li>
    <div class="user-view">
      <div class="background">
    	  <img class="responsive-img" src="image/platzi-logo.png">
      </div>
		<a href="#user" onclick="alert('to be continued')"><img class="circle" src="image/josue.jpg"></a>
	    <a href="#name"><span class="white-text name">Josué Miguel</span></a>
		<a href="#email"><span class="white-text email">josue4tito@gmail.com</span></a>
  	<div class="" >
    	  <input list="materias" class="inputL is-active" id="inputL" type="text" placeholder="buscar: Matemáticas, Historia...." />
 	    </div>
 	  </div>
  </li>
  <!-- configuraciones del Menu desplegable SideNav menu hidden -->
  <li><a href="blog.html"><i class="material-icons">cloud</i>Blogs</a></li>
  <li><a href="#!">Logros de alumnos</a></li>
  <li><div class="divider"></div></li>
  <li><a class="subheader">Educación</a></li>
  <li><a class="waves-effect" href="inicio.html">Asignaturas</a></li>
  <li><a href="matematicas.html" class="waves-effect" >Matemáticas</a></li>
  <li><a href="history.html" class="waves-effect" >Historia</a></li>
  <li><a href="quimica.html" class="waves-effect" >Química</a></li>
  <li><a href="biología.html" class="waves-effect" >Biología</a></li>
</ul>
<!-- Código del overlay -->
<div class="overlayL" ></div>
<!-- Fin del Código del overlay -->
<!--  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>-->
<!--  <script src="js/jquery-3.3.1.min.js"></script>-->
  <script src="js/materialize.min.js"></script>
  <script src="js/robot.js"></script>
  <script src="js/inicio.js"></script>
</body>
</html>
<?php

  $usuario = $_POST['usuario'];
  $pass = $_POST['pass'];
  
  if($usuario === "" || $pass === "") {
    echo json_encode("rellena la entrada de texto");
  } else {
    echo json_encode("correcto <br>".$usuario:."<br>Pass".$pass);
  }

<?php

error_reporting(0);

    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $tipoDocumento = $_POST["tipoDocumento"];
    $documento = $_POST["documento"];
    $telefono = $_POST["telefono"];
    $direccion = $_POST["direccion"];
    $correo = $_POST["correo"];
    $cargo = $_POST["cargo"];
    $nombreObra = $_POST["nombreObra"];
    $fecha = $_POST["fecha"];
    $estado = "";

    foreach($_POST["estado"] as $estado) //recorre el estado
    {

    }

    // echo "nombre: " . $nombre . "<br>";
    // echo "apellido" . $apellido . "<br>";
    // echo "tipo documento " . $tipoDocumento . "<br>";
    // echo "documento: ". $documento . "<br>";
    // echo "telefono ". $telefono . "<br>";
    // echo "direccion ". $direccion . "<br>";
    // echo "correo ". $correo . "<br>";
    // echo "cargo ". $cargo . "<br>";
    // echo "nombre de obra ". $nombreObra . "<br>";
    // echo "fecha ". $fecha . "<br>";
    // echo "estado " .$estado . "<br>";

    if($nombre != "" && $apellido != "" && $tipoDocumento != "" && $documento != "" && $telefono != "" && $direccion != "" 
        && $correo != "" && $cargo != "" && $nombreObra != "" && $fecha != "" && $estado != "")
    {
        echo "Registro éxitoso!!!";
    }
    else 
    {
        echo "No se pudo realizar el registro";
    }

?>
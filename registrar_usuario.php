<?php
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $tipoDocumento = $_POST["tipo_documento"];
    $documento = $_POST["documento"];
    $correo = $_POST["correo"];
    $celular = $_POST["celular"];
    $direccion = $_POST["direccion"];
/*
    echo "nombre: $nombre";
    echo "<br>";
    echo "apellido: $apellido";
    echo "<br>";
    echo "tipo de documento: $tipoDocumento";
    echo "<br>";
    echo "documento: $documento";
    echo "<br>";
    echo "correo: $correo";
    echo "<br>";
    echo "celular: $celular";
    echo "<br>";
    echo "direccion: $direccion";
    echo "<br>";
*/
if ($nombre != "" && $apellido != "" && $tipoDocumento != "" && $documento != "" && $correo != "" && $celular != "" && $direccion != "") {
    echo "Registro exitoso";
} else {
    echo "no se pudo realizar el registro";
}
?>
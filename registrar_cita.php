<?php
$TipoDocumento = $_POST["TipoDocumento"];
$Documento= $_POST["Documento"];
$Nombres = $_POST["Nombres"];
$TipoVisita= $_POST["TipoVisita"];
$apellido= $_POST["apellido"];
$direccion= $_POST["direccion"];
$ciudad= $_POST["ciudad"];
$fechaV= $_POST["fechaV"];
$correo= $_POST["correo"];




if($TipoDocumento!="" && $Documento!="" && $Nombres!="" && $TipoVisita!="" && $apellido!="" && $ciudad!="" && $fechaV!="" && $correo!="" && $direccion!=""){
    echo "Registro Exitoso";
}
else{
    echo "Problema en el registro";
}
?>
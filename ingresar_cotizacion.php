<?php
$Cliente = $_POST["cliente"];
$Direccion = $_POST["direccion"];
$Identificacion = $_POST["identificacion"];
$Documento = $_POST["documento"];
$TipoConcreto = $_POST["tipo_concreto"];
$Etapa = "";
$Telefono = $_POST["telefono"];
$Fecha = $_POST["fecha"];

foreach ($_POST["etapa"] as $Etapa) {
     
}


// echo "El Cliente es: " .$Cliente;
// echo "<br>";
// echo "La Direccion es: " .$Direccion;
// echo "<br>";
// echo "La Identificacion es: " .$Identificacion;
// echo "<br>";
// echo "El Documento es: " .$Documento;
// echo "<br>";
// echo "El Tipo de concreto es: " .$TipoConcreto;
// echo "<br>";
// echo "La Etapa  es: " .$Etapa;
// echo "<br>";
// echo "El Telefono es: " .$Telefono;
// echo "<br>";
// echo "La Fecha es: " .$Fecha;
// echo "<br>";
$longitudDocumento = strlen($Documento);
$longitudTelefono = strlen($Telefono);


if ($Cliente!=="" && $Direccion!=="" && $Identificacion!==""  && $TipoConcreto!=="" && $Etapa!=="" && $Fecha!=="" && $longitudDocumento == 10 && $longitudTelefono == 10  ) {

     echo "Regiistro exitoso";



}else {
     echo "no se pudo validar regiistro";
//      echo "<br>";
//      echo "longitud  cocumento:" .strlen($Documento);
}





?>
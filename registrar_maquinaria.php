<?php

$nombreempresa = $_POST["nombreempresa"];
$directorobra = $_POST["directorobra"];
$constructora = $_POST["constructora"];
$mes = $_POST["mes"];
$maquina = $_POST["maquina"];
$operario1 = $_POST["operario1"];
$operario2 = $_POST["operario2"];

/* ---
echo "$nombreempresa";
echo "$directorobra";
echo "$constructora";
echo "$mes";
echo "$maquina";
echo "$operario1";
echo "$operario2";
*/

if($nombreempresa != "" && $directorobra != "" && $constructora != "" && $mes != "" && $maquina != "" && $operario1 != "" && $operario2 != "" )
{
    echo "Registro Exitoso";
}
else
{
    echo "No se pudo realizar el registro";
}

?>
<?php

$nombreempresa = $_POST["nombreempresa"];
$phone = $_POST["phone"];
$directorobra = $_POST["directorobra"];
$constructora = $_POST["constructora"];
$mes = $_POST["mes"];
$puntualidad = $_POST["puntualidad"];
$solucionproblemas = $_POST["solucionproblemas"];
$ordenaseo = $_POST["ordenaseo"];
$requisitos = $_POST["requisitos"];
$pregunta2 = $_POST["pregunta2"];
//$descripcionp3 = $_POST["descripcionp3"]; //-----------
$pregunta4 = $_POST["pregunta4"];
//$descripcionp5 = $_POST["descripcionp5"]; //-----------
$pregunta6 = $_POST["pregunta6"];
$pregunta7 = $_POST["pregunta7"];

/*
echo "nombreempresa";
echo "phone";
echo "directorobra";
echo "constructora";
echo "mes";
echo "puntualidad";
echo "solucionproblemas";
echo "ordenaseo";
echo "requisitos";
echo "pregunta2";
echo "descripcionp3";
echo "pregunta4";
echo "descripcionp5";
echo "pregunta6";
echo "pregunta7";
*/


if( $nombreempresa != "" && $phone != "" && $directorobra != "" && $constructora != "" && $mes != "" && $puntualidad != "" && $solucionproblemas != "" && $ordenaseo != "" && $requisitos != "" && $pregunta2 != "" && $pregunta4 != "" && $pregunta6 != "" && $pregunta7)
{
    echo "Registro Exitoso";
}
else
{
    echo "No se pudo realizar el registro";
}
?>
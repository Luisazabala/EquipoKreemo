<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE');

$archivo=file("Archivos_Cargados/airports_2020_Fa.txt");

//recorrer el archivo

foreach ($archivo as $linea) {

     $datos = explode("|",$linea);

     if ($datos[2]<100) {
          $aeropuertos[] = array('idaeropuerto'=>$datos[0], 'nombreaeropuerto'=> $datos[1], 'idregion'=> $datos[2]);
     }
     error_reporting(0);
}

//crear el JSON

$json_string = json_encode($aeropuertos);
echo $json_string;

?>
<?php

$nombre_archivo = $_FILES["nombrearchivo"]["name"];
$tipo_archivo = $_FILES["nombrearchivo"]["type"];
$tamano_archivo = $_FILES["nombrearchivo"]["size"];

echo "<table border='1' align='center'>";
echo "<thead><th>Tipo</th><th>Descripcion</th></thead>";

     echo "<tr>
     <td>Nombre del archivo </td>
     <td>$nombre_archivo</td>
     </tr>";

     echo "<tr>
     <td>Tipo del archivo </td>
     <td>$tipo_archivo</td>
     </tr>";

     echo "<tr>
     <td>Tamaño del archivo </td>
     <td>$tamano_archivo</td>
     </tr>";

// echo "Nombre del archivo: ".$nombre_archivo."<br>";
// echo "Tipo del archivo: ".$tipo_archivo."<br>";
// echo "Tamaño del archivo: ".$tamano_archivo."<br>";

echo "<br>";
echo "<br>";

if ($tipo_archivo!="text/plain")
{
     echo "Formato de archivo no valido para cargar ";
}else {
     if (move_uploaded_file($_FILES["nombrearchivo"]["tmp_name"], "Archivos_Cargados/".$nombre_archivo)) {
          echo "El archivo a sido cargado exitosamente";
          $archivo = file("Archivos_Cargados/".$nombre_archivo);
          echo "<table border='1' align='center'>";
          echo "<thead><th>Indice</th><th>Codigo IATA</th><th>Nombre Aeropuerto</th><th>Id Region</th></thead>";




     foreach ($archivo as $indice=>$linea) { 
          //echo $linea; //mostras la linea
          $campos= explode("|",$linea); // Convierte una linea en un vector, en este caso por la presencia de |
          
          $campo1=$campos[1];
          if($campo1[0]=="A" || $campo1[0]=="E" || $campo1[0]=="I" || $campo1[0]=="O" || $campo1[0]=="U")
          { 
          echo "<tr>
          <td>$indice</td>
          <td>$campos[0]</td>
          <td>$campos[1]</td>
          <td>$campos[2]</td>
          </tr>";
          } 
          error_reporting(0);
      }

echo "</table>";
     }
     else {
          echo "El archivo a NO sido cargado ";
     }
}





?>
$(document).ready(function() {
    var url="https://adsi.testsgroup.com/datos_json_productos.php";

    $("#tablaProductos1 tbody").html("");
    $.getJSON(url, function(productos)
    {
         $.each(productos, function(i,productos){

              if (productos.precio < 20000 && productos.unidad == "KLS") {

              var newRow =
              "<tr>"
              +"<td>"+productos.id+"</td>"
              +"<td>"+productos.nombre+"</td>"
              +"<td>"+productos.unidad+"</td>"
              +"<td>"+productos.precio+"</td>"
              +"</tr>";
              $(newRow).appendTo("#tablaProductos1 tbody");
              };
         });
    });

    $("#tablaProductos2 tbody").html("");
    $.getJSON(url, function(productos)
    {
         $.each(productos, function(i,productos){

              if (productos.precio >= 20000 && productos.unidad == "UND") {

              var newRow =
              "<tr>"
              +"<td>"+productos.id+"</td>"
              +"<td>"+productos.nombre+"</td>"
              +"<td>"+productos.unidad+"</td>"
              +"<td>"+productos.precio+"</td>"
              +"</tr>";
              $(newRow).appendTo("#tablaProductos2 tbody");
              };
         });
    });

});
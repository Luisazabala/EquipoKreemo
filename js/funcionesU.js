$(document).ready(function() {
    $("#btnLimpiar").click(function() {
        $("input").val("");
        $("select").val("");
    })
});

$(document).ready(function() {
    $('.solo_numeros').on("keyup", function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});

$(document).ready(function() {
    $('.solo_letras').on("keyup", function() {
        this.value = this.value.replace(/[^a-zA-Z]/g, '');
    });
});

$(document).ready(function(){
    $( "#frmUsuarios" ).submit(function( event )
    {
        event.preventDefault();
       validado = 0;

        if ($("#nombre").val().length == 0){
            $("#validar_nombre").text("*");
        } else if ($("#nombre").val().length < 5 || $("#nombre").val().length > 20) {
            $("#validar_nombre").text("Escriba su nombre entre 5 y 20 caracteres");
        } else {
            $("#validar_nombre").text("");
            validado++;
        }

        if ($("#apellido").val().length == 0){
            $("#validar_apellido").text("*");
        } else if ($("#apellido").val().length < 5 || $("#apellido").val().length > 20) {
            $("#validar_apellido").text("Escriba su nombre entre 5 y 20 caracteres");
        } else {
            $("#validar_apellido").text("");
            validado++;
        }

        if ($("#tipo_documento").val().length == ""){
            $("#validar_tipoDocumento").text("*");
        } else {
            $("#validar_tipoDocumento").text("");
            validado++;

        }

        if ($("#documento").val().length == 0) {
            $("#validar_documento").text("*");
        } else if ($("#documento").val().length < 10 || $("#documento").val().length > 10) {
            $("#validar_documento").text("Longitud invalida");
        } else {
            $("#validar_documento").text("");
            validado++;
        }

        if($("#correo").val().indexOf('@', 0) == -1 || $("#correo").val().indexOf('.', 0) == -1) {
            $("#validar_correo").text("*Correo inválido");
        }else {
            $("#validar_correo").text("");
            validado++;
        }

        if ($("#celular").val().length == 0) {
            $("#validar_celular").text("*");
        } else if ($("#celular").val().length < 10 || $("#celular").val().length > 10) {
            $("#validar_celular").text("Longitud invalida");
        } else {
            $("#validar_celular").text("");
            validado++;
        }

        if ($("#direccion").val().length == 0) {
            $("#validar_direccion").text("*");
        } else {
            $("#validar_direccion").text("");
            validado++;
        }

        if (validado == 7){

            swal("Usuario Creado!", "Gracias por utilizar nuestro servicio", "success");
            var url = "registrar_usuario.php";
                $.ajax({
                    type: "POST",
                    url: url,
                    data: $("#frmUsuarios").serialize(),
                    success: function(data)
                    {
                        $('#respuestaTransaccion').html(data);
                    }
                });
            } else {
                var url = "registrar_usuario.php";
                $.ajax({
                    type: "POST",
                    url: url,
                    data: $("#frmUsuarios").serialize(),
                    success: function(data)
                    {
                        $('#respuestaTransaccion').html(data);
                    }
                });
            }
    });
});
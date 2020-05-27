$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $(document).ready(function(){
    $('select').formSelect();
  });

$(function(){
    $("#fecha").datepicker(
        {
            format: 'dd mm  yyyy',
            setDefaultDate: true, //fijar fechar por defecto
            defaultDate: new Date(2020, 5, 2), //fijar fecha por defecto
            disableWeekends: true, //para no dejar escoger fines de semana
            firstDay: 1, //para mostrar en que día empieza calendario
            minDate: new Date(2020,5,20), //fecha minima
            i18n:
            {
              months: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
              monthsShor:['ene','feb','Mar','Abr','May','Jun','Jul','Agos','Sept','Oct','Nov','Dic'],
              weekdays: ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'],
            }
        }
    );
})



function limpiar()
{
    Swal.fire('Vamos a limpiar los campos.')
    // alert("Desea limpiar lo campos?");
    $("input").val("");
    isValid = 0;
    console.log('isvalid vale ' + isValid);
    // $("select").val("");
    // $("textarea").val("");
    // $("input[name='pago']").prop('checked',false);
}

function salir()
{
    window.location.href = "index.html";
}

$(document).ready(function (){
    $(".solo_numeros").on("keyup", function(){
        this.value = this.value.replace(/[^0-9]/g,'');
    })
})

$(document).ready(function (){
    $(".solo_mayus_letras").on("keyup", function(){
        this.value = this.value.replace(/[^a-zA-Z]/g,'');
        this.value = this.value.toUpperCase();
    })
})

//validacion php:


$(document).ready(function(){
    $("#regCliente").submit(function(event){

        event.preventDefault();

        var url = "registroCliente.php";

        var isValid = 0;

        if ($("#nombre").val() == null || $("#nombre").val().length > 20 || $("#nombre").val() < 3 || $("#nombre").val().length == 0 )
        {
            $("#valNombre").text("Debes ingresar nombre.");
            //document.getElementById('nombre').focus();
        }
        else
        {
            $("#valNombre").text("");
            isValid++;

        }

        //const patronApellido = new RegExp('^[A-Z]+$', 'i');
        // || !patronApellido.test($("#apellido").val()

        if ($("#apellido").val() == null || $("#apellido").val().length > 20 || $("#apellido").val() < 3 || $("#apellido").val().length == 0 )
        {
            $("#valApellido").text("Debes ingresar apellido.");
            //document.getElementById('apellido').focus();
        }
        else
        {
            $("#valApellido").text("");
            isValid++;

        }

      //validacion de select con Js:
       var tipodocumento = document.getElementById("tipoDocumento");
        if(tipodocumento.value == "" || tipodocumento.value == null)
        {
            //alert("debe elegir tipo de documento.");
            $("#valTipoDocumento").text("Debes seleccionar tipo de documento.");
        }
        else
        {
            $("#valTipoDocumento").text("");
            isValid++;
        }

        if ($("#documento").val() == null || $("#documento").val().length < 10 || $("#documento").val().length > 10 || isNaN($("#documento").val()) )
        {
            //alert("Ingrese valores sólo valores númericos de 10 dígitos.");
            $("#vDocumento").text("* Debe ingresar su número de documento.");
            document.getElementById("documento").focus();
        }
        else
        {
           isValid++;
           $("#vDocumento").text("");
        }



        if ($("#telefono").val().length == 0 )
        {
            $("#vTelefono").text("* Debe ingresar número de teléfono.");

        }
        else if ($("#telefono").val().length < 10 || $("#telefono").val().length > 10)
        {
            $("#vTelefono").text("El número de teléfono es de 10 digitos.");

        }
        else
        {
            $("#vTelefono").text("");
            isValid++;
        }

        //const patronDir = new RegExp('[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?)* (((#|[nN][oO]\.?) ?)?\d{1,4}(( ?[a-zA-Z0-9\-]+)+)?)');
        // || !patronDir.test($("#direccion").val()

        if ($("#direccion").val() == null || $("#direccion").val().length > 50 || $("#direccion").val() < 10 || $("#direccion").val().length == 0
       )
        {
            $("#vDireccion").text("Debe ingresar su dirección.");
            document.getElementById('direccion').focus();
        }
        else
        {
            $("#vDireccion").text("");
            isValid++;

        }

        const emailRegex = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
      
        if ($("#correo").val() == null || $("#correo").val().length == 0 || !emailRegex.test($("#correo").val()))
        {
            $("#vCorreo").text("Debe ingresar su correo.");
            document.getElementById('direccion').focus();
        }
        else
        {
            $("#vCorreo").text("");
            isValid++;

        }

        // || !patron.test($("#cargo").val()

        if ($("#cargo").val() == null || $("#cargo").val().length > 20 || $("#cargo").val() < 3 || $("#cargo").val().length == 0 )
        {
            $("#vCargo").text("Debe ingresar su cargo.");
            document.getElementById('nombre').focus();
        }
        else
        {
            $("#vCargo").text("");
            isValid++;

        }

        //const patronObra = new RegExp('^[A-Z]+$', 'i');
        // || !patronObra.test($("#nombreObra").val()

        if ($("#nombreObra").val() == null || $("#nombreObra").val().length > 20 || $("#nombreObra").val() < 3 || $("#nombreObra").val() == 0 )
        {
            $("#vNOmbreObra").text("Debes ingresar nombre de la obra.");
            document.getElementById('nombre').focus();
        }
        else
        {
            $("#vNOmbreObra").text("");
            isValid++;

        }

        //fecha

        //validacion checkbox:

        if (!$("input[name='estado[]']").is(':checked'))
        {
            $("#valEstado").text("Debe seleccionar un estado de cliente.");
        }
        else
        {
            $("#valEstado").text("");
            isValid++;
        }



        console.log("isValid es: " + isValid);

        if (isValid == 10){
            Swal.fire("Registro exitoso!!!");
            //window.location.href = "index.html";
            var url = "registroCliente.php";

            $("#vNombre").text("");

            $.ajax(
                {
                    type: "POST",
                    url: url,
                    data: $("#regCliente").serialize(),
                    success: function (data)
                    {
                        $("#mensajeRegistro").html(data);
                        console.log(data);
                    }
                }
            )

        }
        else
        {
            Swal.fire({
                icon: 'error',
                title: 'Debes llenar todos los campos.',
                text: 'Algun campo no ha sido seleccionado!',
              })

              var url = "registroCliente.php";

            $("#vNombre").text("");

            $.ajax(
                {
                    type: "POST",
                    url: url,
                    data: $("#regCliente").serialize(),
                    success: function (data)
                    {
                        $("#mensajeRegistro").html(data);
                        console.log(data);
                    }
                }
            )

            isValid = 0;
        }
    });
    
});
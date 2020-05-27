
$(document).ready(function(){
     $("#btnlimpiar").click(function(){

          $("input").val("");
          $("select").val("0");
          $("input[name='etapa[]']").prop('checked',false);

          $("#validacion_cliente").text("");$("#validacion_cliente2").text("");
          $("#validacion_direccion").text("");$("#validacion_direccion2").text("");
          $("#validacion_direccion").text("");
          $("#validacion_direccion2").text("");
          $("#validacion_identificacion").text("");
          $("#validacion_identificacion2").text("");
          $("#validacion_documento").text("");
          $("#validacion_documento2").text("");
          $("#validacion_tipocon2").text("");
          $("#validacion_tipocon").text("");
          $("#validacion_etapa2").text("");$("#validacion_etapa").text("");
          $("#validacion_cel").text("");$("#validacion_cel2").text("");
          $("#validacion_f").text("");$("#validacion_f2").text("");
          $("#validacion_fecha").text("");$("#validacion_fecha2").text("");
          $("#validacion_condiciones").text("");
          $("#RtaCotizacion").text("");
          $("#RtaTexto").text("");

     });
});

$(document).ready(function(){

     $(".solo_numeros").on("keyup",function(){
          this.value = this.value.replace(/[^0-9]/g,'');
     });

     $(".solo_letras").on("keyup",function(){
          this.value = this.value.replace(/[0-9]/g,'');
     });


});

$(document).ready(function() {
     $("#FrmCotizacion").submit(function(event){
          event.preventDefault();


                    let validado=0;

          if($("#cliente").val().length == 0 )
          {
               $("#validacion_cliente").text("*");
               $("#validacion_cliente2").text("Debe ingresar un Cliente");
          }else
          {
               $("#validacion_cliente").text("");
               $("#validacion_cliente2").text("ok");
               validado++;
          }

         //validacion Direccion
          if($("#direccion").val().length == 0 )
          {
               $("#validacion_direccion").text("*");
               $("#validacion_direccion2").text("Debe ingresar la Direccion");
          }else
          {
               $("#validacion_direccion").text("");
               $("#validacion_direccion2").text("ok");
               validado++;
          }
         //identificacion
          if($("#identificacion").val() == 0 || $("#identificacion").val() == null )
          {
               $("#validacion_identificacion").text("*");$("#validacion_identificacion2").text("Debes selecionar una cantidad");
          }else
          {
               $("#validacion_identificacion").text("");$("#validacion_identificacion2").text("ok");
               validado++;
          }

         //documento

          if($("#documento").val().length == 0 )
          {
               $("#validacion_documento2").text("Debes Ingresar tu  documento");$("#validacion_documento").text("*");
          }else if ($("#documento").val().length < 10 || $("#documento").val().length > 10 )
          {
               $("#validacion_documento2").text(" El documento debe ser de 10 digitos");$("#validacion_documento").text("*");
          }else
          {
               $("#validacion_documento").text("");$("#validacion_documento2").text("OK");
               validado++;
          }
         // tipo concreto
          if($("#tipo_concreto").val() == 0 )
          {
               $("#validacion_tipocon2").text("Debes Ingresar tu  documento");$("#validacion_tipocon").text("*");
          }else
          {
               $("#validacion_tipocon2").text("ok");$("#validacion_tipocon").text("");
               validado++;
          }
         //etapa
          if (!$("input[name='etapa[]']").is(':checked')) 
          {
               $("#validacion_etapa2").text("Debe seleccionar una etapa");$("#validacion_etapa").text("*");
          }else
          {
               $("#validacion_etapa2").text("ok");$("#validacion_etapa").text("");
               validado++;
          }
         //celullar
          if($("#telefono").val().length == 0 )
          {
      
               $("#validacion_cel").text("*");$("#validacion_cel2").text("Debe ingresar # de celular");
          }
          else if ($("#telefono").val().length > 10 || $("#telefono").val().length < 10  ) 
          {
               $("#validacion_cel2").text("El numero debe  telefonico debe tener 10 digitos");$("#validacion_cel").text("*");
          }
          else
          {
               $("#validacion_cel").text("");$("#validacion_cel2").text("ok");
               validado++;
          }

          let fecha_actual = new Date();
          let fecha_inicioobra =  new Date($("#fecha").val())
          if ($("#fecha").val().length == 0 ) {
          $("#validacion_f").text("*");$("#validacion_f2").text("Debes seleccionar  una fecha");
          }else if (fecha_actual>fecha_inicioobra) {
               $("#validacion_fecha").text("*");$("#validacion_fecha2").text("La  fecha de inicio de obra  debe ser mayor al dia de  hoy");
          }else if(fecha_actual==fecha_inicioobra){
               alert('La fecha de visita no puede ser igual que la fecha actual');
          }else{
          $("#validacion_f").text("");$("#validacion_f2").text("");
          $("#validacion_fecha").text("");$("#validacion_fecha2").text("");
               validado++;

          }


    

          if (validado==8) 
          {
          //     Swal.fire('Registro exitoso')

                    var url = "ingresar_cotizacion.php";
               $.ajax({
                    type: "POST",
                    url: url,
                    data: $("#FrmCotizacion").serialize(),
                    success: function(data)
                    {
                         $("#RtaCotizacion").html(data);
                    }

               });

               $("input").val("");
               $("select").val("0");
               $("input[name='etapa[]']").prop('checked',false);

               $("#validacion_cliente").text("");$("#validacion_cliente2").text("");
               $("#validacion_direccion").text("");$("#validacion_direccion2").text("");
               $("#validacion_direccion").text("");
               $("#validacion_direccion2").text("");
               $("#validacion_identificacion").text("");
               $("#validacion_identificacion2").text("");
               $("#validacion_documento").text("");
               $("#validacion_documento2").text("");
               $("#validacion_tipocon2").text("");
               $("#validacion_tipocon").text("");
               $("#validacion_etapa2").text("");$("#validacion_etapa").text("");
               $("#validacion_cel").text("");$("#validacion_cel2").text("");
               $("#validacion_f").text("");$("#validacion_f2").text("");
               $("#validacion_fecha").text("");$("#validacion_fecha2").text("");
               $("#validacion_condiciones").text("");

          }else{

               Swal.fire('Pendientes  registros por validar');
               var url = "ingresar_cotizacion.php";
               $.ajax({
                    type: "POST",
                    url: url,
                    data: $("#FrmCotizacion").serialize(),
                    success: function(data)
                    {
                         $("#RtaCotizacion").html(data);
                    }

               });
          }


          // if ($("#cliente").val().length==0 || $("#direccion").val().length==0 || $("#identificacion").val().length==0 || $("#documento").val().length==0 || $("#tipo_concreto").val().length==0 || $("#telefono").val().length==0 || $("#fecha").val().length==0 || $("input[name='etapa']").is(':checked')) {
          //      alert("Todo los campos son obligatorios **");
              
          // }
          // else
          // {
          //      // document.FrmPersona.submit();
          //      var url = "ingresar_cotizacion.php";
          //      $.ajax({
          //           type: "POST",
          //           url: url,
          //           data: $("#FrmCotizacion").serialize(),
          //           success: function(data)
          //           {
          //                $("#RtaCotizacion").html(data);
          //           }

          //      });
          // }
     });
});

$(document).ready(function() {
     $("#FrmFormulario1").submit(function(event){
          event.preventDefault();

          if ($("#texto").val().length==0 ) {
               alert(" No se ingreso Texto para  analisis");
              
          }
          else
          {
               // document.FrmPersona.submit();
               var url = "verificar_palindromas.php";
               $.ajax({
                    type: "POST",
                    url: url,
                    data: $("#FrmFormulario1").serialize(),
                    success: function(data)
                    {
                         $("#RtaTexto").html(data);
                    }

               });
          }
     });
});
$(document).ready(function(){
    $("#btnregistrar_encuesta").click(function(){

        let validado = 0;
        if($("#nombreempresa").val().length == 0){
            $("#validacion_nombreempresa").text("*");
            $
        }else{
            $("#validacion_nombreempresa").text("");
            validado++
        }

        if($("#phone").val().length == 0 ){
			$("#validacion_celular").text("*");
		}
		else if($("#validacion_celular").val().length > 10 )
		{
			$("#validacion_celular").text("El número de digitos no debe superar los 11.");
		}
		else
		{
			$("#validacion_celular").text("");
			validado++;
        }

        if($("#directorobra").val().length == 0){
            $("#validacion_directorobra").text("*");
        }else{
            $("#validacion_directorobra").text("");
            validado++
        }

        if($("#constructora").val().length == 0){
            $("#validacion_constructora").text("*");
        }else{
            $("#validacion_constructora").text("");
            validado++
        }

        if($("#mes").val().length == 0){
            $("#validacion_mes").text("*");
        }else{
            $("#validacion_mes").text("");
            validado++
        }

        //pregunta 1 (1,2,3,4)---------------------------------------

        if($("#puntualidad").val().length == 0){
            $("#validacion_puntualidad").text("*");
        }else{
            $("#validacion_puntualidad").text("");
            validado++
        }

        if($("#solucionproblemas").val().length == 0){
            $("#validacion_solucionproblemas").text("*");
        }else{
            $("#validacion_solucionproblemas").text("");
            validado++
        }

        if($("#ordenaseo").val().length == 0){
            $("#validacion_ordenaseo").text("*");
        }else{
            $("#validacion_ordenaseo").text("");
            validado++
        }

        if($("#requisitos").val().length == 0){
            $("#validacion_requisitos").text("*");
        }else{
            $("#validacion_requisitos").text("");
            validado++
        }

        // pregunta 2 y 3 -------------------

        if($("#pregunta2").val().length == 0 ){
			$("#validacion_pregunta2").text("*");
		}
		else if($("#validacion_pregunta2").val().length > 3)
		{
			$("#validacion_pregunta2").text("*");
		}
		else
		{
			$("#validacion_pregunta2").text("");
			validado++;
        }

        // pregunta 4 y 5 ------------------------

        if($("#pregunta4").val().length == 0 ){
			$("#validacion_pregunta4").text("*");
		}
		else if($("#validacion_pregunta4").val().length > 3)
		{
			$("#validacion_pregunta4").text("*");
		}
		else
		{
			$("#validacion_pregunta4").text("");
			validado++;
        }

        // pregunta 6 ------------
        if($("#pregunta6").val().length == 0 ){
			$("#validacion_pregunta6").text("*");
		}
		else if($("#validacion_pregunta6").val().length > 3)
		{
			$("#validacion_pregunta6").text("*");
		}
		else
		{
			$("#validacion_pregunta6").text("");
			validado++;
        }
        // pregunta 7 -------------

        if($("#pregunta7").val().length == 0 ){
			$("#validacion_pregunta7").text("*");
		}
		else if($("#validacion_pregunta7").val().length > 3)
		{
			$("#validacion_pregunta7").text("*");
		}
		else
		{
			$("#validacion_pregunta7").text("");
			validado++;
        }

        if( validado == 13){
        Swal.fire({
            icon: 'success',
            title: 'Encuesta registrada',
            text: 'La encuesta quedo registrada en la base de datos',
          })
        }
        else
        {
            Swal.fire({
                icon: 'error',
                title: 'Faltan campos por rellenar',
                text: 'Los asteriscos (*) le indican que falta por rellenar',
              })
        }
    });
});

$(document).ready(function(){
    $("#FrmEncuesta").submit(function( event )
    {
        event.preventDefault(); //Evitar el formulario realice la validacion sin tener en cuenta el javascript
        
        {
           // document.FrmPersona.submit();
           var url = "registrar_encuesta.php";
            $.ajax({
                type: "POST",
                url: url,
                data: $("#FrmEncuesta").serialize(),
                success: function(data)
                {
                    $('#RespuestaTransaccion').html(data);
                }

            });
        }
    });
});

$(document).ready(function(){
    $("#btnconsultar_encuesta").click(function(){
        
        Swal.fire({
            icon: 'info',
            input: 'text',
            text: 'Coloque el nombre de la obra',
          })
        
    });
});

$(document).ready(function(){
    $("#btnlimpiar").click(function()
    {
        $("input").val("");  
        $("select").val(""); 
        $("input[name='TipoVisita']").prop('checked',false);
    })
});
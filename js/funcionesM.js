$(document).ready(function(){
    $("#btnregistrar_maquina").click(function(){

        let validado = 0;
        if($("#nombreempresa").val().length == 0){
            $("#validacion_nombreempresa").text("*");
            $
        }else{
            $("#validacion_nombreempresa").text("");
            validado++
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

        if($("#maquina").val().length == 0){
            $("#validacion_maquina").text("*");
        }else{
            $("#validacion_maquina").text("");
            validado++
        }

        if($("#operario1").val().length == 0){
            $("#validacion_operario1").text("*");
        }else{
            $("#validacion_operario1").text("");
            validado++
        }

        if($("#operario2").val().length == 0){
            $("#validacion_operario2").text("*");
        }else{
            $("#validacion_operario2").text("");
            validado++
        }

        if( validado == 7){
        Swal.fire({
            icon: 'success',
            title: 'Máquina agendada',
            text: 'La máquina se agendo con éxito',
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
    $("#FrmMaquinaria").submit(function( event )
    {
        event.preventDefault(); //Evitar el formulario realice la validacion sin tener en cuenta el javascript
        
        {
           // document.FrmPersona.submit();
           var url = "registrar_maquinaria.php";
            $.ajax({
                type: "POST",
                url: url,
                data: $("#FrmMaquinaria").serialize(),
                success: function(data)
                {
                    $('#RespuestaTransaccion').html(data);
                }

            });
        }
    });
});

$(document).ready(function(){
    $("#btnconsultar_maquina").click(function(){
        
        Swal.fire({
            icon: 'info',
            input: 'text',
            text: 'Coloque el nombre de la máquina',
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
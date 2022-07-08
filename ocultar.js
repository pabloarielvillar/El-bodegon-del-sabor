$(index.html).ready(() => {
    
    $('#lorem1').hide();
    $('#lorem2').hide();
    $('#lorem3').hide();

    $('#boton1').click(function(){
        $('#lorem1').show();
        $('#lorem2').hide();
        $('#lorem3').hide();
    });

    $('#boton2').click(function(){
        $('#lorem1').hide();
        $('#lorem2').show();
        $('#lorem3').hide();
    });

    $('#boton3').click(function(){
        $('#lorem1').hide();
        $('#lorem2').hide();
        $('#lorem3').show();
    });
})

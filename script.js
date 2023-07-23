$(document).ready( function() {
                
    $('[data-toggle="tooltip"]').tooltip();

    $('.carrusel-deudas').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true
    });

    $('.close').on('click', () => {
        $('.column-alert').hide();
        $('.column-boletas').removeClass('col-lg-7 ');
        $('.column-boletas').addClass('ocultar');
        setTimeout(() => {
            $('.column-boletas').removeClass('ocultar');
        }, 500);
    });




    // Ocultar todas las vistas, excepto la primera
    $('.screen:not(:first)').hide();
    
    // Función para cambiar entre las vistas al hacer clic en los enlaces
    $('.link-screen').on('click', function(e) {
        e.preventDefault();
        var screenNumber = $(this).data('screen');
        $('.screen').hide();
        $('#screen_' + screenNumber).show();
    });
    
    // Cambiar a la vista "screen_4_1" al hacer clic en el switch en "screen_4"
    $('#screen_4 .check').on('click', function() {
        $('#screen_4').hide();
        $('#screen_4_1').show();
    });
    
    // Volver a la vista "screen_4" al hacer clic en el botón "Cancelar" en "screen_4_1"
    $('#cancelar_cambio').on('click', function(e) {
        e.preventDefault();
        $('#screen_4').show();
        $('#screen_4_1').hide();
    });
    
    // Mostrar "screen_5_1" al hacer clic en el botón "Reiniciar" en "screen_5"
    $('#reiniciar_modem').on('click', function(e) {
        e.preventDefault();
        $('#screen_5').hide();
        $('#screen_5_1').show();
    });
    
    // Volver a "screen_5" al hacer clic en el botón "Cancelar" en "screen_5_1"
    $('#cancelar_reinicio').on('click', function(e) {
        e.preventDefault();
        $('#screen_5').show();
        $('#screen_5_1').hide();
    });
    
    // Mostrar un alert con el mensaje "Reinicio exitoso" al hacer clic en el botón "Confirmar" en "screen_5_1"
    $('#confirmar_reinicio').on('click', function(e) {
        e.preventDefault();
        alert('Reinicio exitoso');
    });
      
    // Volver a la vista "screen_0" al hacer clic en los botones con la clase "back_to_nav"
    $('.back_to_nav').on('click', function(e) {
        e.preventDefault();
        $('.screen').hide();
        $('#screen_0').show();
    });




    







    $('#change_pass').on('click', function(e) {

        e.preventDefault();
        $('.error-msg').text(''); // Limpia los mensajes de error anteriores
        $('.input-pass').removeClass('error-input'); // Remueve la clase "error-input" de todos los campos
    
        // Validar campos
        let clave1 = $('#clave1').val();
        let clave2 = $('#clave2').val();
    
        // Validación de campo vacío
        if (clave1.trim() === '' || clave2.trim() === '') {
            if (clave1.trim() === '') {
                $('#clave1').siblings('.error-msg').text('Los campos son requeridos');
                $('#clave1').addClass('error-input');
            }
            if (clave2.trim() === '') {
                $('#clave2').siblings('.error-msg').text('Los campos son requeridos');
                $('#clave2').addClass('error-input');
            }
            return;
        }
    
        // Validación de longitud de contraseña
        if (clave1.length < 8 || clave2.length < 8) {
            $('#clave1, #clave2').siblings('.error-msg').text('La contraseña debe tener mínimo 8 caracteres');
            $('#clave1, #clave2').addClass('error-input');
            return;
        }
    
        // Validación de coincidencia de contraseñas
        if (clave1 !== clave2) {
            $('#clave1, #clave2').siblings('.error-msg').text('Las contraseñas deben coincidir');
            $('#clave1, #clave2').addClass('error-input');
            return;
        }
    
        // Validación de número y letra en la contraseña
        var hasNumberAndLetter = /(?=.*\d)(?=.*[A-Za-z])/.test(clave1);
        if (!hasNumberAndLetter) {
            $('#clave1').siblings('.error-msg').text('Debe contener al menos un número y una letra');
            $('#clave1').addClass('error-input');
            return;
        }
    
        // Si todo está bien, continuar con el proceso para cambiar la contraseña.
        // Agrega aquí el código para el cambio de contraseña o muestra un mensaje de éxito.
    
        // Por ejemplo, aquí simplemente mostramos una alerta con un mensaje de éxito:
        alert('Contraseña cambiada exitosamente');
        
    });
    
      
      
      
      








    // Función para cambiar el tipo de input
    function togglePassword() {

        let passwordInput = $('.password');
        let passwordType  = passwordInput.attr('type');

        if (passwordType === 'password') {
            passwordInput.attr('type', 'text');
        } else {
            passwordInput.attr('type', 'password');
        }
    }

    $('.toggleButton').on('click', function() {
        togglePassword();
    });
    



});
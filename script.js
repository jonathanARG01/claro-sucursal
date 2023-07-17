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

});
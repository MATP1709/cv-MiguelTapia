$(document).ready(function() {
    /* MOSTRAMOS NUESTRO CONTENEDOR INCIIAL */
    $("#inicio-content").addClass("activo");

    $('.submenu').click(function() {
        // Quitar la clase activo de todos los elementos
        $('.submenu').removeClass('active');
        // Agregar la clase activo al elemento clicado
        $(this).addClass('active');
        // Obtener el identificador único asociado al elemento del menú clicado
        var contentId = $(this).data('content');

        // Ocultar los divs de contenido con efecto fade
        $('.ctn-info > div').fadeOut(0);

        // Mostrar el div de contenido correspondiente con efecto fade
        $('#' + contentId + '-content').fadeIn(150);

        // Agregar la clase activo al div correspondiente al data-content
        $('.contenedores').removeClass('activo'); // Remover clase activo de todos los contenedores
        $('#' + contentId + '-content').addClass('activo'); // Agregar clase activo al div correspondiente

    });
    
    $('.education-item').css('display', 'none');
    $('.item-profesional').css('display', 'flex');

    $('.btns-ap-item').on('click', function() {
        $('.btns-ap-item').removeClass('active');
        $(this).addClass('active');

        if ($(this).hasClass('btn-all')) {
            $('.education-item').fadeOut(350, function() {
                $('.education-item').fadeIn(350);
            });
            $('.upright-1').css('height', '88%');
            $('.upright-2').css('height', '91.5%');
        } else if ($(this).hasClass('btn-pro')) {
            $('.education-item').fadeOut(350, function() {
                $('.item-profesional').fadeIn(350);
            });
            $('.upright-1').css('height', '70%');
            $('.upright-2').css('height', '60%');
        }
    });
    
    $('.item-profesional').fadeIn(350);

    $('.ctn-menu-responsive').on('click', function() {
        if ($('.ctn-menu-responsive').hasClass('activo')) {
            $('.ctn-menu').css('display', 'none')
            $('.ctn-menu-responsive').removeClass('activo')
        } else{
            $('.ctn-menu').css('display', 'flex')
            $('.ctn-menu-responsive').addClass('activo')
        }
    });
});

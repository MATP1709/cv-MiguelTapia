function calculateAndSetHeight() {
    $('.ctn-education').each(function() {
        var totalHeight = 0;
        var $visibleItems = $(this).find('.education-item:visible');

        // Obtener el valor del gap del contenedor
        var gap = parseInt($(this).css('gap')) || 0;

        // Sumar las alturas de los elementos visibles y añadir el gap por cada elemento
        $visibleItems.each(function() {
            totalHeight += $(this).outerHeight(true) + gap; // Incluye la altura más el gap adicional por elemento
        });

        // Restar la altura del último item visible
        if ($visibleItems.length > 0) {
            totalHeight -= $visibleItems.last().outerHeight(true) + gap; // Restar la altura más el gap del último
        }
        totalHeight+3;
        // Asignar la altura calculada al span correspondiente
        $(this).find('span[class^="upright-"]').height(totalHeight);
    });
}

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

    

    // Recalcular la altura al redimensionar la ventana
    $(window).resize(function() {
        calculateAndSetHeight();
    });

    $('.btns-ap-item').on('click', function() {
        $('.btns-ap-item').removeClass('active');
        $(this).addClass('active');

        if ($(this).hasClass('btn-all')) {
            $('.education-item').fadeOut(350, function() {
                $('.education-item').fadeIn(130, function() {
                    calculateAndSetHeight(); // Calcular después de que se muestran los elementos
                });
            });
        } else if ($(this).hasClass('btn-pro')) {
            $('.education-item').fadeOut(350, function() {
                $('.item-profesional').fadeIn(130, function() {
                    calculateAndSetHeight(); // Calcular después de que se muestran los elementos
                });
            });
        }
    });

    $('.submenu-acerca').click(function() { 
        console.log("entre");
        calculateAndSetHeight();  
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

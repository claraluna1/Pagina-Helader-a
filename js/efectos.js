$(document).ready(function(){

//EFECTO DEL MENU

    //ya que el menu tiene una posicion relative, lo podemos modificar aqui
    $('.menu a').each(function(index, elemento){ //each nos permite aplicar una funcion anonima en este caso a todos los enlaces del menu. dentro se le ponen 2 parametros
        $(this).css({ //al elementos actual (cada uno de ellos)le aplicamos css 
            'top': '-200px' //ponemos los enlaces arriba
        }); 
        $(this).animate({
            top:'0'
        }, 2000 + (index * 500)); //el index hace referencia a cada elemento acerca de seria =0, menu =1... y cada uno se ira * 500 seg, por lo que su tiempo se ira multiplicando cada uno por 2000 (2s) e iran aparenciendo en diferentes momentos
    });

//EFECTO DEL HEADER
    if( $(window).width() > 800){ //si el ancho de la ventana es mayor a 800px entonces si se ejecuta el efecto
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

//SCROLL ELEMENTOS DEL MENU
     //con offset().top calculamos la posicion en pantalla del acerca de 
    var acercaDe = $('#acerca-de').offset().top,
    menu = $('#platos').offset().top,
    galeria = $('#galeria').offset().top,
    ubicacion = $('#ubicacion').offset().top;


    $('#btn-acerca').on('click', function(e){
        e.preventDefault(); //
        $('html, body').animate({ //la animacion tiene que ver con el html y el body
            scrollTop: acercaDe
        }, 500); 
    });

    $('#btn-menu').on('click', function(e){
        e.preventDefault(); //
        $('html, body').animate({ //la animacion tiene que ver con el html y el body
            scrollTop: menu
        }, 500); 
    });

    $('#btn-galeria').on('click', function(e){
        e.preventDefault(); //
        $('html, body').animate({ //la animacion tiene que ver con el html y el body
            scrollTop: galeria
        }, 500); 
    });

    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault(); //
        $('html, body').animate({ //la animacion tiene que ver con el html y el body
            scrollTop: ubicacion
        }, 500); 
    });

});
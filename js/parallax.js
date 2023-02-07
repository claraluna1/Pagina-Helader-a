$(document).ready(function(){
    /*este efecto solo lo aplicaremos para la pantalla grande*/

    $(window).scroll(function(){ //obtenemos el valor de la ventana y scroll y se ejecutara cada vez que se haga scroll
        var anchoVentana = $(window).width();

        if(anchoVentana > 800){ //para que solo se ejecute en un dispositivo de pantalla amplia
            var scroll = $(window).scrollTop(); //accedemos a la posicion de la ventana con el scroll
            
            $('header .textos').css({
                //queremos que se mueva de abajo arriba, no de los lados
                'transform': 'translate(0px,' + scroll / 2 + '%)' //el primer 0 es que no lo queremos mover vertical, concatenamos el scroll /2 y cambiamos el valor del scroll por %
            });

            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'  //ponemos el - antes del scroll para que el acerca de se suba hacia arriba al darle scroll
            });
        
        }
    });

    //cuando se voltea la tablet por ej el acerca de queda desajustado, para arreglarlo:

    $(window).resize(function(){
        var anchoVentana = $(window).width(); //obtenemos valor del scroll cuando haya un cambio de tamaño en pagina
        if(anchoVentana < 800) {
            $('.acerca-de article').css({
                'transform': 'translate(0px, 0px)'   //regresamos la posicion del article acerca de a su posocion original
            });
        }
    
    });
});
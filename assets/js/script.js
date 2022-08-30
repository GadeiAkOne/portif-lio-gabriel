$(document).ready(function(){
    $('.titulo-menu').click(function(){
        $(this).addClass('animate__hinge')
        setTimeout(remove, 3000);
    });

    $('.titulos').mouseenter(function(){
        $(this).removeClass('titulo').addClass('titulo-ligth')
    });

    $('.texto-titulos').mouseenter(function(){
        $(this).removeClass('texto-titulos').addClass('texto-titulo-ligth')
    });

    $('.card-img-top').click(function(){
        $(this).addClass('animate__heartBeat')
        setTimeout(remove, 2000);
    });

    $('.figure-img').click(function(){
        $(this).addClass('animate__rotateIn')
        setTimeout(remove, 2000);
    });

    $('.texto-boasVindas').click(function(){
        $(this).addClass('animate__flash')
        setTimeout(remove, 2000);
    });

    $('.img-sobre').click(function(){
        $(this).addClass('animate__flipInY')
        setTimeout(remove, 2000);
    });

    $('.texto-footer').click(function(){
        $(this).addClass('animate__tada')
        setTimeout(remove, 2000);
    });
    
    

    function remove(){
        $('.card-img-top').removeClass('animate__heartBeat')
        $('.titulo-menu').removeClass('animate__hinge')
        $('.figure-img').removeClass('animate__rotateIn')
        $('.texto-boasVindas').removeClass('animate__flash')
        $('.img-sobre').removeClass('animate__flipInY')
        $('.texto-footer').removeClass('animate__tada')
    };

});

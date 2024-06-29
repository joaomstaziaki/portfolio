$(document).ready(function(){

    $('.carousel-image').each(function(){
        var img = new Image();
        img.src = $(this).attr('src');
    });

    $('.next').on('click', function(){
        var currentImg = $('.active');
        var leftImg = $('.left');
        var rightImg = $('.right');
        var nextImg = currentImg.next();
        var prevImg = currentImg.prev();

        if(nextImg.length){
            
            
            prevImg
            currentImg.addClass('.left').css('z-index', 1);

            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);

            
        } else {
            currentImg.removeClass('active').css('z-index', -10);
            $('.carousel-image').first().addClass('active').css('z-index', 10);
        }
    });

    $('.prev').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        } else {
            currentImg.removeClass('active').css('z-index', -10);
            $('.carousel-image').last().addClass('active').css('z-index', 10);
        }
    });

});
$(document).ready(function(){

    function rotateNext() {
        var currentImg = $('.carousel-image.active');
        var prevImg = currentImg.prev().length ? currentImg.prev() : $('.carousel-image').last();
        var nextImg = currentImg.next().length ? currentImg.next() : $('.carousel-image').first();
        var nextnextImg = nextImg.next().length ? nextImg.next() : $('.carousel-image').first();

        prevImg.removeClass('left').css('z-index', -10);
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.removeClass('right').css('z-index', -10);

        currentImg.addClass('left').css('z-index', 1);
        nextImg.addClass('active').css('z-index', 2);
        nextnextImg.addClass('right').css('z-index', 1);
    }

    function rotatePrev() {
        var currentImg = $('.carousel-image.active');
        var prevImg = currentImg.prev().length ? currentImg.prev() : $('.carousel-image').last();
        var nextImg = currentImg.next().length ? currentImg.next() : $('.carousel-image').first();
        var prevprevImg = prevImg.prev().length ? prevImg.prev() : $('.carousel-image').last();

        prevImg.removeClass('left').css('z-index', -10);
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.removeClass('right').css('z-index', -10);

        currentImg.addClass('right').css('z-index', 1);
        prevImg.addClass('active').css('z-index', 2);
        prevprevImg.addClass('left').css('z-index', 1);
    }

    var autoRotate = setInterval(rotateNext, 5000);

    function resetTimer() {
        clearInterval(autoRotate);
        autoRotate = setInterval(rotateNext, 5000);
    }

    $('.next').on('click', function(event){
        event.preventDefault();
        rotateNext();
        resetTimer();
    });

    $('.prev').on('click', function(event){
        event.preventDefault();
        rotatePrev();
        resetTimer();
    });
});
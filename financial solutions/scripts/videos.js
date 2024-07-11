$(document).ready(function() {

    var headerHeight = $('header').outerHeight();
    var containerTop = $('.container:first').offset().top;

    // Scroll to the position of the division
    $('html, body').animate({
        scrollTop: containerTop - headerHeight
    }, '500');

    $('.small-button').on('click', function(e) {
        e.preventDefault();
        const language = $(this).data('language');
        const langContent = content[language];
        
        $('#video-title').val(langContent.videotitle);
        $('#socials').html(langContent.socials);
        $('#contact').html(langContent.contact);
        $('#footer-text').html(langContent.footer);
        
    });

    $('.button').on('mousedown', function() {
        $(this).addClass('active');
    }).on('mouseup mouseleave', function() {
        $(this).removeClass('active');
    }).on('mouseenter', function() {
        if ($(this).hasClass('no-active')) {
            $(this).removeClass('no-active');
        }
    }).on('mouseleave', function() {
        if ($(this).hasClass('active')) {
            $(this).addClass('no-active');
        }
    });

    $(document).on('mouseup', function() {
        $('.button').removeClass('active');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $('.scroll-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    $('.video-item.selectable').click(function(){
        var videoUrl = $(this).data('video-url');
        var videoTitle = $(this).data('video-title');
        
        $('#video-player').attr('src', videoUrl);
        $('#video-title').text(videoTitle);
    });

});
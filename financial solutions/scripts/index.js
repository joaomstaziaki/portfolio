$(document).ready(function() {

    $('.small-button').on('click', function(e) {
        e.preventDefault();
        const language = $(this).data('language');
        const langContent = content[language];
        $('#quote-text-box').text(langContent.quote);
        $('#since').text(langContent.since);
        $('#name').text(langContent.name);
        $('#description1').text(langContent.description1);
        $('#description2').text(langContent.description2);
        $('#cta-button span').text(langContent.cta);
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
        if ($(this).scrollTop() > 25) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $('.scroll-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

});
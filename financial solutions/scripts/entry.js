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
        $('#questionnaire').html(langContent.questionnaire);
        $('#qname').html(langContent.qname);
        $('#qage').html(langContent.qage);
        $('#qphone').html(langContent.qphone);
        $('#qcountry').html(langContent.qcountry);
        $('#qdoubt').html(langContent.qdoubt);
        $('#qobjective').html(langContent.qobjective);
        $('#qaction').html(langContent.qaction);
        $('#protection').html(langContent.protection);
        $('#accumulation').html(langContent.accumulation);
        $('#leverage').html(langContent.leverage);
        $('#nothing').html(langContent.nothing);
        $('#qincome').html(langContent.qincome);
        $('#sendbutton').val(langContent.sendbutton);
        
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

    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            // Add your FullCalendar options here
            selectable: true,
            select: function(info) {
            console.log('Selected:', info);
            }
        });
        calendar.render();
    });

    $('#questionnaire-form').on('submit', function(event) {
        event.preventDefault();
        
        var formData = {
            name: $('#name').val(),
            age: $('#age').val(),
            telephone: $('#telephone').val(),
            country: $('#country').val(),
            action: $('#action').val(),
            income: $('#income').val()
        };
        
        localStorage.setItem('formData', JSON.stringify(formData));

        alert('Form submitted successfully!');

        this.reset();
    });

});

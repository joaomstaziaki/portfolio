$(document).ready(function() {
    
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
  
      const targetId = $(this).attr('href');
      const offset = $('header').outerHeight(); // Get header height
  
      $('html, body').animate({
        scrollTop: $(targetId).offset().top - offset
      }, 800);
    });
  });
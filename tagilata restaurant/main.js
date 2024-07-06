$(document).ready(function() {

    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
  
      const targetId = $(this).attr('href');
      const offset = $('header').outerHeight(); // Get header height
  
      $('html, body').animate({
        scrollTop: $(targetId).offset().top - offset
      }, 800);
    });

  $(".menu-container").mousemove(function(event) {
      var offset = $(this).offset();
      var mouseX = event.pageX - offset.left;
      var mouseY = event.pageY - offset.top;
  
      var magnifier = $(this).find(".menu-magnifier");
      var image = $(this).find("img");
  
      var scale = 1.5;
  
      var zoomX = mouseX * scale;
      var zoomY = mouseY * scale;
  
      image.css({
          "transform-origin": mouseX + "px " + mouseY + "px",
          transform: "scale(" + scale + ")"
      });
  
      magnifier.css({
          left: mouseX - (magnifier.width() / 2),
          top: mouseY - (magnifier.height() / 2),
          backgroundPosition: -zoomX + "px " + -zoomY + "px"
    });
  });
  
  $(".menu-container").mouseleave(function() {
      $(this).find("img").css({
          transform: "scale(1)"
      });
  });


});
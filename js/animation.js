/* Fade in/out - e-mail */
$(document).ready(function(){
  $("#ic_email").click(function() {
      $("#p_email").fadeToggle(300);
    });
});

/* Material Design Ripple - Cards */
$(document).ready(function() {
  $('body').on('click touchstart', '.card', function(e) {
       var ripple = $(this).find(".ripple");
       ripple.removeClass("animate");
       var x = parseInt(e.pageX - $(this).offset().left) - (ripple.width() / 2);
       var y = parseInt(e.pageY - $(this).offset().top) - (ripple.height() / 2);
       ripple.css({
          top: y,
          left: x
       }).addClass("animate");
  });
});

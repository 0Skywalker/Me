/* Fade in/out - e-mail */
$(document).ready(function(){
  $("#ic_email").click(function() {
      $("#p_email").fadeIn(300);
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

/* Material Design Ripple transition - Projects */
$(document).ready(function() {
  var ripple_wrap_1 = $('.ripple-wrap_1'),
      rippler_1 = $('.ripple_1'),
      finish_1 = false,
      monitor_1 = function(el_1) {
        var computed_1 = window.getComputedStyle(el_1, null),
            borderwidth_1 = parseFloat(computed_1.getPropertyValue('border-left-width'));
        if (!finish_1 && borderwidth_1 >= 1000) {
          el_1.style.WebkitAnimationPlayState = "paused";
          el_1.style.animationPlayState = "paused";
          swapContent_1();
        }
        if (finish_1) {
          el_1.style.WebkitAnimationPlayState = "running";
          el_1.style.animationPlayState = "running";
          return;
        } else {
          window.requestAnimationFrame(function() {monitor_1(el_1)});
        }
      };

  storedcontent_1 = $('#projects-content').html();
  $('#projects-content').remove();

  rippler_1.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function(e){
    ripple_wrap_1.removeClass('goripple_1');
  });

  $('body').on('click', '#projects', function(e) {
    rippler_1.css('left', e.clientX + 'px');
    rippler_1.css('top', e.clientY + 'px');
    e.preventDefault();
    finish_1 = false;
    ripple_wrap_1.addClass('goripple_1');
    window.requestAnimationFrame(function() {monitor_1(rippler_1[0])});
  });

  function swapContent_1() {
    $("#p_email").show();
      var newcontent_1 = $('#main-content').html();
      $('#main-content').html(storedcontent_1);
      storedcontent_1 = newcontent_1;
      // do some Ajax, put it in the DOM and then set this to true
      setTimeout(function() {
        finish_1 = true;
      },10);
      $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
      }, 500);
  }
});

/* Material Design Ripple transition - Blog */
$(document).ready(function() {
  var ripple_wrap_2 = $('.ripple-wrap_2'),
     rippler_2 = $('.ripple_2'),
     finish_2 = false,
     monitor_2 = function(el_2) {
       var computed_2 = window.getComputedStyle(el_2, null),
           borderwidth_2 = parseFloat(computed_2.getPropertyValue('border-left-width'));
       if (!finish_2 && borderwidth_2 >= 400) {
         el_2.style.WebkitAnimationPlayState = "paused";
         el_2.style.animationPlayState = "paused";
         swapContent_2();
       }
       if (finish_2) {
         el_2.style.WebkitAnimationPlayState = "running";
         el_2.style.animationPlayState = "running";
         return;
       } else {
         window.requestAnimationFrame(function() {monitor_2(el_2)});
       }
     };

  storedcontent_2 = $('#blog-content').html();
  $('#blog-content').remove();

  rippler_2.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function(e){
   ripple_wrap_2.removeClass('goripple_2');
  });

  $('body').on('click', '#blog', function(e) {
   rippler_2.css('left', e.clientX + 'px');
   rippler_2.css('top', e.clientY + 'px');
   e.preventDefault();
   finish_2 = false;
   ripple_wrap_2.addClass('goripple_2');
   window.requestAnimationFrame(function() {monitor_2(rippler_2[0])});
  });

  function swapContent_2() {
    $("#p_email").show();
     var newcontent_2 = $('#main-content').html();
     $('#main-content').html(storedcontent_2);
     storedcontent_2 = newcontent_2;
     // do some Ajax, put it in the DOM and then set this to true
     setTimeout(function() {
       finish_2 = true;
     },10);
     window.location = "https://medium.com/@0Skywalker";
  }
});

/* Material Design Ripple transition - About Me */
$(document).ready(function() {
  var ripple_wrap_3 = $('.ripple-wrap_3'),
      rippler_3 = $('.ripple_3'),
      finish_3 = false,
      monitor_3 = function(el_3) {
        var computed_3 = window.getComputedStyle(el_3, null),
            borderwidth_3 = parseFloat(computed_3.getPropertyValue('border-left-width'));
        if (!finish_3 && borderwidth_3 >= 1000) {
          el_3.style.WebkitAnimationPlayState = "paused";
          el_3.style.animationPlayState = "paused";
          swapContent_3();
        }
        if (finish_3) {
          el_3.style.WebkitAnimationPlayState = "running";
          el_3.style.animationPlayState = "running";
          return;
        } else {
          window.requestAnimationFrame(function() {monitor_3(el_3)});
        }
      };

  storedcontent_3 = $('#aboutMe-content').html();
  $('#aboutMe-content').remove();

  rippler_3.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function(e){
    ripple_wrap_3.removeClass('goripple_3');
  });

  $('body').on('click', '#aboutMe', function(e) {
    rippler_3.css('left', e.clientX + 'px');
    rippler_3.css('top', e.clientY + 'px');
    e.preventDefault();
    finish_3 = false;
    ripple_wrap_3.addClass('goripple_3');
    window.requestAnimationFrame(function() {monitor_3(rippler_3[0])});
  });

  function swapContent_3() {
    $("#p_email").show();
      var newcontent_3 = $('#main-content').html();
      $('#main-content').html(storedcontent_3);
      storedcontent_3 = newcontent_3;
      // do some Ajax, put it in the DOM and then set this to true
      setTimeout(function() {
        finish_3 = true;
      },10);
      $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
      }, 500);
  }
});

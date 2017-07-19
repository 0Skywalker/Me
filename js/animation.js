/* Fade in/ fade out - E-mail */
$(function() {
 $("#ic_email").click(function() {
     $("#p_email").fadeToggle(300);
   });
 });

/* Material Design Ripple transition - Projects */
 $(function() {
   var ripple_wrap = $('.ripple-wrap'),
       rippler = $('.ripple'),
       finish = false,
       monitor = function(el) {
         var computed = window.getComputedStyle(el, null),
             borderwidth = parseFloat(computed.getPropertyValue('border-left-width'));
         if (!finish && borderwidth >= 800) {
           el.style.WebkitAnimationPlayState = "paused";
           el.style.animationPlayState = "paused";
           swapContent();
         }
         if (finish) {
           el.style.WebkitAnimationPlayState = "running";
           el.style.animationPlayState = "running";
           return;
         } else {
           window.requestAnimationFrame(function() {monitor(el)});
         }
       };

   storedcontent = $('#projects-content').html();
   $('#projects-content').remove();

   rippler.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function(e){
     ripple_wrap.removeClass('goripple');
   });

   $('body').on('click', '#projects', function(e) {
     rippler.css('left', e.clientX + 'px');
     rippler.css('top', e.clientY + 'px');
     e.preventDefault();
     finish = false;
     ripple_wrap.addClass('goripple');
     window.requestAnimationFrame(function() {monitor(rippler[0])});
   });

   function swapContent() {
       var newcontent = $('#main-content').html();
       $('#main-content').html(storedcontent);
       storedcontent = newcontent;
       // do some Ajax, put it in the DOM and then set this to true
       setTimeout(function() {
         finish = true;
       },10);
   }

 });


 /* Material Design Ripple transition - About Me */
  $(function() {
    var ripple_wrapp = $('.ripple-wrap'),
        ripplerr = $('.ripple'),
        finishh = false,
        monitorr = function(ell) {
          var computedd = window.getComputedStyle(ell, null),
              borderwidthh = parseFloat(computedd.getPropertyValue('border-left-width'));
          if (!finishh && borderwidthh >= 800) {
            ell.style.WebkitAnimationPlayState = "paused";
            ell.style.animationPlayState = "paused";
            swapContentt();
          }
          if (finishh) {
            ell.style.WebkitAnimationPlayState = "running";
            ell.style.animationPlayState = "running";
            return;
          } else {
            window.requestAnimationFrame(function() {monitorr(ell)});
          }
        };

    storedcontentt = $('#aboutMe-content').html();
    $('#aboutMe-content').remove();

    ripplerr.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function(e){
      ripple_wrapp.removeClass('goripple');
    });

    $('body').on('click', '#aboutMe', function(e) {
      ripplerr.css('left', e.clientX + 'px');
      ripplerr.css('top', e.clientY + 'px');
      e.preventDefault();
      finishh = false;
      ripple_wrapp.addClass('goripple');
      window.requestAnimationFrame(function() {monitorr(ripplerr[0])});
    });

    function swapContentt() {
        var newcontentt = $('#main-content').html();
        $('#main-content').html(storedcontentt);
        storedcontentt = newcontentt;
        // do some Ajax, put it in the DOM and then set this to true
        setTimeout(function() {
          finishh = true;
        },10);
    }

  });

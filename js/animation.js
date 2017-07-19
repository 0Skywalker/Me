$(function() {
 $("#ic_email").click(function() {
     $("#p_email").fadeToggle(300);
   });
 });


 $(document).ready(function() {
   var ripple_wrap = $('.ripple-wrap'),
       rippler = $('.ripple'),
       finish = false,
       monitor = function(el) {
         var computed = window.getComputedStyle(el, null),
             borderwidth = parseFloat(computed.getPropertyValue('border-left-width'));
         if (!finish && borderwidth >= 1500) {
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

   storedcontent = $('#about-content').html();
   $('#about-content').remove();

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

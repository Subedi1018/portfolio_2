$(document).ready(function (){
  $('nav a[href*="#"]').on('click', function(){
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 1500)
  });

  $('#up').on('click', function(){
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
  });

  // animate aos
  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  });
});

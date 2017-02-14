$(document).ready(function() {

  $('.topbar__a[href^="' + location.pathname + '"]:first').addClass('topbar--active');
  
  function scrollActions(){
    var workOverlay = $('.projects-hero__overlay');
    var scrollTop = $(this).scrollTop();
    var calc = ((Math.sin(scrollTop/50 - 1.6) + 1) / 2 ).toFixed(2);

    if (scrollTop > 200) {
      workOverlay.addClass('projects-hero__overlay--scroll');
    } else {
      workOverlay.removeClass('projects-hero__overlay--scroll');
    }
  }

  $(window).scroll( $.throttle( 250, scrollActions ) );
  
});

lightbox.option({
  'showImageNumberLabel': false,
  'resizeDuration': 400
})
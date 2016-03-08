$(document).ready(function() {

    $('.topbar__a[href^="' + location.pathname + '"]:first').addClass('topbar--active');
    
    
    var homeHeader = $('.hero__overlay');
    var workOverlay = $('.projects-hero__overlay');
    var workImg = $('.projects-hero__img');
    
    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        var calc = (Math.sin(scrollTop/50 - 1.6) + 1) / 2 ;
        console.log(calc);
        homeHeader.css({ 'opacity': calc });
        if (scrollTop > 100) {
            workOverlay.addClass('projects-hero__overlay--scroll');
        } else {
            workOverlay.removeClass('projects-hero__overlay--scroll');
        }
    });
});

lightbox.option({
  'showImageNumberLabel': false,
  'resizeDuration': 400
})
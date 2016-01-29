$(document).ready(function() {

    $('.topbar__a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('topbar--active');
    
    
    var homeHeader = $('.hero__overlay');
    var workOverlay = $('.projects-hero__overlay');
    var workImg = $('.projects-hero__img');
    
    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        var calc = (Math.sin(scrollTop/100) + 1) / 2 ;
        homeHeader.css({ 'opacity': calc });
        if (scrollTop > 50) {
            workOverlay.addClass('projects-hero__overlay--scroll');
        } else {
            workOverlay.removeClass('projects-hero__overlay--scroll');
        }
    });
});
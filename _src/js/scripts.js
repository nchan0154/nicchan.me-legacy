$(document).ready(function() {

  $('.topbar__a[href^="' + location.pathname + '"]:first').addClass('topbar--active');

  var waypoints = $('.showcase__section').waypoint({
    handler: function handler(direction) {
      var currentElement;
      if (direction === 'up'){
        currentElement = this.previous().element
      } else {
        currentElement = this.element
      }
      var currentImage = $(currentElement).find('.showcase__image-wrapper');
      currentImage.addClass('showcase__image-wrapper--active')
      $('.showcase__image-wrapper').not(currentImage).removeClass('showcase__image-wrapper--active')
    },
    offset: '50%',
  });

  var footerInView = new Waypoint.Inview({
    element: $('.footer'),
    enter: function(direction) {
      $('.showcase__image-wrapper').addClass('showcase__image-wrapper--stuck');
    },
    exited: function(direction) {
      $('.showcase__image-wrapper').removeClass('showcase__image-wrapper--stuck');
    },
  });
  
  $('.showcase__image-wrapper').addClass('showcase__image-wrapper--js-enabled');
  
});

lightbox.option({
  'showImageNumberLabel': false,
  'resizeDuration': 400
})
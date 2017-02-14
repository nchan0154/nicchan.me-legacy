$(document).ready(function() {

  $('.topbar__a[href^="' + location.pathname + '"]:first').addClass('topbar--active');
  
  var waypoints = $('.showcase__section').waypoint({
    handler: function handler(direction) {
      console.log('hit')
      var currentElement;
      if (direction === 'up'){
        currentElement = this.previous().element
      } else {
        currentElement = this.element
      }
      console.log(currentElement);
      var currentImage = $(currentElement).find('.showcase__image-wrapper');
      currentImage.addClass('showcase__image-wrapper--active')
      $('.showcase__image-wrapper').not(currentImage).removeClass('showcase__image-wrapper--active')
    },
    offset: '50%',
  });
  
  console.log(waypoints)
});

lightbox.option({
  'showImageNumberLabel': false,
  'resizeDuration': 400
})
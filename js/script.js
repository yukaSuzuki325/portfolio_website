$(document).ready(() => {
  AOS.init();

  $(window).on('load', function () {
    $('.preloader-container').fadeOut(3500, function () {
      // console.log('here');
      $(this).css('display', 'none');
    });
  });

  $(window).on('scroll', () => {
    const scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $('.sticky').addClass('stickyadd');
    } else {
      $('.sticky').removeClass('stickyadd');
    }
  });
});

$('.portfolio-img').hover(
  function () {
    $(this).css({
      transform: 'scale(1.1)', // Scale the image up to 110%
      transition: 'transform 0.3s ease', // Smooth transition for the transform
    });
  },
  function () {
    $(this).css({
      transform: 'scale(1)', // Reset the scale back to normal
    });
  }
);

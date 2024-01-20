$(document).ready(() => {
  $(window).on('load', function () {
    $('.loader-container').fadeOut(1000, function () {
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

$(document).ready(() => {
  $(window).on('scroll', () => {
    const scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $('.sticky').addClass('stickyadd');
    } else {
      $('.sticky').removeClass('stickyadd');
    }
  });
});

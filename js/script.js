$(window).on('load', function () {
  $('.preloader-container').fadeOut(3500, function () {
    $('.preloader-container').css('display', 'none');
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

AOS.init();

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

$('#contact-form').submit(function (e) {
  e.preventDefault();
  var formData = $(this).serialize();

  $('#loadingSpinner').removeClass('d-none');

  $.ajax({
    type: 'POST',
    url: 'php/sendmail.php',
    data: formData,
    success: function (response) {
      $('#loadingSpinner').addClass('d-none');

      var myModal = new bootstrap.Modal(
        document.getElementById('thankYouModal')
      );
      myModal.show();
    },
    error: function () {
      $('#loadingSpinner').addClass('d-none');

      alert('There was an error sending the message.');
    },
  });
});

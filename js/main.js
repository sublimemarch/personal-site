$(window).on('scroll', function () {
  var scrollPosition = $(document).scrollTop();

  $('.confetti > *').each(function () {
    if ($(this).hasClass("parallax-immediate")) {
      var relativeScroll = scrollPosition;
    } else {
      var relativeScroll = scrollPosition - ($(this).offset().top - 300);
    }

    $(this).css('transform', 'translate3d(0, ' + relativeScroll * -0.3 + 'px, 0)');
  });
});
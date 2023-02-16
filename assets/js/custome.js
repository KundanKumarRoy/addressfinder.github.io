// stickey nav
$(window).on('scroll', function () {
    let scrollTop = $(this).scrollTop();
  
    if (scrollTop >= 50) {
      $('#navbar').addClass('sticky');
    } else {
      $('#navbar').removeClass('sticky');
    }
  });
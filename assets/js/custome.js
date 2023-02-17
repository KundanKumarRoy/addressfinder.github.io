// stickey nav
$(window).on('scroll', function () {
    let scrollTop = $(this).scrollTop();
  
    if (scrollTop >= 50) {
      $('#navbar').addClass('sticky');
    } else {
      $('#navbar').removeClass('sticky');
    }
  });

  // item Slide
	$('.slide_items').slick({
	  slidesToShow:5,
	  arrows: false,
	  dots: false,
	  infinite: true,
	  speed: 500,
	  cssEase: 'linear',
	  autoplaySpeed: 2000,
	  autoplay:true,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			arrows: true,
			dots: false,
			slidesToShow:3
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			arrows: false,
			dots: false,
			slidesToShow:2
		  }
		}
	  ]
	});

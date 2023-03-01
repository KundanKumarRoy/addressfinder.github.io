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

 
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 
 

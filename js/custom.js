$( document ).ready(function() {
  $('.owl-slider').owlCarousel({
    loop:false,
    autoplayTimeout: 4000,
    responsiveClass:true,
    dots: false,
    transitionStyle : "fade",
    margin:0,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    nav:true,
    margin:25,
    autoplay:true,
    responsive:{
      0:{
        items:1,
        loop:true
      },
      600:{
        items:2,
        loop:true
      },
      1000:{
        items:3,
        loop:true
      }
    }
  })




  // ========= scroll navbar =========
var scrollTop = 0;
$(window).scroll(function(){
  scrollTop = $(window).scrollTop();

  if (scrollTop >= 100) {
    $('.main-menu').addClass('scrolled-nav');
  } else if (scrollTop < 100) {
    $('.main-menu').removeClass('scrolled-nav');
  }
});


// ================ Share widget ================
$( ".share-btn" ).click(function(e) {
  $('.networks-5').not($(this).next( ".networks-5" )).each(function(){
    $(this).removeClass("active");
  });

  $(this).next( ".networks-5" ).toggleClass( "active" );
});




// ================ scroll page ================
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbarSupportedContent',
})
 
});





// ================ mobile navbar close menu ================
function myFunction(x) {
	var w = window.innerWidth;

	if (w < 991 ) {
		var element = document.getElementById("collapse-btn");
		element.classList.add("collapsed");

		var element = document.getElementById("navbarSupportedContent");
		element.classList.remove("show");
		element.classList.add("collapsing");
	}
}

// ================ Success Stories ================
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('.right-testimonial').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}
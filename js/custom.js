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
  target: '#navbarSupportedContent'
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

(function ($) {
	"use strict";

	// preloader
	$(window).on('load', function () {
		$('#preloader').delay(300).fadeOut('slow');
		$('#preloader__status').fadeOut('slow');
	})
	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992"
	});



	// Banner Slider active with navigation 
	$('.hero__slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		adaptiveHeight: true,
		arrows: false,
	});




	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		// scrollText: '&#8593;', // Text for element
		scrollText: '&#9650;', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	// WOW active
	new WOW().init();


})(jQuery);
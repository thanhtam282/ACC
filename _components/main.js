// viết script, gọi function ở đây
$(document).ready(() => {
	header.headerInit();
	nav.navInit();
	$(".photo-gallery").lightGallery({
		mode: 'lg-scale-up'
	});
	$(".acc-video-1 .video-wrapper").lightGallery({
		mode: 'lg-scale-up'
	});
	objectFitImages();
	// Lĩnh vực
	breadcrum.breadcrumInit();
	// Load Ajax
	slider.sliderInit()
	if ($(window).width() < 992 ){
		AOS.init({
			disable: true
		});
		
	} else {
		
		AOS.init({
			duration: 1500,
			disable: false
		});
	}
});

var slider = {
	product_slider_1: () => {
		let home_slider_2 = new Swiper('.acc-product-detail .swiper-container', {
			slidesPerView: 1,
			autoHeight: false,
			loop: true,
			// autoHeight: false,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		})
	},
	service_slider_1: () => {
		let home_slider_2 = new Swiper('.acc-service-detail-1 .swiper-container', {
			slidesPerView: 1,
			autoHeight: false,
			loop: true,
			// autoHeight: false,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		})
	},
	home_slider_1: () => {
		let home_slider_2 = new Swiper('.acc-home-1 .swiper-container', {
			slidesPerView: 1,
			autoHeight: false,
			loop: true,
			speed: 2000,
			effect: 'fade',
			// autoHeight: false,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},

		})
	},
	sliderInit: () => {
		slider.product_slider_1();
		slider.service_slider_1();
		slider.home_slider_1();

	}
}
// viết script, gọi function ở đây
$(document).ready(() => {
	header.headerInit();
	btnRipple('btn-ripple');
	nav.navInit();
	objectFitImages();
	// Lĩnh vực
	AOS.init();
	breadcrum.breadcrumInit();
	// Load Ajax
	slider.sliderInit()
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
	sliderInit: () => {
		slider.product_slider_1();
		slider.service_slider_1();

	}
}
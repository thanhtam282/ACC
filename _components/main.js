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


	var yearArr = []
	$('[data-year]').each(function () {
		yearArr.push($(this).data('year'))
	})
	let history_slider = new Swiper('.acc-about-2 .swiper-container', {
		slidesPerView: 1,
		autoHeight: false,
		loop: true,
		pagination: {
			el: '.acc-about-2 .swiper-history-pagination',
			clickable: true,
			bulletClass: 'history-year',
			bulletActiveClass: 'history-year-active',
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (yearArr[index]) + '</span>';
			},
		},
		navigation: {
			nextEl: ".history-timeline .swiper-next",
			prevEl: ".history-timeline .swiper-prev"
		}
	})

	var previousActiveTabIndex = 0;

	$(".tab-list li").on('click', function () {

		var tabClicked = $(this).data("tab-index");

		if (tabClicked != previousActiveTabIndex) {
			$(this).addClass('active')
			$(this).siblings().removeClass('active')
			$(".panel-list .tab-container").each(function () {

				if ($(this).data("tab-index") == tabClicked) {

					$(".tab-container").removeClass('show');
					$(this).addClass('show');
					previousActiveTabIndex = $(this).data("tab-index");
					return;

				}
			});
		}
	});

	objectFitImages();
	// Lĩnh vực
	breadcrum.breadcrumInit();
	// Load Ajax
	slider.sliderInit()
	if ($(window).width() < 992) {
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
		relationship_slider_1: () => {
				let relationship_slider = new Swiper('.acc-about-5 .swiper-container', {
							slidesPerView: 6,
							autoHeight: false,
							loop: true,
							spaceBetween: 30,
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
									navigation: {
										nextEl: '.acc-about-5 .swiper-next',
										prevEl: '.acc-about-5 .swiper-prev'
									},
									breakpoints: {
										992: {
											slidesPerView: 4
										},
										768: {
											slidesPerView: 3
										},
										450: {
											slidesPerView: 2
										},
										375: {
											slidesPerView: 1
										}
									}

								})
							},
							sliderInit: () => {
								slider.product_slider_1();
								slider.service_slider_1();
								slider.relationship_slider_1();
								slider.home_slider_1();

							}
						}
const nav = {

	mainNav: () => {
		$('.acc-nav-1 .nav-wrap nav').slideUp()
		$('.acc-nav-1 .nav-wrap .nav-toggle').click( function() {
			$(this).parents('.nav-wrap').siblings().find('nav').slideUp()
			$(this).toggleClass('active')
			$(this).siblings('nav').slideToggle()
		})
	},
	career: () => {
		$('.acc-career-2 .position-wrapper .detail-wrapper').slideUp()
		$('.acc-career-2 .position-wrapper .title-wrapper').click( function() {
			$(this).parents('.position-wrapper').siblings().find('.detail-wrapper').slideUp().removeClass('active')
			$(this).parents('.position-wrapper').siblings().find('.title-wrapper').removeClass('active')
			$(this).toggleClass('active')
			$(this).siblings('.detail-wrapper').slideToggle(1000)
		})
	},
	
	navInit: () => {
		nav.mainNav();
		nav.career();
	}
}
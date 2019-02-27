const breadcrum = {

	breadcrum_title: () => {
		$('.breadcrum-wrapper ol li:last-child').clone().prependTo('.breadcrum-wrapper').addClass('page-title')
	},

	breadcrumInit: () => {
		breadcrum.breadcrum_title();
	}
}